"use client";

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FileText, Calendar, BookOpen } from 'lucide-react';

export default function TermsPage() {
  const sections = [
    {
      title: "1. قبول الشروط والأحكام",
      content: "عند قيامك بإنشاء حساب أو تفعيل اشتراك في دليل الشرق CRM، فإنك توافق بالكامل على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء منها، يرجى عدم استخدام المنصة أو التسجيل فيها."
    },
    {
      title: "2. شروط الحساب والاستخدام المقبول",
      content: "يجب على المشترك تقديم معلومات صحيحة ودقيقة بالكامل عند التسجيل (الاسم، الجوال، البريد، اسم الشركة). يلتزم المشترك بعدم استخدام النظام لإرسال رسائل سبام أو رسائل عشوائية أو إجراء اتصالات غير قانونية تخالف تشريعات هيئة الاتصالات والفضاء والتقنية أو القوانين المحلية المعمول بها في السعودية والخليج."
    },
    {
      title: "3. باقات الاشتراك والدفع والفوترة",
      content: "تتوفر الخدمة بنظام اشتراك شهري أو سنوي يُدفع مقدماً. يتم تجديد الاشتراك تلقائياً في نهاية كل فترة فوترة ما لم يقم المشترك بإلغاء التجديد من لوحة التحكم قبل موعده. تحتفظ المنصة بالحق في تعديل أسعار الباقات مع إخطار مسبق للمشتركين قبل 30 يوماً على الأقل من بدء التطبيق."
    },
    {
      title: "4. الملكية الفكرية وتخصيص العلامة",
      content: "تظل كافة الأكواد البرمجية والتصميمات والنظام الأساسي والذكاء الاصطناعي ملكية فكرية مطلقة لدليل الشرق. يحصل المشترك على ترخيص استخدام غير حصري وغير قابل للتنازل للغير طوال فترة الاشتراك. تتيح ميزة (White Label) للشركات رفع شعارها وتخصيص ألوانها دون أن يعني ذلك نقل أي ملكية فكرية للنظام الأساسي."
    },
    {
      title: "5. إخلاء المسؤولية وحدودها",
      content: "يبذل فريق دليل الشرق CRM أقصى جهده لضمان استقرار الخوادم وتقديم الخدمة بكفاءة عالية بنسبة 99.9%. ومع ذلك، لا نتحمل المسؤولية عن أي خسائر تجارية أو فوات صفقات ناتجة عن انقطاع الاتصال أو تعطل مزودي الاتصالات والواتساب الخارجيين."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.2),transparent_45%)]" />
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">الشروط والأحكام</h1>
            <p className="text-lg text-slate-300">
              اتفاقية استخدام نظام دليل الشرق CRM للشركات والمؤسسات.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 shadow-xl rounded-3xl p-8 md:p-12 text-right" dir="rtl">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-6 mb-8 text-[var(--primary)]">
            <FileText className="w-8 h-8 text-emerald-500 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-slate-950">شروط استخدام المنصة</h2>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1 font-mono">
                <Calendar className="w-3.5 h-3.5" />
                <span>آخر تحديث: 9 يوليو 2026</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-slate-600 text-sm leading-relaxed">
              يرجى قراءة هذه الاتفاقية بعناية قبل استخدام منصة **دليل الشرق CRM**. يوضح هذا العقد القانوني الحقوق والمسؤوليات المتبادلة بين إدارة دليل الشرق والشركات المشتركة في الخدمة السحابية.
            </p>

            {sections.map((sec, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="font-bold text-base sm:text-lg text-slate-950 flex items-center gap-2">
                  <BookOpen className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
                  {sec.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pr-6">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>

          {/* Contact note */}
          <div className="mt-12 pt-8 border-t border-slate-100/80 text-xs text-slate-500 text-center">
            لأي استفسارات قانونية أو مراجعة الاتفاقيات الخاصة بالمؤسسات الكبرى، يرجى التواصل معنا عبر <a href="mailto:legal@daleelalsharq.com" className="text-[var(--primary)] font-bold hover:underline">legal@daleelalsharq.com</a>.
          </div>
        </div>
      </Section>
    </div>
  );
}
