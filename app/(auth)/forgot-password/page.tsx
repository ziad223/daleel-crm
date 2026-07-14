"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { toast } from 'sonner';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("يرجى إدخال البريد الإلكتروني.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      toast.success("تم إرسال رابط استعادة كلمة المرور!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex text-white font-sans">
      {/* Right Side: Showcase (Hidden on Mobile) */}
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
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-snug">
            استعد وصولك إلى منصة المبيعات الذكية
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed max-w-md">
            نحن نضع حماية بياناتك وأرقام عملائك في المقام الأول. سيتم إرسال رابط آمن لاستعادة حسابك فوراً.
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
            <h1 className="text-3xl font-bold tracking-tight">نسيت كلمة المرور؟</h1>
            <p className="text-slate-400 text-xs sm:text-sm">
              أدخل البريد الإلكتروني المرتبط بحسابك وسنرسل لك رابطاً لإعادة تعيين كلمة المرور.
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">البريد الإلكتروني للعمل</label>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="name@company.com" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-5 py-3.5 text-sm placeholder:text-slate-500 focus:border-[var(--primary)] focus:outline-none text-left" 
                  />
                  <Mail className="absolute inset-y-0 right-4 h-full w-4 flex items-center text-slate-500 pointer-events-none" />
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={loading}
                variant="accent" 
                className="w-full justify-center text-slate-950 font-bold py-3.5 text-sm"
              >
                {loading ? "جاري الإرسال..." : "إرسال رابط الاستعادة"}
              </Button>
            </form>
          ) : (
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-emerald-500">تم الإرسال بنجاح!</h3>
              <p className="text-xs text-slate-300">
                يرجى التحقق من بريدك الإلكتروني <span className="font-mono text-emerald-400">{email}</span> واتباع الرابط لإعادة تعيين كلمة المرور.
              </p>
            </div>
          )}

          <div className="text-center pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-400">
            <Link href="/login" className="flex items-center justify-center gap-2 text-emerald-500 font-bold hover:underline">
              <ArrowRight className="w-4 h-4" /> العودة لتسجيل الدخول
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
