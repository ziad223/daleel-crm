"use client";

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Info, ShieldAlert, Sparkles, MessageSquare } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const faqCategories = [
  { id: "all", name: "جميع الأسئلة" },
  { id: "general", name: "أسئلة عامة" },
  { id: "technical", name: "الأمور الفنية والربط" },
  { id: "security", name: "الأمان وحماية الأرقام" },
  { id: "billing", name: "الاشتراكات والمدفوعات" }
];

const faqs = [
  {
    category: "general",
    q: "ما هو نظام دليل الشرق CRM وما هي فكرته الأساسية؟",
    a: "هو نظام CRM SaaS ذكي متعدد العملاء مصمم خصيصاً لإدارة المبيعات والعملاء المحتملين في السوق العربي والخليجي. يساعد النظام الإدارة في تتبع الأرقام والـ Leads والتأكد من عدم إهمالها، ويسهل على المندوبين التواصل عبر الهاتف والواتساب، بالإضافة لدعم كامل بالذكاء الاصطناعي لاقتراح الخطوة التالية وزيادة المبيعات."
  },
  {
    category: "security",
    q: "هل بيانات شركتنا وأرقام عملائنا آمنة من تسريب الموظفين أو تداخل بيانات الشركات الأخرى؟",
    a: "نعم، أمان البيانات أولوية قصوى لدينا. يعتمد النظام على معمارية Multi-Tenant معزولة تماماً بقواعد بيانات مستقلة لكل شركة. كما يوفر النظام صلاحيات أمان دقيقة تتيح للإدارة إخفاء أرقام الهواتف جزئياً عن مندوبي المبيعات (مثل: 966*****1234) ومنعهم من تصدير أو حذف أي عميل دون موافقة الإدارة."
  },
  {
    category: "technical",
    q: "كيف يعمل تكامل واتساب في المرحلة الأولى والمراحل المستقبلية؟",
    a: "في المرحلة الأولى، يتيح لك النظام إرسال رسائل ومتابعات مخصصة (نصوص، صور، أو فيديو) بنقرة واحدة عبر فتح تطبيق واتساب المثبت على هاتفك مسبقاً بقوالب جاهزة تعبئ البيانات تلقائياً، مع توثيق إرسال الرسالة في سجل العميل. مستقبلاً، يدعم النظام الربط عبر WhatsApp Business Cloud API الرسمي لتوفير صندوق بريد مركزي مشترك للفريق بالكامل وأتمتة الردود."
  },
  {
    category: "technical",
    q: "هل يمكنني استخدام دومين خاص بشركتي (مثل crm.mycompany.com)؟",
    a: "نعم بالتأكيد. في الباقة الاحترافية والمؤسسية، يمكنك ربط نطاق مخصص (دومين أو سب دومين) خاص بشركتك. يوفر لك النظام إرشادات إعداد DNS كاملة داخل لوحة التحكم الخاصة بك، ويتكفل بإنشاء وإدارة شهادة الأمان SSL تلقائياً لحماية الاتصال."
  },
  {
    category: "billing",
    q: "هل توجد فترة تجريبية مجانية؟ وهل تتطلب بطاقة ائتمانية؟",
    a: "نعم، نقدم فترة تجريبية مجانية كاملة الميزات لمدة 14 يوماً لتستكشف النظام مع فريقك. لا نطلب أي بيانات لبطاقة ائتمانية للتسجيل أو التفعيل. يمكنك البدء فوراً وتجربة استيراد الأرقام والمتابعة."
  },
  {
    category: "billing",
    q: "كيف تتم طريقة الدفع وتفعيل الباقات؟",
    a: "ندعم الدفع الإلكتروني السلس شهرياً أو سنوياً عبر متجر دليل الشرق باستخدام بطاقات مدى، فيزا، ماستركارد، أو Apple Pay. عند إتمام عملية الشراء، يتم إنشاء حساب شركتك وبيئتك السحابية وتفعيل الباقة تلقائياً وإرسال بيانات الدخول المباشرة لك."
  },
  {
    category: "security",
    q: "كيف تتم عملية النسخ الاحتياطي للبيانات؟",
    a: "يقوم النظام بأخذ نسخ احتياطية دورية وتلقائية لقواعد البيانات والملفات الخاصة بكل شركة بشكل معزول ومحمي. يتم حفظ هذه النسخ في مخازن سحابية آمنة (مثل Amazon S3 أو Google Cloud) مع إمكانية استعادة النسخة الاحتيارية يدويًا بواسطة Super Admin للشركة عند الحاجة."
  },
  {
    category: "technical",
    q: "هل يدعم النظام الاتصال من تطبيقات الجوال؟",
    a: "نعم، نوفر تطبيق هاتف ذكي (Android & iOS) تم تطويره عبر Flutter للمندوبين، يتيح لهم الاتصال المباشر بنقرة واحدة من صفحة العميل باستخدام شريحة الهاتف العادية (Native SIM) وتوثيق وقت المكالمة ونتيجة التواصل فوراً."
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = activeCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.2),transparent_45%)]" />
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">الأسئلة الشائعة</h1>
            <p className="text-lg text-slate-300">
              كل ما تود معرفته عن دليل الشرق CRM من النواحي العامة والبرمجية والأمان والاشتراكات.
            </p>
          </div>
        </Container>
      </section>

      {/* Main FAQ Content */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Categories Tab selector */}
          <div className="flex flex-wrap justify-center gap-2" dir="rtl">
            {faqCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenIndex(null);
                }}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[var(--primary)] text-white shadow-md'
                    : 'bg-white border border-slate-200/80 text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-4 text-right" dir="rtl">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`bg-white rounded-2xl border transition-all ${
                    isOpen 
                      ? 'border-[var(--primary)] shadow-md ring-2 ring-[var(--primary)]/5' 
                      : 'border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-right font-bold text-sm sm:text-base text-slate-900 gap-4"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${isOpen ? 'transform rotate-180 text-[var(--primary)]' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 pr-13">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Fallback empty state */}
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-slate-500 text-sm">
              لا توجد أسئلة في هذا التصنيف حالياً.
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
