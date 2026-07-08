"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Eye, EyeOff, Brain, Sparkles, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { toast } from 'sonner';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    password: '',
    plan: 'professional'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.password) {
      toast.error("يرجى ملء جميع الحقول المطلوبة لإنشاء الحساب.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("تم إنشاء الحساب بنجاح! جاري تحويلك لإعداد مساحة عملك...");
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

        {/* Register Highlights Display */}
        <div className="relative z-10 space-y-8 my-auto text-right" dir="rtl">
          <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full inline-block">
            تسجيل شركة جديدة
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-snug">
            ابدأ بتجربة مجانية كاملة الميزات لمدة 14 يوماً
          </h2>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start bg-slate-900 border border-slate-800 p-5 rounded-2xl">
              <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 font-bold flex items-center justify-center flex-shrink-0 text-sm">✓</span>
              <div>
                <h4 className="font-bold text-xs text-slate-200 mb-1">تجهيز آلي وسريع لمساحتك</h4>
                <p className="text-slate-400 text-[11px] leading-relaxed">بمجرد التسجيل، نقوم بتهيئة خادمك وقاعدة بياناتك المعزولة لتكون جاهزة للعمل فوراً.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-slate-900 border border-slate-800 p-5 rounded-2xl">
              <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 font-bold flex items-center justify-center flex-shrink-0 text-sm">✓</span>
              <div>
                <h4 className="font-bold text-xs text-slate-200 mb-1">لا حاجة لبطاقة ائتمان</h4>
                <p className="text-slate-400 text-[11px] leading-relaxed">جرب جميع المميزات والـ AI وقوالب الواتساب مجاناً وبكل أريحية دون أي التزامات مالية مسبقة.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright info */}
        <div className="text-xs text-slate-500 relative z-10 text-right">
          © {new Date().getFullYear()} دليل الشرق للتقنية. جميع الحقوق محفوظة.
        </div>
      </div>

      {/* Left Side: Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-slate-900">
        <div className="w-full max-w-md space-y-6 text-right" dir="rtl">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">سجل شركتك الآن</h1>
            <p className="text-slate-400 text-xs sm:text-sm">
              أنشئ مساحة عمل سحابية معزولة خاصة بشركتك وابدأ تنظيم مبيعات فريقك.
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300 block">اسمك الكريم *</label>
              <input 
                type="text" 
                placeholder="عبدالله الحربي" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-5 py-3.5 text-sm placeholder:text-slate-500 focus:border-[var(--primary)] focus:outline-none text-right" 
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300 block">البريد الإلكتروني للعمل *</label>
              <input 
                type="email" 
                placeholder="name@company.com" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-5 py-3.5 text-sm placeholder:text-slate-500 focus:border-[var(--primary)] focus:outline-none text-left" 
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300 block">رقم الهاتف (واتساب) *</label>
                <input 
                  type="tel" 
                  placeholder="05xxxxxxx" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-5 py-3.5 text-sm placeholder:text-slate-500 focus:border-[var(--primary)] focus:outline-none text-left font-mono" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300 block">اسم شركتك الموقرة *</label>
                <input 
                  type="text" 
                  placeholder="شركة التطوير المحدودة" 
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-5 py-3.5 text-sm placeholder:text-slate-500 focus:border-[var(--primary)] focus:outline-none text-right" 
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300 block">اختر باقة الاشتراك المبدئية</label>
              <select 
                value={formData.plan}
                onChange={(e) => setFormData({...formData, plan: e.target.value})}
                className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-5 py-3.5 text-sm focus:border-[var(--primary)] focus:outline-none text-right appearance-none"
              >
                <option value="starter">الباقة الأساسية (299 د.إ / شهرياً)</option>
                <option value="professional">الباقة الاحترافية (599 د.إ / شهرياً - الأكثر طلباً)</option>
                <option value="enterprise">الباقة المؤسسية (1199 د.إ / شهرياً)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300 block">كلمة مرور الحساب *</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
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

            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 text-[10px] text-slate-400 leading-relaxed">
              بالتسجيل، أنت توافق على شروط الاستخدام وسياسة الخصوصية الخاصة بدليل الشرق ونظام عزل البيانات وحماية أصول أرقامك.
            </div>

            <Button 
              type="submit" 
              disabled={loading}
              variant="accent" 
              className="w-full justify-center text-slate-950 font-bold py-3.5 text-sm mt-2"
            >
              {loading ? "جاري إنشاء حسابك..." : "إنشاء حساب مساحة العمل"}
              <ArrowLeft className="w-4.5 h-4.5 mr-2" />
            </Button>
          </form>

          <div className="text-center pt-2 border-t border-slate-800 text-xs sm:text-sm text-slate-400">
            لديك مساحة عمل مسجلة بالفعل؟{" "}
            <Link href="/login" className="text-emerald-500 font-bold hover:underline">سجل دخولك هنا</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
