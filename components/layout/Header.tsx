"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, ChevronDown, Target, Zap, Brain, Shield, 
  BarChart3, Globe, Sparkles, ArrowRight, Laptop, MessageSquare, Phone 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const productFeatures = [
    {
      icon: <Target className="w-5 h-5 text-emerald-500" />,
      title: "إدارة العملاء Leads 360",
      desc: "ملف موحد متكامل لكل عميل محتمل.",
      href: "/features#leads"
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-blue-500" />,
      title: "Pipeline المبيعات",
      desc: "لوحة تفاعلية لمتابعة الصفقات وحجمها.",
      href: "/features#pipeline"
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "الواتساب والاتصالات",
      desc: "تواصل بلمسة واحدة وقوالب جاهزة.",
      href: "/features#comms"
    },
    {
      icon: <Brain className="w-5 h-5 text-indigo-500" />,
      title: "الذكاء الاصطناعي AI",
      desc: "توصيات وتوقعات نسب الإغلاق تلقائياً.",
      href: "/features#ai"
    }
  ];

  const mainLinks = [
    { href: '/about', label: 'من نحن' },
    { href: '/pricing', label: 'الباقات والأسعار' },
    { href: '/faq', label: 'الأسئلة الشائعة' },
    { href: '/contact', label: 'تواصل معنا' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80" dir="rtl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
        
        {/* Logo Section (shinks-0 to prevent compression) */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-11 h-11 flex items-center justify-center">
            {/* Outer Glowing Rings */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)] to-[var(--primary-dark)] rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300 shadow-md shadow-blue-500/20" />
            <div className="absolute inset-0.5 bg-slate-950 rounded-[14px] flex items-center justify-center">
              {/* stylized compass pointer pointing North-East */}
              <svg className="w-5.5 h-5.5 text-[var(--accent)] transform group-hover:rotate-45 transition-transform duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="2.5" fill="#0F172A" />
              </svg>
            </div>
          </div>
          <div className="text-right whitespace-nowrap">
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 leading-none block">دليل الشرق</span>
            <span className="text-[9px] text-emerald-500 font-bold tracking-wider uppercase mt-1 block">CRM Cloud Platform</span>
          </div>
        </Link>

        {/* Center Section: Desktop Navigation Links (Responsive gaps and font size) */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-3">
          
          {/* 1. من نحن (About Us) - First link on the right in RTL */}
          <Link 
            href="/about" 
            className={`px-3 py-2 text-xs xl:text-sm font-bold transition-colors rounded-xl hover:bg-slate-50 whitespace-nowrap ${
              pathname === '/about' ? 'text-[var(--primary)] font-extrabold bg-blue-50/50' : 'text-slate-600 hover:text-[var(--primary)]'
            }`}
          >
            من نحن
          </Link>

          {/* 2. المنتج والمميزات (Features Dropdown) - Second link */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("features")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-xs xl:text-sm font-bold text-slate-600 hover:text-[var(--primary)] transition-colors rounded-xl hover:bg-slate-50 whitespace-nowrap">
              المنتج والمميزات
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "features" ? "transform rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === "features" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-1 w-[460px] bg-white border border-slate-200 shadow-xl rounded-2xl p-4 grid grid-cols-2 gap-2 text-right"
                >
                  {productFeatures.map((feat, idx) => (
                    <Link 
                      key={idx} 
                      href={feat.href}
                      className="flex gap-3 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all text-right"
                    >
                      <div className="p-2 rounded-xl bg-slate-50 flex-shrink-0 self-start">
                        {feat.icon}
                      </div>
                      <div>
                        <div className="font-bold text-xs text-slate-900 whitespace-nowrap">{feat.title}</div>
                        <p className="text-[10px] text-slate-500 mt-0.5 leading-normal">{feat.desc}</p>
                      </div>
                    </Link>
                  ))}
                  <div className="col-span-2 pt-2 border-t border-slate-100 mt-2 flex justify-between items-center px-2">
                    <span className="text-[10px] text-slate-400 font-semibold">تحديثات أمان SaaS وعزل بيانات متكاملة</span>
                    <Link href="/features" className="text-[11px] text-[var(--primary)] font-bold hover:underline flex items-center gap-1">
                      كل المميزات
                      <ArrowRight className="w-3 h-3 transform rotate-180" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. Rest of the standard links */}
          {mainLinks.filter(link => link.href !== '/about').map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`px-3 py-2 text-xs xl:text-sm font-bold transition-colors rounded-xl hover:bg-slate-50 whitespace-nowrap ${
                  isActive ? 'text-[var(--primary)] font-extrabold bg-blue-50/50' : 'text-slate-600 hover:text-[var(--primary)]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Left Section: Action CTAs (shrink-0 to prevent button wrapping) */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link 
            href="/login" 
            className="text-xs xl:text-sm font-bold text-slate-600 hover:text-slate-900 px-3 py-2 hover:bg-slate-50 rounded-xl transition-all whitespace-nowrap"
          >
            تسجيل الدخول
          </Link>
          <Button 
            href="/demo" 
            variant="accent" 
            size="sm" 
            className="font-bold text-slate-950 px-5 py-2.5 rounded-xl shadow-md shadow-emerald-500/10 hover:shadow-lg transition-all whitespace-nowrap text-xs xl:text-sm"
          >
            تجربة مجانية 14 يوم
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors shrink-0"
          aria-label="القائمة"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>

      {/* Mobile Drawer Slide Navigation */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] lg:hidden" dir="ltr">
            {/* 1. Backdrop Overlay (Sibling) */}
            <div 
              className="absolute inset-0 bg-slate-950/70"
              onClick={() => setIsOpen(false)}
            />

            {/* 2. Drawer Menu (Sibling) */}
            <motion.div 
              initial={{ x: '100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
              className="absolute right-0 top-0 h-full w-80 p-6 flex flex-col justify-between shadow-2xl border-l border-slate-100 text-right z-10 !bg-white"
              style={{ backgroundColor: '#ffffff' }}
              dir="rtl"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-slate-950 flex items-center justify-center text-[var(--accent)] font-bold text-base">د</div>
                    <span className="font-extrabold text-sm text-slate-900">دليل الشرق CRM</span>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)} 
                    className="p-1 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-50"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Mobile Menu Links */}
                <div className="flex flex-col gap-1.5 text-sm font-semibold">
                  <Link 
                    href="/features" 
                    className="py-3 px-4 rounded-xl hover:bg-slate-50 text-slate-800 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    المميزات الفنية
                  </Link>
                  {mainLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link 
                        key={link.href} 
                        href={link.href} 
                        className={`py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors ${
                          isActive ? 'text-[var(--primary)] bg-blue-50/50 font-extrabold' : 'text-slate-800'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons & contact in drawer footer */}
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <Link 
                  href="/login" 
                  className="block text-center py-3 rounded-xl border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  تسجيل الدخول
                </Link>
                <Button 
                  href="/demo" 
                  variant="accent" 
                  className="w-full justify-center py-3 rounded-xl text-slate-950 font-bold text-xs"
                  onClick={() => setIsOpen(false)}
                >
                  ابدأ التجربة المجانية 14 يوم
                </Button>
                
                {/* Short info */}
                <div className="text-[10px] text-slate-400 text-center leading-normal mt-4">
                  تواصل معنا: sales@daleelalsharq.com
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
