import { useState } from "react";
import { Shield, Search, Filter, Download } from "lucide-react";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Table, TableHead, TableBody, TableRow, TableCell, TableHeader } from "../components/Table";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { motion } from "motion/react";

// Mock data
const auditLogs = [
  {
    id: 1,
    user: "أحمد محمد",
    action: "تحديث حالة الطلب",
    ticketId: "REQ-2024-001",
    timestamp: "2024-03-03 14:30:22",
    ipAddress: "192.168.1.100",
    details: "تغيير الحالة من 'جديد' إلى 'قيد المعالجة'",
    severity: "معلومات",
  },
  {
    id: 2,
    user: "فاطمة علي",
    action: "إضافة مستخدم جديد",
    ticketId: "-",
    timestamp: "2024-03-03 13:15:10",
    ipAddress: "192.168.1.105",
    details: "إضافة مستخدم: سارة أحمد",
    severity: "متوسط",
  },
  {
    id: 3,
    user: "محمد سعيد",
    action: "تعديل صلاحيات",
    ticketId: "-",
    timestamp: "2024-03-03 11:45:33",
    ipAddress: "192.168.1.102",
    details: "تعديل صلاحيات المستخدم: خالد عمر",
    severity: "عالي",
  },
  {
    id: 4,
    user: "سارة أحمد",
    action: "حذف طلب",
    ticketId: "REQ-2024-012",
    timestamp: "2024-03-03 10:20:15",
    ipAddress: "192.168.1.108",
    details: "حذف طلب: REQ-2024-012",
    severity: "عالي",
  },
  {
    id: 5,
    user: "خالد عمر",
    action: "تصدير تقرير",
    ticketId: "-",
    timestamp: "2024-03-03 09:30:45",
    ipAddress: "192.168.1.103",
    details: "تصدير تقرير الأداء الشهري",
    severity: "معلومات",
  },
  {
    id: 6,
    user: "نورة سالم",
    action: "تسجيل دخول فاشل",
    ticketId: "-",
    timestamp: "2024-03-03 08:15:22",
    ipAddress: "192.168.1.120",
    details: "محاولة تسجيل دخول فاشلة - كلمة مرور خاطئة",
    severity: "تحذير",
  },
  {
    id: 7,
    user: "النظام",
    action: "نسخ احتياطي تلقائي",
    ticketId: "-",
    timestamp: "2024-03-03 02:00:00",
    ipAddress: "System",
    details: "إنشاء نسخة احتياطية للبيانات",
    severity: "معلومات",
  },
];

const severityColors = {
  "معلومات": "blue",
  "متوسط": "yellow",
  "عالي": "red",
  "تحذير": "yellow",
} as const;

