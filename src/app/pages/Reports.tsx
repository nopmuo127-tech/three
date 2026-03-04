import { useState } from "react";
import { Download, FileText, Filter, Calendar } from "lucide-react";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Table, TableHead, TableBody, TableRow, TableCell, TableHeader } from "../components/Table";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { motion } from "motion/react";

// Mock data
const reports = [
  { id: 1, title: "تقرير أداء الأقسام - مارس 2024", type: "أداء", date: "2024-03-01", status: "مكتمل", size: "2.4 MB" },
  { id: 2, title: "تقرير SLA - فبراير 2024", type: "SLA", date: "2024-02-28", status: "مكتمل", size: "1.8 MB" },
  { id: 3, title: "تقرير الطلبات الشهري", type: "طلبات", date: "2024-02-15", status: "مكتمل", size: "3.2 MB" },
  { id: 4, title: "تقرير الموظفين", type: "موارد بشرية", date: "2024-02-10", status: "مكتمل", size: "1.5 MB" },
  { id: 5, title: "تقرير التدقيق الأمني", type: "تدقيق", date: "2024-02-05", status: "مكتمل", size: "4.1 MB" },
];

export function Reports() {
  const [dateFrom, setDateFrom] = useState("2024-01-01");
  const [dateTo, setDateTo] = useState("2024-03-03");
  const [typeFilter, setTypeFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");

  const filteredReports = reports.filter((report) => {
    const matchesType = typeFilter === "all" || report.type === typeFilter;
    return matchesType;
  });

  return (
    <div className="min-h-screen bg-[#F8F7F4] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[#1E3A8A] mb-2">التقارير</h1>
          <p className="text-[#64748B]">إنشاء وتصدير التقارير التفصيلية</p>
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
                    <p className="text-sm text-[#64748B] mb-1">إجمالي التقارير</p>
                    <h3 className="text-2xl font-bold text-[#1E3A8A] m-0">48</h3>
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
                    <p className="text-sm text-[#64748B] mb-1">هذا الشهر</p>
                    <h3 className="text-2xl font-bold text-[#2563EB] m-0">12</h3>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#14B8A6] rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📈</span>
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
                    <p className="text-sm text-[#64748B] mb-1">تقارير مجدولة</p>
                    <h3 className="text-2xl font-bold text-[#22C55E] m-0">8</h3>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#22C55E] to-[#14B8A6] rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">⏰</span>
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
                    <p className="text-sm text-[#64748B] mb-1">الحجم الإجمالي</p>
                    <h3 className="text-2xl font-bold text-[#F59E0B] m-0">156 MB</h3>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-[#C6A75E] rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">💾</span>
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input
                label="من تاريخ"
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
              <Input
                label="إلى تاريخ"
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
              <Select
                label="نوع التقرير"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                options={[
                  { value: "all", label: "جميع الأنواع" },
                  { value: "أداء", label: "أداء" },
                  { value: "SLA", label: "SLA" },
                  { value: "طلبات", label: "طلبات" },
                  { value: "موارد بشرية", label: "موارد بشرية" },
                  { value: "تدقيق", label: "تدقيق" },
                ]}
              />
              <Select
                label="القسم"
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                options={[
                  { value: "all", label: "جميع الأقسام" },
                  { value: "الصيانة", label: "الصيانة" },
                  { value: "المشتريات", label: "المشتريات" },
                  { value: "المالية", label: "المالية" },
                ]}
              />
            </div>
            <div className="flex gap-3 mt-4">
              <Button variant="primary" size="md">
                <Filter className="w-4 h-4 ml-2" />
                تطبيق الفلاتر
              </Button>
              <Button variant="secondary" size="md">
                إعادة تعيين
              </Button>
            </div>
          </div>
        </Card>

        {/* Quick Export */}
        <Card className="mb-6">
          <div className="p-6">
            <h3 className="text-[#1E3A8A] mb-4">تصدير سريع</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="secondary" className="justify-center">
                <Download className="w-4 h-4 ml-2" />
                تصدير Excel
              </Button>
              <Button variant="secondary" className="justify-center">
                <Download className="w-4 h-4 ml-2" />
                تصدير PDF
              </Button>
              <Button variant="secondary" className="justify-center">
                <Download className="w-4 h-4 ml-2" />
                تصدير CSV
              </Button>
            </div>
          </div>
        </Card>

        {/* Reports Table */}
        <Card>
          <div className="p-6">
            <h3 className="text-[#1E3A8A] mb-4">التقارير المحفوظة</h3>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>اسم التقرير</TableHeader>
                  <TableHeader>النوع</TableHeader>
                  <TableHeader>التاريخ</TableHeader>
                  <TableHeader>الحالة</TableHeader>
                  <TableHeader>الحجم</TableHeader>
                  <TableHeader>الإجراءات</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredReports.map((report, index) => (
                  <motion.tr
                    key={report.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-[#F8F7F4] transition-colors duration-200"
                  >
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#14B8A6] rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-[#1E3A8A]">{report.title}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="blue">{report.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-[#64748B]">
                        <Calendar className="w-4 h-4" />
                        <span>{report.date}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="green">{report.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-[#64748B]">{report.size}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="secondary" size="sm">
                          <Download className="w-3 h-3 ml-1" />
                          تحميل
                        </Button>
                        <Button variant="secondary" size="sm">
                          عرض
                        </Button>
                      </div>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Scheduled Reports */}
        <div className="mt-8">
          <Card>
            <div className="p-6">
              <h3 className="text-[#1E3A8A] mb-4">التقارير المجدولة</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-[#F8F7F4] rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1E3A8A]">تقرير الأداء الشهري</p>
                      <p className="text-sm text-[#64748B]">كل يوم 1 من الشهر</p>
                    </div>
                  </div>
                  <Badge variant="green">نشط</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#F8F7F4] rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#14B8A6] rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1E3A8A]">تقرير SLA الأسبوعي</p>
                      <p className="text-sm text-[#64748B]">كل يوم أحد</p>
                    </div>
                  </div>
                  <Badge variant="green">نشط</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
