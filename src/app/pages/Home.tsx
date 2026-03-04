import { Link } from "react-router";
import { ArrowLeft, CheckCircle2, Zap, Shield, Clock } from "lucide-react";
import { motion } from "motion/react";

export function Home() {
  const features = [
    {
      icon: Zap,
      title: "سرعة الاستجابة",
      description: "معالجة فورية للبلاغات مع نظام ذكي للأولويات",
    },
    {
      icon: Shield,
      title: "أمان عالي",
      description: "حماية متقدمة للبيانات بمعايير حكومية",
    },
    {
      icon: Clock,
      title: "تتبع مباشر",
      description: "متابعة لحظية لحالة البلاغ في كل مرحلة",
    },
    {
      icon: CheckCircle2,
      title: "نتائج مؤكدة",
      description: "معدل نجاح 98% في حل البلاغات",
    },
  ];

  const stats = [
    { value: "50,000+", label: "بلاغ تم حله", color: "#2563EB" },
    { value: "98%", label: "معدل النجاح", color: "#C6A75E" },
    { value: "24/7", label: "دعم مستمر", color: "#14B8A6" },
    { value: "4.9", label: "تقييم المستخدمين", color: "#22C55E" },
  ];

  return (
    <div className="bg-[#F8F7F4]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8F7F4] to-[#F1F5F9] opacity-80" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#E2E8F0] mb-6">
                <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
                <span className="text-sm text-[#64748B]">منصة حكومية معتمدة</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-[#1E3A8A] mb-6 leading-tight">
                رسمـي
                <br />
                <span className="text-[#64748B]">منصة بلاغات</span>{" "}
                <span className="text-[#2563EB]">ذكية</span>
                <br />
                <span className="text-[#64748B]">بمعايير راقية</span>
              </h1>
              
              <p className="text-lg text-[#64748B] mb-8 leading-relaxed max-w-xl">
                نظام متطور لإدارة البلاغات الحكومية بذكاء اصطناعي. تجربة سلسة تجمع بين الهيبة المؤسسية والتقنية الحديثة.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/submit-report"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#2563EB] text-white rounded-xl hover:bg-[#1E3A8A] transition-all duration-200 hover:shadow-lg hover:scale-[0.98] active:scale-95"
                >
                  <span className="font-medium">تسجيل بلاغ جديد</span>
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/track-report"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1E3A8A] rounded-xl border-2 border-[#1E3A8A] hover:bg-[#F1F5F9] transition-all duration-200 hover:scale-[0.98] active:scale-95"
                >
                  <span className="font-medium">تتبع البلاغ</span>
                </Link>
              </div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-[#E2E8F0]">
                {/* Mock Dashboard */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-xl flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1E3A8A] m-0">لوحة التحكم</h3>
                        <p className="text-sm text-[#64748B] m-0">عرض شامل للبلاغات</p>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
                  </div>
                  
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 bg-[#F8F7F4] rounded-xl border border-[#E2E8F0]"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-1.5 h-12 rounded-full ${i === 1 ? 'bg-[#2563EB]' : i === 2 ? 'bg-[#14B8A6]' : 'bg-[#C6A75E]'}`} />
                        <div>
                          <div className="h-3 w-32 bg-[#E2E8F0] rounded mb-2" />
                          <div className="h-2 w-24 bg-[#F1F5F9] rounded" />
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-lg text-xs ${i === 1 ? 'bg-blue-100 text-blue-600' : i === 2 ? 'bg-teal-100 text-teal-600' : 'bg-amber-100 text-amber-600'}`}>
                        {i === 1 ? 'جديد' : i === 2 ? 'قيد المعالجة' : 'مكتمل'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-[#E2E8F0]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#C6A75E] rounded-full" />
                  <span className="text-sm font-medium text-[#1E3A8A]">تفوق مستمر</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-sm text-[#64748B]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E3A8A] mb-4">لماذا رسمي؟</h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              منصة متكاملة تجمع بين القوة المؤسسية والابتكار التقني
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-[#E2E8F0] hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              ابدأ رحلتك مع رسمي اليوم
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              انضم إلى آلاف المستخدمين الذين اختاروا الكفاءة والاحترافية
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#1E3A8A] rounded-xl font-medium hover:bg-[#F8F7F4] transition-all duration-200 hover:shadow-xl hover:scale-[0.98] active:scale-95"
            >
              <span>استكشف المنصة</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
