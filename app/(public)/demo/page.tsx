"use client";

import React, { useState } from 'react';
import { 
  Sparkles, Check, CheckCircle2, ChevronRight, Laptop, Play, 
  HelpCircle, ShieldCheck, ArrowRight, ArrowLeft 
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { toast } from 'sonner';

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: 'real-estate',
    plan: 'professional'
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleDemoRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.company) {
      toast.error("يرجى ملء الحقول الإلزامية لتفعيل الحساب التجريبي.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("تم تسجيل طلبك لتفعيل الديمو بنجاح!");
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.2),transparent_45%)]" />
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">ابدأ تجربتك المجانية 14 يوم</h1>
            <p className="text-lg text-slate-300">
              سجل معلومات شركتك الآن للحصول على بيئة تجريبية سحابية كاملة معزولة وخاصة بك، لتختبر كافة مزايا دليل الشرق CRM.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Container */}
      <Section className="py-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Instructions and Steps */}
          <div className="lg:col-span-5 space-y-6 text-right z-10" dir="rtl">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">ماذا يحدث بعد تسجيل الطلب؟</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              عملية إعداد حسابك التجريبي معزولة تماماً وسريعة لحفظ الأمان. سنرافقك خطوة بخطوة للبدء في تنظيم مبيعاتك.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 font-bold flex items-center justify-center flex-shrink-0 text-sm">1</span>
                <div>
                  <h4 className="font-bold text-xs text-slate-900 mb-1">تجهيز بيئة الـ Tenant الخاصة بك</h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed">سنقوم بإنشاء مساحة عمل فرعية آمنة خاصة بشركتك ونعزل قاعدة بياناتك عن باقي العملاء.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 font-bold flex items-center justify-center flex-shrink-0 text-sm">2</span>
                <div>
                  <h4 className="font-bold text-xs text-slate-900 mb-1">استلام بيانات الدخول الفورية</h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed">سنرسل لك رابط تسجيل الدخول المباشر مع اسم المستخدم وكلمة المرور المؤقتة عبر الواتساب والبريد الإلكتروني.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 font-bold flex items-center justify-center flex-shrink-0 text-sm">3</span>
                <div>
                  <h4 className="font-bold text-xs text-slate-900 mb-1">جلسة استعراضية اختيارية (Onboarding)</h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed">يمكنك جدولة مكالمة مدتها 15 دقيقة مع مهندس المبيعات لمساعدتك في تخصيص ألوان شركتك واستيراد Leads الأولى.</p>
                </div>
              </div>
            </div>

            {/* Quote block */}
            <div className="bg-slate-900 text-slate-300 p-6 rounded-2xl border border-slate-800 text-xs leading-relaxed space-y-4">
              <div className="flex gap-1 text-amber-500"><Check className="w-4 h-4 fill-amber-500" /><Check className="w-4 h-4 fill-amber-500" /><Check className="w-4 h-4 fill-amber-500" /></div>
              <p className="italic">"سهولة التفعيل وسرعة استيراد ملفات الإكسل جعلتنا نبدأ العمل الفعلي مع فريق المبيعات في نفس اليوم. الدعم ممتاز جداً."</p>
              <div className="text-[10px] text-slate-500 font-semibold">- معهد الرياض للتدريب واللغات</div>
            </div>
          </div>

          {/* Registration form block */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 shadow-xl text-right" dir="rtl">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">تم تسجيل طلب الديمو بنجاح!</h3>
                
                <div className="bg-slate-50 p-6 rounded-2xl border text-right space-y-4 max-w-md mx-auto">
                  <h4 className="font-bold text-xs text-slate-900 mb-2">الخطوات القادمة:</h4>
                  <div className="flex gap-3 items-start text-xs text-slate-600 leading-relaxed">
                    <Check className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>تلقي رسالة واتساب آلية بروابط الدخول والبيانات التجريبية خلال 5 دقائق.</span>
                  </div>
                  <div className="flex gap-3 items-start text-xs text-slate-600 leading-relaxed">
                    <Check className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>اتصال تأكيدي قصير من المهندس الفني المختص للمساعدة في ربط الدومين المخصص إن رغبت.</span>
                  </div>
                  <div className="flex gap-3 items-start text-xs text-slate-600 leading-relaxed">
                    <Check className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>جلسة تعريفية مجانية (Onboarding) مدتها 15 دقيقة لفريق مبيعاتك لشرح النظام.</span>
                  </div>
                </div>

                <div className="pt-4 flex gap-4 justify-center">
                  <Button href="/" variant="primary">العودة للرئيسية</Button>
                  <Button onClick={() => setSubmitted(false)} variant="outline">تسجيل شركة أخرى</Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleDemoRequest} className="space-y-6">
                <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full inline-flex text-xs font-bold">
                  <Sparkles className="w-4 h-4" />
                  حساب تجريبي كامل المميزات وصالح لمدة 14 يوم
                </div>
                
                <h3 className="text-xl font-bold text-slate-900">سجل معلومات شركتك الموقرة</h3>
                <p className="text-xs text-slate-500">يرجى ملء البيانات بدقة لتلقي معلومات الدخول عبر واتساب والبريد.</p>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 block">الاسم الكريم *</label>
                    <input 
                      type="text" 
                      placeholder="عبدالله الحربي" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="input text-right" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 block">البريد الإلكتروني للعمل *</label>
                    <input 
                      type="email" 
                      placeholder="name@mycompany.com" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="input text-left" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 block">رقم الجوال لتلقي البيانات (واتساب) *</label>
                    <input 
                      type="text" 
                      placeholder="05xxxxxxx" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="input text-left font-mono" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 block">اسم الشركة *</label>
                    <input 
                      type="text" 
                      placeholder="شركة دليل المبيعات المحدودة" 
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="input text-right" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 block">مجال العمل / النشاط</label>
                    <select 
                      value={formData.industry}
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                      className="select text-right"
                    >
                      <option value="real-estate">التطوير والتسويق العقاري</option>
                      <option value="education">المعاهد التعليمية والتدريب</option>
                      <option value="medical">العيادات والمجمعات الطبية</option>
                      <option value="marketing">وكالات التسويق والدعاية</option>
                      <option value="call-center">مراكز الاتصال والمبيعات الهاتفية</option>
                      <option value="b2b-services">شركات الخدمات والحلول B2B</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 block">الباقة المرغوب تجربتها</label>
                    <select 
                      value={formData.plan}
                      onChange={(e) => setFormData({...formData, plan: e.target.value})}
                      className="select text-right"
                    >
                      <option value="starter">الباقة الأساسية (للمجموعات الصغيرة)</option>
                      <option value="professional">الباقة الاحترافية (شاملة الـ AI والواتساب)</option>
                      <option value="enterprise">الباقة المؤسسية (مفتوحة الحدود والـ API)</option>
                    </select>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border flex gap-3 items-start text-xs text-slate-600">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>بالتسجيل، أنت توافق على شروط الخدمة وسياسة الخصوصية الخاصة بدليل الشرق CRM.</span>
                </div>

                <Button 
                  type="submit" 
                  disabled={loading}
                  variant="accent" 
                  className="w-full justify-center text-slate-950 font-bold text-sm py-3.5"
                >
                  {loading ? "جاري تجهيز بيئتك السحابية..." : "تفعيل حسابي التجريبي مجاناً"}
                  <ArrowLeft className="w-4.5 h-4.5 mr-2" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
