import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Check, ArrowRight, ShieldCheck, Mail, MessageSquare, AlertCircle, Copy, CheckCircle2, ChevronRight, ChevronDown, QrCode, ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";
import { getCart, removeFromCart, updateQuantity, clearCart } from "../../utils/cart";
import { locationDataMap } from "../../data/locationDataMap";

import { ROOM_PRICES_BALI } from "../../data/bali/programPrices";
import { ROOM_PRICES_RISHIKESH } from "../../data/rishikesh/programPricesRishikesh";
import { ROOM_PRICES_MYSORE } from "../../data/mysore/programPricesMysore";

import { DYNAMIC_BATCHES, fetchAndApplyDynamicPrices } from "../../utils/dynamicPrices";
import { submitToWeb3Forms } from "../../utils/web3forms";

const generateBatches = (durationDays, locationKey, courseKey) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const customKey = `${locationKey?.toLowerCase()}_${courseKey?.toLowerCase()}`;
  const customBatches = DYNAMIC_BATCHES[customKey];

  const getSuffix = (day) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:  return 'st';
      case 2:  return 'nd';
      case 3:  return 'rd';
      default: return 'th';
    }
  };

  const formatBatch = (startDate, endDate) => {
    const startDayStr = `${startDate.getDate()}${getSuffix(startDate.getDate())}`;
    const endDayStr = `${endDate.getDate()}${getSuffix(endDate.getDate())}`;
    const startMonthStr = startDate.toLocaleString('en-US', { month: 'short' });
    const endMonthStr = endDate.toLocaleString('en-US', { month: 'short' });
    
    if (startDate.getMonth() === endDate.getMonth()) {
      return `${startDayStr} To ${endDayStr} ${startMonthStr} ${startDate.getFullYear()}`;
    } else {
      return `${startDayStr} ${startMonthStr} To ${endDayStr} ${endMonthStr} ${endDate.getFullYear()}`;
    }
  };

  if (customBatches && customBatches.length > 0) {
    return customBatches
      .filter(b => b.startDate >= today)
      .map(b => b.dateText || formatBatch(b.startDate, b.endDate))
      .slice(0, 6);
  }

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  
  const months = [];
  for (let i = 0; i < 8; i++) {
    const d = new Date(currentYear, currentMonth + i, 1);
    const monthIndex = d.getMonth();
    const year = d.getFullYear();
    const name = d.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    const startDay = monthIndex === 0 ? 5 : 1; // Course starts on 5th in January, 1st in others
    months.push({ name, year, monthIndex, startDay });
  }

  return months
    .map(m => {
      const startDate = new Date(m.year, m.monthIndex, m.startDay);
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + durationDays - 1);
      return { startDate, endDate };
    })
    .filter(batch => batch.startDate >= today)
    .slice(0, 6)
    .map(batch => formatBatch(batch.startDate, batch.endDate));
};

