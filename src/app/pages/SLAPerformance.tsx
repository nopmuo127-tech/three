import { Card } from "../components/Card";
import { Badge } from "../components/Badge";
import { TrendingUp, TrendingDown, Clock, Target, Award, AlertTriangle } from "lucide-react";
import { motion } from "motion/react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Mock data
const monthlyData = [
  { month: "يناير", sla: 88, avgTime: 45 },
  { month: "فبراير", sla: 92, avgTime: 38 },
  { month: "مارس", sla: 85, avgTime: 42 },
];

const departmentRanking = [
  { name: "الموارد البشرية", sla: 95, score: 98, requests: 31 },
  { name: "الصيانة", sla: 92, score: 94, requests: 45 },
  { name: "المشتريات", sla: 88, score: 90, requests: 38 },
  { name: "التطوير", sla: 82, score: 85, requests: 42 },
  { name: "المالية", sla: 76, score: 78, requests: 52 },
  { name: "التسويق", sla: 70, score: 72, requests: 28 },
];

const slaDistribution = [
  { name: "ضمن SLA", value: 156, color: "#22C55E" },
  { name: "متأخر", value: 24, color: "#F59E0B" },
  { name: "متأخر جداً", value: 8, color: "#EF4444" },
];

export function SLAPerformance() {
  return (
    <div className="min-h-screen bg-[#F8F7F4] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[#1E3A8A] mb-2">SLA والأداء</h1>
          <p className="text-[#64748B]">مراقبة وتحليل مستويات الخدمة والأداء</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="hover:shadow-lg transition-all duration-200">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#22C55E] to-[#14B8A6] rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-[#22C55E]" />
                </div>
                <p className="text-sm text-[#64748B] mb-1">إجمالي SLA</p>
                <h3 className="text-3xl font-bold text-[#22C55E] m-0">88.5%</h3>
                <p className="text-xs text-[#64748B] mt-2">+5.2% من الشهر الماضي</p>
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
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-[#2563EB]" />
                </div>
                <p className="text-sm text-[#64748B] mb-1">مؤشر الأداء المرجح</p>
                <h3 className="text-3xl font-bold text-[#2563EB] m-0">91.2%</h3>
                <p className="text-xs text-[#64748B] mt-2">+3.8% من الشهر الماضي</p>
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
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-[#C6A75E] rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <TrendingDown className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <p className="text-sm text-[#64748B] mb-1">معدل التأخر</p>
                <h3 className="text-3xl font-bold text-[#F59E0B] m-0">12.8%</h3>
                <p className="text-xs text-[#64748B] mt-2">-2.1% من الشهر الماضي</p>
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
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#14B8A6] to-[#22C55E] rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-[#14B8A6]" />
                </div>
                <p className="text-sm text-[#64748B] mb-1">متوسط وقت الحل</p>
                <h3 className="text-3xl font-bold text-[#14B8A6] m-0">38 ساعة</h3>
                <p className="text-xs text-[#64748B] mt-2">-7 ساعات من الشهر الماضي</p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Monthly Trend */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <div className="p-6">
                <h3 className="text-[#1E3A8A] mb-4">الاتجاه الشهري</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis dataKey="month" stroke="#64748B" />
                    <YAxis stroke="#64748B" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #E2E8F0",
                        borderRadius: "12px",
                        padding: "12px",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="sla"
                      stroke="#2563EB"
                      strokeWidth={3}
                      name="SLA %"
                      dot={{ fill: "#2563EB", r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="avgTime"
                      stroke="#14B8A6"
                      strokeWidth={3}
                      name="متوسط الوقت (ساعة)"
                      dot={{ fill: "#14B8A6", r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>

          {/* SLA Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card>
              <div className="p-6">
                <h3 className="text-[#1E3A8A] mb-4">توزيع SLA</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={slaDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {slaDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #E2E8F0",
                        borderRadius: "12px",
                        padding: "12px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Department Ranking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card>
            <div className="p-6">
              <h3 className="text-[#1E3A8A] mb-6">ترتيب الأقسام</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={departmentRanking} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis type="number" stroke="#64748B" />
                  <YAxis dataKey="name" type="category" stroke="#64748B" width={150} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                      borderRadius: "12px",
                      padding: "12px",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="sla" fill="#2563EB" name="SLA %" radius={[0, 8, 8, 0]} />
                  <Bar dataKey="score" fill="#14B8A6" name="درجة الأداء" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        {/* Department Performance Details */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departmentRanking.map((dept, index) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-all duration-200">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-[#1E3A8A] m-0">{dept.name}</h4>
                    <Badge
                      variant={
                        dept.sla >= 90 ? "green" :
                        dept.sla >= 80 ? "blue" :
                        dept.sla >= 70 ? "yellow" :
                        "red"
                      }
                    >
                      {index + 1}#
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-[#64748B]">SLA</span>
                        <span className="text-sm font-semibold text-[#1E3A8A]">{dept.sla}%</span>
                      </div>
                      <div className="h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
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
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-[#64748B]">درجة الأداء</span>
                        <span className="text-sm font-semibold text-[#1E3A8A]">{dept.score}%</span>
                      </div>
                      <div className="h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#2563EB] to-[#14B8A6] rounded-full"
                          style={{ width: `${dept.score}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-[#E2E8F0]">
                      <span className="text-sm text-[#64748B]">عدد الطلبات</span>
                      <span className="text-sm font-semibold text-[#1E3A8A]">{dept.requests}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Critical Alerts */}
        <div className="mt-8">
          <Card>
            <div className="p-6">
              <h3 className="text-[#1E3A8A] mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#EF4444]" />
                التنبيهات الحرجة
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#EF4444] rounded-full animate-pulse" />
                    <div>
                      <p className="font-semibold text-[#EF4444]">قسم التسويق - أداء منخفض</p>
                      <p className="text-sm text-[#64748B]">SLA أقل من 75% لمدة 3 أيام متتالية</p>
                    </div>
                  </div>
                  <Badge variant="red">حرج</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#F59E0B] rounded-full animate-pulse" />
                    <div>
                      <p className="font-semibold text-[#F59E0B]">قسم المالية - طلبات متأخرة</p>
                      <p className="text-sm text-[#64748B]">8 طلبات تجاوزت الوقت المحدد</p>
                    </div>
                  </div>
                  <Badge variant="yellow">تحذير</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
