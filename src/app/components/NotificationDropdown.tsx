import { useState } from "react";
import { Bell, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { Badge } from "./Badge";
import { motion, AnimatePresence } from "motion/react";

const notifications = [
  { id: 1, type: "success", title: "تم إتمام الطلب", message: "تم إنهاء الطلب REQ-2024-001", time: "منذ 5 دقائق", read: false },
  { id: 2, type: "warning", title: "تنبيه SLA", message: "طلب REQ-2024-045 يقترب من الموعد النهائي", time: "منذ 15 دقيقة", read: false },
  { id: 3, type: "info", title: "تعيين جديد", message: "تم تعيينك على طلب جديد", time: "منذ ساعة", read: true },
  { id: 4, type: "error", title: "طلب متأخر", message: "طلب REQ-2024-033 تجاوز الوقت المحدد", time: "منذ ساعتين", read: true },
];

export function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-10 h-10 bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-lg flex items-center justify-center transition-colors duration-200"
      >
        <Bell className="w-5 h-5 text-[#64748B]" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -left-1 w-5 h-5 bg-[#EF4444] text-white text-xs font-bold rounded-full flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-[#E2E8F0] z-50 overflow-hidden"
            >
              {/* Header */}
              <div className="p-4 border-b border-[#E2E8F0]">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[#1E3A8A]">الإشعارات</h3>
                  {unreadCount > 0 && (
                    <Badge variant="blue">{unreadCount} جديد</Badge>
                  )}
                </div>
              </div>

              {/* Notifications List */}
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border-b border-[#E2E8F0] hover:bg-[#F8F7F4] cursor-pointer transition-colors duration-200 ${
                      !notification.read ? "bg-blue-50" : ""
                    }`}
                  >
                    <div className="flex gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        notification.type === "success" ? "bg-green-100" :
                        notification.type === "warning" ? "bg-yellow-100" :
                        notification.type === "error" ? "bg-red-100" :
                        "bg-blue-100"
                      }`}>
                        {notification.type === "success" && <CheckCircle className="w-5 h-5 text-[#22C55E]" />}
                        {notification.type === "warning" && <AlertCircle className="w-5 h-5 text-[#F59E0B]" />}
                        {notification.type === "error" && <AlertCircle className="w-5 h-5 text-[#EF4444]" />}
                        {notification.type === "info" && <Bell className="w-5 h-5 text-[#2563EB]" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-[#1E3A8A] mb-1">{notification.title}</p>
                        <p className="text-sm text-[#64748B] mb-2">{notification.message}</p>
                        <div className="flex items-center gap-1 text-xs text-[#94A3B8]">
                          <Clock className="w-3 h-3" />
                          <span>{notification.time}</span>
                        </div>
                      </div>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-[#2563EB] rounded-full flex-shrink-0 mt-2" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-3 text-center border-t border-[#E2E8F0]">
                <button className="text-sm text-[#2563EB] hover:text-[#1E3A8A] font-medium">
                  عرض جميع الإشعارات
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
