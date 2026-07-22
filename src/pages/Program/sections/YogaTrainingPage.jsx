import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ROOM_PRICES_BALI } from '../../../data/bali/programPrices';
import { ROOM_PRICES_RISHIKESH } from '../../../data/rishikesh/programPricesRishikesh';
import { ROOM_PRICES_MYSORE } from '../../../data/mysore/programPricesMysore';

const defaultRooms = [
  { type: '6 Sharing Room', current: 999, original: 1399, popular: false },
  { type: '4 Sharing Room', current: 1099, original: 1499, popular: false },
  { type: '2 Sharing Room', current: 1399, original: 1799, popular: true },
  { type: 'Private Room', current: 1699, original: 2099, popular: false }
];

const generateBatches = (durationDays, roomsList) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

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
  
  const getSuffix = (day) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:  return 'st';
      case 2:  return 'nd';
      case 3:  return 'rd';
      default: return 'th';
    }
  };

  return months
    .map((m, idx) => {
      const startDate = new Date(m.year, m.monthIndex, m.startDay);
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + durationDays - 1);
      return { m, idx, startDate, endDate };
    })
    .filter(item => item.startDate >= today)
    .slice(0, 6)
    .map((item) => {
      const { m, idx, startDate, endDate } = item;
      const startDayStr = `${startDate.getDate()}${getSuffix(startDate.getDate())}`;
      const endDayStr = `${endDate.getDate()}${getSuffix(endDate.getDate())}`;
      
      const startMonthStr = startDate.toLocaleString('en-US', { month: 'short' });
      const endMonthStr = endDate.toLocaleString('en-US', { month: 'short' });
      
      let datesText = '';
      if (startDate.getMonth() === endDate.getMonth()) {
        datesText = `${startDayStr} To ${endDayStr} ${startMonthStr} ${startDate.getFullYear()}`;
      } else {
        datesText = `${startDayStr} ${startMonthStr} To ${endDayStr} ${endMonthStr} ${endDate.getFullYear()}`;
      }

      return {
        dates: datesText,
        month: m.name,
        seatsLeft: [2, 3, 3, 3, 4, 6, 4, 3][idx] || 3,
        prices: roomsList || [],
      };
    });
};

export default function YogaTrainingPage({ pageData, selectedBatch, setSelectedBatch, onBookClick }) {
  const { location, course: courseSlug } = useParams();

  // Resolve room pricing & duration based on active URL parameters
  const locKey = location?.toLowerCase();
  let pricingInfo = null;

  if (locKey === 'bali') {
    pricingInfo = ROOM_PRICES_BALI[courseSlug];
  } else if (locKey === 'rishikesh') {
    pricingInfo = ROOM_PRICES_RISHIKESH[courseSlug];
  } else if (locKey === 'mysuru' || locKey === 'mysore') {
    pricingInfo = ROOM_PRICES_MYSORE[courseSlug];
  }

  // Fallbacks if not found
  const durationDays = pricingInfo?.durationDays || 25;
  const roomsList = pricingInfo?.rooms || defaultRooms;

  // Generate the batches array dynamically
  const courses = generateBatches(durationDays, roomsList);

  return (
    <div className="w-full bg-[#FAF8F5] text-stone-850 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="text-[#C8A96A] font-semibold tracking-wider uppercase text-xs bg-[#C8A96A]/10 border border-[#C8A96A]/20 px-4 py-1.5 rounded-full">
          Stay & Enrollment
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-serif leading-[1.15] tracking-tight text-[#1A2456]">
          Select Date & Accommodation
        </h2>
        <p className="mt-3 text-base text-stone-500">
          Select your preferred batch dates and choose your room stay option below to enroll.
        </p>
      </div>

      {/* Main Interactive Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Batch Selector (Left Sidebar) */}
        <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-stone-200/60 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
          <h3 className="text-lg font-bold mb-4 text-[#1A2456] flex items-center justify-between">
            <span>Select Dates</span>
            <span className="text-xs font-normal text-stone-400">Upcoming Batches</span>
          </h3>

          <div className="space-y-3">
            {courses.map((course, idx) => {
              const isSelected = selectedBatch === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedBatch(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-[#1A2456] border-[#1A2456] text-white shadow-md scale-[1.01]'
                      : 'bg-[#F7F3EF]/60 border-stone-200/40 text-stone-850 hover:bg-[#F7F3EF] hover:border-stone-300'
                  }`}
                >
                  <div>
                    <p className={`font-semibold text-sm sm:text-base ${isSelected ? 'text-white' : 'text-[#1A2456]'}`}>
                      {course.dates}
                    </p>
                    <p className={`text-xs mt-0.5 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>{course.month}</p>
                  </div>
                  <span
                    className={`text-[11px] px-2.5 py-1 rounded-full font-semibold ${
                      isSelected
                        ? course.seatsLeft <= 3
                          ? 'bg-rose-500/25 text-rose-100 border border-rose-400/35'
                          : 'bg-[#7BAF8A]/25 text-[#dcfce7] border border-[#7BAF8A]/35'
                        : course.seatsLeft <= 3
                        ? 'bg-rose-500/10 text-rose-600 border border-rose-500/20'
                        : 'bg-[#7BAF8A]/10 text-emerald-700 border border-[#7BAF8A]/20'
                    }`}
                  >
                    {course.seatsLeft} left
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Room & Pricing Cards (Right Detail Section) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#F7F3EF] p-6 rounded-3xl border border-stone-200/60 gap-4">
            <div>
              <span className="text-xs text-[#C8A96A] uppercase tracking-widest font-semibold">Selected Batch</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1A2456] mt-1">{courses[selectedBatch]?.dates}</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#7BAF8A] animate-pulse"></span>
              <span className="text-sm font-medium text-stone-750">
                {courses[selectedBatch]?.seatsLeft} Spots Remaining
              </span>
            </div>
          </div>

          {/* Room Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses[selectedBatch]?.prices?.map((room, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col justify-between p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                  room.popular
                    ? 'bg-white border-2 border-[#C8A96A] shadow-[0_8px_24px_rgba(200,169,106,0.12)]'
                    : 'bg-white border border-stone-200/60 hover:border-stone-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)]'
                }`}
              >
                {/* Highlight Badge */}
                {room.popular && (
                  <span className="absolute -top-3 right-6 bg-[#C8A96A] text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-[#1A2456]">{room.type}</h4>
                    {room.note && (
                      <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-pink-500/10 text-pink-600 border border-pink-500/20">
                        {room.note}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-[#1A2456]">${room.current}</span>
                    <span className="text-sm text-stone-400 line-through">${room.original}</span>
                    <span className="text-xs font-semibold text-emerald-600 ml-auto">
                      Save ${room.original - room.current}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onBookClick && onBookClick(room.type)}
                  className={`mt-6 w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 border-0 cursor-pointer ${
                    room.popular
                      ? 'bg-[#C8A96A] hover:bg-[#bfa061] text-white shadow-md shadow-[#C8A96A]/20'
                      : 'bg-[#1A2456] hover:bg-[#253275] text-white shadow-sm'
                  }`}
                >
                  <span>Enroll Now</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}