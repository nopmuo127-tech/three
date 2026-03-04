import { TrendingUp, Users, Clock, CheckCircle, Award, BarChart3, Activity } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function ManagerPanel() {
  // Performance data for line chart
  const performanceData = [
    { month: "يناير", reports: 245, resolved: 220 },
    { month: "فبراير", reports: 280, resolved: 265 },
    { month: "مارس", reports: 310, resolved: 295 },
    { month: "أبريل", reports: 290, resolved: 278 },
    { month: "مايو", reports: 325, resolved: 310 },
    { month: "يونيو", reports: 340, resolved: 332 },
  ];

  // Category distribution for bar chart
  const categoryData = [
    { category: "البنية التحتية", count: 450 },
    { category: "المرافق العامة", count: 320 },
    { category: "الأمن والسلامة", count: 280 },
    { category: "البيئة", count: 198 },
  ];

  // Heatmap data (days × priority)
  const heatmapData = [
    { day: "السبت", urgent: 12, high: 18, medium: 25, low: 8 },
    { day: "الأحد", urgent: 15, high: 22, medium: 30, low: 10 },
    { day: "الإثنين", urgent: 18, high: 28, medium: 35, low: 12 },
    { day: "الثلاثاء", urgent: 14, high: 20, medium: 28, low: 9 },
    { day: "الأربعاء", urgent: 16, high: 24, medium: 32, low: 11 },
    { day: "الخميس", urgent: 10, high: 16, medium: 22, low: 7 },
    { day: "الجمعة", urgent: 6, high: 10, medium: 15, low: 5 },
  ];

  // KPI Cards (Large and prominent)
  const kpiCards = [
    {
      title: "إجمالي البلاغات",
      value: 1248,
      change: "+12.5%",
      isPositive: true,
      icon: BarChart3,
      color: "#2563EB",
      trend: "↑",
    },
    {
      title: "معدل النجاح",
      value: "98%",
      change: "+2.1%",
      isPositive: true,
      icon: Award,
      color: "#C6A75E",
      highlight: true, // Gold accent for most important KPI
      trend: "↑",
    },
    {
      title: "متوسط وقت الحل",
      value: "2.3",
      suffix: "أيام",
      change: "-0.5",
      isPositive: true,
      icon: Clock,
      color: "#14B8A6",
      trend: "↓",
    },
    {
      title: "رضا المستخدمين",
      value: "4.9",
      suffix: "/5",
      change: "+0.2",
      isPositive: true,
      icon: Users,
      color: "#22C55E",
      trend: "↑",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F7F4] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-[#1E3A8A] mb-2">لوحة المدير</h1>
              <p className="text-[#64748B]">نظرة شاملة على الأداء والإحصائيات</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-white border border-[#E2E8F0] text-[#64748B] rounded-xl hover:bg-[#F1F5F9] transition-colors text-sm">
                تصدير التقرير
              </button>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-[#E2E8F0]">
                <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
                <span className="text-sm text-[#64748B]">محدث الآن</span>
              </div>
            </div>
          </div>
        </div>

        {/* Large KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiCards.map((card, index) => (
            <LargeKPICard key={card.title} card={card} index={index} />
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Performance Trend Chart */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-1">اتجاه الأداء</h3>
              <p className="text-sm text-[#64748B]">البلاغات المقدمة والمحلولة شهرياً</p>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                <XAxis
                  dataKey="month"
                  stroke="#64748B"
                  style={{ fontSize: "12px", fontFamily: "IBM Plex Sans Arabic" }}
                />
                <YAxis stroke="#64748B" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #E2E8F0",
                    borderRadius: "12px",
                    fontFamily: "IBM Plex Sans Arabic",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="reports"
                  stroke="#2563EB"
                  strokeWidth={3}
                  dot={{ fill: "#2563EB", r: 4 }}
                  name="البلاغات"
                />
                <Line
                  type="monotone"
                  dataKey="resolved"
                  stroke="#22C55E"
                  strokeWidth={3}
                  dot={{ fill: "#22C55E", r: 4 }}
                  name="المحلولة"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Category Distribution */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-1">توزيع حسب التصنيف</h3>
              <p className="text-sm text-[#64748B]">أكثر الفئات نشاطاً</p>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                <XAxis
                  dataKey="category"
                  stroke="#64748B"
                  style={{ fontSize: "11px", fontFamily: "IBM Plex Sans Arabic" }}
                />
                <YAxis stroke="#64748B" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #E2E8F0",
                    borderRadius: "12px",
                    fontFamily: "IBM Plex Sans Arabic",
                  }}
                />
                <Bar dataKey="count" radius={[8, 8, 0, 0]} name="العدد">
                  {categoryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 0 ? "#2563EB" : index === 1 ? "#14B8A6" : index === 2 ? "#F59E0B" : "#64748B"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Heatmap - 2D Visualization */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#1E3A8A] mb-1">خريطة الأولويات الأسبوعية</h3>
            <p className="text-sm text-[#64748B]">توزيع البلاغات حسب اليوم والأولوية</p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              {/* Header */}
              <div className="grid grid-cols-5 gap-3 mb-3 px-32">
                <div className="text-xs font-medium text-center text-[#EF4444]">عاجلة</div>
                <div className="text-xs font-medium text-center text-[#F59E0B]">عالية</div>
                <div className="text-xs font-medium text-center text-[#14B8A6]">متوسطة</div>
                <div className="text-xs font-medium text-center text-[#64748B]">منخفضة</div>
              </div>

              {/* Heatmap Rows */}
              {heatmapData.map((row, index) => (
                <motion.div
                  key={row.day}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="grid grid-cols-5 gap-3 mb-3 items-center"
                >
                  <div className="text-sm font-medium text-[#1E3A8A]">{row.day}</div>
                  <HeatmapCell value={row.urgent} max={18} color="#EF4444" />
                  <HeatmapCell value={row.high} max={28} color="#F59E0B" />
                  <HeatmapCell value={row.medium} max={35} color="#14B8A6" />
                  <HeatmapCell value={row.low} max={12} color="#64748B" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 pt-6 border-t border-[#E2E8F0] flex items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-sm text-[#64748B]">
              <div className="w-4 h-4 bg-[#F1F5F9] rounded" />
              <span>منخفض</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#64748B]">
              <div className="w-4 h-4 bg-[#2563EB]/30 rounded" />
              <span>متوسط</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#64748B]">
              <div className="w-4 h-4 bg-[#2563EB] rounded" />
              <span>مرتفع</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Large KPI Card Component
function LargeKPICard({ card, index }: any) {
  const Icon = card.icon;
  const [displayValue, setDisplayValue] = useState<any>(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated && typeof card.value === "number") {
      const duration = 1200;
      const steps = 40;
      const stepValue = card.value / steps;
      const stepTime = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setDisplayValue(Math.min(Math.floor(stepValue * currentStep), card.value));
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setHasAnimated(true);
        }
      }, stepTime);

      return () => clearInterval(timer);
    } else if (!hasAnimated) {
      setDisplayValue(card.value);
      setHasAnimated(true);
    }
  }, [card.value, hasAnimated]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`relative bg-white rounded-2xl p-6 border border-[#E2E8F0] hover:shadow-xl transition-all duration-300 group overflow-hidden ${
        card.highlight ? "ring-2 ring-[#C6A75E] ring-offset-2" : ""
      }`}
    >
      {/* Gold Badge for Excellence */}
      {card.highlight && (
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-[#C6A75E] to-[#B8944F] rounded-lg">
          <Award className="w-3.5 h-3.5 text-white" />
          <span className="text-xs font-semibold text-white">الأداء الأمثل</span>
        </div>
      )}

      {/* Icon Background */}
      <div
        className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-5 group-hover:opacity-10 transition-opacity"
        style={{ backgroundColor: card.color }}
      />

      {/* Icon */}
      <div className="flex items-center justify-between mb-6">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${card.color}15` }}
        >
          <Icon className="w-7 h-7" style={{ color: card.color }} />
        </div>
        {card.trend && (
          <span className="text-3xl" style={{ color: card.color }}>
            {card.trend}
          </span>
        )}
      </div>

      {/* Value */}
      <div className="mb-3">
        <div className="text-5xl font-bold mb-1" style={{ color: card.color }}>
          {typeof displayValue === "number" ? displayValue.toLocaleString("ar-SA") : displayValue}
          {card.suffix && <span className="text-2xl mr-1">{card.suffix}</span>}
        </div>
        <div className="text-sm text-[#64748B] font-medium">{card.title}</div>
      </div>

      {/* Change Indicator */}
      <div className="flex items-center gap-2">
        <TrendingUp className={`w-4 h-4 ${card.isPositive ? "text-[#22C55E]" : "text-[#EF4444]"}`} />
        <span className={`text-sm font-semibold ${card.isPositive ? "text-[#22C55E]" : "text-[#EF4444]"}`}>
          {card.change}
        </span>
        <span className="text-xs text-[#94A3B8]">من الشهر الماضي</span>
      </div>
    </motion.div>
  );
}

// Heatmap Cell Component
function HeatmapCell({ value, max, color }: { value: number; max: number; color: string }) {
  const intensity = value / max;
  const opacity = 0.1 + intensity * 0.9;

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="h-12 rounded-xl flex items-center justify-center text-sm font-semibold relative group cursor-pointer"
      style={{
        backgroundColor: color,
        opacity: opacity,
        color: intensity > 0.5 ? "white" : color,
      }}
    >
      {value}
      {/* Tooltip on hover */}
      <div className="absolute bottom-full mb-2 px-3 py-1.5 bg-[#1E3A8A] text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {value} بلاغ
      </div>
    </motion.div>
  );
}