// Helper to resolve a complete, human-readable program title
const resolveProgramTitle = (programData, state) => {
  if (state?.programName && state.programName !== "Yoga Program") return state.programName;
  if (state?.title && state.title !== "Yoga Program") return state.title;
  
  if (programData) {
    const heroInfo = programData.heroSection?.hero || programData.hero || {};
    const highlight = (heroInfo.highlight || "").trim();
    const title = (heroInfo.title || programData.title || "").trim();

    if (highlight && title) {
      if (title.toLowerCase().startsWith(highlight.toLowerCase())) {
        return title;
      }
      return `${highlight} ${title}`;
    }
    if (title) return title;
    if (heroInfo.subtitle) return heroInfo.subtitle;
  }

  if (state?.slug) {
    return state.slug
      .replace(/([0-9]+)hr/i, '$1-Hour YTTC')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
  }

  return "Yoga Program";
};

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [pricesLoaded, setPricesLoaded] = useState(0);

  useEffect(() => {
    fetchAndApplyDynamicPrices().then((success) => {
      if (success) setPricesLoaded((prev) => prev + 1);
    });
  }, []);

  // ── Mode Identification ──
  // If state has category and slug, it's a direct single program checkout
  const [isDirectBooking, setIsDirectBooking] = useState(false);
  const [directCourse, setDirectCourse] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
  const [availableBatches, setAvailableBatches] = useState([]);
  
  // Cart-mode state
  const [cart, setCart] = useState([]);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [sendEmail, setSendEmail] = useState(true);
  const [sendWhatsApp, setSendWhatsApp] = useState(true);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Initialize checkout modes
  useEffect(() => {
    let state = location.state;
    if (state && (state.slug || state.programName || state.title)) {
      try {
        sessionStorage.setItem("baliyoga_checkout_state", JSON.stringify(state));
      } catch (e) {}
    } else {
      try {
        const saved = sessionStorage.getItem("baliyoga_checkout_state");
        if (saved) {
          state = JSON.parse(saved);
        }
      } catch (e) {}
    }
    state = state || {};
    
    if (state.slug || state.programName || state.title) {
      // Find course details
      let programData = null;
      const slugKey = state.slug?.toLowerCase();
      const rawSlugKey = slugKey?.replace(/-/g, "");
      
      if (state.location && state.type) {
        const locKey = state.location?.toLowerCase();
        const catList = state.type === "retreats" 
          ? ["retreats"] 
          : ["ytt", "kundalini", "short-courses", "specialization"];
        if (locationDataMap[locKey]) {
          for (const cat of catList) {
            if (locationDataMap[locKey][cat]?.[slugKey] || (rawSlugKey && locationDataMap[locKey][cat]?.[rawSlugKey])) {
              programData = locationDataMap[locKey][cat][slugKey] || locationDataMap[locKey][cat][rawSlugKey];
              break;
            }
          }
        }
      }

      if (!programData && slugKey) {
        for (const loc of Object.keys(locationDataMap)) {
          for (const cat of Object.keys(locationDataMap[loc])) {
            if (locationDataMap[loc][cat]?.[slugKey] || (rawSlugKey && locationDataMap[loc][cat]?.[rawSlugKey])) {
              programData = locationDataMap[loc][cat][slugKey] || locationDataMap[loc][cat][rawSlugKey];
              break;
            }
          }
          if (programData) break;
        }
      }

      // Even if programData is not matched directly in locationDataMap, direct checkout should work if state info is provided
      setIsDirectBooking(true);
      
      let rooms = [];
      const locKey = (state.location || programData?.location || "bali").toLowerCase();
      
      let sourceRoomPrices = ROOM_PRICES_BALI;
      if (locKey === "rishikesh") sourceRoomPrices = ROOM_PRICES_RISHIKESH;
      else if (locKey === "mysore" || locKey === "mysuru") sourceRoomPrices = ROOM_PRICES_MYSORE;

      const pricingInfo = sourceRoomPrices?.[slugKey] || (rawSlugKey && sourceRoomPrices?.[rawSlugKey]);
      if (pricingInfo) {
        if (Array.isArray(pricingInfo)) {
          rooms = pricingInfo;
        } else if (pricingInfo && Array.isArray(pricingInfo.rooms)) {
          rooms = pricingInfo.rooms.map(r => ({
            type: r.type,
            price: typeof r.current === "number" ? `$${r.current.toLocaleString()}` : (r.price || `$${r.current || 0}`),
            popular: r.popular,
            note: r.note || ""
          }));
        }
      }

      if (rooms.length === 0 && programData?.accommodation?.pricing) {
        rooms = Object.entries(programData.accommodation.pricing).map(([type, price]) => ({
          type: type.charAt(0).toUpperCase() + type.slice(1).replace(/([A-Z])/g, ' $1'),
          price: typeof price === "number" ? `$${price.toLocaleString()}` : price
        }));
      } else if (rooms.length === 0 && Array.isArray(programData?.rooms)) {
        rooms = programData.rooms.map(r => (typeof r === "string" ? { type: r, price: programData.price || "$0" } : r));
      } else if (rooms.length === 0 && programData?.price) {
        rooms = [{ type: "Standard Accommodation", price: programData.price }];
      }

      if (!Array.isArray(rooms) || rooms.length === 0) {
        rooms = [
          { type: "6 Sharing Room", price: "$999" },
          { type: "4 Sharing Room", price: "$1,099" },
          { type: "2 Sharing Room", price: "$1,399" },
          { type: "Private Room", price: "$1,699" }
        ];
      }

      const initialRoom = state.roomType || (rooms.length > 0 ? rooms[0].type : "Standard Room");

      let durationDays = pricingInfo?.durationDays || 20; // Default
      const lowerSlug = slugKey || "";
      const heroInfo = programData?.heroSection?.hero || programData?.hero || {};
      const lowerTitle = ((heroInfo.title || "") + " " + (heroInfo.subtitle || "")).toLowerCase();
      
      if (lowerSlug.includes("100") || lowerTitle.includes("100")) durationDays = 11;
      else if (lowerSlug.includes("200") || lowerTitle.includes("200")) durationDays = 20;
      else if (lowerSlug.includes("300") || lowerTitle.includes("300")) durationDays = 26;
      else if (lowerSlug.includes("500") || lowerTitle.includes("500")) durationDays = 45;
      else if (lowerSlug.includes("3-day") || lowerTitle.includes("3-day") || lowerTitle.includes("3 day")) durationDays = 3;
      else if (lowerSlug.includes("6-day") || lowerTitle.includes("6-day") || lowerTitle.includes("6 day")) durationDays = 6;
      else if (lowerSlug.includes("7-day") || lowerTitle.includes("7-day") || lowerTitle.includes("7 day")) durationDays = 7;
      else if (lowerSlug.includes("10-day") || lowerTitle.includes("10-day") || lowerTitle.includes("10 day")) durationDays = 10;
      else if (lowerSlug.includes("14-day") || lowerTitle.includes("14-day") || lowerTitle.includes("14 day")) durationDays = 14;

      const batches = generateBatches(durationDays, locKey, slugKey);
      setAvailableBatches(batches);
      
      const resolvedDate = (state.selectedDate && state.selectedDate !== "Select on arrival")
        ? state.selectedDate
        : (batches[0] || "Select on arrival");
      setSelectedDate(resolvedDate);

      const resolvedTitle = resolveProgramTitle(programData, state);
      const resolvedLocation = programData?.location || heroInfo.location || (state.location ? (state.location.charAt(0).toUpperCase() + state.location.slice(1)) : "Bali");

      setDirectCourse({
        id: programData?.id || state.slug || "course",
        slug: state.slug || "course",
        title: resolvedTitle,
        price: programData?.price || heroInfo.price || rooms[0]?.price || "$0",
        location: resolvedLocation,
        image: heroInfo.bgImage || programData?.image || "/assets/images/about/home-hero.webp",
        rooms: rooms
      });
      setSelectedRoom(initialRoom);
    } else {
      setIsDirectBooking(false);
    }
  }, [location.state, pricesLoaded]);

  // Load Cart from localStorage if not direct booking
  useEffect(() => {
    if (!isDirectBooking) {
      setCart(getCart());
      const handleCartUpdate = () => setCart(getCart());
      window.addEventListener("cart_updated", handleCartUpdate);
      return () => window.removeEventListener("cart_updated", handleCartUpdate);
    }
  }, [isDirectBooking]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your full name.";
    
    // Strict email check: requires text, @, text, dot, and 2+ domain characters
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address (e.g. name@domain.com).";
    }

    if (!formData.phone || formData.phone.trim() === "" || formData.phone.trim() === "+") {
      errs.phone = "Phone number is required.";
    } else {
      const raw = formData.phone.replace(/[^0-9]/g, "");
      if (raw.length < 8) {
        errs.phone = "Please enter a valid contact number.";
      } else {
        try {
          const fullNumber = formData.phone.startsWith("+") ? formData.phone : `+${formData.phone}`;
          if (!isValidPhoneNumber(fullNumber)) {
            errs.phone = "Please check country code and phone digits.";
          }
        } catch (e) {
          if (raw.length < 9) {
            errs.phone = "Please enter a valid phone number.";
          }
        }
      }
    }
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const getSummaryText = () => {
    const pricing = getPricing();
    let summaryStr = "";
    if (isDirectBooking && directCourse) {
      summaryStr = `Program/Course: ${directCourse.title}\n- Location: ${directCourse.location || "Bali"}\n- Accommodation: ${selectedRoom}\n- Batch Dates: ${selectedDate || "Not Specified"}\n- Price: ${pricing.totalStr}\n`;
    } else {
      cart.forEach((item, idx) => {
        summaryStr += `${idx + 1}. ${item.title}\n`;
        if (item.selectedRoom || item.roomType) {
          summaryStr += `   - Option: ${item.selectedRoom || item.roomType}\n`;
        }
        summaryStr += `   - Qty: ${item.quantity} · Price: ${item.price}\n`;
      });
    }
    return summaryStr;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!isDirectBooking && cart.length === 0) {
      setErrors({ cart: "Your cart is empty. Please add items to checkout." });
      return;
    }
    if (!sendEmail && !sendWhatsApp) {
      setSubmitError("Please select at least one method to send inquiry (Email or WhatsApp).");
      return;
    }
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError("");
      
      const pricing = getPricing();
      const summaryText = getSummaryText();

      const resolvedProgramName = isDirectBooking 
        ? (directCourse?.title || "Yoga Program") 
        : cart.map(i => i.title).join(", ");
      
      const resolvedLocation = isDirectBooking 
        ? (directCourse?.location || "Bali") 
        : "Multi-Program Cart";

      const resolvedAccommodation = isDirectBooking 
        ? (selectedRoom || "Standard Accommodation") 
        : cart.map(i => `${i.title}: ${i.selectedRoom || i.roomType || "Standard"}`).join("; ");

      const resolvedBatchDates = isDirectBooking 
        ? (selectedDate || "Not Specified") 
        : cart.map(i => `${i.title}: ${i.selectedDate || "Not Specified"}`).join("; ");

      const bookingData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        booking_type: isDirectBooking ? "Direct Course Booking" : "Cart Booking",
        program_name: resolvedProgramName,
        program: resolvedProgramName,
        course_name: resolvedProgramName,
        location: resolvedLocation,
        accommodation: resolvedAccommodation,
        batch_dates: resolvedBatchDates,
        total_price: pricing.totalStr || `$${pricing.subtotal}`,
        "Program Name": resolvedProgramName,
        "Campus Location": resolvedLocation,
        "Accommodation Option": resolvedAccommodation,
        "Selected Batch Dates": resolvedBatchDates,
        "Estimated Total": pricing.totalStr || `$${pricing.subtotal}`,
        message: `
New Booking Inquiry received from Bali Yoga Kendra Checkout Page:

GUEST DETAILS:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

PROGRAM DETAILS:
- Program Name: ${resolvedProgramName}
- Location: ${resolvedLocation}
- Accommodation: ${resolvedAccommodation}
- Selected Batch / Dates: ${resolvedBatchDates}
- Estimated Total: ${pricing.totalStr || `$${pricing.subtotal}`}

FULL BOOKING BREAKDOWN:
${summaryText}
        `.trim()
      };

      if (sendEmail) {
        try {
          const emailSubject = `Bali Yoga Kendra - Booking for ${resolvedProgramName} (${formData.name})`;
          const result = await submitToWeb3Forms(bookingData, emailSubject, "checkout");
          if (result.success) {
            setIsSubmitting(false);
            if (sendWhatsApp) {
              shareToWhatsApp(summaryText, false);
            }
            setSubmitSuccess(true);
            if (!isDirectBooking) {
              clearCart();
            }
          } else {
            setIsSubmitting(false);
            setSubmitError(result.message || "Failed to submit booking inquiry. Please try again.");
          }
        } catch (err) {
          console.error("Web3Forms checkout submission error:", err);
          setIsSubmitting(false);
          setSubmitError("A network error occurred. Please check your connection and try again.");
        }
      } else {
        // WhatsApp only
        setTimeout(() => {
          setIsSubmitting(false);
          shareToWhatsApp(summaryText, true);
        }, 800);
      }
    }
  };

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    const clean = priceStr.replace(/[^0-9.]/g, "");
    return parseFloat(clean) || 0;
  };

  // Get active pricing details
  const getPricing = () => {
    if (isDirectBooking && directCourse) {
      const roomList = Array.isArray(directCourse?.rooms) ? directCourse.rooms : [];
      const activeRoomObj = roomList.find(r => r.type === selectedRoom);
      const priceStr = activeRoomObj?.price || directCourse.price || "$0";
      return {
        totalStr: priceStr,
        subtotal: parsePrice(priceStr)
      };
    } else {
      const total = cart.reduce((sum, item) => {
        return sum + (parsePrice(item.price) * (item.quantity || 1));
      }, 0);
      return {
        totalStr: `$${total.toLocaleString()}`,
        subtotal: total
      };
    }
  };

  const { totalStr } = getPricing();

  // Cart operations (E-commerce fallback)
  const handleRemoveItem = (id, roomType) => {
    removeFromCart(id, roomType);
  };

  const handleQuantityChange = (id, roomType, currentQty, delta) => {
    updateQuantity(id, roomType, Math.max(1, currentQty + delta));
  };

  // Trigger WhatsApp Redirection
  const shareToWhatsApp = (summaryStrOverride, shouldRedirect = true) => {
    const phoneNumber = "917829997007"; // Bali Yoga Kendra Booking WhatsApp Number
    let summaryStr = summaryStrOverride || "";

    const resolvedProgramName = isDirectBooking 
      ? (directCourse?.title || "Yoga Program") 
      : cart.map(i => i.title).join(", ");

    if (!summaryStr) {
      if (isDirectBooking && directCourse) {
        summaryStr = `*Program*: ${directCourse.title}\n- *Location*: ${directCourse.location || "Bali"}\n- *Accommodation Option*: ${selectedRoom}\n- *Selected Dates*: ${selectedDate || "Not Specified"}\n- *Price Info*: ${totalStr}\n`;
      } else {
        cart.forEach((item, idx) => {
          summaryStr += `${idx + 1}. *${item.title}*\n`;
          if (item.roomType || item.selectedRoom) {
            summaryStr += `   - Option: ${item.selectedRoom || item.roomType}\n`;
          }
          summaryStr += `   - Qty: ${item.quantity} · Price: ${item.price}\n`;
        });
      }
    }

    const message = `Hello Bali Yoga Kendra! I would like to inquire about booking details and information for the following program:

*PROGRAM DETAILS*
- *Program*: ${resolvedProgramName}
- *Location*: ${isDirectBooking ? (directCourse?.location || "Bali") : "Multi-Program"}
- *Accommodation*: ${isDirectBooking ? selectedRoom : "Selected in cart"}
- *Selected Batch / Dates*: ${isDirectBooking ? (selectedDate || "Not Specified") : "Selected in cart"}
- *Estimated Price*: ${totalStr}

*MY CONTACT DETAILS*
- *Name*: ${formData.name}
- *Email*: ${formData.email}
- *Phone*: ${formData.phone}

Please share the schedule, payment options, and general availability details. Thank you!`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;
    
    // Redirect to whatsapp
    window.open(whatsappUrl, "_blank");
    
    if (shouldRedirect) {
      if (!isDirectBooking) {
        clearCart();
      }
      // Navigate back home
      navigate("/");
    }
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 py-12 lg:py-10 md:py-12 animate-fadeIn">
      <style>{`
        /* Remove default borders and backgrounds from react-international-phone */
        .react-international-phone-input-container {
          border: none !important;
          background: transparent !important;
          width: 100% !important;
        }
        .react-international-phone-country-selector-button {
          border: none !important;
          background: transparent !important;
          padding: 0 !important;
          width: 100% !important;
          height: 100% !important;
          cursor: pointer;
        }
        .react-international-phone-input {
          border: none !important;
          background: transparent !important;
          width: 100% !important;
          outline: none !important;
          padding: 12px 16px !important;
          font-family: inherit !important;
          font-size: 0.875rem !important;
          color: #1c1917 !important;
        }
        .react-international-phone-country-selector-dropdown {
          z-index: 1050 !important;
          border-radius: 12px !important;
          border: 1px solid #e7e5e4 !important;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
          padding: 6px 0 !important;
          background-color: white !important;
        }
        .react-international-phone-country-selector-dropdown__list-item {
          padding: 10px 16px !important;
          font-family: inherit !important;
          font-size: 0.875rem !important;
        }
        .react-international-phone-country-selector-dropdown__list-item:hover {
          background-color: #f5f5f4 !important;
        }
      `}</style>
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header Title */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <h1 className="text-3xl font-bold text-[#1A2456] font-serif">Complete Your Inquiry</h1>
          <p className="text-stone-500 text-sm">
            Provide your details below, and choose whether to receive confirmation via Email, WhatsApp, or Both to complete your reservation.
          </p>
        </div>

        {submitSuccess ? (
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-emerald-200 shadow-xl text-center space-y-6 max-w-xl mx-auto">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 size={36} />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-[#1A2456] font-serif">Inquiry Submitted Successfully!</h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                Thank you for your interest, <strong className="text-stone-800">{formData.name}</strong>. We have received your booking details and our admissions coordinator will reach out to you shortly.
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100 text-left text-xs text-stone-600 space-y-2">
              <div className="flex justify-between border-b border-stone-200/50 pb-2">
                <span className="text-stone-400">Program:</span>
                <span className="font-semibold text-[#1A2456] text-right">
                  {isDirectBooking && directCourse ? directCourse.title : (cart.length > 0 ? cart.map(i => i.title).join(", ") : "Yoga Program")}
                </span>
              </div>
              {isDirectBooking && selectedRoom && (
                <div className="flex justify-between border-b border-stone-200/50 pb-2">
                  <span className="text-stone-400">Accommodation:</span>
                  <span className="font-semibold text-stone-800">{selectedRoom}</span>
                </div>
              )}
              {isDirectBooking && selectedDate && (
                <div className="flex justify-between border-b border-stone-200/50 pb-2">
                  <span className="text-stone-400">Batch Dates:</span>
                  <span className="font-semibold text-stone-800">{selectedDate}</span>
                </div>
              )}
              <div className="flex justify-between border-b border-stone-200/50 pb-2">
                <span className="text-stone-400">Email:</span>
                <span className="font-semibold text-stone-800">{formData.email}</span>
              </div>
              <div className="flex justify-between border-b border-stone-200/50 pb-2">
                <span className="text-stone-400">Phone:</span>
                <span className="font-semibold text-stone-800">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Estimated Total:</span>
                <span className="font-bold text-emerald-600">{totalStr}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="bg-[#1A2456] hover:bg-[#202c6b] text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-full transition-all cursor-pointer border-0 shadow"
              >
                Return to Homepage
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Form & Product Display */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Product/Course Card Display */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200/60 shadow-md">
                {isDirectBooking && directCourse ? (
                  // Direct Booking Mode (NO CART, NO QUANTITIES, JUST ROOM CHOICE)
                  <div className="space-y-5">
                    <div className="border-b border-stone-100 pb-4">
                      <span className="text-[#C8A96A] text-xs font-bold uppercase tracking-wider">Course Selection</span>
                      <h2 className="text-xl font-bold text-[#1A2456] mt-1">{directCourse.title}</h2>
                      {directCourse.location && (
                        <p className="text-xs text-stone-500 mt-1.5 capitalize">
                          Location: {directCourse.location}
                        </p>
                      )}
                    </div>

                    {/* Room Type Selector */}
                    {Array.isArray(directCourse?.rooms) && directCourse.rooms.length > 0 && (
                      <div className="space-y-2 relative">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Choose Accommodation Option</label>
                        
                        {/* Dropdown Trigger Button */}
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="w-full flex items-center justify-between border border-stone-200 rounded-xl px-4 py-3 bg-stone-50 hover:bg-stone-100/50 transition-all text-sm font-semibold text-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1A2456] relative z-10"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-[#1A2456]">{selectedRoom}</span>
                            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/30">
                              {directCourse.rooms.find(r => r.type === selectedRoom)?.price || directCourse.price}
                            </span>
                          </div>
                          <ChevronDown size={16} className={`text-stone-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Transparent Overlay to close dropdown when clicking outside */}
                        {isDropdownOpen && (
                          <div className="fixed inset-0 z-0" onClick={() => setIsDropdownOpen(false)} />
                        )}

                        {/* Dropdown Options Menu */}
                        {isDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-stone-200/80 rounded-xl shadow-xl z-20 overflow-hidden py-1.5 animate-fadeIn">
                            {directCourse.rooms.map((r, i) => (
                              <button
                                key={i}
                                type="button"
                                onClick={() => {
                                  setSelectedRoom(r.type);
                                  setIsDropdownOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors text-left hover:bg-stone-50 cursor-pointer ${
                                  selectedRoom === r.type ? 'bg-[#1A2456]/5 text-[#1A2456] font-bold' : 'text-gray-700 font-medium'
                                }`}
                              >
                                <span>{r.type}</span>
                                <span className="text-xs font-bold text-emerald-600">{r.price}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Batch Date Selector */}
                    {availableBatches.length > 0 && (
                      <div className="space-y-2 relative">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Select Batch / Start Date</label>
                        
                        {/* Dropdown Trigger Button */}
                        <button
                          type="button"
                          onClick={() => setIsDateDropdownOpen(!isDateDropdownOpen)}
                          className="w-full flex items-center justify-between border border-stone-200 rounded-xl px-4 py-3 bg-stone-50 hover:bg-stone-100/50 transition-all text-sm font-semibold text-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1A2456] relative z-10"
                        >
                          <span className="text-[#1A2456]">{selectedDate}</span>
                          <ChevronDown size={16} className={`text-stone-500 transition-transform duration-200 ${isDateDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Transparent Overlay to close dropdown when clicking outside */}
                        {isDateDropdownOpen && (
                          <div className="fixed inset-0 z-0" onClick={() => setIsDateDropdownOpen(false)} />
                        )}

                        {/* Dropdown Options Menu */}
                        {isDateDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-stone-200/80 rounded-xl shadow-xl z-20 overflow-hidden py-1.5 animate-fadeIn">
                            {availableBatches.map((batch, i) => (
                              <button
                                key={i}
                                type="button"
                                onClick={() => {
                                  setSelectedDate(batch);
                                  setIsDateDropdownOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors text-left hover:bg-stone-50 cursor-pointer ${
                                  selectedDate === batch ? 'bg-[#1A2456]/5 text-[#1A2456] font-bold' : 'text-gray-700 font-medium'
                                }`}
                              >
                                <span>{batch}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  // Fallback E-commerce Cart Mode
                  <div>
                    <div className="flex items-center gap-2 mb-6 border-b border-stone-100 pb-4">
                      <ShoppingBag size={20} className="text-[#1A2456]" />
                      <h2 className="text-xl font-bold text-[#1A2456]">Shopping Cart</h2>
                      <span className="bg-[#1A2456]/10 text-[#1A2456] text-xs font-bold px-2 py-0.5 rounded-full ml-auto">{cart.length} items</span>
                    </div>

                    {cart.length === 0 ? (
                      <div className="text-center py-10 space-y-3">
                        <p className="text-gray-500 text-sm">Your shopping cart is empty.</p>
                        <button
                          type="button"
                          onClick={() => navigate("/")}
                          className="bg-[#1A2456] text-white text-xs font-semibold px-4 py-2.5 rounded-full cursor-pointer hover:bg-[#202c6b]"
                        >
                          Browse Programs
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-6 divide-y divide-stone-100">
                        {cart.map((item, index) => (
                          <div key={`${item.id}-${item.roomType}`} className={`flex gap-4 ${index > 0 ? "pt-5" : ""}`}>
                            <div className="flex-1">
                              <h3 className="font-semibold text-sm text-[#1A2456] leading-snug">{item.title}</h3>
                              {item.roomType && <span className="text-[10px] text-gray-400 block mt-1">Option: {item.roomType}</span>}
                              <div className="text-sm font-semibold text-green-600 mt-2">{item.price}</div>
                            </div>

                            <div className="flex flex-col items-end justify-between">
                              <button
                                type="button"
                                onClick={() => handleRemoveItem(item.id, item.roomType)}
                                className="text-stone-400 hover:text-red-500 transition-colors p-1 cursor-pointer border-0 bg-transparent"
                              >
                                <Trash2 size={16} />
                              </button>

                              <div className="flex items-center gap-2 border border-stone-250 rounded-lg p-0.5 bg-stone-50 mt-4">
                                <button
                                  type="button"
                                  onClick={() => handleQuantityChange(item.id, item.roomType, item.quantity || 1, -1)}
                                  className="w-6 h-6 flex items-center justify-center text-gray-500 border-0 bg-transparent cursor-pointer"
                                >
                                  <Minus size={11} />
                                </button>
                                <span className="text-xs font-bold text-gray-800 w-4 text-center">{item.quantity || 1}</span>
                                <button
                                  type="button"
                                  onClick={() => handleQuantityChange(item.id, item.roomType, item.quantity || 1, 1)}
                                  className="w-6 h-6 flex items-center justify-center text-gray-500 border-0 bg-transparent cursor-pointer"
                                >
                                  <Plus size={11} />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Guest Checkout Information Form */}
              <form onSubmit={handleFormSubmit} className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200/60 shadow-md space-y-4">
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <h3 className="font-bold text-[#1A2456] text-base">Guest Details</h3>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/40">
                    Step 2 of 2
                  </span>
                </div>

                {/* Selected Program Indicator Banner in Form */}
                <div className="bg-[#FAF8F5] border border-stone-200/80 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C8A96A] block">Selected Program</span>
                    <span className="text-sm font-bold text-[#1A2456] block mt-0.5 leading-snug">
                      {isDirectBooking && directCourse ? directCourse.title : (cart.length > 0 ? `${cart.length} Courses in Cart` : "Yoga Program")}
                    </span>
                    {isDirectBooking && (
                      <span className="text-xs text-stone-500 block mt-1">
                        {selectedRoom} {selectedDate ? `· ${selectedDate}` : ""} {directCourse?.location ? `· ${directCourse.location}` : ""}
                      </span>
                    )}
                  </div>
                  <div className="text-left sm:text-right sm:border-l sm:border-stone-200 sm:pl-4 flex-shrink-0">
                    <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">Estimated Fee</span>
                    <span className="text-base font-bold text-emerald-600 block">{totalStr}</span>
                  </div>
                </div>

                {/* Full Name */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Maya Devi"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A2456] ${errors.name ? "border-red-500 bg-red-50/10" : "border-stone-200 bg-stone-50"}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A2456] ${errors.email ? "border-red-500 bg-red-50/10" : "border-stone-200 bg-stone-50"}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone Number</label>
                    <div className={`flex items-center w-full border rounded-xl focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1A2456] focus-within:border-transparent transition-all overflow-hidden ${errors.phone ? "border-red-500 bg-red-50/10" : "border-stone-200 bg-stone-50"}`}>
                      <PhoneInput
                        defaultCountry="in"
                        value={formData.phone}
                        onChange={(phone) => setFormData(prev => ({ ...prev, phone }))}
                        className="w-full flex"
                        inputClassName="react-international-phone-input"
                        countrySelectorStyleProps={{
                          buttonClassName: "react-international-phone-country-selector-button"
                        }}
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                  </div>
                </div>

                {/* Channel Selection Options */}
                <div className="pt-3 pb-1">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Select Inquiry Method (Email, WhatsApp, or Both)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSendEmail(!sendEmail)}
                      className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        sendEmail 
                          ? "border-[#1A2456] bg-indigo-50 text-[#1A2456] ring-1 ring-[#1A2456]" 
                          : "border-stone-200 bg-white text-stone-500 hover:bg-stone-50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={sendEmail}
                        readOnly
                        className="accent-[#1A2456] cursor-pointer"
                      />
                      <Mail size={16} /> Email Details
                    </button>
                    <button
                      type="button"
                      onClick={() => setSendWhatsApp(!sendWhatsApp)}
                      className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        sendWhatsApp 
                          ? "border-emerald-600 bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600" 
                          : "border-stone-200 bg-white text-stone-500 hover:bg-stone-50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={sendWhatsApp}
                        readOnly
                        className="accent-emerald-600 cursor-pointer"
                      />
                      <MessageSquare size={16} /> WhatsApp Details
                    </button>
                  </div>
                </div>

                {submitError && (
                  <p className="text-red-500 text-xs text-center">{submitError}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || (!isDirectBooking && cart.length === 0)}
                  className={`w-full text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow border-0 ${
                    (!sendEmail && !sendWhatsApp)
                      ? "bg-stone-400 cursor-not-allowed"
                      : (sendEmail && sendWhatsApp)
                      ? "bg-gradient-to-r from-[#1A2456] to-emerald-600 hover:opacity-95 cursor-pointer"
                      : sendEmail
                      ? "bg-[#1A2456] hover:bg-[#202c6b] cursor-pointer"
                      : "bg-emerald-600 hover:bg-emerald-700 cursor-pointer"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </div>
                  ) : (sendEmail && sendWhatsApp) ? (
                    <>
                      <Check size={16} /> Submit Inquiry (Email & WhatsApp)
                    </>
                  ) : sendEmail ? (
                    <>
                      <Mail size={16} /> Book & Inquire via Email
                    </>
                  ) : sendWhatsApp ? (
                    <>
                      <MessageSquare size={16} /> Book & Inquire via WhatsApp
                    </>
                  ) : (
                    "Select Inquiry Channel"
                  )}
                </button>
              </form>
            </div>

            {/* Right Column: Sticky Order Summary */}
            <div className="lg:col-span-5 bg-[#F7F3EF] border border-stone-200/40 rounded-3xl p-6 space-y-5 lg:sticky lg:top-24">
              <h3 className="font-semibold text-stone-800 text-lg border-b border-stone-200/60 pb-3">Booking Summary</h3>
              
              <div className="space-y-3.5 text-xs text-gray-600">
                {isDirectBooking && directCourse ? (
                  // Direct Summary
                  <div>
                    <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider block">Course Title</span>
                    <span className="font-semibold text-[#1A2456] block leading-snug mt-0.5">{directCourse.title}</span>
                    
                    {directCourse.location && (
                      <>
                        <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider block mt-4">Location</span>
                        <span className="font-semibold text-gray-700 block mt-0.5 capitalize">{directCourse.location}</span>
                      </>
                    )}
                    
                    <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider block mt-4">Selected Room</span>
                    <span className="font-semibold text-gray-700 block mt-0.5">{selectedRoom}</span>

                    <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider block mt-4">Selected Dates</span>
                    <span className="font-semibold text-gray-700 block mt-0.5">{selectedDate || "Not Selected"}</span>
                  </div>
                ) : (
                  // Cart Summary
                  <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                    {cart.map((item) => (
                      <div key={`${item.id}-${item.roomType}`} className="flex justify-between items-start">
                        <div className="max-w-[70%]">
                          <span className="font-semibold text-stone-800 block truncate">{item.title}</span>
                          {item.roomType && <span className="text-[10px] text-gray-400 block mt-0.5">{item.roomType}</span>}
                          <span className="text-[10px] text-gray-500 block">Qty: {item.quantity}</span>
                        </div>
                        <span className="font-bold text-gray-700 flex-shrink-0">{item.price}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Grand Total */}
                <div className="border-t border-stone-200/60 pt-4 flex justify-between items-center mt-6">
                  <span className="font-bold text-stone-800 text-sm">Estimated Total:</span>
                  <span className="text-2xl font-bold text-emerald-600">{totalStr}</span>
                </div>

                <div className="bg-emerald-50/50 border border-emerald-200/35 p-3.5 rounded-xl flex items-start gap-2.5 text-[11px] text-stone-600 mt-2">
                  <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Includes all course guides, accommodation, certifications, and complimentary excursions. Bookings are finalized directly with our coordinators.</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </main>
  );
}
