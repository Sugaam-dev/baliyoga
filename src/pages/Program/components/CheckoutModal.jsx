import React, { useState, useEffect } from "react";
import { X, CreditCard, Calendar, Shield, Check, Info, Award, User, Mail, Phone } from "lucide-react";

/**
 * CheckoutModal - Premium checkout experience for course booking.
 */
export default function CheckoutModal({
  isOpen,
  onClose,
  courseTitle,
  initialRoomType = "6 Shared Room",
  rooms = [],
  onBookingSuccess
}) {
  const [step, setStep] = useState(1); // 1: Info, 2: Payment, 3: Success
  const [selectedRoom, setSelectedRoom] = useState(initialRoomType);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    batch: "",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync initial room type
  useEffect(() => {
    if (initialRoomType) {
      setSelectedRoom(initialRoomType);
    }
  }, [initialRoomType, isOpen]);

  // Update price when selected room changes
  useEffect(() => {
    const room = rooms.find(r => r.type === selectedRoom);
    if (room) {
      setSelectedPrice(room.price);
    } else if (rooms.length > 0) {
      setSelectedPrice(rooms[0].price);
    } else {
      setSelectedPrice("$1,299"); // Fallback
    }
  }, [selectedRoom, rooms]);

  // Fallback upcoming batches if not provided
  const batchDates = [
    "Jul 10, 2026 – Jul 30, 2026",
    "Aug 01, 2026 – Aug 20, 2026",
    "Sep 10, 2026 – Sep 30, 2026",
    "Oct 01, 2026 – Oct 20, 2026",
    "Nov 05, 2026 – Nov 25, 2026"
  ];

  // Set default batch date on load
  useEffect(() => {
    if (!formData.batch && isOpen) {
      setFormData(prev => ({ ...prev, batch: batchDates[0] }));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateStep1 = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Invalid email format";
    }
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    if (!formData.batch) errs.batch = "Please select a batch";
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs = {};
    if (!formData.cardName.trim()) errs.cardName = "Cardholder name is required";
    if (!formData.cardNumber.trim() || formData.cardNumber.replace(/\s/g, "").length < 16) {
      errs.cardNumber = "Enter a valid 16-digit card number";
    }
    if (!formData.cardExpiry.trim() || !/^\d{2}\/\d{2}$/.test(formData.cardExpiry)) {
      errs.cardExpiry = "Expiry format MM/YY";
    }
    if (!formData.cardCvv.trim() || formData.cardCvv.length < 3) {
      errs.cardCvv = "CVV must be 3 or 4 digits";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const nextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    }
  };

  const submitPayment = (e) => {
    e.preventDefault();
    if (!validateStep2()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
      if (onBookingSuccess) {
        onBookingSuccess({
          ...formData,
          roomType: selectedRoom,
          price: selectedPrice,
          course: courseTitle
        });
      }
    }, 1800);
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return `${v.slice(0, 2)}/${v.slice(2, 4)}`;
    }
    return v;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
        onClick={step === 3 ? onClose : undefined}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl z-10 transition-all duration-300 flex flex-col max-h-[90vh]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-20 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Dynamic Header */}
        {step < 3 && (
          <div className="bg-[#1A2456] text-white p-6 pb-8">
            <span className="text-[#C8A96A] text-xs font-semibold uppercase tracking-wider">Secure Checkout</span>
            <h3 className="text-xl md:text-2xl font-light mt-1 text-white leading-tight">
              Book <span className="font-semibold text-[#C8A96A]">{courseTitle}</span>
            </h3>
            
            {/* Booking Details Summary */}
            <div className="mt-4 bg-white/5 border border-white/10 rounded-2xl p-4 flex justify-between items-center text-sm">
              <div>
                <p className="text-white/60 text-xs">Selected Package</p>
                <p className="font-semibold text-white/90">{selectedRoom}</p>
              </div>
              <div className="text-right">
                <p className="text-white/60 text-xs">Total Fee</p>
                <p className="text-xl font-bold text-[#C8A96A]">{selectedPrice}</p>
              </div>
            </div>
          </div>
        )}

        {/* Step Indicator */}
        {step < 3 && (
          <div className="flex bg-gray-100 border-b border-gray-200">
            <div className={`flex-1 text-center py-3 text-xs font-semibold ${step === 1 ? "bg-white text-[#1A2456] border-b-2 border-[#1A2456]" : "text-gray-400"}`}>
              1. Guest Info
            </div>
            <div className={`flex-1 text-center py-3 text-xs font-semibold ${step === 2 ? "bg-white text-[#1A2456] border-b-2 border-[#1A2456]" : "text-gray-400"}`}>
              2. Secure Payment
            </div>
          </div>
        )}

        {/* Form Content Scrollable area */}
        <div className="overflow-y-auto p-6 md:p-8 flex-1">
          {step === 1 && (
            <div className="space-y-5">
              <h4 className="text-gray-800 font-semibold text-base mb-2">Configure Your Stay</h4>
              
              {/* Room Choice Select Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Accommodation Choice</label>
                <select
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A2456] bg-gray-50 font-medium text-gray-800"
                >
                  {rooms.map((r, i) => (
                    <option key={i} value={r.type}>
                      {r.type} ({r.price})
                    </option>
                  ))}
                  {rooms.length === 0 && (
                    <option value="6 Shared Room">6 Shared Room ($1,299)</option>
                  )}
                </select>
              </div>

              {/* Batch Select Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Select Course Batch</label>
                <div className="relative">
                  <select
                    name="batch"
                    value={formData.batch}
                    onChange={handleInputChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A2456] bg-gray-50 text-gray-800 font-medium appearance-none"
                  >
                    {batchDates.map((date, idx) => (
                      <option key={idx} value={date}>{date}</option>
                    ))}
                  </select>
                  <Calendar size={16} className="absolute right-4 top-3.5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="border-t border-gray-100 my-4 pt-4">
                <h4 className="text-gray-800 font-semibold text-base mb-3">Guest Information</h4>
                
                {/* Full Name */}
                <div className="space-y-1.5 mb-4">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Full Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A2456] ${errors.name ? "border-red-500 bg-red-50/10" : "border-gray-200 bg-gray-50"}`}
                    />
                    <User size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                </div>

                {/* Email & Phone grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address</label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A2456] ${errors.email ? "border-red-500 bg-red-50/10" : "border-gray-200 bg-gray-50"}`}
                      />
                      <Mail size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone Number</label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A2456] ${errors.phone ? "border-red-500 bg-red-50/10" : "border-gray-200 bg-gray-50"}`}
                      />
                      <Phone size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Step 1 Submit Button */}
              <button
                type="button"
                onClick={nextStep}
                className="w-full bg-[#1A2456] hover:bg-[#253275] text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg mt-6 cursor-pointer"
              >
                Proceed to Payment
              </button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={submitPayment} className="space-y-5">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-2">
                <h4 className="text-gray-800 font-semibold text-base">Payment Details</h4>
                <div className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2.5 py-1 rounded-full font-medium">
                  <Shield size={12} /> SSL Secured
                </div>
              </div>

              {/* Cardholder Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Cardholder Name</label>
                <input
                  type="text"
                  name="cardName"
                  placeholder="e.g. John Doe"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A2456] ${errors.cardName ? "border-red-500 bg-red-50/10" : "border-gray-200 bg-gray-50"}`}
                />
                {errors.cardName && <p className="text-red-500 text-xs">{errors.cardName}</p>}
              </div>

              {/* Card Number */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Card Number</label>
                <div className="relative">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="4111 2222 3333 4444"
                    maxLength="19"
                    value={formData.cardNumber}
                    onChange={(e) => {
                      e.target.value = formatCardNumber(e.target.value);
                      handleInputChange(e);
                    }}
                    className={`w-full border rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A2456] ${errors.cardNumber ? "border-red-500 bg-red-50/10" : "border-gray-200 bg-gray-50"}`}
                  />
                  <CreditCard size={18} className="absolute left-4 top-3.5 text-gray-400" />
                </div>
                {errors.cardNumber && <p className="text-red-500 text-xs">{errors.cardNumber}</p>}
              </div>

              {/* Expiry & CVV */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Expiry Date</label>
                  <input
                    type="text"
                    name="cardExpiry"
                    placeholder="MM/YY"
                    maxLength="5"
                    value={formData.cardExpiry}
                    onChange={(e) => {
                      e.target.value = formatExpiry(e.target.value);
                      handleInputChange(e);
                    }}
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A2456] ${errors.cardExpiry ? "border-red-500 bg-red-50/10" : "border-gray-200 bg-gray-50"}`}
                  />
                  {errors.cardExpiry && <p className="text-red-500 text-xs">{errors.cardExpiry}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">CVV Code</label>
                  <input
                    type="password"
                    name="cardCvv"
                    placeholder="123"
                    maxLength="4"
                    value={formData.cardCvv}
                    onChange={handleInputChange}
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A2456] ${errors.cardCvv ? "border-red-500 bg-red-50/10" : "border-gray-200 bg-gray-50"}`}
                  />
                  {errors.cardCvv && <p className="text-red-500 text-xs">{errors.cardCvv}</p>}
                </div>
              </div>

              {/* Guarantee text */}
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-gray-500 mt-4">
                <Info size={14} className="text-[#1A2456] flex-shrink-0 mt-0.5" />
                <p className="leading-normal">
                  Your reservation deposit is fully protected. Free cancellation up to 30 days before the batch starts. Remaining course fees can be paid in cash upon arrival.
                </p>
              </div>

              {/* Navigation buttons */}
              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 border border-gray-200 hover:bg-gray-50 text-gray-600 py-3.5 rounded-xl font-semibold text-sm transition-colors cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-2 bg-[#1A2456] hover:bg-[#253275] disabled:bg-gray-400 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    `Pay & Confirm ${selectedPrice}`
                  )}
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-6 md:py-10 space-y-6 flex flex-col items-center">
              
              {/* Confirmation checkmark animation */}
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center border-4 border-green-100 shadow-[0_0_20px_rgba(34,197,94,0.2)] animate-bounce">
                <Check size={36} className="text-green-500 stroke-[3px]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider">Booking Confirmed</span>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#1A2456] mt-2">See you in Bali! 🌴</h3>
                <p className="text-gray-500 text-sm max-w-xs mx-auto">
                  Thank you for booking, <span className="font-semibold text-gray-800">{formData.name}</span>. Your spot has been reserved.
                </p>
              </div>

              {/* Receipt Box */}
              <div className="w-full bg-[#F7F3EF] rounded-2xl p-5 text-left text-sm space-y-3.5 border border-gray-100 max-w-sm">
                <div className="flex justify-between border-b border-gray-200/60 pb-2">
                  <span className="text-gray-500">Booking Ref:</span>
                  <span className="font-mono font-semibold text-[#1A2456]">BY-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-500 text-xs uppercase block">Program</span>
                  <span className="font-semibold text-gray-800 line-clamp-1">{courseTitle}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div>
                    <span className="text-gray-500 text-xs uppercase block">Stay Package</span>
                    <span className="font-semibold text-gray-800 text-xs">{selectedRoom}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs uppercase block">Amount Paid</span>
                    <span className="font-bold text-green-600">{selectedPrice}</span>
                  </div>
                </div>
                <div className="space-y-1 pt-1">
                  <span className="text-gray-500 text-xs uppercase block">Batch Date</span>
                  <span className="font-semibold text-[#1A2456] text-xs flex items-center gap-1">
                    <Calendar size={13} /> {formData.batch}
                  </span>
                </div>
              </div>

              <div className="text-xs text-gray-400 max-w-xs leading-normal">
                An email receipt containing hotel directions, packing check-lists, and course materials has been sent to <span className="font-semibold">{formData.email}</span>.
              </div>

              <button
                onClick={onClose}
                className="bg-[#1A2456] hover:bg-[#253275] text-white font-semibold text-sm px-8 py-3 rounded-full transition-all duration-200 cursor-pointer shadow-md"
              >
                Go to Course Page
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
