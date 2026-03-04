import { useState } from "react";
import { Inbox, Filter, Search, Clock, CheckCircle, AlertCircle, User, Calendar, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function EmployeePanel() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    { id: "all", name: "الكل", count: 45, color: "#64748B" },
    { id: "new", name: "جديد", count: 12, color: "#2563EB" },
    { id: "in-progress", name: "قيد المعالجة", count: 18, color: "#F59E0B" },
    { id: "pending", name: "معلق", count: 8, color: "#EF4444" },
    { id: "completed", name: "مكتمل", count: 7, color: "#22C55E" },
  ];

  const reports = [
    {
      id: "RPT-2026-1248",
      title: "صيانة الطريق الرئيسي",
      description: "يحتاج الطريق الرئيسي إلى صيانة عاجلة",
      status: "new",
      priority: "عالية",
      assignedTo: "غير محدد",
      submittedBy: "أحمد محمد",
      date: "منذ 3 ساعات",
      category: "البنية التحتية",
    },
    {
      id: "RPT-2026-1247",
      title: "انقطاع الكهرباء في الحي الشمالي",
      description: "انقطاع متكرر للكهرباء يؤثر على السكان",
      status: "in-progress",
      priority: "عاجلة",
      assignedTo: "فريق الكهرباء",
      submittedBy: "سارة أحمد",
      date: "منذ 5 ساعات",
      category: "المرافق العامة",
    },
    {
      id: "RPT-2026-1246",
      title: "تحسين الإضاءة العامة",
      description: "طلب تحسين إضاءة الشوارع في المنطقة",
      status: "pending",
      priority: "متوسطة",
      assignedTo: "محمد علي",
      submittedBy: "خالد عبدالله",
      date: "منذ يوم واحد",
      category: "البنية التحتية",
    },
    {
      id: "RPT-2026-1245",
      title: "طلب تركيب كاميرات مراقبة",
      description: "تركيب كاميرات مراقبة لزيادة الأمان",
      status: "completed",
      priority: "متوسطة",
      assignedTo: "فريق الأمن",
      submittedBy: "عمر حسن",
      date: "منذ يومين",
      category: "الأمن والسلامة",
    },
    {
      id: "RPT-2026-1244",
      title: "تسرب مياه في الشارع الرئيسي",
      description: "يوجد تسرب كبير في أنابيب المياه",
      status: "in-progress",
      priority: "عالية",
      assignedTo: "فريق المياه",
      submittedBy: "فاطمة سعيد",
      date: "منذ 8 ساعات",
      category: "المرافق العامة",
    },
  ];

  const aiSuggestions = [
    "يوصى بمعالجة البلاغات العاجلة أولاً",
    "3 بلاغات متشابهة يمكن دمجها",
    "معدل الاستجابة: ممتاز (92%)",
  ];

  const getStatusBadge = (status: string) => {
    const badges: any = {
      new: { label: "جديد", bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
      "in-progress": { label: "قيد المعالجة", bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" },
      pending: { label: "معلق", bg: "bg-red-50", text: "text-red-600", border: "border-red-200" },
      completed: { label: "مكتمل", bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
    };
    return badges[status] || badges.new;
  };

  const getPriorityBadge = (priority: string) => {
    const badges: any = {
      "عاجلة": { bg: "bg-red-100", text: "text-red-700" },
      "عالية": { bg: "bg-orange-100", text: "text-orange-700" },
      "متوسطة": { bg: "bg-yellow-100", text: "text-yellow-700" },
      "منخفضة": { bg: "bg-gray-100", text: "text-gray-700" },
    };
    return badges[priority] || badges["متوسطة"];
  };

  const filteredReports = reports.filter((report) => {
    const matchesFilter = selectedFilter === "all" || report.status === selectedFilter;
    const matchesSearch =
      searchQuery === "" ||
      report.title.includes(searchQuery) ||
      report.id.includes(searchQuery);
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#1E3A8A] mb-2">لوحة الموظف</h1>
          <p className="text-[#64748B]">إدارة ومتابعة البلاغات المخصصة لك</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Filters Card */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
              <div className="p-4 border-b border-[#E2E8F0] bg-[#F8F7F4]">
                <div className="flex items-center gap-2 text-[#1E3A8A]">
                  <Filter className="w-5 h-5" />
                  <h3 className="font-semibold">التصفية</h3>
                </div>
              </div>
              <div className="p-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl mb-1 transition-all duration-200 ${
                      selectedFilter === filter.id
                        ? "bg-[#2563EB] text-white shadow-sm"
                        : "text-[#64748B] hover:bg-[#F8F7F4]"
                    }`}
                  >
                    <span className="text-sm font-medium">{filter.name}</span>
                    <span
                      className={`px-2.5 py-0.5 rounded-lg text-xs font-medium ${
                        selectedFilter === filter.id
                          ? "bg-white/20 text-white"
                          : "bg-[#E2E8F0] text-[#64748B]"
                      }`}
                    >
                      {filter.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* AI Suggestions Card */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl border border-blue-100 p-5">
              <div className="flex items-center gap-2 text-[#2563EB] mb-4">
                <Sparkles className="w-5 h-5" />
                <h3 className="font-semibold">توصيات ذكية</h3>
              </div>
              <ul className="space-y-3">
                {aiSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-[#1E3A8A] leading-relaxed"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-1.5 flex-shrink-0" />
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Actions */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 mb-6">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="البحث في البلاغات..."
                    className="w-full px-4 py-3 pr-11 bg-[#F8F7F4] border border-[#E2E8F0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
                  />
                  <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />
                </div>
              </div>
            </div>

            {/* Reports Table */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
              <div className="p-5 border-b border-[#E2E8F0] bg-[#F8F7F4]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#1E3A8A]">
                    <Inbox className="w-5 h-5" />
                    <h3 className="font-semibold">صندوق الوارد</h3>
                  </div>
                  <span className="text-sm text-[#64748B]">
                    {filteredReports.length} من {reports.length}
                  </span>
                </div>
              </div>

              <div className="divide-y divide-[#E2E8F0]">
                {filteredReports.map((report, index) => {
                  const statusBadge = getStatusBadge(report.status);
                  const priorityBadge = getPriorityBadge(report.priority);

                  return (
                    <motion.div
                      key={report.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="p-5 hover:bg-[#F8F7F4] transition-all duration-200 cursor-pointer group"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-[#1E3A8A] mb-1 group-hover:text-[#2563EB] transition-colors">
                            {report.title}
                          </h4>
                          <p className="text-sm text-[#64748B] mb-2">{report.description}</p>
                          <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748B]">
                            <span className="flex items-center gap-1">
                              <User className="w-3.5 h-3.5" />
                              {report.submittedBy}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {report.date}
                            </span>
                            <span>•</span>
                            <span>{report.id}</span>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-2 flex-shrink-0">
                          <span className={`px-3 py-1 rounded-lg text-xs font-medium ${priorityBadge.bg} ${priorityBadge.text}`}>
                            {report.priority}
                          </span>
                          <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${statusBadge.bg} ${statusBadge.text} ${statusBadge.border}`}>
                            {statusBadge.label}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-[#E2E8F0]">
                        <div className="flex items-center gap-2 text-xs text-[#64748B]">
                          <span className="px-2.5 py-1 bg-[#F1F5F9] rounded-lg">{report.category}</span>
                          <span>مسند إلى: {report.assignedTo}</span>
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 px-4 py-1.5 bg-[#2563EB] text-white rounded-lg text-sm font-medium transition-all duration-200 hover:bg-[#1E3A8A]">
                          فتح
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
