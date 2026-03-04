import { Card } from "../components/Card";
import { Badge } from "../components/Badge";
import { TrendingUp, TrendingDown, Award, AlertCircle, Target, Users } from "lucide-react";
import { motion } from "motion/react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Mock data
const monthlyComparison = [
  { month: "نوفمبر", requests: 165, completed: 148, sla: 89 },
  { month: "ديسمبر", requests: 178, completed: 161, sla: 90 },
  { month: "يناير", requests: 189, completed: 172, sla: 91 },
  { month: "فبراير", requests: 195, completed: 181, sla: 93 },
  { month: "مارس", requests: 188, completed: 173, sla: 92 },
];

export function ExecutiveDashboard() {
  return (
    <div className="min-h-screen bg-[#F8F7F4] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[#1E3A8A] mb-2">لوحة المديرين التنفيذيين</h1>
          <p className="text-[#64748B]">نظرة شاملة على الأداء المؤسسي</p>
        </div>

        {/* Executive Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] text-white hover:shadow-2xl transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <TrendingUp className="w-6 h-6" />
                </div>
                <p className="text-sm opacity-90 mb-1">الأداء الإجمالي</p>
                <h2 className="text-4xl font-bold mb-2">93.2%</h2>
                <p className="text-xs opacity-75">+4.5% من الربع السابق</p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-[#22C55E] to-[#14B8A6] text-white hover:shadow-2xl transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-2xl">🏆</span>
                </div>
                <p className="text-sm opacity-90 mb-1">القسم الأفضل أداءً</p>
                <h3 className="text-2xl font-bold mb-2">الموارد البشرية</h3>
                <p className="text-xs opacity-75">SLA: 95% | درجة: 98%</p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-[#F59E0B] to-[#C6A75E] text-white hover:shadow-2xl transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <AlertCircle className="w-7 h-7 text-white" />
                  </div>
                  <TrendingDown className="w-6 h-6" />
                </div>
                <p className="text-sm opacity-90 mb-1">القسم الأقل أداءً</p>
                <h3 className="text-2xl font-bold mb-2">التسويق</h3>
                <p className="text-xs opacity-75">SLA: 70% | يحتاج تحسين</p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] text-white hover:shadow-2xl transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-2xl">👥</span>
                </div>
                <p className="text-sm opacity-90 mb-1">رضا العملاء</p>
                <h2 className="text-4xl font-bold mb-2">4.7/5</h2>
                <p className="text-xs opacity-75">بناءً على 342 تقييم</p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Monthly Performance Trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <Card>
            <div className="p-6">
              <h3 className="text-[#1E3A8A] mb-6">المقارنة الشهرية</h3>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={monthlyComparison}>
                  <defs>
                    <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
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
                  <Area
                    type="monotone"
                    dataKey="requests"
                    stroke="#2563EB"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorRequests)"
                    name="إجمالي الطلبات"
                  />
                  <Area
                    type="monotone"
                    dataKey="completed"
                    stroke="#22C55E"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorCompleted)"
                    name="الطلبات المكتملة"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        {/* Critical Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="h-full">
              <div className="p-6">
                <h3 className="text-[#1E3A8A] mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-[#EF4444]" />
                  التنبيهات الحرجة
                </h3>
                <div className="space-y-3">
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-semibold text-[#EF4444]">طلبات متأخرة حرجة</p>
                      <Badge variant="red">8</Badge>
                    </div>
                    <p className="text-sm text-[#64748B]">طلبات تجاوزت SLA بأكثر من 24 ساعة</p>
                  </div>
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-semibold text-[#F59E0B]">أقسام تحتاج دعم</p>
                      <Badge variant="yellow">2</Badge>
                    </div>
                    <p className="text-sm text-[#64748B]">التسويق والمالية أداء أقل من 80%</p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-semibold text-[#2563EB]">ارتفاع حجم الطلبات</p>
                      <Badge variant="blue">+12%</Badge>
                    </div>
                    <p className="text-sm text-[#64748B]">زيادة ملحوظة في عدد الطلبات هذا الشهر</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card className="h-full">
              <div className="p-6">
                <h3 className="text-[#1E3A8A] mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#22C55E]" />
                  النقاط الإيجابية
                </h3>
                <div className="space-y-3">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-semibold text-[#22C55E]">تحسن كبير في SLA</p>
                      <Badge variant="green">+5.2%</Badge>
                    </div>
                    <p className="text-sm text-[#64748B]">ارتفاع في مستوى الالتزام بالوقت المحدد</p>
                  </div>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-semibold text-[#22C55E]">رضا عملاء مرتفع</p>
                      <Badge variant="green">4.7/5</Badge>
                    </div>
                    <p className="text-sm text-[#64748B]">تقييمات إيجابية من المستفيدين</p>
                  </div>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-semibold text-[#22C55E]">أداء ممتاز للموارد البشرية</p>
                      <Badge variant="green">95%</Badge>
                    </div>
                    <p className="text-sm text-[#64748B]">القسم الأفضل أداءً لثلاثة أشهر متتالية</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card>
            <div className="p-6">
              <h3 className="text-[#1E3A8A] mb-6">مؤشرات الأداء الرئيسية</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-[#F8F7F4] rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#14B8A6] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📊</span>
                  </div>
                  <p className="text-sm text-[#64748B] mb-2">معدل الإنجاز</p>
                  <h3 className="text-3xl font-bold text-[#1E3A8A] mb-1">92%</h3>
                  <div className="flex items-center justify-center gap-1 text-sm text-[#22C55E]">
                    <TrendingUp className="w-4 h-4" />
                    <span>+3.2%</span>
                  </div>
                </div>
                <div className="text-center p-6 bg-[#F8F7F4] rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F59E0B] to-[#C6A75E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <p className="text-sm text-[#64748B] mb-2">متوسط الاستجابة</p>
                  <h3 className="text-3xl font-bold text-[#1E3A8A] mb-1">4.2 ساعة</h3>
                  <div className="flex items-center justify-center gap-1 text-sm text-[#22C55E]">
                    <TrendingUp className="w-4 h-4" />
                    <span>تحسن 18%</span>
                  </div>
                </div>
                <div className="text-center p-6 bg-[#F8F7F4] rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <p className="text-sm text-[#64748B] mb-2">نسبة التصعيد</p>
                  <h3 className="text-3xl font-bold text-[#1E3A8A] mb-1">8%</h3>
                  <div className="flex items-center justify-center gap-1 text-sm text-[#EF4444]">
                    <TrendingDown className="w-4 h-4" />
                    <span>-2.1%</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Strategic Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] text-white">
            <div className="p-6">
              <h3 className="text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                التوصيات الاستراتيجية
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <p className="font-semibold mb-2">تحسين أداء قسم التسويق</p>
                  <p className="text-sm opacity-90">توفير تدريب إضافي وزيادة الموارد البشرية</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <p className="font-semibold mb-2">معالجة الطلبات المتأخرة</p>
                  <p className="text-sm opacity-90">تشكيل فريق طوارئ للطلبات الحرجة</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <p className="font-semibold mb-2">الاستفادة من التحسن في SLA</p>
                  <p className="text-sm opacity-90">مشاركة أفضل الممارسات مع جميع الأقسام</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <p className="font-semibold mb-2">التخطيط لزيادة الطلبات</p>
                  <p className="text-sm opacity-90">توسيع الفريق لمواجهة الطلب المتزايد</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
