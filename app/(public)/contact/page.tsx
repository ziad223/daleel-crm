"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Send, HelpCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    teamSize: '1-5',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("يرجى ملء الحقول الإلزامية: الاسم، البريد الإلكتروني، ورقم الهاتف.");
      return;
    }

    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      toast.success("تم إرسال رسالتك بنجاح! سيتواصل معك فريق المبيعات قريباً.");
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.2),transparent_45%)]" />
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">تواصل معنا</h1>
            <p className="text-lg text-slate-300">
              فريق مبيعات ودعم دليل الشرق CRM هنا لمساعدتك في استفساراتك وتفعيل باقتك.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Grid Contact form & Details */}
      <Section className="py-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Info Details Cards */}
          <div className="lg:col-span-5 space-y-6 text-right" dir="rtl">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">معلومات التواصل المباشر</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              يسعدنا دائماً الإجابة على استفساراتك التقنية أو التجارية. تواصل معنا مباشرة أو املأ النموذج وسيتصل بك أحد خبرائنا.
            </p>

            <div className="space-y-4 pt-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 flex-shrink-0"><Phone className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-xs text-slate-900 mb-1">الرقم الموحد والمبيعات</h4>
                  <span className="text-sm font-mono text-slate-600">+966 9200 *** ***</span>
                  <div className="text-[10px] text-slate-400 mt-1">الأحد - الخميس (9:00 ص - 6:00 م)</div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 flex-shrink-0"><Mail className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-xs text-slate-900 mb-1">البريد الإلكتروني الرسمي</h4>
                  <span className="text-sm font-mono text-slate-600">sales@daleelalsharq.com</span>
                  <div className="text-[10px] text-slate-400 mt-1">لطلبات الدعم والاستفسارات التجارية</div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 flex-shrink-0"><MapPin className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-xs text-slate-900 mb-1">المقر الرئيسي</h4>
                  <span className="text-xs text-slate-600">الرياض، طريق الملك فهد، حي المروج، المملكة العربية السعودية</span>
                </div>
              </div>
            </div>

            {/* Quick Helper Tip */}
            <div className="bg-blue-50 border border-blue-100 p-5 rounded-2xl flex gap-3.5 items-start mt-6">
              <HelpCircle className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-bold text-xs text-slate-900">هل تبحث عن تجربة النظام؟</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  يمكنك تفعيل حساب تجريبي فوراً لمدة 14 يوم بدون الحاجة لبطاقة ائتمان من خلال زيارة صفحة <Link href="/demo" className="text-[var(--primary)] font-bold hover:underline">طلب الديمو</Link>.
                </p>
              </div>
            </div>
          </div>

          {/* Form Block */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 shadow-xl text-right" dir="rtl">
            {success ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">شكراً لتواصلك معنا!</h3>
                <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
                  تم استلام طلبك بنجاح. ستقوم إدارة المبيعات في دليل الشرق بمراجعة رسالتك والتواصل معك عبر رقم الهاتف المدخل في أقل من 24 ساعة.
                </p>
                <div className="pt-4">
                  <Button onClick={() => setSuccess(false)} variant="outline">
                    إرسال رسالة أخرى
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900">أرسل لنا استفسارك</h3>
                <p className="text-xs text-slate-500">الحقول المميزة بنجمة (*) هي حقول إلزامية.</p>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 block">الاسم الكريم *</label>
                    <input 
                      type="text" 
                      placeholder="مثال: عبدالله الحربي" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="input text-right" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 block">البريد الإلكتروني *</label>
                    <input 
                      type="email" 
                      placeholder="name@company.com" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="input text-left" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 block">رقم الهاتف / واتساب *</label>
                    <input 
                      type="tel" 
                      placeholder="05xxxxxxx" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="input text-left font-mono" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 block">اسم الشركة / الجهة</label>
                    <input 
                      type="text" 
                      placeholder="مثال: مجموعة العلي العقارية" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="input text-right" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 block">حجم فريق المبيعات</label>
                  <select 
                    value={formData.teamSize}
                    onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                    className="select text-right"
                  >
                    <option value="1-5">مبيعات محدودة (1-5 موظفين)</option>
                    <option value="6-15">فريق متوسط (6-15 موظف)</option>
                    <option value="16-50">فريق كبير (16-50 موظف)</option>
                    <option value="50+">مؤسسة ضخمة (أكثر من 50 موظف)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 block">نص الرسالة / الاستفسار *</label>
                  <textarea 
                    rows={4} 
                    placeholder="اكتب تفاصيل طلبك أو استفسارك هنا..." 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="input text-right resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={loading}
                  variant="primary" 
                  className="w-full justify-center text-sm py-3.5"
                >
                  {loading ? "جاري الإرسال..." : "إرسال الرسالة"}
                  <Send className="w-4.5 h-4.5 mr-2" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
