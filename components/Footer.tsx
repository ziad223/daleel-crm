import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-y-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center">
              <span className="text-[var(--primary)] text-3xl font-bold tracking-tighter">د</span>
            </div>
            <div>
              <div className="font-bold text-2xl text-white tracking-tight">دليل الشرق</div>
              <div className="text-emerald-400 text-xs font-semibold tracking-[3px]">CRM INTELLIGENCE</div>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-slate-400">
            منصة CRM SaaS ذكية مصممة خصيصاً للشركات العربية والخليجية. 
            نحوّل الأرقام إلى مبيعات من خلال الذكاء الاصطناعي والمتابعات الذكية.
          </p>
          <div className="mt-6 flex gap-4 text-xs">
            <div className="px-4 py-1.5 bg-white/5 rounded-full">🇸🇦 السعودية</div>
            <div className="px-4 py-1.5 bg-white/5 rounded-full">🇦🇪 الإمارات</div>
            <div className="px-4 py-1.5 bg-white/5 rounded-full">🇶🇦 قطر</div>
          </div>
        </div>

        {/* Links */}
        <div>
          <div className="font-semibold text-white mb-4 text-sm tracking-wider">المنتج</div>
          <div className="space-y-2.5 text-sm">
            <Link href="/features" className="block hover:text-white transition-colors">المميزات</Link>
            <Link href="/pricing" className="block hover:text-white transition-colors">الباقات</Link>
            <Link href="/trial" className="block hover:text-white transition-colors">تجربة مجانية</Link>
            <Link href="/#demo" className="block hover:text-white transition-colors">عرض توضيحي</Link>
          </div>
        </div>

        <div>
          <div className="font-semibold text-white mb-4 text-sm tracking-wider">الشركة</div>
          <div className="space-y-2.5 text-sm">
            <Link href="/about" className="block hover:text-white transition-colors">من نحن</Link>
            <Link href="/contact" className="block hover:text-white transition-colors">تواصل معنا</Link>
            <Link href="/faq" className="block hover:text-white transition-colors">الأسئلة الشائعة</Link>
            <a href="https://blog.daleelalsharq.com" target="_blank" className="block hover:text-white transition-colors">المدونة</a>
          </div>
        </div>

        <div>
          <div className="font-semibold text-white mb-4 text-sm tracking-wider">قانوني</div>
          <div className="space-y-2.5 text-sm">
            <Link href="/privacy" className="block hover:text-white transition-colors">سياسة الخصوصية</Link>
            <Link href="/terms" className="block hover:text-white transition-colors">شروط الاستخدام</Link>
            <Link href="/refund" className="block hover:text-white transition-colors">سياسة الاسترجاع</Link>
            <Link href="/contact" className="block hover:text-white transition-colors">الدعم الفني</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <div>
          © {currentYear} دليل الشرق للتقنية. جميع الحقوق محفوظة.
        </div>
        <div className="flex gap-6">
          <span>Multi-Tenant SaaS</span>
          <span>ISO 27001</span>
          <span>متوافق مع PDPL</span>
        </div>
        <div>
          صنع بـ ❤️ في الرياض، المملكة العربية السعودية
        </div>
      </div>
    </footer>
  );
};

export default Footer;
