"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);

  const navLinks = [
    { href: '/about', label: 'من نحن' },
    { href: '/features', label: 'المميزات' },
    { href: '/pricing', label: 'الباقات والأسعار' },
    { href: '/faq', label: 'الأسئلة الشائعة' },
    { href: '/contact', label: 'تواصل معنا' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] flex items-center justify-center shadow-lg shadow-blue-900/30">
            <span className="text-white text-2xl font-bold tracking-tighter">د</span>
          </div>
          <div>
            <div className="font-bold text-2xl tracking-tight text-slate-900">دليل الشرق</div>
            <div className="text-[10px] text-emerald-600 font-semibold -mt-1.5">CRM</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-9 text-sm">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="nav-link"
            >
              {link.label}
            </Link>
          ))}
          
          {/* Pricing Dropdown */}
          <div className="relative group">
            <button 
              onClick={() => setPricingOpen(!pricingOpen)}
              className="nav-link flex items-center gap-1"
            >
              الباقات
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full right-0 mt-2 w-56 rounded-2xl border border-slate-100 bg-white shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link href="/pricing" className="block px-5 py-3 text-sm hover:bg-slate-50">عرض كل الباقات</Link>
              <Link href="/pricing#comparison" className="block px-5 py-3 text-sm hover:bg-slate-50">مقارنة الباقات</Link>
              <Link href="/trial" className="block px-5 py-3 text-sm hover:bg-emerald-50 text-emerald-600 font-medium">ابدأ تجربة مجانية</Link>
            </div>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="btn-ghost">
            تسجيل الدخول
          </Link>
          <Link href="/trial" className="btn-primary text-sm px-6 py-2.5">
            ابدأ تجربتك المجانية
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="mobile-menu md:hidden" onClick={() => setIsOpen(false)}>
            <motion.div 
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              exit={{ x: 100 }}
              transition={{ type: "spring", damping: 25 }}
              className="mobile-menu-content"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-[var(--primary)] flex items-center justify-center">
                    <span className="text-white text-xl font-bold">د</span>
                  </div>
                  <span className="font-bold text-xl">دليل الشرق CRM</span>
                </div>
                <button onClick={() => setIsOpen(false)}><X size={22} /></button>
              </div>

              <div className="flex flex-col gap-2 text-lg">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="py-3 px-4 rounded-2xl hover:bg-slate-50 active:bg-slate-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/pricing" className="py-3 px-4 rounded-2xl hover:bg-slate-50" onClick={() => setIsOpen(false)}>الباقات والأسعار</Link>
              </div>

              <div className="mt-auto pt-8 border-t space-y-3">
                <Link 
                  href="/login" 
                  className="block w-full text-center py-3.5 rounded-2xl border border-slate-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  تسجيل الدخول
                </Link>
                <Link 
                  href="/trial" 
                  className="btn-primary w-full justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  ابدأ تجربتك المجانية 14 يوم
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
