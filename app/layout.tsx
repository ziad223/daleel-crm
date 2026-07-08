import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "دليل الشرق CRM | نظام CRM ذكي لإدارة المبيعات والواتساب في الإمارات",
  description: "نظام CRM SaaS سحابي احترافي لتمكين فرق المبيعات في دبي وأبوظبي والإمارات. تتبع المكالمات، أرشفة واتساب، عزل تام للبيانات، ودعم بالذكاء الاصطناعي.",
  keywords: [
    "CRM الإمارات",
    "نظام إدارة العملاء دبي",
    "برنامج مبيعات واتساب",
    "أتمتة مبيعات الشركات",
    "تتبع اتصالات الموظفين",
    "دليل الشرق CRM",
    "منصة سحابية للمبيعات"
  ],
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "دليل الشرق CRM - نظام المبيعات الذكي في الإمارات",
    description: "أول نظام CRM SaaS ذكي بأتمتة واتساب وتتبع كامل للعملاء والمبيعات مع عزل آمن للبيانات في الإمارات والخليج.",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
