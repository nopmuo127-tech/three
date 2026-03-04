import { useState } from "react";
import { Settings as SettingsIcon, Bell, Shield, Clock, Target, Upload } from "lucide-react";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { motion } from "motion/react";

export function Settings() {
  const [systemName, setSystemName] = useState("رسمي");
  const [slaSettings, setSlaSettings] = useState({
    high: "24",
    medium: "48",
    low: "72",
  });

  const handleSave = () => {
    // Handle save settings
    console.log("Settings saved");
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] py-8">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[#1E3A8A] mb-2 flex items-center gap-3">
            <SettingsIcon className="w-8 h-8" />
            الإعدادات
          </h1>
          <p className="text-[#64748B]">إدارة إعدادات النظام والتكوينات</p>
        </div>

        {/* System Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <Card>
            <div className="p-6">
              <h3 className="text-[#1E3A8A] mb-4 flex items-center gap-2">
                <SettingsIcon className="w-5 h-5" />
                إعدادات النظام
              </h3>
              <div className="space-y-4">
                <Input
                  label="اسم النظام"
                  value={systemName}
                  onChange={(e) => setSystemName(e.target.value)}
                  placeholder="اسم المنصة"
                />
                <div>
                  <label className="block text-[#1E3A8A] mb-2">شعار النظام</label>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-xl flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">ر</span>
                    </div>
                    <Button variant="secondary" size="md">
                      <Upload className="w-4 h-4 ml-2" />
                      تحميل شعار جديد
                    </Button>
                  </div>
                </div>
                <Input
                  label="البريد الإلكتروني للدعم"
                  type="email"
                  placeholder="support@rassmi.gov"
                  defaultValue="support@rassmi.gov"
                />
                <Input
                  label="رقم الهاتف"
                  type="tel"
                  placeholder="920000000"
                  defaultValue="920000000"
                />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Request Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <Card>
            <div className="p-6">
              <h3 className="text-[#1E3A8A] mb-4">أنواع الطلبات</h3>
              <div className="space-y-3">
                {["طلب صيانة", "طلب شراء", "استفسار", "شكوى", "اقتراح"].map((type, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-[#F8F7F4] rounded-lg">
                    <span className="font-medium text-[#1E3A8A]">{type}</span>
                    <div className="flex gap-2">
                      <Button variant="secondary" size="sm">تعديل</Button>
                      <Button variant="secondary" size="sm">حذف</Button>
                    </div>
                  </div>
                ))}
                <Button variant="primary" className="w-full">
                  إضافة نوع جديد
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* SLA Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <Card>
            <div className="p-6">
              <h3 className="text-[#1E3A8A] mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                إعدادات SLA
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-[#1E3A8A] mb-2">الأولوية العالية (ساعات)</label>
                  <Input
                    type="number"
                    value={slaSettings.high}
                    onChange={(e) => setSlaSettings({ ...slaSettings, high: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-[#1E3A8A] mb-2">الأولوية المتوسطة (ساعات)</label>
                  <Input
                    type="number"
                    value={slaSettings.medium}
                    onChange={(e) => setSlaSettings({ ...slaSettings, medium: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-[#1E3A8A] mb-2">الأولوية المنخفضة (ساعات)</label>
                  <Input
                    type="number"
                    value={slaSettings.low}
                    onChange={(e) => setSlaSettings({ ...slaSettings, low: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* KPI Weights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <Card>
            <div className="p-6">
              <h3 className="text-[#1E3A8A] mb-4 flex items-center gap-2">
                <Target className="w-5 h-5" />
                أوزان مؤشرات الأداء
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-[#1E3A8A]">معدل الإنجاز</label>
                    <span className="text-sm font-semibold text-[#2563EB]">40%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="40"
                    className="w-full h-2 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-[#1E3A8A]">الالتزام بـ SLA</label>
                    <span className="text-sm font-semibold text-[#2563EB]">35%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="35"
                    className="w-full h-2 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-[#1E3A8A]">رضا العملاء</label>
                    <span className="text-sm font-semibold text-[#2563EB]">25%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="25"
                    className="w-full h-2 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Notification Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          <Card>
            <div className="p-6">
              <h3 className="text-[#1E3A8A] mb-4 flex items-center gap-2">
                <Bell className="w-5 h-5" />
                إعدادات الإشعارات
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-[#F8F7F4] rounded-lg">
                  <div>
                    <p className="font-medium text-[#1E3A8A]">إشعارات الطلبات الجديدة</p>
                    <p className="text-sm text-[#64748B]">إرسال إشعار عند تلقي طلب جديد</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-[#2563EB] rounded" />
                </div>
                <div className="flex items-center justify-between p-3 bg-[#F8F7F4] rounded-lg">
                  <div>
                    <p className="font-medium text-[#1E3A8A]">تنبيهات SLA</p>
                    <p className="text-sm text-[#64748B]">تنبيه عند اقتراب انتهاء الوقت المحدد</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-[#2563EB] rounded" />
                </div>
                <div className="flex items-center justify-between p-3 bg-[#F8F7F4] rounded-lg">
                  <div>
                    <p className="font-medium text-[#1E3A8A]">تحديثات الطلبات</p>
                    <p className="text-sm text-[#64748B]">إشعار عند تحديث حالة الطلب</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-[#2563EB] rounded" />
                </div>
                <div className="flex items-center justify-between p-3 bg-[#F8F7F4] rounded-lg">
                  <div>
                    <p className="font-medium text-[#1E3A8A]">التقارير الدورية</p>
                    <p className="text-sm text-[#64748B]">إرسال تقارير الأداء الشهرية</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-[#2563EB] rounded" />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Security Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-6"
        >
          <Card>
            <div className="p-6">
              <h3 className="text-[#1E3A8A] mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                إعدادات الأمان
              </h3>
              <div className="space-y-4">
                <Select
                  label="مدة صلاحية الجلسة"
                  options={[
                    { value: "1", label: "ساعة واحدة" },
                    { value: "4", label: "4 ساعات" },
                    { value: "8", label: "8 ساعات" },
                    { value: "24", label: "24 ساعة" },
                  ]}
                  defaultValue="8"
                />
                <div className="flex items-center justify-between p-3 bg-[#F8F7F4] rounded-lg">
                  <div>
                    <p className="font-medium text-[#1E3A8A]">المصادقة الثنائية</p>
                    <p className="text-sm text-[#64748B]">طبقة أمان إضافية لتسجيل الدخول</p>
                  </div>
                  <input type="checkbox" className="w-5 h-5 text-[#2563EB] rounded" />
                </div>
                <div className="flex items-center justify-between p-3 bg-[#F8F7F4] rounded-lg">
                  <div>
                    <p className="font-medium text-[#1E3A8A]">سجل التدقيق</p>
                    <p className="text-sm text-[#64748B]">تسجيل جميع العمليات الحساسة</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-[#2563EB] rounded" />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Save Button */}
        <div className="flex gap-3">
          <Button variant="primary" size="md" className="flex-1" onClick={handleSave}>
            حفظ الإعدادات
          </Button>
          <Button variant="secondary" size="md" className="flex-1">
            إلغاء
          </Button>
        </div>
      </div>
    </div>
  );
}
