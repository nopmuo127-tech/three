import { useState } from "react";
import { Plus, Search, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Table, TableHead, TableBody, TableRow, TableCell, TableHeader } from "../components/Table";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Modal } from "../components/Modal";
import { Textarea } from "../components/Textarea";
import { motion } from "motion/react";

// Mock data
const tasks = [
  { id: 1, title: "مراجعة تقرير الأداء الشهري", assignee: "أحمد محمد", department: "الإدارة", status: "قيد التنفيذ", priority: "عالية", dueDate: "2024-03-05", progress: 60 },
  { id: 2, title: "تحديث قاعدة البيانات", assignee: "فاطمة علي", department: "التقنية", status: "جديدة", priority: "متوسطة", dueDate: "2024-03-08", progress: 0 },
  { id: 3, title: "إعداد عرض تقديمي للاجتماع", assignee: "محمد سعيد", department: "التسويق", status: "مكتملة", priority: "منخفضة", dueDate: "2024-03-01", progress: 100 },
  { id: 4, title: "تدريب الموظفين الجدد", assignee: "سارة أحمد", department: "الموارد البشرية", status: "قيد التنفيذ", priority: "عالية", dueDate: "2024-03-07", progress: 40 },
  { id: 5, title: "مراجعة العقود", assignee: "خالد عمر", department: "القانونية", status: "متأخرة", priority: "عالية", dueDate: "2024-02-28", progress: 30 },
];

const statusColors = {
  "جديدة": "blue",
  "قيد التنفيذ": "yellow",
  "مكتملة": "green",
  "متأخرة": "red",
} as const;

const priorityColors = {
  "عالية": "red",
  "متوسطة": "yellow",
  "منخفضة": "green",
} as const;

export function InternalTasks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    assignee: "",
    department: "الإدارة",
    priority: "متوسطة",
    dueDate: "",
    description: "",
  });

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.includes(searchTerm);
    const matchesStatus = statusFilter === "all" || task.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleCreateTask = () => {
    // Handle task creation
    setIsModalOpen(false);
    setFormData({
      title: "",
      assignee: "",
      department: "الإدارة",
      priority: "متوسطة",
      dueDate: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-[#1E3A8A] mb-2">المهام الداخلية</h1>
            <p className="text-[#64748B]">إدارة ومتابعة مهام الفريق</p>
          </div>
          <Button variant="primary" size="md" onClick={() => setIsModalOpen(true)}>
            <Plus className="w-4 h-4 ml-2" />
            مهمة جديدة
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
                    <p className="text-sm text-[#64748B] mb-1">إجمالي المهام</p>
                    <h3 className="text-2xl font-bold text-[#1E3A8A] m-0">48</h3>
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
                    <p className="text-sm text-[#64748B] mb-1">قيد التنفيذ</p>
                    <h3 className="text-2xl font-bold text-[#F59E0B] m-0">18</h3>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-[#C6A75E] rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
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
                    <p className="text-sm text-[#64748B] mb-1">مكتملة</p>
                    <h3 className="text-2xl font-bold text-[#22C55E] m-0">25</h3>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#22C55E] to-[#14B8A6] rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
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
                    <p className="text-sm text-[#64748B] mb-1">متأخرة</p>
                    <h3 className="text-2xl font-bold text-[#EF4444] m-0">5</h3>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#EF4444] to-[#DC2626] rounded-xl flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#94A3B8] w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="البحث عن مهمة..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pr-10"
                  />
                </div>
              </div>
              <Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                options={[
                  { value: "all", label: "جميع الحالات" },
                  { value: "جديدة", label: "جديدة" },
                  { value: "قيد التنفيذ", label: "قيد التنفيذ" },
                  { value: "مكتملة", label: "مكتملة" },
                  { value: "متأخرة", label: "متأخرة" },
                ]}
              />
            </div>
          </div>
        </Card>

        {/* Tasks Table */}
        <Card>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>المهمة</TableHeader>
                <TableHeader>المسؤول</TableHeader>
                <TableHeader>القسم</TableHeader>
                <TableHeader>الأولوية</TableHeader>
                <TableHeader>الحالة</TableHeader>
                <TableHeader>التقدم</TableHeader>
                <TableHeader>الموعد النهائي</TableHeader>
                <TableHeader>الإجراءات</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTasks.map((task, index) => (
                <motion.tr
                  key={task.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-[#F8F7F4] transition-colors duration-200"
                >
                  <TableCell>
                    <span className="font-semibold text-[#1E3A8A]">{task.title}</span>
                  </TableCell>
                  <TableCell>{task.assignee}</TableCell>
                  <TableCell>{task.department}</TableCell>
                  <TableCell>
                    <Badge variant={priorityColors[task.priority as keyof typeof priorityColors]}>
                      {task.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusColors[task.status as keyof typeof statusColors]}>
                      {task.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-[#E2E8F0] rounded-full overflow-hidden max-w-[100px]">
                        <div
                          className="h-full bg-gradient-to-r from-[#2563EB] to-[#14B8A6] rounded-full"
                          style={{ width: `${task.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-[#64748B]">{task.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-[#64748B]">{task.dueDate}</span>
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
      </div>

      {/* Create Task Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="إنشاء مهمة جديدة"
        size="md"
      >
        <div className="space-y-4">
          <Input
            label="عنوان المهمة"
            placeholder="أدخل عنوان المهمة"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <Textarea
            label="الوصف"
            placeholder="وصف تفصيلي للمهمة"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={3}
          />
          <Input
            label="المسؤول"
            placeholder="اسم المسؤول"
            value={formData.assignee}
            onChange={(e) => setFormData({ ...formData, assignee: e.target.value })}
          />
          <Select
            label="القسم"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            options={[
              { value: "الإدارة", label: "الإدارة" },
              { value: "التقنية", label: "التقنية" },
              { value: "التسويق", label: "التسويق" },
              { value: "الموارد البشرية", label: "الموارد البشرية" },
              { value: "القانونية", label: "القانونية" },
            ]}
          />
          <Select
            label="الأولوية"
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
            options={[
              { value: "عالية", label: "عالية" },
              { value: "متوسطة", label: "متوسطة" },
              { value: "منخفضة", label: "منخفضة" },
            ]}
          />
          <Input
            label="الموعد النهائي"
            type="date"
            value={formData.dueDate}
            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
          />
          <div className="flex gap-3 pt-4">
            <Button variant="primary" className="flex-1" onClick={handleCreateTask}>
              إنشاء المهمة
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
