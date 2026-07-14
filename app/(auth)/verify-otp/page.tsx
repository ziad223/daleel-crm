"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { toast } from 'sonner';

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    // Take only the last character if multiple are typed
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join('');
    
    if (otpValue.length < 6) {
      toast.error("يرجى إدخال رمز التحقق كاملاً.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("تم التحقق بنجاح! جاري تسجيل الدخول...");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex text-white font-sans">
      {/* Right Side: Showcase */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-950 p-12 flex-col justify-between relative overflow-hidden border-l border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.2),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px]" />
        
        {/* Top Header Logo */}
        <div className="flex items-center gap-3 relative z-10 text-right" dir="rtl">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] flex items-center justify-center shadow-lg">
            <span className="text-white text-xl font-bold font-mono">د</span>
          </div>
          <div>
            <div className="font-bold text-lg leading-none">دليل الشرق</div>
            <div className="text-[10px] text-emerald-500 font-semibold mt-0.5">CRM Intelligence</div>
          </div>
        </div>

        {/* Showcase Display */}
        <div className="relative z-10 space-y-8 my-auto text-right" dir="rtl">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-xs text-blue-400 font-bold">
            <ShieldCheck className="w-4 h-4" /> التحقق بخطوتين
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-snug">
            نحمي بياناتك بأعلى معايير الأمان
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed max-w-md">
            نظام التحقق المزدوج يضمن عدم وصول أي شخص غير مصرح له إلى أرقام عملائك وبيانات مبيعاتك الحساسة.
          </p>
        </div>

        {/* Bottom copyright info */}
        <div className="text-xs text-slate-500 relative z-10 text-right">
          © {new Date().getFullYear()} دليل الشرق للتقنية. جميع الحقوق محفوظة.
        </div>
      </div>

      {/* Left Side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-slate-900">
        <div className="w-full max-w-md space-y-8 text-right" dir="rtl">
          <div className="space-y-2">
            <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 border border-slate-700">
              <Smartphone className="w-6 h-6 text-[var(--primary)]" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">التحقق من الهوية</h1>
            <p className="text-slate-400 text-xs sm:text-sm">
              أدخل الرمز المكون من 6 أرقام المرسل إلى هاتفك <span className="text-white font-mono dir-ltr inline-block">** *** **05</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex justify-between gap-2 sm:gap-3" dir="ltr">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el; }}
                  type="text"
                  inputMode="numeric"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-10 h-12 sm:w-12 sm:h-14 rounded-xl border border-slate-700 bg-slate-950 text-center text-xl font-bold focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 focus:outline-none transition-all"
                  maxLength={1}
                />
              ))}
            </div>

            <Button 
              type="submit" 
              disabled={loading}
              variant="accent" 
              className="w-full justify-center text-slate-950 font-bold py-3.5 text-sm"
            >
              {loading ? "جاري التحقق..." : "تحقق وتابع"}
            </Button>
          </form>

          <div className="text-center pt-6 border-t border-slate-800 text-xs text-slate-400 space-y-2">
            <p>لم يصلك الرمز؟</p>
            <button className="text-emerald-500 font-bold hover:underline">إعادة إرسال الرمز (0:59)</button>
          </div>
          
          <div className="text-center mt-4">
             <Link href="/login" className="inline-flex items-center justify-center gap-2 text-xs text-slate-500 hover:text-white transition-colors">
               <ArrowRight className="w-3 h-3" /> العودة لتسجيل الدخول
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
