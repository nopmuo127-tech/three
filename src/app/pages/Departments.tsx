import { useState } from "react";
import { Plus, Users, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Table, TableHead, TableBody, TableRow, TableCell, TableHeader } from "../components/Table";
import { Modal } from "../components/Modal";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { motion } from "motion/react";

// Mock data
const departments = [
  { id: 1, name: "الصيانة", requestsCount: 45, sla: 92, performance: "ممتاز", trend: "up", manager: "أحمد محمد", employees: 12 },
  { id: 2, name: "المشتريات", requestsCount: 38, sla: 88, performance: "جيد جداً", trend: "up", manager: "فاطمة علي", employees: 8 },
  { id: 3, name: "المالية", requestsCount: 52, sla: 76, performance: "جيد", trend: "down", manager: "محمد سعيد", employees: 15 },
  { id: 4, name: "الموارد البشرية", requestsCount: 31, sla: 95, performance: "ممتاز", trend: "up", manager: "سارة أحمد", employees: 10 },
  { id: 5, name: "التطوير", requestsCount: 42, sla: 82, performance: "جيد جداً", trend: "stable", manager: "خالد عمر", employees: 20 },
  { id: 6, name: "التسويق", requestsCount: 28, sla: 70, performance: "مقبول", trend: "down", manager: "نورة سالم", employees: 7 },
];

export function Departments() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    manager: "",
    employees: "",
  });

  const handleSubmit = () => {
    // Handle department creation
    setIsModalOpen(false);
    setFormData({ name: "", manager: "", employees: "" });
  };

  const getPerformanceColor = (performance: string) => {
    if (performance === "ممتاز") return "green";
    if (performance === "جيد جداً") return "blue";
    if (performance === "جيد") return "yellow";
    return "gray";
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-[#1E3A8A] mb-2">الأقسام</h1>
            <p className="text-[#64748B]">إدارة ومتابعة أداء الأقسام</p>
          </div>
          <Button variant="primary" size="md" onClick={() => setIsModalOpen(true)}>
            <Plus className="w-4 h-4 ml-2" />
            إضافة قسم
          </Button>
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
                    <p className="text-sm text-[#64748B] mb-1">إجمالي الأقسام</p>
                    <h3 className="text-2xl font-bold text-[#1E3A8A] m-0">12</h3>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🏢</span>
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
                    <p className="text-sm text-[#64748B] mb-1">متوسط SLA</p>
                    <h3 className="text-2xl font-bold text-[#22C55E] m-0">84%</h3>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#22C55E] to-[#14B8A6] rounded-xl flex items-center justify-center">
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
                    <p className="text-sm text-[#64748B] mb-1">إجمالي الموظفين</p>
                    <h3 className="text-2xl font-bold text-[#2563EB] m-0">72</h3>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#14B8A6] rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">👥</span>
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
                    <p className="text-sm text-[#64748B] mb-1">إجمالي الطلبات</p>
                    <h3 className="text-2xl font-bold text-[#F59E0B] m-0">236</h3>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-[#C6A75E] rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📋</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Departments Table */}
        <Card>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>اسم القسم</TableHeader>
                <TableHeader>المدير</TableHeader>
                <TableHeader>عدد الموظفين</TableHeader>
                <TableHeader>عدد الطلبات</TableHeader>
                <TableHeader>SLA %</TableHeader>
                <TableHeader>الأداء</TableHeader>
                <TableHeader>الاتجاه</TableHeader>
                <TableHeader>الإجراءات</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {departments.map((dept, index) => (
                <motion.tr
                  key={dept.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-[#F8F7F4] transition-colors duration-200"
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#14B8A6] rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{dept.name.charAt(0)}</span>
                      </div>
                      <span className="font-semibold text-[#1E3A8A]">{dept.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#64748B]" />
                      <span>{dept.manager}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">{dept.employees}</span>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">{dept.requestsCount}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-[#E2E8F0] rounded-full overflow-hidden max-w-[80px]">
                        <div
                          className={`h-full rounded-full ${
                            dept.sla >= 90 ? "bg-[#22C55E]" :
                            dept.sla >= 80 ? "bg-[#2563EB]" :
                            dept.sla >= 70 ? "bg-[#F59E0B]" :
                            "bg-[#EF4444]"
                          }`}
                          style={{ width: `${dept.sla}%` }}
                        />
                      </div>
                      <span className="font-semibold text-[#1E3A8A]">{dept.sla}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getPerformanceColor(dept.performance) as any}>
                      {dept.performance}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {dept.trend === "up" && <TrendingUp className="w-5 h-5 text-[#22C55E]" />}
                    {dept.trend === "down" && <TrendingDown className="w-5 h-5 text-[#EF4444]" />}
                    {dept.trend === "stable" && <Minus className="w-5 h-5 text-[#64748B]" />}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="secondary" size="sm">عرض</Button>
                      <Button variant="secondary" size="sm">تعديل</Button>
                    </div>
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </Card>

        {/* Organizational Tree */}
        <div className="mt-8">
          <Card>
            <div className="p-6">
              <h3 className="text-[#1E3A8A] mb-6">الهيكل التنظيمي</h3>
              <div className="flex flex-col items-center">
                {/* CEO */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] text-white rounded-xl p-4 mb-6"
                >
                  <p className="text-sm mb-1">المدير التنفيذي</p>
                  <p className="font-bold">عبدالله الأحمد</p>
                </motion.div>

                {/* Department Heads */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                  {departments.slice(0, 6).map((dept, index) => (
                    <motion.div
                      key={dept.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white border-2 border-[#E2E8F0] rounded-xl p-4 hover:border-[#2563EB] transition-all duration-200"
                    >
                      <p className="text-sm text-[#64748B] mb-1">{dept.name}</p>
                      <p className="font-semibold text-[#1E3A8A]">{dept.manager}</p>
                      <p className="text-xs text-[#94A3B8] mt-2">{dept.employees} موظف</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Add Department Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="إضافة قسم جديد"
        size="md"
      >
        <div className="space-y-4">
          <Input
            label="اسم القسم"
            placeholder="أدخل اسم القسم"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            label="المدير"
            placeholder="اسم المدير"
            value={formData.manager}
            onChange={(e) => setFormData({ ...formData, manager: e.target.value })}
          />
          <Input
            label="عدد الموظفين"
            type="number"
            placeholder="0"
            value={formData.employees}
            onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
          />
          <div className="flex gap-3 pt-4">
            <Button variant="primary" className="flex-1" onClick={handleSubmit}>
              إضافة
            </Button>
            <Button variant="secondary" className="flex-1" onClick={() => setIsModalOpen(false)}>
              إلغاء
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
