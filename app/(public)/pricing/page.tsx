"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, Info, HelpCircle, ArrowLeft, Shield, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [userCount, setUserCount] = useState(8); // Default to 8 users
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const plans = [
    {
      name: "الأساسية",
      priceMonthly: 299,
      priceAnnual: 239,
      usersLimit: "حتى 5 مستخدمين للفريق",
      leadsLimit: "1,000 عميل محتمل Leads / شهرياً",
      campaignsLimit: "5 حملات مبيعات نشطة",
      features: [
        "1,000 عميل محتمل Leads / شهرياً",
        "5 حملات مبيعات نشطة",
        "مساحة تخزين 5 جيجابايت للمستندات",
        "ملف موحد متكامل للعميل Leads 360",
        "تكامل اتصال نقرة واحدة (Native SIM)",
        "أرشفة المكالمات والمدد تلقائياً",
        "قوالب واتساب نصية جاهزة",
        "عزل قواعد البيانات التام (Multi-Tenancy)",
        "لوحة Pipeline المبيعات الافتراضية",
        "دعم فني عبر البريد الإلكتروني"
      ],
      popular: false,
      ctaText: "ابدأ التجربة المجانية",
      ctaLink: "/demo"
    },
    {
      name: "الاحترافية",
      priceMonthly: 599,
      priceAnnual: 479,
      usersLimit: "حتى 15 مستخدم للفريق",
      leadsLimit: "10,000 عميل محتمل Leads / شهرياً",
      campaignsLimit: "حملات مبيعات غير محدودة",
      features: [
        "10,000 عميل محتمل Leads / شهرياً",
        "حملات مبيعات غير محدودة",
        "مساحة تخزين 25 جيجابايت للمستندات",
        "كل ميزات الباقة الأساسية",
        "ملخص حالة العميل بالـ AI (AI Summary)",
        "تنبيهات العملاء المهملين التلقائية",
        "اقتراحات الردود وصياغة رسائل الواتساب",
        "تحليل وتوقع احتمالية إغلاق الصفقات",
        "قوالب واتساب نصوص وصور وفيديو",
        "تخصيص الألوان واللوجو والدومين الخاص",
        "إخفاء أرقام الهواتف جزئياً عن المندوبين",
        "دعم فني أولوية عبر الشات والاتصال"
      ],
      popular: true,
      ctaText: "ابدأ التجربة المجانية",
      ctaLink: "/demo"
    },
    {
      name: "المؤسسية",
      priceMonthly: 1199,
      priceAnnual: 959,
      usersLimit: "مستخدمين غير محدود للفريق",
      leadsLimit: "Leads غير محدود بالكامل",
      campaignsLimit: "حملات مبيعات غير محدودة",
      features: [
        "Leads غير محدود بالكامل",
        "حملات مبيعات غير محدودة",
        "مساحة تخزين 100 جيجابايت +",
        "كل ميزات الباقة الاحترافية",
        "تحليلات أداء الموظفين بالذكاء الاصطناعي",
        "ربط WhatsApp Business Cloud API الرسمي",
        "صندوق محادثات مشترك للرسائل (Shared Inbox)",
        "ربط أنظمة الهاتف والـ VoIP و Twilio API",
        "تخصيص الهوية بالكامل (White Label)",
        "إمكانية الاستضافة على سيرفرات خاصة",
        "اتفاقية مستوى الخدمة SLA 99.9%",
        "مدير حساب مخصص للدعم الفني"
      ],
      popular: false,
      ctaText: "تواصل مع المبيعات",
      ctaLink: "/contact"
    }
  ];

  // Helper to determine which plan to recommend based on users slider
  const getRecommendedPlanName = (count: number) => {
    if (count <= 5) return "الأساسية";
    if (count <= 15) return "الاحترافية";
    return "المؤسسية";
  };

  const recommendedPlanName = getRecommendedPlanName(userCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.2),transparent_45%)]" />
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">باقات مرنة ومميزات متكاملة</h1>
            <p className="text-lg text-slate-300">
              اختر الخطة المناسبة لحجم فريق المبيعات والعملاء لديك. جميع الباقات تقدم عزل بيانات كامل وحماية الأرقام ودعم كامل للغة العربية بالدرهم الإماراتي.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Pricing Cards Grid */}
      <Section className="py-16">
        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex rounded-2xl border border-slate-200 p-1.5 bg-white shadow-sm" dir="rtl">
            <button 
              onClick={() => setIsAnnual(false)} 
              className={`px-8 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                !isAnnual 
                  ? 'bg-[var(--primary)] text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              الدفع الشهري
            </button>
            <button 
              onClick={() => setIsAnnual(true)} 
              className={`px-8 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                isAnnual 
                  ? 'bg-[var(--primary)] text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              الدفع السنوي
              <span className="text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-bold">وفر 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards with Detailed Features list inside each card */}
        <div id="comparison" className="grid lg:grid-cols-3 gap-8 items-stretch mb-24 max-w-6xl mx-auto" dir="rtl">
          {plans.map((plan, index) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            const billingPeriod = isAnnual ? "/ شهر عند الدفع السنوي" : "/ شهرياً";
            
            return (
              <div 
                key={index} 
                className={`pricing-card ${
                  plan.popular 
                    ? 'popular border-2 border-emerald-500 shadow-xl relative scale-[1.02] bg-white' 
                    : 'bg-white border border-slate-200/80 shadow-sm'
                } rounded-3xl p-8 flex flex-col justify-between`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 right-8 bg-emerald-500 text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md shadow-emerald-500/10">
                    الباقة الأكثر طلباً 🔥
                  </span>
                )}
                
                <div>
                  <div className="font-bold text-2xl text-slate-900 mb-1">{plan.name}</div>
                  <div className="text-slate-500 text-xs mt-2 space-y-1">
                    <div>• {plan.usersLimit}</div>
                    <div>• {plan.leadsLimit}</div>
                    <div>• {plan.campaignsLimit}</div>
                  </div>
                  
                  <div className="my-6">
                    <span className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">{price}</span>
                    <span className="text-sm font-bold text-slate-500 mr-1.5">د.إ</span>
                    <span className="text-xs text-slate-400 block mt-1">{billingPeriod}</span>
                  </div>

                  <Link 
                    href={plan.ctaLink} 
                    className={`w-full justify-center text-center py-3.5 rounded-2xl text-xs font-extrabold transition-all inline-flex items-center gap-2 mb-8 ${
                      plan.popular 
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/20' 
                        : 'bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] shadow-lg shadow-blue-500/10'
                    }`}
                  >
                    {plan.ctaText}
                    <ArrowLeft className="w-4 h-4 transform rotate-180" />
                  </Link>
                </div>

                <div className="border-t border-slate-100 pt-6 flex-1">
                  <div className="text-xs font-bold text-slate-900 mb-4">مميزات وتفاصيل الباقة:</div>
                  <ul className="space-y-3.5 text-xs text-slate-650">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 leading-relaxed text-slate-700">
                        <span className="w-4.5 h-4.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Pricing Slider Calculator */}
        <div className="bg-slate-950 text-white p-8 md:p-12 rounded-[32px] border border-slate-800 shadow-xl max-w-4xl mx-auto" dir="rtl">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-6 text-right">
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full inline-block">حاسبة التكلفة الذكية</span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">كم عدد مندوبي المبيعات لديك؟</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                اسحب الشريط لتحديد حجم فريق العمل لديك وسنرشح لك تلقائياً الباقة الأنسب مع تقدير التكلفة الإجمالية للاشتراك.
              </p>
              
              <div className="space-y-4 pt-4">
                <input 
                  type="range" 
                  min="1" 
                  max="50" 
                  value={userCount} 
                  onChange={(e) => setUserCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-xs text-slate-500 font-semibold">
                  <span>مستخدم واحد</span>
                  <span>15 مستخدم</span>
                  <span>30 مستخدم</span>
                  <span>50+ مستخدم</span>
                </div>
              </div>
            </div>

            {/* Recommendation Display Panel */}
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-4">
              <div className="text-slate-400 text-xs">عدد المستخدمين المختار: <span className="text-white font-bold text-lg">{userCount}</span></div>
              
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                <span className="text-[10px] text-slate-500 uppercase block mb-1">الباقة الموصى بها</span>
                <span className="text-xl font-bold text-[var(--accent)]">{recommendedPlanName}</span>
              </div>

              <div className="text-xs text-slate-300 text-right leading-snug space-y-1.5 px-2">
                {recommendedPlanName === "الأساسية" && (
                  <>
                    <div>• تدعم حتى 5 مستخدمين</div>
                    <div>• مناسبة للشركات الناشئة والمبيعات المحدودة</div>
                    <div>• التكلفة: 299 د.إ شهرياً</div>
                  </>
                )}
                {recommendedPlanName === "الاحترافية" && (
                  <>
                    <div>• تدعم حتى 15 مستخدم</div>
                    <div>• تشمل الذكاء الاصطناعي وقوالب الواتساب والدومين</div>
                    <div>• الباقة الأنسب للشركات سريعة النمو</div>
                  </>
                )}
                {recommendedPlanName === "المؤسسية" && (
                  <>
                    <div>• تدعم مستخدمين غير محدود</div>
                    <div>• سيرفر سحابي مخصص وعزل تام للبيانات</div>
                    <div>• يرجى التواصل مع فريق المبيعات لتسعير خاص</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Security and Custom SLA Notice */}
        <div className="max-w-4xl mx-auto mt-12 bg-blue-50 border border-blue-200/50 p-6 rounded-3xl flex gap-4 items-start text-right shadow-sm" dir="rtl">
          <Shield className="w-7 h-7 text-[var(--primary)] flex-shrink-0 mt-0.5" />
          <div className="space-y-1.5">
            <h4 className="font-bold text-sm text-slate-900">خيارات التخصيص والاستضافة الخاصة للمؤسسات</h4>
            <p className="text-xs text-slate-650 leading-relaxed">
              إذا كانت شركتك تحتاج إلى خصائص مخصصة، أو استضافة النظام بالكامل على خوادمكم الخاصة (On-Premise) لحماية إضافية للبيانات، يرجى التواصل مع فريق المبيعات لتوفير باقة مخصصة تلبي كافة متطلباتكم بالدرهم الإماراتي.
            </p>
          </div>
        </div>
      </Section>

      {/* Frequently Asked Questions */}
      <Section className="bg-white border-t border-slate-100 py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">الأسئلة الشائعة حول الباقات</h2>
            <p className="text-slate-600 text-sm">
              إليك كافة التفاصيل المتعلقة بفترات الدفع، الترقية، وإلغاء الاشتراك.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4" dir="rtl">
            {[
              { q: "هل يمكنني الترقية أو تغيير الباقة لاحقاً؟", a: "نعم بالتأكيد. يمكنك ترقية اشتراكك أو خفضه أو تعديل عدد المستخدمين في أي وقت من إعدادات حساب الشركة، وتتم تسوية الفوارق المالية تلقائياً." },
              { q: "هل يتطلب الاشتراك السنوي التزاماً بالدفع دفعة واحدة؟", a: "نعم، يتم دفع الاشتراك السنوي دفعة واحدة مسبقاً، وفي المقابل تحصل على خصم فوري قيمته 20% مقارنة بالدفع الشهري المتكرر." },
              { q: "هل هناك أي رسوم إعداد أو تركيب مخفية؟", a: "لا توجد أي رسوم مخفية إطلاقاً. أسعار الباقات واضحة وتغطي الاستضافة السحابية والدعم الفني وتحديثات الأمان بشكل كامل." },
              { q: "ما هي طرق الدفع المتاحة لشركات الإمارات؟", a: "نقبل بطاقات الائتمان العالمية والمحلية (Visa, Mastercard, AMEX)، بالإضافة لخيار التحويل البنكي المباشر لحسابات المؤسسات السنوية." }
            ].map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`border transition-all duration-350 rounded-2xl overflow-hidden ${
                    isOpen 
                      ? 'border-[var(--primary)] bg-blue-50/10 shadow-md shadow-blue-900/5' 
                      : 'border-slate-200 bg-white hover:border-slate-350 hover:shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-right font-bold text-sm sm:text-base text-slate-900 focus:outline-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180 text-[var(--primary)]' : ''}`} />
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-40 border-t border-slate-100' : 'max-h-0'
                    }`}
                  >
                    <p className="p-5 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/30">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </div>
  );
}
