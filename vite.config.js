import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'
import * as XLSX_MODULE from 'xlsx'

const xlsx = XLSX_MODULE.default || XLSX_MODULE;

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  if (exists) {
    const isDirectory = fs.statSync(src).isDirectory();
    if (isDirectory) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      fs.readdirSync(src).forEach((childItemName) => {
        copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
      });
    } else {
      fs.copyFileSync(src, dest);
    }
  }
}

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const mimes = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.gif': 'image/gif',
    '.avif': 'image/avif'
  };
  return mimes[ext] || 'application/octet-stream';
}

function normalizeHeaders(headers) {
  return headers.map(h => {
    if (!h) return "";
    const lower = String(h).toLowerCase();
    if (lower.includes("location")) return "location";
    if (lower.includes("program name") || lower.includes("activity name") || lower.includes("title")) return "programname";
    if (lower.includes("activity") || lower.includes("course") || lower.includes("key") || lower.includes("code") || lower.includes("id") || lower.includes("slug")) return "coursekey";
    if (lower.includes("duration")) return "durationdays";
    if (lower.includes("room type")) return "roomtype";
    if (lower.includes("current") || lower.includes("discounted")) return "current";
    if (lower.includes("original") || lower.includes("strike")) return "original";
    if (lower.includes("base price") || lower.includes("program price") || lower.includes("activity price") || lower.includes("price")) return "price";
    if (lower.includes("currency")) return "currency";
    if (lower.includes("note")) return "note";
    if (lower.includes("popular")) return "popular";
    if (lower.includes("start date") || lower.includes("startdate")) return "startdate";
    if (lower.includes("end date") || lower.includes("enddate")) return "enddate";
    if (lower.includes("seats")) return "seatsleft";
    if (lower.includes("custom date") || lower.includes("datetext")) return "datetext";
    return lower.replace(/\s+/g, '');
  });
}

function compileExcel() {
  const excelPath = path.resolve('ombreathe_config_template_new.xlsx');
  const outputPath = path.resolve('src/data/generated-prices.json');
  const jsOutputPath = path.resolve('src/data/generated-prices.js');
  if (!fs.existsSync(excelPath)) {
    return;
  }
  const startTime = Date.now();
  try {
    const buffer = fs.readFileSync(excelPath);
    const workbook = xlsx.read(buffer, { type: 'buffer' });
    const parseSheet = (sheetName) => {
      const sheet = workbook.Sheets[sheetName];
      if (!sheet) return [];
      const json = xlsx.utils.sheet_to_json(sheet, { header: 1, defval: "" });
      if (json.length === 0) return [];
      
      const rawHeaders = json[0].map(h => String(h || "").trim());
      const headers = normalizeHeaders(rawHeaders);
      
      const rows = [];
      for (let i = 1; i < json.length; i++) {
        const rowArr = json[i];
        if (!rowArr || rowArr.every(c => c === "" || c === null || c === undefined)) continue;
        const obj = {};
        headers.forEach((header, idx) => {
          if (header) {
            obj[header] = rowArr[idx] !== undefined && rowArr[idx] !== null ? String(rowArr[idx]).trim() : null;
          }
        });
        rows.push(obj);
      }
      return rows;
    };

    const data = {
      programRows: parseSheet("Program Prices"),
      roomRows: parseSheet("Room Prices"),
      batchRows: parseSheet("Batches"),
      activityRows: parseSheet("Activity Prices").length > 0 ? parseSheet("Activity Prices") : parseSheet("Activities")
    };

    const outDir = path.dirname(outputPath);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    const jsonStr = JSON.stringify(data, null, 2);
    fs.writeFileSync(outputPath, jsonStr, 'utf-8');
    fs.writeFileSync(jsOutputPath, 'export default ' + jsonStr + ';\n', 'utf-8');
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`[excel-compiler] Compiled ombreathe_config_template_new.xlsx -> src/data/generated-prices.js in ${elapsed}s (${data.programRows.length} programs, ${data.roomRows.length} rooms, ${data.batchRows.length} batches, ${data.activityRows.length} activities)`);
  } catch (err) {
    console.warn('[excel-compiler] Note compiling Excel:', err.message);
  }
}

function excelCompilerPlugin() {
  return {
    name: 'excel-compiler',
    buildStart() {
      compileExcel();
    },
    configureServer(server) {
      compileExcel();
      let debounceTimer = null;
      const excelPath = path.resolve('ombreathe_config_template_new.xlsx');
      server.watcher.add(excelPath);
      server.watcher.on('change', (changedPath) => {
        if (path.resolve(changedPath) === excelPath && !changedPath.includes('~$')) {
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => {
            console.log('[excel-compiler] Detected change in ombreathe_config_template_new.xlsx, re-compiling...');
            compileExcel();
          }, 150);
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    excelCompilerPlugin(),
    {
      name: 'copy-external-images',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url.startsWith('/images/external/')) {
            const urlPath = req.url.split('?')[0];
            const relativePath = urlPath.slice('/images/external/'.length);
            const localPath = path.resolve('src/images/external', decodeURIComponent(relativePath));
            if (fs.existsSync(localPath)) {
              res.setHeader('Content-Type', getMimeType(localPath));
              res.end(fs.readFileSync(localPath));
              return;
            }
          }
          next();
        });
      },
      closeBundle() {
        const srcDir = path.resolve('src/images/external');
        const destDir = path.resolve('dist/images/external');
        if (fs.existsSync(srcDir)) {
          copyRecursiveSync(srcDir, destDir);
          console.log('[copy-external-images] Copied src/images/external to dist/images/external');
        }
      }
    },
    {
      name: 'async-css',
      transformIndexHtml(html) {
        return html.replace(
          /<link rel="stylesheet" crossorigin href="(\/assets\/style-[^"]+\.css)">/g,
          '<link rel="preload" as="style" href="$1" onload="this.onload=null;this.rel=\'stylesheet\'"><noscript><link rel="stylesheet" href="$1"></noscript>'
        );
      }
    }
  ],
  build: {
    target: 'esnext',
    cssCodeSplit: false,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            if (id.includes('swiper')) {
              return 'vendor-swiper';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (id.includes('lucide-react') || id.includes('react-icons')) {
              return 'vendor-icons';
            }
            if (id.includes('libphonenumber-js') || id.includes('react-international-phone')) {
              return 'vendor-phone';
            }
            return 'vendor-misc';
          }
        }
      }
    }
  }
})
