import { useState } from "react";
import { Check, ArrowRight, ArrowLeft, FileText, MapPin, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";

export function SubmitReport() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    location: "",
    priority: "متوسطة",
  });

  const steps = [
    { id: 0, name: "نوع البلاغ", icon: FileText },
    { id: 1, name: "التفاصيل", icon: MapPin },
    { id: 2, name: "المراجعة", icon: Check },
  ];

  const categories = [
    { id: "infrastructure", name: "البنية التحتية", icon: "🏗️" },
    { id: "utilities", name: "المرافق العامة", icon: "💡" },
    { id: "security", name: "الأمن والسلامة", icon: "🛡️" },
    { id: "environment", name: "البيئة", icon: "🌿" },
    { id: "other", name: "أخرى", icon: "📋" },
  ];

  const handleNext = () => {
    if (currentStep === 0 && !formData.category) {
      toast.error("الرجاء اختيار نوع البلاغ");
      return;
    }
    if (currentStep === 1 && (!formData.title || !formData.description)) {
      toast.error("الرجاء تعبئة جميع الحقول المطلوبة");
      return;
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Simulate submission
    setTimeout(() => {
      toast.success("تم إرسال البلاغ بنجاح! 🎉");
      // Reset form
      setFormData({
        category: "",
        title: "",
        description: "",
        location: "",
        priority: "متوسطة",
      });
      setCurrentStep(0);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1E3A8A] mb-3">تسجيل بلاغ جديد</h1>
          <p className="text-[#64748B]">اتبع الخطوات لتسجيل بلاغك بشكل سريع ومنظم</p>
        </div>

        {/* Stepper */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-5 right-0 left-0 h-0.5 bg-[#E2E8F0] -z-10">
              <motion.div
                className="h-full bg-[#2563EB]"
                initial={{ width: "0%" }}
                animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = index < currentStep;
              const isCurrent = index === currentStep;

              return (
                <div key={step.id} className="flex flex-col items-center flex-1">
                  <motion.div
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${
                      isCompleted
                        ? "bg-[#22C55E] text-white"
                        : isCurrent
                        ? "bg-[#2563EB] text-white shadow-lg"
                        : "bg-white text-[#64748B] border-2 border-[#E2E8F0]"
                    }`}
                    animate={isCurrent ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </motion.div>
                  <span
                    className={`text-sm mt-2 font-medium ${
                      isCurrent ? "text-[#2563EB]" : "text-[#64748B]"
                    }`}
                  >
                    {step.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
          <AnimatePresence mode="wait">
            {/* Step 0: Category */}
            {currentStep === 0 && (
              <motion.div
                key="step-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="p-8"
              >
                <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-6">اختر نوع البلاغ</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setFormData({ ...formData, category: category.id })}
                      className={`p-6 rounded-xl border-2 transition-all duration-200 text-right ${
                        formData.category === category.id
                          ? "border-[#2563EB] bg-blue-50"
                          : "border-[#E2E8F0] hover:border-[#2563EB] hover:bg-[#F1F5F9]"
                      }`}
                    >
                      <div className="text-3xl mb-3">{category.icon}</div>
                      <div className="text-lg font-medium text-[#1E3A8A]">{category.name}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 1: Details */}
            {currentStep === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="p-8"
              >
                <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-6">تفاصيل البلاغ</h2>
                
                <div className="space-y-6">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-[#1E3A8A] mb-2">
                      عنوان البلاغ <span className="text-[#EF4444]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="مثال: انقطاع الكهرباء في الحي الشمالي"
                      className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#E2E8F0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-[#1E3A8A] mb-2">
                      الوصف التفصيلي <span className="text-[#EF4444]">*</span>
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="اكتب وصفاً تفصيلياً للبلاغ..."
                      rows={6}
                      className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#E2E8F0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all resize-none"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-[#1E3A8A] mb-2">
                      الموقع
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="أدخل الموقع أو العنوان"
                      className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#E2E8F0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
                    />
                  </div>

                  {/* Priority */}
                  <div>
                    <label className="block text-sm font-medium text-[#1E3A8A] mb-2">
                      الأولوية
                    </label>
                    <div className="flex gap-3">
                      {["منخفضة", "متوسطة", "عالية", "عاجلة"].map((priority) => (
                        <button
                          key={priority}
                          onClick={() => setFormData({ ...formData, priority })}
                          className={`flex-1 py-2.5 rounded-lg border-2 transition-all duration-200 ${
                            formData.priority === priority
                              ? "border-[#2563EB] bg-blue-50 text-[#2563EB]"
                              : "border-[#E2E8F0] text-[#64748B] hover:border-[#2563EB]"
                          }`}
                        >
                          {priority}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Review */}
            {currentStep === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="p-8"
              >
                <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-6">مراجعة البلاغ</h2>
                
                <div className="space-y-4">
                  <div className="p-4 bg-[#F8F7F4] rounded-xl">
                    <div className="text-sm text-[#64748B] mb-1">نوع البلاغ</div>
                    <div className="font-medium text-[#1E3A8A]">
                      {categories.find(c => c.id === formData.category)?.name}
                    </div>
                  </div>

                  <div className="p-4 bg-[#F8F7F4] rounded-xl">
                    <div className="text-sm text-[#64748B] mb-1">العنوان</div>
                    <div className="font-medium text-[#1E3A8A]">{formData.title}</div>
                  </div>

                  <div className="p-4 bg-[#F8F7F4] rounded-xl">
                    <div className="text-sm text-[#64748B] mb-1">الوصف</div>
                    <div className="font-medium text-[#1E3A8A]">{formData.description}</div>
                  </div>

                  {formData.location && (
                    <div className="p-4 bg-[#F8F7F4] rounded-xl">
                      <div className="text-sm text-[#64748B] mb-1">الموقع</div>
                      <div className="font-medium text-[#1E3A8A]">{formData.location}</div>
                    </div>
                  )}

                  <div className="p-4 bg-[#F8F7F4] rounded-xl">
                    <div className="text-sm text-[#64748B] mb-1">الأولوية</div>
                    <div className="font-medium text-[#1E3A8A]">{formData.priority}</div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="px-8 py-6 bg-[#F8F7F4] border-t border-[#E2E8F0] flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                currentStep === 0
                  ? "text-[#CBD5E1] cursor-not-allowed"
                  : "text-[#1E3A8A] hover:bg-white"
              }`}
            >
              <ArrowRight className="w-5 h-5" />
              <span>السابق</span>
            </button>

            {currentStep === steps.length - 1 ? (
              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-8 py-3.5 bg-[#2563EB] text-white rounded-xl font-medium hover:bg-[#1E3A8A] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>إرسال البلاغ</span>
                <Check className="w-5 h-5" />
              </motion.button>
            ) : (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded-xl font-medium hover:bg-[#1E3A8A] transition-all duration-200"
              >
                <span>التالي</span>
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
