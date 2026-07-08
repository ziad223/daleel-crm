"use client";

import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-md" dir="rtl">
      <div className="relative flex items-center justify-center">
        {/* Outer glowing animated gradient spinner ring */}
        <div className="w-24 h-24 rounded-full border-4 border-slate-900 border-t-[var(--accent)] animate-spin" />
        
        {/* Inner pulsing container with core branding compass icon */}
        <div className="absolute inset-0 m-auto w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center animate-pulse border border-slate-800 shadow-lg shadow-emerald-500/20">
          <svg className="w-6 h-6 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      
      {/* Premium Loader Message */}
      <div className="mt-8 text-center space-y-2">
        <h3 className="text-white font-extrabold text-sm tracking-wide">دليل الشرق CRM</h3>
        <p className="text-[11px] text-slate-400 animate-pulse font-medium">جاري تهيئة لوحة التحكم السحابية وتأمين البيانات...</p>
      </div>
    </div>
  );
}
