import { TrendingUp, TrendingDown, FileText, CheckCircle, Clock, AlertCircle, Award } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Dashboard() {
  // KPI Cards Data
  const kpiCards = [
    {
      title: "إجمالي البلاغات",
      value: 1248,
      change: "+12.5%",
      isPositive: true,
      icon: FileText,
      color: "#2563EB",
    },
    {
      title: "البلاغات المكتملة",
      value: 1089,
      change: "+8.2%",
      isPositive: true,
      icon: CheckCircle,
      color: "#22C55E",
      highlight: true, // Gold accent for excellent performance
    },
    {
      title: "قيد المعالجة",
      value: 127,
      change: "-3.1%",
      isPositive: true,
      icon: Clock,
      color: "#F59E0B",
    },
    {
      title: "يتطلب انتباه",
      value: 32,
      change: "+2.4%",
      isPositive: false,
      icon: AlertCircle,
      color: "#EF4444",
    },
  ];

  // Active Reports Data
  const activeReports = [
    {
      id: "RPT-2026-1248",
      title: "صيانة الطريق الرئيسي",
      status: "قيد المعالجة",
      priority: "عالية",
      date: "منذ 3 ساعات",
      statusColor: "#2563EB",
    },
    {
      id: "RPT-2026-1247",
      title: "انقطاع الكهرباء في الحي الشمالي",
      status: "قيد المعالجة",
      priority: "عاجلة",
      date: "منذ 5 ساعات",
      statusColor: "#EF4444",
    },
    {
      id: "RPT-2026-1246",
      title: "تحسين الإضاءة العامة",
      status: "جديد",
      priority: "متوسطة",
      date: "منذ يوم واحد",
      statusColor: "#14B8A6",
    },
    {
      id: "RPT-2026-1245",
      title: "طلب تركيب كاميرات مراقبة",
      status: "قيد المراجعة",
      priority: "متوسطة",
      date: "منذ يومين",
      statusColor: "#F59E0B",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F7F4] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-[#1E3A8A] mb-2">لوحة التحكم</h1>
              <p className="text-[#64748B]">نظرة شاملة على جميع البلاغات والإحصائيات</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-[#E2E8F0]">
              <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
              <span className="text-sm text-[#64748B]">محدث الآن</span>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <KPICard key={card.title} card={card} index={index} Icon={Icon} />
            );
          })}
        </div>

        {/* Active Reports Section */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm">
          <div className="p-6 border-b border-[#E2E8F0]">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-[#1E3A8A] mb-1">البلاغات النشطة</h2>
                <p className="text-sm text-[#64748B]">آخر البلاغات التي تحتاج متابعة</p>
              </div>
              <button className="px-4 py-2 text-[#2563EB] hover:bg-[#F1F5F9] rounded-lg transition-colors text-sm font-medium">
                عرض الكل
              </button>
            </div>
          </div>

          <div className="divide-y divide-[#E2E8F0]">
            {activeReports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-6 hover:bg-[#F8F7F4] transition-colors duration-200 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  {/* Status Bar */}
                  <div
                    className="w-1.5 h-16 rounded-full flex-shrink-0"
                    style={{ backgroundColor: report.statusColor }}
                  />

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="font-medium text-[#1E3A8A] mb-1">{report.title}</h3>
                        <p className="text-sm text-[#64748B]">{report.id}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-lg text-xs font-medium flex-shrink-0 ${
                          report.priority === "عاجلة"
                            ? "bg-red-50 text-red-600"
                            : report.priority === "عالية"
                            ? "bg-blue-50 text-blue-600"
                            : "bg-amber-50 text-amber-600"
                        }`}
                      >
                        {report.priority}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <span
                        className="text-sm font-medium"
                        style={{ color: report.statusColor }}
                      >
                        {report.status}
                      </span>
                      <span className="text-sm text-[#64748B]">{report.date}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="opacity-0 group-hover:opacity-100 px-4 py-2 bg-[#2563EB] text-white rounded-lg text-sm font-medium transition-all duration-200 hover:bg-[#1E3A8A] flex-shrink-0">
                    متابعة
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// KPI Card Component with Count-up Animation
function KPICard({ card, index, Icon }: any) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      const duration = 1000;
      const steps = 30;
      const stepValue = card.value / steps;
      const stepTime = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setCount(Math.min(Math.floor(stepValue * currentStep), card.value));
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setHasAnimated(true);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [card.value, hasAnimated]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative bg-white rounded-2xl p-6 border border-[#E2E8F0] hover:shadow-lg transition-all duration-200 group overflow-hidden"
    >
      {/* Highlight Indicator (Gold Dot for Excellence) */}
      {card.highlight && (
        <div className="absolute top-4 left-4 w-2 h-2 bg-[#C6A75E] rounded-full" />
      )}

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 opacity-10 group-hover:opacity-15 transition-opacity"
        style={{ backgroundColor: card.color }}
      >
        <Icon className="w-6 h-6" style={{ color: card.color }} />
      </div>

      {/* Value with Count-up Animation */}
      <div className="text-4xl font-bold mb-2" style={{ color: card.color }}>
        {count.toLocaleString("ar-SA")}
      </div>

      {/* Label */}
      <div className="text-sm text-[#64748B] mb-3">{card.title}</div>

      {/* Change Indicator */}
      <div className="flex items-center gap-1.5">
        {card.isPositive ? (
          <TrendingUp className="w-4 h-4 text-[#22C55E]" />
        ) : (
          <TrendingDown className="w-4 h-4 text-[#EF4444]" />
        )}
        <span
          className={`text-sm font-medium ${
            card.isPositive ? "text-[#22C55E]" : "text-[#EF4444]"
          }`}
        >
          {card.change}
        </span>
        <span className="text-xs text-[#64748B]">من الشهر الماضي</span>
      </div>

      {/* Subtle hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#F8F7F4] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none rounded-2xl" />
    </motion.div>
  );
}
