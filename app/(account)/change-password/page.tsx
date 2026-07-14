"use client";

import React, { useState } from 'react';
import { Save, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { toast } from 'sonner';

export default function ChangePasswordPage() {
  const [loading, setLoading] = useState(false);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
      toast.error("يرجى ملء جميع الحقول.");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("كلمات المرور الجديدة غير متطابقة.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      toast.success("تم تحديث كلمة المرور بنجاح!");
    }, 1000);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h1 className="text-2xl font-bold text-slate-900">تغيير كلمة المرور</h1>
        <p className="text-slate-500 text-sm mt-2">قم بتحديث كلمة المرور الخاصة بحسابك لزيادة الأمان.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">كلمة المرور الحالية</label>
          <div className="relative">
            <input 
              type={showCurrent ? "text" : "password"} 
              value={formData.currentPassword}
              onChange={(e) => setFormData({...formData, currentPassword: e.target.value})}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/10 text-left font-mono" 
              dir="ltr"
            />
            <button 
              type="button" 
              onClick={() => setShowCurrent(!showCurrent)}
              className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-600"
            >
              {showCurrent ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">كلمة المرور الجديدة</label>
          <div className="relative">
            <input 
              type={showNew ? "text" : "password"} 
              value={formData.newPassword}
              onChange={(e) => setFormData({...formData, newPassword: e.target.value})}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/10 text-left font-mono" 
              dir="ltr"
            />
            <button 
              type="button" 
              onClick={() => setShowNew(!showNew)}
              className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-600"
            >
              {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">تأكيد كلمة المرور الجديدة</label>
          <div className="relative">
            <input 
              type={showNew ? "text" : "password"} 
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/10 text-left font-mono" 
              dir="ltr"
            />
          </div>
        </div>

        <div className="pt-4">
          <Button 
            type="submit" 
            disabled={loading}
            className="btn-primary w-full justify-center"
          >
            {loading ? "جاري التحديث..." : "تحديث كلمة المرور"}
            <Save className="w-4 h-4 mr-2" />
          </Button>
        </div>
      </form>
    </div>
  );
}
