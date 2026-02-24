import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0066FF] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="mb-8 grid gap-8 md:grid-cols-3 md:items-start">
          {/* Left Section - Logo and Tagline */}
          <div className="flex flex-col items-start">
            <h3 className="mb-2 text-xl font-bold tracking-wide">CMG LOGO</h3>
            <p className="text-sm font-light opacity-90">
              Strengthening Education Systems
            </p>
          </div>

          {/* Center Section - Navigation Links */}
          <div className="flex flex-col items-center justify-start md:items-center">
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/about" className="transition-opacity hover:opacity-80">
                About
              </a>
              <span className="text-white/50">|</span>
              <a
                href="/school"
                className="transition-opacity hover:opacity-80"
              >
                Schools
              </a>
              <span className="text-white/50">|</span>
              <a
                href="/College&University"
                className="transition-opacity hover:opacity-80"
              >
                Universities
              </a>
              <span className="text-white/50">|</span>
              <a
                href="/contact"
                className="transition-opacity hover:opacity-80"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Right Section - Copyright and Social Icons */}
          <div className="flex flex-col items-start md:items-end">
            <p className="mb-4 text-sm opacity-90">© College Mil Gaya</p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                className="transition-opacity hover:opacity-80"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="transition-opacity hover:opacity-80"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://facebook.com"
                className="transition-opacity hover:opacity-80"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-white/20"></div>
        <p className="mt-4 text-center text-xs text-white/80">
          Developed by{" "}
          <a
            href="https://www.pmrgsolution.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline hover:text-white"
          >
            PMRG Solution
          </a>
        </p>
      </div>
    </footer>
  );
}
