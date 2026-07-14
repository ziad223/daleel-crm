"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { toast } from 'sonner';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      toast.error("يرجى إدخال كلمة المرور الجديدة وتأكيدها.");
      return;
    }
    
    if (password !== confirmPassword) {
      toast.error("كلمات المرور غير متطابقة.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSuccess(true);
      toast.success("تم إعادة تعيين كلمة المرور بنجاح!");
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
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-xs text-emerald-400 font-bold">
            <ShieldCheck className="w-4 h-4" /> اتصال آمن ومشفر
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-snug">
            اختر كلمة مرور قوية لحماية مساحة عملك
          </h2>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> يجب أن تتكون من 8 أحرف على الأقل</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> تحتوي على أحرف كبيرة وصغيرة</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> تحتوي على أرقام ورموز خاصة</li>
          </ul>
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
            <h1 className="text-3xl font-bold tracking-tight">إعادة تعيين كلمة المرور</h1>
            <p className="text-slate-400 text-xs sm:text-sm">
              قم بإنشاء كلمة مرور جديدة لحسابك.
            </p>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">كلمة المرور الجديدة</label>
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

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">تأكيد كلمة المرور</label>
                <div className="relative">
                  <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-5 py-3.5 text-sm placeholder:text-slate-500 focus:border-[var(--primary)] focus:outline-none text-left font-mono" 
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-4 flex items-center text-slate-500 hover:text-slate-300"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={loading}
                variant="accent" 
                className="w-full justify-center text-slate-950 font-bold py-3.5 text-sm"
              >
                {loading ? "جاري التحديث..." : "حفظ كلمة المرور الجديدة"}
              </Button>
            </form>
          ) : (
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-emerald-500 text-slate-950 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">تم تغيير كلمة المرور بنجاح</h3>
                <p className="text-xs text-slate-400 mt-2">
                  يمكنك الآن تسجيل الدخول باستخدام كلمة المرور الجديدة الخاصة بك.
                </p>
              </div>
              <div className="pt-4">
                <Link href="/login" className="inline-flex w-full justify-center rounded-xl bg-emerald-500 px-5 py-3.5 text-sm font-bold text-slate-950 hover:bg-emerald-400 transition-colors">
                  الذهاب لتسجيل الدخول
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
