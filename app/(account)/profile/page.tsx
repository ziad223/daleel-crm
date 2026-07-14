"use client";

import React, { useState } from 'react';
import { Save } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { toast } from 'sonner';

export default function ProfilePage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: 'عبدالله الحربي',
    email: 'abdullah@company.com',
    phone: '0501234567',
    jobTitle: 'مدير المبيعات'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("تم تحديث البيانات الشخصية بنجاح!");
    }, 1000);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h1 className="text-2xl font-bold text-slate-900">الملف الشخصي</h1>
        <p className="text-slate-500 text-sm mt-2">تحديث بياناتك الشخصية ومعلومات الاتصال.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">الاسم الكامل</label>
            <input 
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/10" 
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">المسمى الوظيفي</label>
            <input 
              type="text" 
              value={formData.jobTitle}
              onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/10" 
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">البريد الإلكتروني</label>
            <input 
              type="email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/10 text-left" 
              dir="ltr"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">رقم الهاتف</label>
            <input 
              type="text" 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/10 text-left" 
              dir="ltr"
            />
          </div>
        </div>

        <div className="pt-6 flex justify-end">
          <Button 
            type="submit" 
            disabled={loading}
            className="btn-primary"
          >
            {loading ? "جاري الحفظ..." : "حفظ التغييرات"}
            <Save className="w-4 h-4 mr-2" />
          </Button>
        </div>
      </form>
    </div>
  );
}
