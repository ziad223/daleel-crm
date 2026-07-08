"use client";

import React from 'react';
import Link from 'next/link';
import { Target, Award, Shield, Check, Users, Sparkles, Building, Globe } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-6 h-6 text-emerald-500" />,
      title: "التركيز على الاحتياجات المحلية",
      desc: "صممنا النظام ليلائم ثقافة المبيعات في منطقة الخليج العربي، حيث الاعتماد الأكبر على الاتصال الهاتفي ومتابعات الواتساب السريعة لبناء الثقة وإغلاق الصفقات."
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      title: "عزل البيانات الفائق والأمان",
      desc: "خصوصية بيانات عملائنا وأرقام هواتفهم هي خط أحمر. نوفر عزلاً كاملاً للبيانات لكل شركة مشتركة عبر هيكلية برمجية مشددة وسيرفرات آمنة."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-500" />,
      title: "الذكاء الاصطناعي العملي",
      desc: "لا نقدم ذكاءً اصطناعياً نظرياً؛ بل ندمج توصيات ومحاكاة مبيعات عملية تقترح للمندوبين والمدراء الإجراء الأنسب فوراً لزيادة نسب المبيعات."
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-500" />,
      title: "السهولة والتمكين",
      desc: "نؤمن أن النظام الأفضل هو الذي يستخدمه الموظفون فعلياً. لذلك صممنا واجهات سلسة وسريعة وسهلة الفهم لمندوبي المبيعات لزيادة إنتاجيتهم."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.2),transparent_45%)]" />
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">من نحن</h1>
            <p className="text-lg text-slate-300">
              قصة تطوير نظام دليل الشرق CRM ورؤيتنا لتمكين مبيعات الشركات العربية والخليجية.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content (Story) */}
      <Section className="py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-right" dir="rtl">
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full inline-block">
              رؤيتنا وقصتنا
            </span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">تمكين الشركات من تحويل الأرقام إلى نجاحات</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              في السوق العربي والخليجي، تعتمد آلاف الشركات في نموها اليومي على فرق المبيعات، الاتصالات، وحملات الواتساب. لكن الأنظمة العالمية للـ CRM غالباً ما تكون معقدة، مكلفة، وغير مهايئة للثقافة المحلية للتواصل السريع، مما يؤدي لضياع المتابعات وتسريب بيانات العملاء.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              من هنا انطلقت فكرة **دليل الشرق CRM**. لقد أردنا بناء نظام مبيعات ذكي متعدد العملاء (SaaS) يخدم الشركات الصغيرة والمتوسطة، ومراكز الاتصال، وشركات العقارات، والعيادات والمؤسسات الخدمية في المنطقة. نظام يمنح الإدارة التحكم الكامل بالصلاحيات لحماية بياناتها، ويمنح المندوب السهولة والسرعة للتواصل والمتابعة، ويوظف الذكاء الاصطناعي لرفع كفاءة إغلاق الصفقات.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-right">
                <Building className="w-8 h-8 text-emerald-600 mb-3" />
                <h4 className="font-bold text-sm text-slate-900 mb-1">حلول مخصصة للشركات</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed">ندعم تخصيص الشعار والهوية بالكامل واستخدام النطاقات الخاصة بالشركات.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-right">
                <Globe className="w-8 h-8 text-emerald-600 mb-3" />
                <h4 className="font-bold text-sm text-slate-900 mb-1">صناعة سعودية خليجية</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed">نظام مستضاف على خوادم سحابية آمنة ومطابق لتشريعات حماية البيانات في المنطقة.</p>
              </div>
            </div>
          </div>

          {/* Interactive Team/Platform Showcase */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl border border-slate-800 p-8 shadow-xl text-right" dir="rtl">
            <h4 className="font-bold text-sm text-[var(--accent)] mb-4">قيمنا الأساسية</h4>
            <div className="space-y-4">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <h5 className="font-bold text-xs text-slate-200 mb-1">السرعة والبساطة</h5>
                <p className="text-[11px] text-slate-400">تقليل عدد الخطوات التي يحتاجها الموظف للاتصال بالعميل أو إرسال رسالة واتساب.</p>
              </div>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <h5 className="font-bold text-xs text-slate-200 mb-1">حماية الأصول والأرقام</h5>
                <p className="text-[11px] text-slate-400">إخفاء الأرقام جزئياً ومنع التصدير العشوائي لحفظ الملكية الفكرية والبيانات للشركة.</p>
              </div>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <h5 className="font-bold text-xs text-slate-200 mb-1">دعم متواصل 24/7</h5>
                <p className="text-[11px] text-slate-400">فريقنا متواجد دائماً لمساعدة عملائنا في إعداد حساباتهم وربط النطاقات وتفعيل المميزات.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Grid */}
      <Section className="bg-white border-y border-slate-200/50 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">المبادئ التي توجه تطوير نظامنا</h2>
          <p className="text-slate-600">نحن لا نبيع مجرد نظام مبيعات؛ نحن نطور منصة تساعد الشركات على النمو المستدام.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-right shadow-sm hover:shadow-md transition-shadow" dir="rtl">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-sm">
                {val.icon}
              </div>
              <h4 className="font-bold text-sm text-slate-900 mb-2">{val.title}</h4>
              <p className="text-slate-600 text-xs leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to action */}
      <section className="bg-slate-950 text-white py-20 text-center relative">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">جرب دليل الشرق CRM الآن</h2>
            <p className="text-slate-300 text-base max-w-xl mx-auto leading-relaxed">
              ابدأ بفترة تجريبية مجانية مدتها 14 يوماً واستكشف كيف يمكن للنظام أن يعيد تنظيم مبيعات شركتك.
            </p>
            <div className="flex gap-4 justify-center pt-2">
              <Button href="/demo" variant="accent" size="lg" className="font-bold text-slate-950 px-10">
                ابدأ التجربة المجانية
              </Button>
              <Button href="/contact" variant="outline-dark" size="lg" className="w-full sm:w-auto">
                تواصل معنا
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
