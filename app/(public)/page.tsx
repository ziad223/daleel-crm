"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Check, Play, Target, Zap, Award, BarChart3, Users, Globe, 
  MessageSquare, Phone, Brain, Sparkles, TrendingUp, Shield, Server,
  ChevronLeft, Star, ArrowRight, ShieldCheck, Laptop, HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

// Mock Data for Interactive Pipeline
const initialLeads = [
  { id: 1, name: "عبدالله الحربي", company: "مجموعة العلي العقارية", value: "45,000 د.إ", stage: "new", source: "سناب شات", date: "منذ ساعة", status: "ساخن 🔥", phone: "+971 50 *** 1234", email: "a.harbi@***.com" },
  { id: 2, name: "ريم المنصوري", company: "مركز توب ترينينج", value: "12,500 د.إ", stage: "contacted", source: "جوجل ماب", date: "منذ 4 ساعات", status: "دافئ ☀️", phone: "+971 54 *** 5678", email: "r.mansour@***.com" },
  { id: 3, name: "د. خالد الشريف", company: "مجمع النخبة الطبي", value: "85,000 د.إ", stage: "interested", source: "حملة فيسبوك", date: "منذ يوم", status: "ساخن 🔥", phone: "+971 56 *** 9988", email: "k.sherif@***.com" },
  { id: 4, name: "م. أحمد حسان", company: "شركة الحلول الذكية", value: "32,000 د.إ", stage: "proposal", source: "تواصل مباشر", date: "منذ يومين", status: "بارد ❄️", phone: "+971 53 *** 4433", email: "a.hassan@***.com" }
];

const stages = [
  { id: "new", name: "عميل جديد", color: "bg-blue-500" },
  { id: "contacted", name: "تم التواصل", color: "bg-amber-500" },
  { id: "interested", name: "مهتم بالخدمة", color: "bg-emerald-500" },
  { id: "proposal", name: "عرض سعر", color: "bg-indigo-500" }
];

const waTemplates = [
  { 
    id: "welcome", 
    title: "ترحيب بعميل جديد 👋", 
    content: "مرحباً يا {{الاسم}}، سعداء باهتمامك بـ دليل الشرق. هل يناسبك الاتصال اليوم لمناقشة طلبك وتوفير العرض المناسب لشركتك الموقرة؟"
  },
  { 
    id: "proposal_followup", 
    title: "متابعة عرض السعر 📄", 
    content: "أهلاً أستاذ {{الاسم}}، أرسلنا لك عرض السعر الخاص بـ دليل الشرق CRM. هل كان لديك فرصة لمراجعته؟ نحن جاهزون للإجابة على أي استفسار."
  },
  { 
    id: "discount", 
    title: "عرض محدود وحصري 🎁", 
    content: "عزيزي {{الاسم}}، بمناسبة إطلاق التحديث الجديد، نقدم لشركة {{الشركة}} خصماً خاصاً 25% على الاشتراك السنوي. العرض ينتهي هذا الأسبوع!"
  }
];

