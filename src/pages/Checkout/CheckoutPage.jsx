import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Check, ArrowRight, ShieldCheck, Mail, MessageSquare, AlertCircle, Copy, CheckCircle2, ChevronRight, ChevronDown, QrCode, ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import { getCart, removeFromCart, updateQuantity, clearCart } from "../../utils/cart";
import { baliDataMap } from "../../data/baliDataMap";

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // ── Mode Identification ──
  // If state has category and slug, it's a direct single program checkout
  const [isDirectBooking, setIsDirectBooking] = useState(false);
  const [directCourse, setDirectCourse] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Cart-mode state
  const [cart, setCart] = useState([]);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize checkout modes
  useEffect(() => {
    const state = location.state || {};
    
    if (state.category && state.slug) {
      // Find course details
      const categoryData = baliDataMap.bali?.[state.category?.toLowerCase()];
      const programData = categoryData?.[state.slug?.toLowerCase()];
      
      if (programData) {
        setIsDirectBooking(true);
        const title = programData.heroSection?.hero?.highlight 
          ? `${programData.heroSection.hero.highlight}${programData.heroSection.hero.title}`
          : state.slug.replace(/-/g, " ");

        const rooms = programData.accommodationSection?.content?.rooms || [];

        setDirectCourse({
          category: state.category,
          slug: state.slug,
          title,
          rooms,
          price: programData.heroSection?.hero?.price || "$1,299"
        });

        // Pre-select room option
        const initialRoom = state.roomType || (rooms[0]?.type || "6 Shared Room");
        setSelectedRoom(initialRoom);
      }
    } else {
      // Fallback to Cart Mode
      setIsDirectBooking(false);
      setCart(getCart());
    }

    const handleCartUpdate = () => {
      if (!isDirectBooking) {
        setCart(getCart());
      }
    };

    window.addEventListener("cart_updated", handleCartUpdate);
    return () => {
      window.removeEventListener("cart_updated", handleCartUpdate);
    };
  }, [location, isDirectBooking]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Invalid email format";
    }
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!isDirectBooking && cart.length === 0) {
      setErrors({ cart: "Your cart is empty. Please add items to checkout." });
      return;
    }
    if (validateForm()) {
      setIsSubmitting(true);
      // Brief delay to simulate loading states before whatsapp open
      setTimeout(() => {
        setIsSubmitting(false);
        shareToWhatsApp();
      }, 800);
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
      const activeRoomObj = directCourse.rooms.find(r => r.type === selectedRoom);
      const priceStr = activeRoomObj?.price || directCourse.price;
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
  const shareToWhatsApp = () => {
    const phoneNumber = "917483987568"; // Bali Kendra Office Whatsapp Number
    let summaryStr = "";

    if (isDirectBooking && directCourse) {
      summaryStr = `*Course/Retreat*: ${directCourse.title}\n- *Accommodation Option*: ${selectedRoom}\n- *Price Info*: ${totalStr}\n`;
    } else {
      cart.forEach((item, idx) => {
        summaryStr += `${idx + 1}. *${item.title}*\n`;
        if (item.roomType) {
          summaryStr += `   - Option: ${item.roomType}\n`;
        }
        summaryStr += `   - Qty: ${item.quantity} · Price: ${item.price}\n`;
      });
    }

    const message = `Hello Bali Yoga Kendra! I would like to inquire about booking details and information for the following program:

*PROGRAM INTERESTED*
${summaryStr}
*MY CONTACT DETAILS*
- *Name*: ${formData.name}
- *Email*: ${formData.email}
- *Phone*: ${formData.phone}

Please share the schedule, payment options, and general availability details. Thank you!`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;
    
    // Redirect to whatsapp
    window.open(whatsappUrl, "_blank");
    
    if (!isDirectBooking) {
      clearCart();
    }
    // Navigate back home
    navigate("/");
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 py-12 lg:py-20 animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header Title */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <h1 className="text-3xl font-bold text-[#1A2456] font-serif">Complete Your Inquiry</h1>
          <p className="text-stone-500 text-sm">
            Provide your details below, and we will connect you directly to our WhatsApp support team to complete your reservation details.
          </p>
        </div>

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
                  </div>

                  {/* Room Type Selector */}
                  {directCourse.rooms.length > 0 && (
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
              {errors.cart && <p className="text-red-500 text-xs mt-4 text-center">{errors.cart}</p>}
            </div>

            {/* Guest Details Form */}
            <form onSubmit={handleFormSubmit} className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200/60 shadow-md space-y-5">
              <h3 className="text-gray-800 font-bold text-lg border-b border-stone-100 pb-3">Guest Contact Details</h3>

              {/* Name */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. John Doe"
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
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A2456] ${errors.phone ? "border-red-500 bg-red-50/10" : "border-stone-200 bg-stone-50"}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || (!isDirectBooking && cart.length === 0)}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow border-0"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Connecting...
                  </div>
                ) : (
                  <>
                    <MessageSquare size={16} /> Book & Inquire via WhatsApp
                  </>
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
                  
                  <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider block mt-4">Selected Room</span>
                  <span className="font-semibold text-gray-700 block mt-0.5">{selectedRoom}</span>
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

      </div>
    </main>
  );
}