export function AuditLog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [actionFilter, setActionFilter] = useState("all");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [dateFrom, setDateFrom] = useState("2024-03-01");
  const [dateTo, setDateTo] = useState("2024-03-03");

  const filteredLogs = auditLogs.filter((log) => {
    const matchesSearch = log.user.includes(searchTerm) || log.action.includes(searchTerm) || log.ticketId.includes(searchTerm);
    const matchesAction = actionFilter === "all" || log.action === actionFilter;
    const matchesSeverity = severityFilter === "all" || log.severity === severityFilter;
    return matchesSearch && matchesAction && matchesSeverity;
  });

  return (
    <div className="min-h-screen bg-[#F8F7F4] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[#1E3A8A] mb-2 flex items-center gap-3">
            <Shield className="w-8 h-8" />
            سجل التدقيق
          </h1>
          <p className="text-[#64748B]">متابعة جميع العمليات والتغييرات في النظام</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="hover:shadow-lg transition-all duration-200">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#64748B] mb-1">إجمالي السجلات</p>
                    <h3 className="text-2xl font-bold text-[#1E3A8A] m-0">2,847</h3>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📋</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="hover:shadow-lg transition-all duration-200">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#64748B] mb-1">اليوم</p>
                    <h3 className="text-2xl font-bold text-[#2563EB] m-0">142</h3>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#14B8A6] rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📊</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="hover:shadow-lg transition-all duration-200">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#64748B] mb-1">أحداث حرجة</p>
                    <h3 className="text-2xl font-bold text-[#EF4444] m-0">8</h3>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#EF4444] to-[#DC2626] rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">⚠️</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="hover:shadow-lg transition-all duration-200">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#64748B] mb-1">مستخدمين نشطين</p>
                    <h3 className="text-2xl font-bold text-[#22C55E] m-0">24</h3>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#22C55E] to-[#14B8A6] rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">👥</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <div className="p-6">
            <h3 className="text-[#1E3A8A] mb-4 flex items-center gap-2">
              <Filter className="w-5 h-5" />
              فلاتر البحث
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#94A3B8] w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="البحث في السجلات..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pr-10"
                  />
                </div>
              </div>
              <Input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                label="من"
              />
              <Input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                label="إلى"
              />
              <Select
                label="الأهمية"
                value={severityFilter}
                onChange={(e) => setSeverityFilter(e.target.value)}
                options={[
                  { value: "all", label: "جميع المستويات" },
                  { value: "معلومات", label: "معلومات" },
                  { value: "متوسط", label: "متوسط" },
                  { value: "عالي", label: "عالي" },
                  { value: "تحذير", label: "تحذير" },
                ]}
              />
            </div>
            <div className="flex gap-3 mt-4">
              <Button variant="primary" size="md">
                <Filter className="w-4 h-4 ml-2" />
                تطبيق
              </Button>
              <Button variant="secondary" size="md">
                إعادة تعيين
              </Button>
              <Button variant="secondary" size="md">
                <Download className="w-4 h-4 ml-2" />
                تصدير
              </Button>
            </div>
          </div>
        </Card>

        {/* Audit Log Table */}
        <Card>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>المستخدم</TableHeader>
                <TableHeader>الإجراء</TableHeader>
                <TableHeader>رقم الطلب</TableHeader>
                <TableHeader>التفاصيل</TableHeader>
                <TableHeader>الوقت</TableHeader>
                <TableHeader>IP Address</TableHeader>
                <TableHeader>الأهمية</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredLogs.map((log, index) => (
                <motion.tr
                  key={log.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-[#F8F7F4] transition-colors duration-200"
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#2563EB] to-[#14B8A6] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">{log.user.charAt(0)}</span>
                      </div>
                      <span className="font-medium text-[#1E3A8A]">{log.user}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">{log.action}</span>
                  </TableCell>
                  <TableCell>
                    {log.ticketId !== "-" ? (
                      <span className="text-[#2563EB] font-semibold">{log.ticketId}</span>
                    ) : (
                      <span className="text-[#94A3B8]">-</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-[#64748B]">{log.details}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-[#64748B]">{log.timestamp}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-xs font-mono text-[#64748B]">{log.ipAddress}</span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={severityColors[log.severity as keyof typeof severityColors]}>
                      {log.severity}
                    </Badge>
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </Card>

        {/* Activity Summary */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <div className="p-6">
                <h3 className="text-[#1E3A8A] mb-4">أكثر العمليات</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#64748B]">تحديث الطلبات</span>
                    <span className="font-semibold text-[#1E3A8A]">342</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#64748B]">تسجيل دخول</span>
                    <span className="font-semibold text-[#1E3A8A]">286</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#64748B]">تصدير تقارير</span>
                    <span className="font-semibold text-[#1E3A8A]">124</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card>
              <div className="p-6">
                <h3 className="text-[#1E3A8A] mb-4">أكثر المستخدمين نشاطاً</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#64748B]">أحمد محمد</span>
                    <span className="font-semibold text-[#1E3A8A]">89</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#64748B]">فاطمة علي</span>
                    <span className="font-semibold text-[#1E3A8A]">76</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#64748B]">محمد سعيد</span>
                    <span className="font-semibold text-[#1E3A8A]">64</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card>
              <div className="p-6">
                <h3 className="text-[#1E3A8A] mb-4">محاولات فاشلة</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#64748B]">تسجيل دخول فاشل</span>
                    <span className="font-semibold text-[#EF4444]">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#64748B]">صلاحيات غير كافية</span>
                    <span className="font-semibold text-[#F59E0B]">8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#64748B]">عمليات محظورة</span>
                    <span className="font-semibold text-[#EF4444]">3</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
