import { useState } from "react";
import { Search, CheckCircle, Clock, AlertCircle, FileText, User, Calendar, MapPin, Award } from "lucide-react";
import { motion } from "motion/react";

export function TrackReport() {
  const [reportId, setReportId] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (reportId.trim()) {
      setShowResults(true);
    }
  };

  // Mock report data
  const reportData = {
    id: "RPT-2026-1248",
    title: "صيانة الطريق الرئيسي",
    category: "البنية التحتية",
    status: "قيد المعالجة",
    priority: "عالية",
    submittedBy: "أحمد محمد",
    submittedDate: "2026-02-20",
    location: "شارع الملك فهد، الرياض",
    description: "يحتاج الطريق الرئيسي إلى صيانة عاجلة بسبب وجود حفر كبيرة تشكل خطراً على السائقين.",
  };

  const timeline = [
    {
      id: 1,
      status: "تم الاستلام",
      description: "تم استلام البلاغ وتسجيله في النظام",
      date: "2026-02-20 09:30",
      icon: FileText,
      completed: true,
    },
    {
      id: 2,
      status: "قيد المراجعة",
      description: "يتم مراجعة البلاغ من قبل الفريق المختص",
      date: "2026-02-20 11:15",
      icon: User,
      completed: true,
    },
    {
      id: 3,
      status: "قيد المعالجة",
      description: "البلاغ قيد المعالجة من قبل فريق الصيانة",
      date: "2026-02-21 08:00",
      icon: Clock,
      completed: false,
      current: true,
    },
    {
      id: 4,
      status: "المراجعة النهائية",
      description: "مراجعة جودة العمل المنجز",
      date: "",
      icon: CheckCircle,
      completed: false,
    },
    {
      id: 5,
      status: "مكتمل",
      description: "تم إنجاز البلاغ بنجاح",
      date: "",
      icon: Award,
      completed: false,
      highlight: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F7F4] py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1E3A8A] mb-3">تتبع البلاغ</h1>
          <p className="text-[#64748B]">أدخل رقم البلاغ لمتابعة حالته</p>
        </div>

        {/* Search Card */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-8 mb-8">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={reportId}
                onChange={(e) => setReportId(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                placeholder="مثال: RPT-2026-1248"
                className="w-full px-5 py-4 pr-12 bg-[#F8F7F4] border border-[#E2E8F0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all text-lg"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />
            </div>
            <button
              onClick={handleSearch}
              className="px-8 py-4 bg-[#2563EB] text-white rounded-xl font-medium hover:bg-[#1E3A8A] transition-all duration-200 hover:shadow-lg hover:scale-[0.98] active:scale-95"
            >
              بحث
            </button>
          </div>
        </div>

        {/* Results */}
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Report Details */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden mb-8">
              <div className="p-6 border-b border-[#E2E8F0] bg-gradient-to-r from-[#2563EB] to-[#1E3A8A]">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{reportData.title}</h2>
                    <p className="text-blue-100">{reportData.id}</p>
                  </div>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm font-medium border border-white/30">
                    {reportData.priority}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3 p-4 bg-[#F8F7F4] rounded-xl">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <div>
                      <div className="text-sm text-[#64748B] mb-1">مقدم البلاغ</div>
                      <div className="font-medium text-[#1E3A8A]">{reportData.submittedBy}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-[#F8F7F4] rounded-xl">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-[#14B8A6]" />
                    </div>
                    <div>
                      <div className="text-sm text-[#64748B] mb-1">تاريخ التقديم</div>
                      <div className="font-medium text-[#1E3A8A]">{reportData.submittedDate}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-[#F8F7F4] rounded-xl">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-[#F59E0B]" />
                    </div>
                    <div>
                      <div className="text-sm text-[#64748B] mb-1">التصنيف</div>
                      <div className="font-medium text-[#1E3A8A]">{reportData.category}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-[#F8F7F4] rounded-xl">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-sm text-[#64748B] mb-1">الموقع</div>
                      <div className="font-medium text-[#1E3A8A]">{reportData.location}</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#F8F7F4] rounded-xl">
                  <div className="text-sm text-[#64748B] mb-2">الوصف</div>
                  <p className="text-[#1E3A8A] leading-relaxed">{reportData.description}</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-8">
              <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-8">مراحل المعالجة</h3>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute right-5 top-0 bottom-0 w-0.5 bg-[#E2E8F0]" />

                {/* Timeline Items */}
                <div className="space-y-8">
                  {timeline.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="relative flex items-start gap-6"
                      >
                        {/* Icon Circle */}
                        <div className="relative z-10">
                          <div
                            className={`w-11 h-11 rounded-full flex items-center justify-center border-4 border-white transition-all duration-200 ${
                              item.completed
                                ? "bg-[#22C55E]"
                                : item.current
                                ? "bg-[#2563EB] shadow-lg shadow-blue-500/50"
                                : "bg-[#E2E8F0]"
                            }`}
                          >
                            <Icon
                              className={`w-5 h-5 ${
                                item.completed || item.current
                                  ? "text-white"
                                  : "text-[#94A3B8]"
                              }`}
                            />
                          </div>
                          
                          {/* Gold Highlight Dot */}
                          {item.highlight && !item.completed && (
                            <div className="absolute -top-1 -left-1 w-3 h-3 bg-[#C6A75E] rounded-full border-2 border-white" />
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-8">
                          <div className="flex items-start justify-between mb-2">
                            <h4
                              className={`text-lg font-semibold ${
                                item.current
                                  ? "text-[#2563EB]"
                                  : item.completed
                                  ? "text-[#22C55E]"
                                  : "text-[#94A3B8]"
                              }`}
                            >
                              {item.status}
                            </h4>
                            {item.date && (
                              <span className="text-sm text-[#64748B]">{item.date}</span>
                            )}
                          </div>
                          <p
                            className={`text-sm ${
                              item.completed || item.current
                                ? "text-[#64748B]"
                                : "text-[#94A3B8]"
                            }`}
                          >
                            {item.description}
                          </p>

                          {/* Current Status Indicator */}
                          {item.current && (
                            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-[#2563EB] rounded-lg text-sm font-medium">
                              <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse" />
                              <span>المرحلة الحالية</span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Progress Summary */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl border border-blue-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-[#64748B] mb-1">نسبة الإنجاز</div>
                    <div className="text-3xl font-bold text-[#2563EB]">60%</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[#64748B] mb-1">الوقت المتوقع للإنجاز</div>
                    <div className="text-lg font-semibold text-[#1E3A8A]">2-3 أيام عمل</div>
                  </div>
                </div>
                <div className="mt-4 h-2 bg-white/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-[#2563EB] to-[#14B8A6]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