export default function HomePage() {
  const [pipelineLeads, setPipelineLeads] = useState(initialLeads);
  const [selectedLead, setSelectedLead] = useState(initialLeads[0]);
  const [activeTemplate, setActiveTemplate] = useState(waTemplates[0]);

  // Handle Pipeline Move
  const moveLead = (leadId: number, direction: 'next' | 'prev') => {
    const stageIds = stages.map(s => s.id);
    setPipelineLeads(prev => prev.map(lead => {
      if (lead.id === leadId) {
        const currentIdx = stageIds.indexOf(lead.stage);
        let nextIdx = currentIdx;
        if (direction === 'next' && currentIdx < stageIds.length - 1) {
          nextIdx = currentIdx + 1;
        } else if (direction === 'prev' && currentIdx > 0) {
          nextIdx = currentIdx - 1;
        }
        const updated = { ...lead, stage: stageIds[nextIdx] };
        if (selectedLead.id === leadId) {
          setSelectedLead(updated);
        }
        return updated;
      }
      return lead;
    }));
  };

  const getAIRecommendation = (lead: typeof initialLeads[0]) => {
    if (lead.stage === 'new') {
      return `العميل جديد ومصدره ${lead.source}. يوصي الـ AI بإرسال رسالة ترحيبية فوراً عبر الواتساب للترتيب لمكالمة سريعة في غضون 15 دقيقة لزيادة فرصة الإغلاق بنسبة 80%.`;
    }
    if (lead.stage === 'contacted') {
      return `تم الاتصال بالعميل ويبدي اهتماماً مبدئياً. يوصي الـ AI بالتركيز على تسليط الضوء على ميزة "واتساب متعدد الموظفين" وإرسال عرض السعر المخصص خلال اليوم.`;
    }
    if (lead.stage === 'interested') {
      return `العميل مهتم جداً وقيمة الصفقة المتوقعة ${lead.value}. يوصي الـ AI بحجز موعد اجتماع ديمو لعرض النظام عملياً لزيادة احتمالية البيع إلى 92%.`;
    }
    return `تم إرسال عرض السعر وبانتظار الموافقة. العميل لم يرد منذ يومين. يوصي الـ AI بإرسال رسالة تذكيرية بعرض الخصم المحدود 25% لإتمام الصفقة اليوم.`;
  };

  const features = [
    {
      icon: <Target className="w-6 h-6 text-emerald-600" />,
      title: "إدارة العملاء المحتملين Leads 360",
      desc: "ملف موحد متكامل لكل عميل يجمع كافة التفاصيل: المكالمات، رسائل الواتساب، الملاحظات، المهام، وتوصيات الذكاء الاصطناعي الفورية في مكان واحد."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-emerald-600" />,
      title: "Pipeline مبيعات مرن",
      desc: "لوحة تحكم تفاعلية (Drag & Drop) لمتابعة صفقاتك بكل سهولة، مع حساب فوري لقيمة الصفقات ومؤشرات تقدم كل مندوب مبيعات."
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-600" />,
      title: "تكامل واتساب ذكي بلمسة واحدة",
      desc: "أرسل رسائل الواتساب مباشرة من النظام باستخدام قوالب مجهزة بالاسم والشركة، مع أرشفة الرسالة وتحديث الحالة فوراً."
    },
    {
      icon: <Brain className="w-6 h-6 text-emerald-600" />,
      title: "الذكاء الاصطناعي للمبيعات",
      desc: "تحليل ذكي لسلوك العميل، وتوقع دقيق لنسبة الإغلاق، وتنبيهات فورية للمدير بالعملاء المهملين لضمان عدم ضياع أي صفقة."
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      title: "صلاحيات دقيقة لمنع التسريب",
      desc: "تحكم كامل بمن يستطيع مشاهدة أرقام الهواتف أو تصديرها، مع إمكانية إخفاء الأرقام جزئياً لحفظ أصول عملائك وأمن بياناتك."
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-600" />,
      title: "الهوية المخصصة والدومين الخاص",
      desc: "حوّل النظام بالكامل ليحمل شعار شركتك وألوانك، مع إمكانية الوصول إليه عبر رابطك الخاص crm.yourcompany.com."
    }
  ];

  const testimonials = [
    {
      name: "أحمد العتيبي",
      role: "مدير المبيعات والتسويق",
      company: "مجموعة العلي العقارية",
      quote: "دليل الشرق CRM نقل مبيعاتنا لمستوى آخر. الذكاء الاصطناعي يساعدنا في معرفة المتابعة الأنسب لكل عميل، ونظام الصلاحيات أراحنا تماماً من مخاوف تسريب الأرقام.",
      stars: 5
    },
    {
      name: "سارة المنصوري",
      role: "رئيسة قسم خدمة العملاء",
      company: "مركز توب ترينينج للتعليم والتدريب",
      quote: "كانت مشكلتنا الأكبر هي ضياع المتابعات وعدم تذكر الموظفين للاتصالات. مع النظام، أصبح لكل موظف جدول يومي بالمهام والاتصالات، وارتفعت مبيعاتنا بنسبة 45%.",
      stars: 5
    },
    {
      name: "خالد الشريف",
      role: "المدير التنفيذي",
      company: "مجمع النخبة الطبي والعيادات",
      quote: "ميزة إرسال قوالب الواتساب بنقرة واحدة حلت لنا أزمة تأكيد الحجوزات مع المرضى. النظام ذكي وسريع جداً، والدعم الفني متواجد معنا على مدار الساعة.",
      stars: 5
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.25),transparent_50%)]" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[120px] -translate-y-1/2" />
        
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-8 text-right z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 text-sm text-blue-400">
                <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                أول CRM ذكي متعدد العملاء مخصص للشركات العربية والخليجية
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-white">
                حوّل كل رقم هاتف إلى <span className="bg-gradient-to-l from-[var(--accent)] to-teal-400 bg-clip-text text-transparent">صفقة مبيعات ناجحة</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed">
                نظام CRM SaaS سحابي متكامل يمنحك السيطرة الكاملة على عملائك، واتصالاتك، وفريق مبيعاتك مع أتمتة الواتساب ودعم كامل بالذكاء الاصطناعي لرفع كفاءة الإغلاق.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/demo" variant="accent" size="lg" className="w-full sm:w-auto text-base shadow-xl shadow-emerald-500/10">
                  ابدأ تجربتك المجانية 14 يوم
                  <ArrowLeft className="w-5 h-5 mr-1" />
                </Button>
                <Button href="/features" variant="outline-dark" size="lg" className="w-full sm:w-auto">
                  استكشف المميزات بالتفصيل
                </Button>
              </div>

              <div className="pt-6 grid grid-cols-3 gap-6 border-t border-slate-900 text-right">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">500+</div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1">شركة مسجلة</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[var(--accent)]">3.2x</div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1">زيادة في المبيعات</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">99.9%</div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1">استقرار ونظام آمن</div>
                </div>
              </div>
            </div>

            {/* Interactive Hero Preview (Mockup Dashboard) */}
            <div className="lg:col-span-6 z-10">
              <div className="relative rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-6 overflow-hidden">
                <div className="absolute top-0 right-0 left-0 h-11 bg-slate-950/80 flex items-center justify-between px-6 border-b border-slate-800/80">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs text-slate-500 font-mono">daleelcrm.yourcompany.com</span>
                  <div className="w-8" />
                </div>
                
                <div className="mt-8 space-y-6">
                  {/* Top stats inside mockup */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-slate-950/50 p-4 rounded-2xl border border-slate-800/60">
                      <div className="text-slate-500 text-xs">إجمالي العملاء المحتملين</div>
                      <div className="text-xl font-bold mt-1 text-white">1,482</div>
                      <span className="text-[10px] text-emerald-500">+12% اليوم</span>
                    </div>
                    <div className="bg-slate-950/50 p-4 rounded-2xl border border-slate-800/60">
                      <div className="text-slate-500 text-xs">الصفقات المغلقة</div>
                      <div className="text-xl font-bold mt-1 text-[var(--accent)]">342</div>
                      <span className="text-[10px] text-emerald-500">+47% هذا الشهر</span>
                    </div>
                    <div className="bg-slate-950/50 p-4 rounded-2xl border border-slate-800/60">
                      <div className="text-slate-500 text-xs">قيمة المبيعات المتوقعة</div>
                      <div className="text-xl font-bold mt-1 text-blue-400">184.2K</div>
                      <span className="text-[10px] text-slate-400">تحليل المبيعات نشط</span>
                    </div>
                  </div>

                  {/* AI Assistant Section inside Mockup */}
                  <div className="bg-slate-950/70 p-4 rounded-2xl border border-blue-950/50">
                    <div className="flex items-center gap-2 mb-2 text-xs text-blue-400 font-semibold">
                      <Brain className="w-4 h-4 text-[var(--accent)]" />
                      مساعد المبيعات بالذكاء الاصطناعي (AI Summary)
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans text-right" dir="rtl">
                      "هناك <span className="text-[var(--accent)] font-semibold">4 عملاء مهملين</span> لم يتم التواصل معهم منذ يومين في مرحلة 'عرض السعر'، يرجى تفويض المندوب خالد للمتابعة عبر الواتساب فوراً لتفادي ضياع الصفقات."
                    </p>
                  </div>

                  {/* Visual Timeline Event inside Mockup */}
                  <div className="bg-slate-950/30 p-4 rounded-2xl border border-slate-800/40 text-right" dir="rtl">
                    <div className="flex justify-between items-center text-xs text-slate-500 mb-2">
                      <span>آخر الأنشطة الحية للمندوبين</span>
                      <span className="text-emerald-500 font-semibold">• نشط الآن</span>
                    </div>
                    <div className="space-y-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-xs font-bold flex-shrink-0">ع</div>
                        <div className="text-xs">
                          <span className="text-slate-300 font-semibold">عبدالرحمن (مندوب)</span> أرسل رسالة واتساب للعميل <span className="text-slate-300 font-semibold">ريم المنصوري</span>
                          <div className="text-slate-500 text-[10px] mt-0.5">منذ دقيقة واحدة • تم التسجيل والتوثيق تلقائياً</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 text-xs font-bold flex-shrink-0">ف</div>
                        <div className="text-xs">
                          <span className="text-slate-300 font-semibold">فريق التسويق</span> قام باستيراد <span className="text-slate-300 font-semibold">150 Lead جديد</span> من إعلانات تيك توك
                          <div className="text-slate-500 text-[10px] mt-0.5">منذ 10 دقائق • تم التوزيع بالتساوي على المندوبين</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Target Sectors trust bar */}
      <div className="border-y border-slate-100 bg-white py-6">
        <Container>
          <div className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">الشركات والقطاعات الأكثر استفادة من النظام</div>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 opacity-80 text-sm font-semibold text-slate-600">
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> شركات العقارات</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> معاهد التدريب والتعليم</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> مراكز الاتصال والمبيعات</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> العيادات الطبية والمراكز</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> وكالات التسويق والخدمات B2B</span>
          </div>
        </Container>
      </div>

      {/* Section: Interactive Sales Pipeline Simulator */}
      <Section className="bg-white border-b border-slate-100">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full">استعراض حي وتفاعلي</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">تحكم بمراحل صفقاتك بلمسة واحدة</h2>
          <p className="text-slate-600">
            جرب بنفسك محاكاة لوحة المبيعات التفاعلية لدينا. انقل العملاء بين المراحل وشاهد كيف يقوم الذكاء الاصطناعي بتحليل البيانات وتقديم التوصيات فورياً.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Columns of pipeline */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stages.map(stage => {
              const leadsInStage = pipelineLeads.filter(l => l.stage === stage.id);
              return (
                <div key={stage.id} className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 min-h-[320px]">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-sm text-slate-800">{stage.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 font-semibold">{leadsInStage.length}</span>
                  </div>
                  
                  <div className="space-y-3">
                    {leadsInStage.map(lead => (
                      <div 
                        key={lead.id} 
                        onClick={() => setSelectedLead(lead)}
                        className={`p-3 rounded-xl border text-right cursor-pointer transition-all ${
                          selectedLead.id === lead.id 
                            ? 'bg-white border-[var(--primary)] shadow-md ring-2 ring-[var(--primary)]/10 scale-[1.02]' 
                            : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-sm'
                        }`}
                      >
                        <div className="font-bold text-xs text-slate-900 mb-1">{lead.name}</div>
                        <div className="text-[10px] text-slate-500 mb-2">{lead.company}</div>
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="font-bold text-slate-800">{lead.value}</span>
                          <span className="text-emerald-600 font-semibold">{lead.status}</span>
                        </div>
                        
                        {/* Control buttons in simulator */}
                        <div className="mt-3 pt-2 border-t border-slate-100 flex gap-2 justify-end">
                          <button 
                            title="نقل للمرحلة السابقة"
                            onClick={(e) => {
                              e.stopPropagation();
                              moveLead(lead.id, 'prev');
                            }}
                            disabled={lead.stage === 'new'}
                            className="p-1 rounded bg-slate-100 text-slate-500 hover:bg-slate-200 disabled:opacity-30 disabled:hover:bg-slate-100"
                          >
                            <ChevronLeft className="w-3.5 h-3.5 transform rotate-180" />
                          </button>
                          <button 
                            title="نقل للمرحلة التالية"
                            onClick={(e) => {
                              e.stopPropagation();
                              moveLead(lead.id, 'next');
                            }}
                            disabled={lead.stage === 'proposal'}
                            className="p-1 rounded bg-slate-100 text-slate-500 hover:bg-slate-200 disabled:opacity-30 disabled:hover:bg-slate-100"
                          >
                            <ChevronLeft className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Lead 360 Detail View & AI Advice panel */}
          <div className="lg:col-span-4 bg-slate-900 text-white rounded-3xl border border-slate-800 p-6 shadow-xl text-right" dir="rtl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <span className="font-bold text-sm text-[var(--accent)]">ملف العميل Lead 360°</span>
              <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-400 font-semibold">{selectedLead.status}</span>
            </div>

            <div className="space-y-5">
              <div>
                <h4 className="text-lg font-bold text-white">{selectedLead.name}</h4>
                <p className="text-xs text-slate-400 mt-1">{selectedLead.company}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs text-slate-300">
                <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-800/50">
                  <span className="text-[10px] text-slate-500 block mb-1">الهاتف</span>
                  <span className="font-mono">{selectedLead.phone}</span>
                </div>
                <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-800/50">
                  <span className="text-[10px] text-slate-500 block mb-1">البريد الإلكتروني</span>
                  <span className="font-mono truncate block">{selectedLead.email}</span>
                </div>
                <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-800/50">
                  <span className="text-[10px] text-slate-500 block mb-1">مصدر العميل</span>
                  <span>{selectedLead.source}</span>
                </div>
                <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-800/50">
                  <span className="text-[10px] text-slate-500 block mb-1">قيمة الصفقة</span>
                  <span className="font-semibold text-emerald-400">{selectedLead.value}</span>
                </div>
              </div>

              {/* AI Layer inside simulator */}
              <div className="bg-gradient-to-br from-indigo-950/60 to-slate-900 p-4 rounded-2xl border border-blue-900/40 text-right">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-2">
                  <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                  تحليل وتوصية الذكاء الاصطناعي (AI Engine)
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {getAIRecommendation(selectedLead)}
                </p>
              </div>

              <div className="pt-2 flex gap-3">
                <Link href="/demo" className="flex-1 text-center py-2.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-slate-950 text-xs font-bold transition-all">
                  ابدأ الاستخدام الفعلي
                </Link>
                <Link href="/features" className="flex-1 text-center py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-all">
                  استكشف المميزات
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section: Interactive WhatsApp Template builder */}
      <Section className="bg-slate-50 border-b border-slate-100">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6 text-right">
            <span className="text-xs font-bold text-[var(--primary)] uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full">السرعة والأرشفة</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">أرسل رسائل واتساب تفاعلية بلمح البصر</h2>
            <p className="text-slate-600 leading-relaxed">
              وفّر وقت مندوبيك وأرسل رسائل ومتابعات مخصصة في ثوانٍ. يعبئ النظام اسم العميل وتفاصيل شركته تلقائياً داخل القوالب الجاهزة ويؤرشف إرسالها فوراً في سجل العميل.
            </p>
            
            <div className="space-y-3">
              {waTemplates.map(tmpl => (
                <button
                  key={tmpl.id}
                  onClick={() => setActiveTemplate(tmpl)}
                  className={`w-full text-right p-4 rounded-2xl border transition-all flex justify-between items-center ${
                    activeTemplate.id === tmpl.id
                      ? 'bg-white border-[var(--primary)] shadow-sm font-semibold'
                      : 'bg-white/60 border-slate-200 hover:bg-white'
                  }`}
                >
                  <span className="text-sm text-slate-800">{tmpl.title}</span>
                  <ChevronLeft className={`w-4 h-4 text-slate-400 transition-transform ${activeTemplate.id === tmpl.id ? 'transform -rotate-90' : ''}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Interactive mockup of phone */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[480px] bg-slate-950 rounded-[48px] border-8 border-slate-900 shadow-2xl p-4 overflow-hidden aspect-[9/16] max-h-[580px]">
              {/* Phone Status bar */}
              <div className="h-6 w-full flex justify-between items-center px-4 mb-4 text-slate-400 text-xs">
                <span>01:46 م</span>
                <div className="w-16 h-4 bg-slate-900 rounded-full flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-slate-700" />
                </div>
                <div className="flex gap-1.5 items-center">
                  <span>5G</span>
                  <div className="w-5 h-2.5 border border-slate-500 rounded-sm p-0.5"><div className="h-full bg-slate-400 w-4 rounded-sm" /></div>
                </div>
              </div>

              {/* Chat View Header */}
              <div className="bg-slate-900/90 rounded-2xl p-3 border border-slate-800 flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold flex-shrink-0">ع</div>
                  <div className="text-right">
                    <h5 className="text-sm font-bold text-white">{selectedLead.name}</h5>
                    <span className="text-[10px] text-emerald-500 font-semibold">متصل الآن</span>
                  </div>
                </div>
                <div className="flex gap-3 text-slate-400">
                  <Phone className="w-4 h-4 cursor-pointer hover:text-white" />
                  <MessageSquare className="w-4 h-4 cursor-pointer hover:text-white" />
                </div>
              </div>

              {/* Chat messages area */}
              <div className="h-[320px] flex flex-col justify-end space-y-4 p-2 overflow-y-auto">
                <div className="bg-slate-900 border border-slate-800 text-slate-400 text-[10px] py-1 px-3 rounded-full self-center">
                  اليوم
                </div>
                
                {/* Incoming mock message */}
                <div className="bg-slate-900/60 text-slate-200 text-xs p-3 rounded-2xl rounded-tr-none max-w-[80%] self-start border border-slate-800/80 text-right">
                  السلام عليكم، كنت مهتم بمعرفة تفاصيل النظام والأسعار.
                  <div className="text-[9px] text-slate-500 text-left mt-1">12:30 م</div>
                </div>

                {/* Simulated Outgoing text with templates */}
                <div className="bg-emerald-950/80 text-emerald-100 text-xs p-3.5 rounded-2xl rounded-tl-none max-w-[85%] self-end border border-emerald-800/50 text-right">
                  {activeTemplate.content
                    .replace("{{الاسم}}", selectedLead.name)
                    .replace("{{الشركة}}", selectedLead.company)}
                  <div className="text-[9px] text-emerald-500 text-left mt-1">تم الإرسال الآن • ✓✓</div>
                </div>
              </div>

              {/* Chat Input area */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                <div className="flex-1 bg-slate-900/90 rounded-2xl px-4 py-3 text-slate-400 text-xs border border-slate-800 flex items-center justify-between">
                  <span>اكتب رسالة...</span>
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="w-11 h-11 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold cursor-pointer hover:bg-emerald-400 transition-colors">
                  <ArrowRight className="w-4 h-4 transform rotate-180" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Feature Cards Grid */}
      <Section id="features" className="bg-white border-b border-slate-100">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full">إمكانيات غير محدودة</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">نظام متكامل يخدم أهداف مبيعاتك</h2>
          <p className="text-slate-600">
            تم بناء وتطوير دليل الشرق ليتجاوز أداء أنظمة الـ CRM التقليدية، مع ملاءمة تامة لثقافة العمل والمبيعات في السوق العربي والخليجي.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/50 p-8 rounded-3xl transition-all hover:shadow-xl hover:border-emerald-200 hover:-translate-y-1 group text-right">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-[var(--accent)] group-hover:text-slate-950 transition-colors">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button href="/features" variant="outline" size="lg">
            استكشف كافة المزايا الفنية
            <ArrowLeft className="w-4 h-4 mr-2" />
          </Button>
        </div>
      </Section>

      {/* Security, Multi-Tenant and Infrastructure Section */}
      <Section className="bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-900/10 rounded-full blur-[100px] -translate-y-1/2" />
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8 text-right z-10">
            <span className="text-xs font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full">أمان وموثوقية عالية</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">بيئة سحابية معزولة تماماً لحماية أرقامك</h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              نعلم تماماً أن بيانات عملائك هي ثروتك الحقيقية. لذلك، تم تطوير النظام بهيكل **Multi-Tenant SaaS** متقدم يوفر عزلاً تاماً لكل شركة بقواعد بيانات مستقلة وصلاحيات أمان صارمة.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-emerald-500 flex-shrink-0"><ShieldCheck className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-sm">عزل بيانات بنسبة 100%</h4>
                  <p className="text-xs text-slate-400 mt-1">قاعدة بيانات معزولة بالكامل لكل شركة مشتركة. استحالة تداخل أو تسريب البيانات بين العملاء.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-emerald-500 flex-shrink-0"><Laptop className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-sm">ربط الدومينات الخاصة (Custom Domain)</h4>
                  <p className="text-xs text-slate-400 mt-1">اربط نظامك بنطاق مخصص مثل `sales.mycompany.com` مع شهادة أمان SSL تلقائية ومجانية.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-emerald-500 flex-shrink-0"><Server className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-sm">نسخ احتياطي يومي تلقائي</h4>
                  <p className="text-xs text-slate-400 mt-1">تؤخذ نسخ احتياطية دورية لقواعد البيانات والملفات، مع خيارات رفع النسخ لـ Amazon S3 أو Google Cloud.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Graphical representation of Tenant isolation */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 relative z-10 text-right" dir="rtl">
            <div className="text-center font-bold text-sm mb-6 pb-4 border-b border-slate-800">هندسة عزل الشركات وحماية الأرقام</div>
            
            <div className="space-y-6">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-xs font-bold flex-shrink-0">1</div>
                  <div>
                    <h5 className="text-xs font-bold">دومين مخصص: crm.company1.com</h5>
                    <span className="text-[9px] text-slate-500">قاعدة بيانات معزولة (DB_Tenant_1)</span>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/40">متصل وآمن</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-xs font-bold flex-shrink-0">2</div>
                  <div>
                    <h5 className="text-xs font-bold">دومين مخصص: sales.company2.com</h5>
                    <span className="text-[9px] text-slate-500">قاعدة بيانات معزولة (DB_Tenant_2)</span>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/40">متصل وآمن</span>
              </div>

              <div className="h-6 flex justify-center items-center">
                <div className="w-0.5 h-full border-l border-dashed border-slate-700" />
              </div>

              <div className="bg-slate-950/40 p-4 rounded-2xl border border-dashed border-slate-800 text-center text-xs text-slate-500">
                لوحة التحكم المركزية لـ دليل الشرق (Super Admin Dashboard)
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-white border-b border-slate-100">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full">شركاء النجاح</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">تجارب نجاح حقيقية لعملائنا في المنطقة</h2>
          <p className="text-slate-600">
            شاهد كيف ساعد نظام دليل الشرق CRM أصحاب الأعمال والمدراء التنفيذيين في تنظيم مبيعاتهم وتحقيق نمو حقيقي في السوق.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-3xl border border-slate-200/50 flex flex-col justify-between text-right">
              <div>
                <div className="flex gap-1 mb-6 text-amber-500">
                  {[...Array(test.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-500" />)}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
                  " {test.quote} "
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200/60">
                <h5 className="font-bold text-sm text-slate-950">{test.name}</h5>
                <span className="text-xs text-slate-500 block mt-0.5">{test.role}</span>
                <span className="text-[10px] text-[var(--accent-dark)] font-semibold mt-1 block">{test.company}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Section: Frequently Asked Questions quick preview */}
      <Section className="bg-slate-50 border-b border-slate-100">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6 text-right">
            <h2 className="text-3xl font-bold text-slate-900">هل لديك استفسارات؟</h2>
            <p className="text-slate-600 text-sm">
              لقد قمنا بجمع أكثر الأسئلة شيوعاً التي يطرحها عملاؤنا حول النظام والتكامل مع واتساب والأمان والاشتراكات.
            </p>
            <div className="pt-2">
              <Button href="/faq" variant="outline">
                شاهد كافة الأسئلة الشائعة
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {[
              { q: "كيف يتم عزل بيانات العملاء في النظام؟", a: "يعتمد النظام على هيكلية Multi-Tenancy التي توفر قواعد بيانات مستقلة ومنفصلة لكل شركة مستأجرة، مما يضمن أماناً تاماً واستحالة وصول أي جهة أخرى لبياناتك." },
              { q: "هل أحتاج للربط مع WhatsApp Business API؟", a: "في المرحلة الأولى نوفر خيار الربط المباشر بواتساب الموبايل لإرسال الرسائل بضغطة زر وتوثيق المتابعة. مستقبلاً، يدعم النظام الربط السلس مع WhatsApp Cloud API للرسائل المؤتمتة." },
              { q: "هل يمكنني ربط دومين مخصص لشركتي؟", a: "نعم بالتأكيد، في الباقة الاحترافية والمؤسسية يمكنك ربط نطاق فرعي أو رئيسي خاص بك، وسيتكفل النظام بإنشاء شهادة الأمان SSL مجاناً وإظهار هويتك البصرية." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/60 text-right">
                <h4 className="font-bold text-sm text-slate-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed pr-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-20 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.15),transparent_50%)]" />
        
        <Container>
          <div className="max-w-3xl mx-auto space-y-8 z-10 relative">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">ابدأ في أرشفة وتنظيم مبيعاتك اليوم</h2>
            <p className="text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
              اشترك الآن واحصل على حساب تجريبي مجاني بكافة المميزات لمدة 14 يوم. لا نطلب أي بيانات بطاقة ائتمانية للتسجيل.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/demo" variant="accent" size="lg" className="text-slate-950 hover:bg-emerald-400 font-bold px-10">
                سجل حسابك التجريبي مجاناً
              </Button>
              <Button href="/contact" variant="outline-dark" size="lg" className="w-full sm:w-auto">
                تحدث مع المبيعات
              </Button>
            </div>
            <p className="text-xs text-slate-500">متوسط الإعداد والتفعيل: أقل من 10 دقائق</p>
          </div>
        </Container>
      </section>
    </div>
  );
}
