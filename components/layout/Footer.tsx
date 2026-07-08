import Link from 'next/link';
import { 
  Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, 
  Send, Target, Globe, ShieldCheck 
} from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-8 text-sm relative border-t border-slate-900" dir="rtl">
      {/* Top Decorative Thin Accent Gradient Line */}
      <div className="absolute top-0 right-0 left-0 h-[3px] bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-teal-400" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-slate-900">
          
          {/* Brand Info (takes 2 columns on lg screens) */}
          <div className="lg:col-span-2 space-y-6 text-right">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)] to-[var(--primary-dark)] rounded-xl rotate-6" />
                <div className="absolute inset-0.5 bg-slate-950 rounded-[9px] flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">دليل الشرق CRM</span>
            </Link>
            
            <p className="max-w-sm text-xs leading-relaxed text-slate-500">
              أول نظام CRM SaaS ذكي متعدد العملاء مصمم خصيصاً لتمكين فرق المبيعات في الإمارات والخليج العربي. نسعى لتمكين الشركات من إدارة عملائها وأتمتة واتساب وتتبع المكالمات بأعلى درجات الأمان وعزل البيانات.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: <Facebook className="w-4 h-4" />, href: "https://facebook.com" },
                { icon: <Twitter className="w-4 h-4" />, href: "https://twitter.com" },
                { icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com" },
                { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com" }
              ].map((item, idx) => (
                <a 
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Product Links */}
          <div className="space-y-4 text-right">
            <h4 className="font-bold text-white text-xs tracking-wider uppercase">المنتج والحلول</h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: "المميزات الفنية", href: "/features" },
                { label: "باقات الأسعار", href: "/pricing" },
                { label: "حجز الديمو المجاني", href: "/demo" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href}
                    className="hover:text-white hover:underline transition-all block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="space-y-4 text-right">
            <h4 className="font-bold text-white text-xs tracking-wider uppercase">الشركة</h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: "من نحن ورؤيتنا", href: "/about" },
                { label: "تواصل معنا", href: "/contact" },
                { label: "الأسئلة الشائعة", href: "/faq" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href}
                    className="hover:text-white hover:underline transition-all block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Guidelines */}
          <div className="space-y-4 text-right">
            <h4 className="font-bold text-white text-xs tracking-wider uppercase">الوثائق القانونية</h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: "سياسة الخصوصية والأمان", href: "/privacy" },
                { label: "شروط وأحكام الاستخدام", href: "/terms" },
                { label: "سياسة الاسترجاع المالي", href: "/refund" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href}
                    className="hover:text-white hover:underline transition-all block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-[11px] text-slate-600 gap-4">
          <div className="text-right">
            © {year} دليل الشرق للتقنية (دليل الشرق CRM). جميع الحقوق محفوظة.
          </div>
          
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>نظام Multi-Tenant آمن بمعايير تشفير عالمية</span>
          </div>

          <div className="text-left font-semibold">
            صنع بحب في دبي، الإمارات العربية المتحدة 🇦🇪
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
