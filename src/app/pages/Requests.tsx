import { useState } from "react";
import { Link } from "react-router";
import { Search, Plus, Filter, Download } from "lucide-react";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Table, TableHead, TableBody, TableRow, TableCell, TableHeader } from "../components/Table";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { EmptyState } from "../components/EmptyState";
import { motion } from "motion/react";

// Mock data
const mockRequests = [
  { id: "REQ-2024-001", title: "طلب صيانة مكيف", department: "الصيانة", status: "قيد المعالجة", priority: "عالية", date: "2024-03-01", assignee: "أحمد محمد" },
  { id: "REQ-2024-002", title: "طلب شراء معدات", department: "المشتريات", status: "جديد", priority: "متوسطة", date: "2024-03-02", assignee: "فاطمة علي" },
  { id: "REQ-2024-003", title: "استفسار عن فاتورة", department: "المالية", status: "مكتمل", priority: "منخفضة", date: "2024-03-03", assignee: "محمد سعيد" },
  { id: "REQ-2024-004", title: "طلب إجازة", department: "الموارد البشرية", status: "متأخر", priority: "عالية", date: "2024-02-28", assignee: "سارة أحمد" },
  { id: "REQ-2024-005", title: "طلب تدريب", department: "التطوير", status: "قيد المعالجة", priority: "متوسطة", date: "2024-03-01", assignee: "خالد عمر" },
];

const statusColors = {
  "جديد": "blue",
  "قيد المعالجة": "yellow",
  "مكتمل": "green",
  "متأخر": "red",
} as const;

const priorityColors = {
  "عالية": "red",
  "متوسطة": "yellow",
  "منخفضة": "green",
} as const;

export function Requests() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const filteredRequests = mockRequests.filter((req) => {
    const matchesSearch = req.title.includes(searchTerm) || req.id.includes(searchTerm);
    const matchesStatus = statusFilter === "all" || req.status === statusFilter;
    const matchesPriority = priorityFilter === "all" || req.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div className="min-h-screen bg-[#F8F7F4] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[#1E3A8A] mb-2">الطلبات</h1>
          <p className="text-[#64748B]">إدارة ومتابعة جميع الطلبات</p>
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
                    <p className="text-sm text-[#64748B] mb-1">إجمالي الطلبات</p>
                    <h3 className="text-2xl font-bold text-[#1E3A8A] m-0">156</h3>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📊</span>
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
                    <p className="text-sm text-[#64748B] mb-1">طلبات جديدة</p>
                    <h3 className="text-2xl font-bold text-[#2563EB] m-0">24</h3>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#14B8A6] rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">✨</span>
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
                    <p className="text-sm text-[#64748B] mb-1">قيد المعالجة</p>
                    <h3 className="text-2xl font-bold text-[#F59E0B] m-0">87</h3>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-[#C6A75E] rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">⚙️</span>
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
                    <p className="text-sm text-[#64748B] mb-1">طلبات متأخرة</p>
                    <h3 className="text-2xl font-bold text-[#EF4444] m-0">12</h3>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#EF4444] to-[#DC2626] rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">⚠️</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Filters and Actions */}
        <Card className="mb-6">
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#94A3B8] w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="البحث عن طلب..."
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
                  { value: "جديد", label: "جديد" },
                  { value: "قيد المعالجة", label: "قيد المعالجة" },
                  { value: "مكتمل", label: "مكتمل" },
                  { value: "متأخر", label: "متأخر" },
                ]}
              />
              <Select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                options={[
                  { value: "all", label: "جميع الأولويات" },
                  { value: "عالية", label: "عالية" },
                  { value: "متوسطة", label: "متوسطة" },
                  { value: "منخفضة", label: "منخفضة" },
                ]}
              />
            </div>
            <div className="flex gap-3 mt-4">
              <Link to="/submit-report">
                <Button variant="primary" size="md">
                  <Plus className="w-4 h-4 ml-2" />
                  طلب جديد
                </Button>
              </Link>
              <Button variant="secondary" size="md">
                <Download className="w-4 h-4 ml-2" />
                تصدير
              </Button>
            </div>
          </div>
        </Card>

        {/* Requests Table */}
        <Card>
          {filteredRequests.length > 0 ? (
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>رقم الطلب</TableHeader>
                  <TableHeader>العنوان</TableHeader>
                  <TableHeader>القسم</TableHeader>
                  <TableHeader>المسؤول</TableHeader>
                  <TableHeader>الأولوية</TableHeader>
                  <TableHeader>الحالة</TableHeader>
                  <TableHeader>التاريخ</TableHeader>
                  <TableHeader>الإجراءات</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>
                      <span className="font-semibold text-[#2563EB]">{request.id}</span>
                    </TableCell>
                    <TableCell>{request.title}</TableCell>
                    <TableCell>{request.department}</TableCell>
                    <TableCell>{request.assignee}</TableCell>
                    <TableCell>
                      <Badge variant={priorityColors[request.priority as keyof typeof priorityColors]}>
                        {request.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={statusColors[request.status as keyof typeof statusColors]}>
                        {request.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{request.date}</TableCell>
                    <TableCell>
                      <Link to={`/request/${request.id}`}>
                        <Button variant="secondary" size="sm">
                          عرض
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <EmptyState
              title="لا توجد طلبات"
              description="لم يتم العثور على أي طلبات تطابق معايير البحث"
              action={
                <Button variant="primary" onClick={() => {
                  setSearchTerm("");
                  setStatusFilter("all");
                  setPriorityFilter("all");
                }}>
                  إعادة تعيين الفلاتر
                </Button>
              }
            />
          )}
        </Card>
      </div>
    </div>
  );
}
