"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Check, Target, Zap, Award, BarChart3, Users, Globe, 
  ArrowLeft, Brain, Phone, MessageSquare, Shield, ShieldCheck, 
  Settings, Database, Smartphone, EyeOff, LayoutGrid
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export default function FeaturesPage() {
  const coreFeatures = [
    {
      id: "leads",
      badge: "أهم وحدة في النظام",
      icon: <Target className="w-8 h-8 text-emerald-500" />,
      title: "إدارة متكاملة للأرقام والعملاء المحتملين (Leads 360)",
      desc: "نظام مركزي يضمن جمع وتتبع العملاء من كافة المصادر وعرض تفاصيلهم كاملة للمندوب لمنع تشتت البيانات.",
      details: [
        "ملف موحد 360 درجة لكل عميل يضم سجل المكالمات والواتساب والمهام والملفات والملاحظات والمندوب المسؤول.",
        "استيراد وتصدير فوري من ملفات Excel و CSV و Google Sheets بنقرة واحدة مع التحقق التلقائي من تكرار الأرقام.",
        "تتبع مصدر العميل بدقة (حملة سناب شات، جوجل، فيسبوك، تيك توك، تواصل مباشر) وحساب العائد الإعلاني.",
        "نظام ذكي لتقدير درجة اهتمام العميل (بارد / دافئ / ساخن) وقيمة الصفقة المتوقعة."
      ]
    },
    {
      id: "pipeline",
      badge: "مرونة كاملة",
      icon: <BarChart3 className="w-8 h-8 text-emerald-500" />,
      title: "Pipeline مبيعات تفاعلي قابل للتخصيص",
      desc: "لوحة تحكم مرئية لمتابعة حركة صفقاتك وتوزيع المهام على فريق المبيعات.",
      details: [
        "سحب وإفلات (Drag & Drop) سهل وسريع لنقل العملاء بين مراحل المبيعات المختلفة.",
        "إمكانية تخصيص مراحل خط المبيعات بالكامل لتناسب دورة مبيعات شركتك الخاصة.",
        "تسجيل أسباب خسارة الصفقات وإصدار تقارير تحليلية لتجنب تكرار الأخطاء مستقبلاً.",
        "تنبيهات ذكية فورية عند بقاء العميل لفترة طويلة في مرحلة واحدة دون تواصل."
      ]
    },
    {
      id: "comms",
      badge: "سرعة تواصل قياسية",
      icon: <Zap className="w-8 h-8 text-emerald-500" />,
      title: "الاتصالات الذكية وتكامل الواتساب السريع",
      desc: "تسهيل تواصل مندوبيك مع العملاء من الهاتف أو الكمبيوتر وأرشفة المحادثات تلقائياً.",
      details: [
        "زر اتصال مباشر من صفحة العميل لفتح المكالمة فوراً عبر شريحة الهاتف SIM مع توثيق المكالمة تلقائياً.",
        "قوالب رسائل واتساب جاهزة (نصوص، صور، ملفات فيديو) لتسهيل المتابعة وإرسال العروض.",
        "نقرة واحدة لفتح محادثة واتساب مع العميل مباشرة وحقن الرسالة المخصصة باسمه.",
        "بنية برمجية مهيأة للربط مع WhatsApp Business Cloud API لإنشاء صندوق بريد مشترك وأتمتة الردود."
      ]
    },
    {
      id: "ai",
      badge: "ذكاء اصطناعي مدمج",
      icon: <Brain className="w-8 h-8 text-emerald-500" />,
      title: "محرك الذكاء الاصطناعي لتحليل المبيعات (AI Engine)",
      desc: "مستشار ذكي بجانب كل مندوب يقترح الخطوات التالية لزيادة نسب الإغلاق وضمان رضا العميل.",
      details: [
        "تلخيص فوري لحالة العميل وقراءة الملاحظات السابقة وتقديم لمحة عامة في ثوانٍ.",
        "اقتراح محتوى رسائل واتساب مخصصة ومصاغة بذكاء بناءً على اهتمامات العميل الحالية.",
        "تحديد احتمالية إغلاق الصفقة بدقة لمساعدة فريق المبيعات على التركيز على الفرص الذهبية.",
        "تحليل أداء الموظفين اليومي واكتشاف العملاء المهملين تلقائياً وتنبيه الإدارة."
      ]
    },
    {
      id: "security",
      badge: "أمان مطلق",
      icon: <Shield className="w-8 h-8 text-emerald-500" />,
      title: "أمن البيانات وعزل الشركات (Multi-Tenancy)",
      desc: "بنية تحتية سحابية متقدمة تفصل بياناتك بالكامل وتحمي أصول شركتك وأرقام عملائك.",
      details: [
        "قواعد بيانات معزولة ومستقلة لكل شركة لضمان استحالة تداخل البيانات بين الشركات.",
        "نظام صلاحيات صارم يتيح إخفاء أرقام الهواتف جزئياً عن المندوبين لحماية بيانات العملاء (مثال: 966*****1234).",
        "تحديد صلاحيات تصدير البيانات أو حذف العملاء واقتصارها على المسؤولين فقط.",
        "سجل عمليات كامل (Audit Log) يوثق عمليات الدخول، التصدير، التعديل والحذف للرجوع إليه عند الحاجة."
      ]
    },
    {
      id: "branding",
      badge: "هويتك الخاصة",
      icon: <Globe className="w-8 h-8 text-emerald-500" />,
      title: "تخصيص الهوية البصرية ودومين خاص لكل شركة",
      desc: "تعديل النظام بالكامل ليظهر للموظفين والعملاء كأنه مطور خصيصاً لشركتك.",
      details: [
        "إمكانية رفع شعار شركتك، وتعديل الألوان الرئيسية للنظام، وصور شاشات الدخول الفردية.",
        "ربط النظام بنطاق مخصص خاص بشركتك مثل `crm.yourcompany.com` مع شهادة SSL مجانية وتلقائية.",
        "تخصيص العملة، المنطقة الزمنية، اللغة الافتراضية، ومسميات الحقول داخل النظام بالكامل."
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.2),transparent_45%)]" />
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">مميزات دليل الشرق CRM</h1>
            <p className="text-lg text-slate-300">
              استكشف كافة الإمكانيات والأدوات الذكية التي صممناها لتمكين فرق المبيعات في الخليج العربي من إدارة صفقاتهم بكفاءة وأمان وسرعة غير مسبوقة.
            </p>
          </div>
        </Container>
      </section>

      {/* Grid Features List */}
      <Section className="py-20">
        <div className="space-y-24">
          {coreFeatures.map((feat, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={feat.id} 
                id={feat.id} 
                className={`grid lg:grid-cols-12 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Text Content */}
                <div className={`lg:col-span-7 space-y-6 text-right ${isEven ? 'lg:order-1' : 'lg:order-2'}`} dir="rtl">
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full inline-block">
                    {feat.badge}
                  </span>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm flex-shrink-0">
                      {feat.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">{feat.title}</h2>
                  </div>
                  
                  <p className="text-slate-600 text-base leading-relaxed">
                    {feat.desc}
                  </p>

                  <ul className="grid md:grid-cols-2 gap-4 pt-4">
                    {feat.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed bg-white border border-slate-100 p-4 rounded-2xl shadow-sm hover:border-emerald-200 hover:shadow-md transition-all">
                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Graphical Feature Mockup */}
                <div className={`lg:col-span-5 bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-xl text-white ${isEven ? 'lg:order-2' : 'lg:order-1'}`} dir="rtl">
                  <h4 className="font-bold text-sm text-[var(--accent)] mb-4 flex items-center gap-2">
                    <LayoutGrid className="w-4 h-4" />
                    استعراض عملي للميزة
                  </h4>
                  {feat.id === "leads" && (
                    <div className="space-y-4">
                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs">
                        <span className="text-slate-500 block mb-1">اسم العميل</span>
                        <div className="font-bold text-slate-200 text-sm">م. عمر السديري (شركة التطوير الذكي)</div>
                        <div className="text-slate-400 mt-2">آخر مكالمة: تم الاتصال، مهتم بالاشتراك في الباقة السنوية.</div>
                      </div>
                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs">
                        <div className="flex justify-between items-center text-[10px] text-slate-500 mb-2">
                          <span>سجل النشاط (Audit History)</span>
                          <span className="text-emerald-500">تم الحفظ</span>
                        </div>
                        <div className="space-y-2">
                          <div className="text-slate-400 font-mono">• 12:44 م - تم تغيير الحالة من (جديد) إلى (مهتم) بواسطة عبدالرحمن</div>
                          <div className="text-slate-400 font-mono">• 12:45 م - أرسل عبدالرحمن عرض السعر عبر الواتساب</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {feat.id === "pipeline" && (
                    <div className="space-y-4">
                      <div className="flex gap-2">
                        <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 font-semibold">عميل محتمل (3)</span>
                        <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">مغلق ناجح (12)</span>
                      </div>
                      <div className="border border-slate-800 rounded-xl bg-slate-950/50 p-4">
                        <div className="flex justify-between text-xs text-slate-400 mb-2">
                          <span>المرحلة الحالية: تفاوض</span>
                          <span className="text-emerald-400 font-bold">75,000 د.إ</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-500 h-full w-[70%]" />
                        </div>
                        <div className="text-[10px] text-slate-500 mt-2">تنبيه: متبقي 24 ساعة لانتهاء العرض المالي للعميل.</div>
                      </div>
                    </div>
                  )}

                  {feat.id === "comms" && (
                    <div className="space-y-4">
                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
                        <div>
                          <span className="text-slate-500 block">قالب الواتساب المختار</span>
                          <span className="font-semibold text-slate-300">قالب ترحيب بأسماء متغيرة</span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold font-mono">WhatsApp Ready</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/60 font-sans">
                        "مرحباً أستاذ خالد الشريف، سعداء باهتمامك بدليل الشرق. هل يناسبك الاتصال اليوم الساعة 4 لمناقشة التفاصيل؟"
                      </p>
                    </div>
                  )}

                  {feat.id === "ai" && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 bg-blue-950/60 border border-blue-900/40 p-3 rounded-xl">
                        <Brain className="w-4 h-4 text-emerald-500" />
                        AI Summary: احتمالية الإغلاق 88%
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">
                        "العميل مهتم بباقة السحابية. يوصي الـ AI بعدم الانتظار أكثر من 48 ساعة وإرسال نموذج الخصم السنوي لتأمين الصفقة."
                      </p>
                    </div>
                  )}

                  {feat.id === "security" && (
                    <div className="space-y-4">
                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-slate-500">اسم المندوب: خالد</span>
                          <span className="text-rose-500 font-semibold">صلاحية محدودة</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-300 font-mono text-sm bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                          <span>الهاتف: +966 59 **** 8822</span>
                          <EyeOff className="w-4 h-4 text-slate-500" />
                        </div>
                        <div className="text-[10px] text-slate-500 mt-2">تنبيه: تم إخفاء الأرقام لمنع حفظها أو تسريبها خارج النظام.</div>
                      </div>
                    </div>
                  )}

                  {feat.id === "branding" && (
                    <div className="space-y-4 text-xs">
                      <div className="flex justify-between border-b border-slate-800 pb-2">
                        <span className="text-slate-400">لوجو الشركة:</span>
                        <span className="text-emerald-400 font-semibold">company-logo.png</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800 pb-2">
                        <span className="text-slate-400">اللون الأساسي:</span>
                        <span className="font-mono text-indigo-400">#2563EB</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800 pb-2">
                        <span className="text-slate-400">الدومين الخاص:</span>
                        <span className="font-mono text-slate-300">crm.myagency.com</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Detailed Platform Section */}
      <Section className="bg-slate-900 text-white border-t border-slate-800">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-right" dir="rtl">
            <span className="text-xs font-bold text-[var(--accent)] bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full inline-block">
              المنصات المدعومة
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">نظام متوفر على جميع أجهزتك</h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              أدر مبيعاتك وتابع أداء مندوبيك من أي مكان وفي أي وقت. يدعم دليل الشرق CRM التشغيل على كافة المنصات والأجهزة بشكل متكامل ومحمي بالكامل:
            </p>
            <ul className="space-y-3.5 text-xs text-slate-300">
              <li className="flex items-center gap-2"><Check className="text-emerald-500 w-4.5 h-4.5" /> لوحة التحكم من المتصفح (Web App)</li>
              <li className="flex items-center gap-2"><Check className="text-emerald-500 w-4.5 h-4.5" /> تطبيق الهاتف لأجهزة Android و iOS (عبر Flutter)</li>
              <li className="flex items-center gap-2"><Check className="text-emerald-500 w-4.5 h-4.5" /> تطبيق سطح المكتب لنظام Windows و macOS</li>
              <li className="flex items-center gap-2"><Check className="text-emerald-500 w-4.5 h-4.5" /> واجهات مستجيبة بالكامل (Mobile Responsive)</li>
            </ul>
          </div>

          <div className="lg:col-span-6 flex justify-center relative">
            <div className="w-full bg-slate-950 rounded-3xl border border-slate-800 p-6 flex flex-col gap-4 text-xs font-mono text-slate-400">
              <div className="flex gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center font-bold text-white text-sm">
                Daleel CRM Desktop Application
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center">
                  <span>Windows v1.2.0</span>
                  <div className="text-[10px] text-slate-500 mt-1">جاهز للتحميل</div>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center">
                  <span>macOS v1.2.0</span>
                  <div className="text-[10px] text-slate-500 mt-1">جاهز للتحميل</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Footer */}
      <section className="bg-slate-950 text-white py-20 text-center relative">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">انضم لمئات الشركات المميزة اليوم</h2>
            <p className="text-slate-300 text-base max-w-xl mx-auto leading-relaxed">
              احصل على لوحة تحكم كاملة وجرب كل المميزات لمدة 14 يوم بدون أي التزامات مالية.
            </p>
            <div className="flex gap-4 justify-center pt-2">
              <Button href="/demo" variant="accent" size="lg" className="font-bold text-slate-950 px-10">
                ابدأ تجربتك المجانية
              </Button>
              <Button href="/contact" variant="outline-dark" size="lg" className="w-full sm:w-auto">
                تحدث مع المبيعات
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
