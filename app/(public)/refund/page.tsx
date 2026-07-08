"use client";

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { RefreshCw, Calendar, AlertCircle } from 'lucide-react';

export default function RefundPage() {
  const points = [
    {
      title: "فترة التجربة المجانية هي خيارك الأول",
      desc: "نحن نوفر فترة تجريبية مجانية كاملة المميزات لمدة 14 يوماً لجميع المشتركين الجدد. ننصح بشدة بتجربة النظام بالكامل واختبار استيراد الأرقام والمتابعة والذكاء الاصطناعي مع فريق مبيعاتك قبل اتخاذ قرار الشراء المدفوع."
    },
    {
      title: "شروط طلب الاسترجاع",
      desc: "يحق للعميل طلب استرجاع المبالغ المدفوعة للاشتراك خلال أول 7 أيام عمل من تاريخ الدفع الأول، شريطة عدم تفعيل ميزات مخصصة إضافية مثل الدومين الخاص أو استهلاك الأرصدة أو طلب تعديل برمجي خاص."
    },
    {
      title: "الاستثناءات من الاسترجاع",
      desc: "لا يشمل الاسترجاع المبالغ المدفوعة لباقة (المؤسسات) التي تم فيها توفير سيرفرات مخصصة أو تركيب White Label، كما لا تشمل الباقات التي تم استهلاك أكثر من 50% من حدودها الفنية أو التي تم فيها ربط حسابات وتفعيل أرقام واتساب API رسمية."
    },
    {
      title: "آلية معالجة المبالغ المستردة",
      desc: "عند الموافقة على طلب الاسترجاع، يتم إرجاع المبلغ المدفوع بالكامل إلى نفس البطاقة البنكية المستخدمة في الدفع الإلكتروني. قد تستغرق عملية ظهور المبلغ في حسابك البنكي من 5 إلى 14 يوم عمل حسب سياسة البنك المصدر للبطاقة."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.2),transparent_45%)]" />
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">سياسة الاسترجاع</h1>
            <p className="text-lg text-slate-300">
              شروط وأحكام استرداد المبالغ والاشتراكات في دليل الشرق CRM.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 shadow-xl rounded-3xl p-8 md:p-12 text-right" dir="rtl">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-6 mb-8 text-[var(--primary)]">
            <RefreshCw className="w-8 h-8 text-emerald-500 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-slate-950">سياسة استرداد الأموال</h2>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1 font-mono">
                <Calendar className="w-3.5 h-3.5" />
                <span>آخر تحديث: 9 يوليو 2026</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-slate-600 text-sm leading-relaxed">
              نهدف في **دليل الشرق CRM** إلى تقديم خدمة سحابية متميزة تدعم نمو مبيعاتك. توضح هذه السياسة شروط وضوابط إرجاع المدفوعات لضمان حقوق عملائنا الكرام.
            </p>

            {points.map((p, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="font-bold text-base sm:text-lg text-slate-950 flex items-center gap-2">
                  <AlertCircle className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
                  {p.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pr-6">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Contact note */}
          <div className="mt-12 pt-8 border-t border-slate-100/80 text-xs text-slate-500 text-center">
            لتقديم طلب استرجاع أو مناقشة الفواتير الخاصة ببطاقتك، يرجى تعبئة نموذج صفحة <a href="/contact" className="text-[var(--primary)] font-bold hover:underline">تواصل معنا</a> أو مراسلتنا مباشرة على <a href="mailto:billing@daleelalsharq.com" className="text-[var(--primary)] font-bold hover:underline">billing@daleelalsharq.com</a>.
          </div>
        </div>
      </Section>
    </div>
  );
}
