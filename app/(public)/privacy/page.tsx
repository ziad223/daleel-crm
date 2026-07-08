"use client";

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ShieldCheck, Calendar, Lock } from 'lucide-react';

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. جمع المعلومات واستخدامها",
      content: "نقوم بجمع البيانات اللازمة لتوفير وتشغيل خدماتنا بشكل آمن. يشمل ذلك معلومات حسابك (الاسم، البريد الإلكتروني، رقم الهاتف، اسم الشركة) بالإضافة لبيانات الاستخدام وملفات تعريف الارتباط (Cookies) لتحسين تجربة النظام وفهم التفاعل مع المنصة."
    },
    {
      title: "2. عزل وحماية بيانات العملاء (Multi-Tenancy)",
      content: "تلتزم إدارة دليل الشرق CRM بعزل بيانات كل شركة مشتركة بالكامل عن غيرها. يتم تخزين معلومات عملائك وأرقام هواتفهم وسجلات المتابعة الخاصة بفريق مبيعاتك في بيئة قواعد بيانات منفصلة برمجياً، ولا يمكن لأي مشترك آخر الوصول إليها أو الاطلاع عليها تحت أي ظرف."
    },
    {
      title: "3. أمن البيانات وتشفيرها",
      content: "نطبق معايير أمنية صارمة ومشددة لحماية بياناتك من الوصول غير المصرح به أو التعديل أو الإتلاف. يتم تشفير جميع كلمات المرور والاتصالات الحساسة عبر بروتوكول HTTPS الآمن، وتخزين النسخ الاحتياطية في خوادم سحابية محمية ومغلقة."
    },
    {
      title: "4. صلاحيات الموظفين والمسؤولية",
      content: "تتحمل كل شركة مشتركة المسؤولية الكاملة عن توزيع الصلاحيات لمندوبيها وموظفيها داخل لوحة التحكم الخاصة بها. ننصح بشدة بتفعيل ميزة إخفاء الأرقام جزئياً للمندوبين واقتصار صلاحية التصدير أو الحذف على المدراء المسؤولين لحماية أصول بياناتكم."
    },
    {
      title: "5. التعديلات على سياسة الخصوصية",
      content: "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لمواكبة التغييرات الفنية أو التشريعية. سنقوم بإخطار المشتركين بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال إشعارات لوحة التحكم قبل سريان التحديث."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.2),transparent_45%)]" />
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">سياسة الخصوصية</h1>
            <p className="text-lg text-slate-300">
              كيف نقوم بجمع وحماية بياناتك وبيانات عملائك في دليل الشرق CRM.
            </p>
          </div>
        </Container>
      </section>

      {/* Main content block */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 shadow-xl rounded-3xl p-8 md:p-12 text-right" dir="rtl">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-6 mb-8 text-[var(--primary)]">
            <ShieldCheck className="w-8 h-8 text-emerald-500 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-slate-950">التزامنا بحماية خصوصيتك</h2>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1 font-mono">
                <Calendar className="w-3.5 h-3.5" />
                <span>آخر تحديث: 9 يوليو 2026</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-slate-600 text-sm leading-relaxed">
              مرحباً بكم في منصة **دليل الشرق CRM**. نحن ندرك مدى أهمية الخصوصية والأمان لبيانات شركتكم وأرقام عملائكم. توضح هذه الوثيقة سياساتنا المتعلقة بجمع البيانات، حمايتها، وعزلها لضمان تجربة استخدام آمنة وموثوقة بنسبة 100%.
            </p>

            {sections.map((sec, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="font-bold text-base sm:text-lg text-slate-950 flex items-center gap-2">
                  <Lock className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
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
            إذا كان لديك أي استفسار أو قلق بشأن سرية البيانات، يمكنك التواصل مع مهندس الأمان والخصوصية لدينا عبر <a href="mailto:privacy@daleelalsharq.com" className="text-[var(--primary)] font-bold hover:underline">privacy@daleelalsharq.com</a>.
          </div>
        </div>
      </Section>
    </div>
  );
}
