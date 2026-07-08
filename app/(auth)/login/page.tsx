"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Eye, EyeOff, Brain, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { toast } from 'sonner';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("يرجى إدخال البريد الإلكتروني وكلمة المرور.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("تم تسجيل الدخول بنجاح! جاري الانتقال للوحة التحكم...");
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

        {/* Dashboard Mockup Display */}
        <div className="relative z-10 space-y-8 my-auto text-right" dir="rtl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-snug">
            منصة مبيعات ذكية وآمنة تحمي أرقامك وتزيد إنتاجية فريقك
          </h2>
          
          <div className="bg-slate-900 border border-slate-800/80 p-6 rounded-3xl space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-xs text-blue-400 font-bold">
              <Brain className="w-4.5 h-4.5 text-[var(--accent)]" />
              مساعد الذكاء الاصطناعي للمبيعات
            </div>
            <p className="text-xs text-slate-300 leading-relaxed pr-2">
              "تم توثيق مكالمة المندوب أحمد مع العميل عبدالله الحربي بنجاح. العميل مهتم بباقة السحابية. تم إرسال قالب الواتساب الترحيبي وتعديل احتمالية الإغلاق إلى 82%."
            </p>
          </div>

          <div className="space-y-3.5 text-xs text-slate-400">
            <div className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4 flex-shrink-0" /> عزل قواعد البيانات بالكامل لكل شركة (Multi-Tenancy)</div>
            <div className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4 flex-shrink-0" /> إخفاء أرقام الهواتف لحماية بيانات العملاء من التسريب</div>
            <div className="flex items-center gap-2.5"><Check className="text-emerald-500 w-4 h-4 flex-shrink-0" /> تكامل سلس مع الهواتف الذكية وتطبيق الواتساب المباشر</div>
          </div>
        </div>

        {/* Bottom copyright info */}
        <div className="text-xs text-slate-500 relative z-10 text-right">
          © {new Date().getFullYear()} دليل الشرق للتقنية. جميع الحقوق محفوظة.
        </div>
      </div>

      {/* Left Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-slate-900">
        <div className="w-full max-w-md space-y-8 text-right" dir="rtl">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">تسجيل الدخول</h1>
            <p className="text-slate-400 text-xs sm:text-sm">
              أدخل البريد الإلكتروني وكلمة المرور للدخول إلى مساحة العمل الخاصة بشركتك.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 block">البريد الإلكتروني للعمل</label>
              <input 
                type="email" 
                placeholder="name@company.com" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-5 py-3.5 text-sm placeholder:text-slate-500 focus:border-[var(--primary)] focus:outline-none text-left" 
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-300 block">كلمة المرور</label>
                <Link href="/contact" className="text-[11px] text-emerald-500 hover:underline">نسيت كلمة المرور؟</Link>
              </div>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-5 py-3.5 text-sm placeholder:text-slate-500 focus:border-[var(--primary)] focus:outline-none text-left font-mono" 
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-4 flex items-center text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="rounded border-slate-800 bg-slate-950 text-[var(--primary)] focus:ring-0" />
              <label htmlFor="remember" className="text-xs text-slate-400 select-none">تذكر تسجيل دخولي في هذا المتصفح</label>
            </div>

            <Button 
              type="submit" 
              disabled={loading}
              variant="accent" 
              className="w-full justify-center text-slate-950 font-bold py-3.5 text-sm"
            >
              {loading ? "جاري تسجيل الدخول..." : "دخول إلى النظام"}
              <ArrowRight className="w-4.5 h-4.5 mr-2 transform rotate-180" />
            </Button>
          </form>

          <div className="text-center pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-400">
            ليس لديك مساحة عمل مسجلة؟{" "}
            <Link href="/register" className="text-emerald-500 font-bold hover:underline">سجل شركتك الآن واشترك</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
