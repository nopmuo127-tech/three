import { Outlet, Link, useLocation } from "react-router";
import { Home, LayoutDashboard, FileText, Search, Users, BarChart3, Menu, X, Building, UserCog, FileSpreadsheet, Target, TrendingUp, Settings, Shield, CheckSquare } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NotificationDropdown } from "./NotificationDropdown";

export function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "الرئيسية", href: "/", icon: Home },
    { name: "لوحة التحكم", href: "/dashboard", icon: LayoutDashboard },
    { name: "الطلبات", href: "/requests", icon: FileText },
    { name: "المهام الداخلية", href: "/internal-tasks", icon: CheckSquare },
    { name: "تسجيل بلاغ", href: "/submit-report", icon: FileText },
    { name: "تتبع البلاغ", href: "/track-report", icon: Search },
    { name: "الأقسام", href: "/departments", icon: Building },
    { name: "المستخدمين", href: "/users", icon: UserCog },
    { name: "التقارير", href: "/reports", icon: FileSpreadsheet },
    { name: "SLA والأداء", href: "/sla-performance", icon: Target },
    { name: "لوحة المديرين", href: "/executive", icon: TrendingUp },
    { name: "لوحة الموظف", href: "/employee", icon: Users },
    { name: "لوحة المدير", href: "/manager", icon: BarChart3 },
    { name: "الإعدادات", href: "/settings", icon: Settings },
    { name: "سجل التدقيق", href: "/audit-log", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      {/* Header */}
      <header className="bg-white border-b border-[#E2E8F0] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-xl flex items-center justify-center">
                <span className="text-white text-xl font-bold">ر</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#1E3A8A] m-0 leading-none">رسمي</h1>
                <p className="text-xs text-[#64748B] m-0 leading-tight">منصة بلاغات ذكية</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            {!isHome && (
              <nav className="hidden md:flex items-center gap-1 overflow-x-auto max-w-3xl scrollbar-hide">
                {navigation.slice(1, 8).map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${
                        isActive
                          ? "bg-[#2563EB] text-white shadow-sm"
                          : "text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#1E3A8A]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            )}

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <NotificationDropdown />
              
              {/* Mobile Menu Button */}
              {!isHome && (
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden w-10 h-10 bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {!isHome && mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-[#E2E8F0] bg-white overflow-hidden"
            >
              <nav className="px-6 py-4 space-y-1">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-[#2563EB] text-white shadow-sm"
                          : "text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#1E3A8A]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E2E8F0] mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl font-bold">ر</span>
                </div>
                <h3 className="text-xl font-bold text-[#1E3A8A] m-0">رسمي</h3>
              </div>
              <p className="text-[#64748B] text-sm max-w-sm">
                منصة بلاغات ذكية بمعايير راقية. نجمع بين الهيبة المؤسسية والذكاء التقني الحديث.
              </p>
            </div>
            <div>
              <h4 className="text-[#1E3A8A] font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                <li><Link to="/dashboard" className="text-[#64748B] hover:text-[#2563EB] text-sm transition-colors">لوحة التحكم</Link></li>
                <li><Link to="/submit-report" className="text-[#64748B] hover:text-[#2563EB] text-sm transition-colors">تسجيل بلاغ</Link></li>
                <li><Link to="/track-report" className="text-[#64748B] hover:text-[#2563EB] text-sm transition-colors">تتبع البلاغ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#1E3A8A] font-semibold mb-4">تواصل معنا</h4>
              <ul className="space-y-2">
                <li className="text-[#64748B] text-sm">support@rassmi.gov</li>
                <li className="text-[#64748B] text-sm">920000000</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#E2E8F0] mt-8 pt-8 text-center">
            <p className="text-[#64748B] text-sm">
              © 2026 رسمي. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}