"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, Lock, LogOut } from 'lucide-react';
import { toast } from 'sonner';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success("تم تسجيل الخروج بنجاح.");
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
  };

  const menuItems = [
    { href: "/profile", label: "الملف الشخصي", icon: <User className="w-5 h-5" /> },
    { href: "/change-password", label: "تغيير كلمة المرور", icon: <Lock className="w-5 h-5" /> },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm sticky top-24">
              <div className="mb-6 pb-6 border-b border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold text-xl">
                  ع
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">عبدالله الحربي</h3>
                  <p className="text-xs text-slate-500 mt-1">مدير المبيعات</p>
                </div>
              </div>

              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "bg-blue-50 text-[var(--primary)]"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-all"
                >
                  <LogOut className="w-5 h-5" />
                  تسجيل الخروج
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
