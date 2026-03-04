import { Link } from "react-router";
import { Home, Search } from "lucide-react";
import { motion } from "motion/react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8F7F4] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <div className="mb-8">
            <div className="text-9xl font-bold text-[#2563EB] mb-4">404</div>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2563EB] to-[#14B8A6] mx-auto rounded-full" />
          </div>

          {/* Content */}
          <h1 className="text-3xl font-bold text-[#1E3A8A] mb-4">
            الصفحة غير موجودة
          </h1>
          <p className="text-lg text-[#64748B] mb-8">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded-xl font-medium hover:bg-[#1E3A8A] transition-all duration-200 hover:shadow-lg hover:scale-[0.98] active:scale-95"
            >
              <Home className="w-5 h-5" />
              <span>العودة للرئيسية</span>
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1E3A8A] border-2 border-[#1E3A8A] rounded-xl font-medium hover:bg-[#F1F5F9] transition-all duration-200 hover:scale-[0.98] active:scale-95"
            >
              <Search className="w-5 h-5" />
              <span>لوحة التحكم</span>
            </Link>
          </div>

          {/* Decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex items-center justify-center gap-2 text-[#94A3B8]"
          >
            <div className="w-8 h-0.5 bg-[#E2E8F0] rounded" />
            <Search className="w-4 h-4" />
            <div className="w-8 h-0.5 bg-[#E2E8F0] rounded" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
