import { useState } from "react";
import { useParams, Link } from "react-router";
import { ArrowRight, Clock, User, Building, AlertCircle, Calendar, CheckCircle, MessageSquare, Paperclip } from "lucide-react";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Textarea } from "../components/Textarea";
import { motion } from "motion/react";

// Mock data
const requestDetails = {
  id: "REQ-2024-001",
  title: "طلب صيانة مكيف",
  description: "يوجد عطل في مكيف الهواء الموجود في المكتب رقم 205. المكيف لا يعمل بشكل صحيح ويحتاج إلى فحص وصيانة عاجلة.",
  department: "الصيانة",
  status: "قيد المعالجة",
  priority: "عالية",
  createdDate: "2024-03-01 10:30",
  dueDate: "2024-03-05 17:00",
  assignee: "أحمد محمد",
  reporter: "سارة علي",
  slaRemaining: "48 ساعة و 30 دقيقة",
  slaProgress: 60,
};

const timeline = [
  { id: 1, action: "تم إنشاء الطلب", user: "سارة علي", date: "2024-03-01 10:30", type: "created" },
  { id: 2, action: "تم تعيين الطلب إلى أحمد محمد", user: "النظام", date: "2024-03-01 10:35", type: "assigned" },
  { id: 3, action: "تم بدء العمل على الطلب", user: "أحمد محمد", date: "2024-03-01 14:20", type: "progress" },
  { id: 4, action: "تم إضافة تعليق", user: "أحمد محمد", date: "2024-03-02 09:15", type: "comment" },
];

const comments = [
  { id: 1, user: "أحمد محمد", text: "تم الفحص الأولي للمكيف. يبدو أن المشكلة في ضاغط الهواء. سيتم الحصول على قطعة الغيار المطلوبة.", date: "2024-03-02 09:15", avatar: "👨" },
  { id: 2, user: "سارة علي", text: "شكراً على التحديث. متى يتوقع أن يتم إصلاح المكيف؟", date: "2024-03-02 11:30", avatar: "👩" },
];

export function RequestDetails() {
  const { id } = useParams();
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      // Handle adding comment
      setNewComment("");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <Link to="/requests" className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#1E3A8A] mb-4">
            <ArrowRight className="w-4 h-4" />
            <span>العودة إلى الطلبات</span>
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-[#1E3A8A] mb-2">{requestDetails.title}</h1>
              <p className="text-[#64748B]">{requestDetails.id}</p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" size="md">تغيير الحالة</Button>
              <Button variant="secondary" size="md">إعادة تعيين</Button>
              <Button variant="primary" size="md">إغلاق الطلب</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Right Panel - Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <Card>
              <div className="p-6">
                <h3 className="text-[#1E3A8A] mb-4">التفاصيل</h3>
                <p className="text-[#64748B] leading-relaxed">{requestDetails.description}</p>
              </div>
            </Card>

            {/* Comments */}
            <Card>
              <div className="p-6">
                <h3 className="text-[#1E3A8A] mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  التعليقات
                </h3>
                <div className="space-y-4 mb-6">
                  {comments.map((comment) => (
                    <motion.div
                      key={comment.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-[#F8F7F4] rounded-xl p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#14B8A6] rounded-full flex items-center justify-center text-xl">
                          {comment.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-[#1E3A8A]">{comment.user}</span>
                            <span className="text-sm text-[#94A3B8]">{comment.date}</span>
                          </div>
                          <p className="text-[#64748B]">{comment.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-3">
                  <Textarea
                    placeholder="أضف تعليقك هنا..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={3}
                  />
                  <Button variant="primary" onClick={handleAddComment}>
                    إضافة تعليق
                  </Button>
                </div>
              </div>
            </Card>

            {/* Attachments */}
            <Card>
              <div className="p-6">
                <h3 className="text-[#1E3A8A] mb-4 flex items-center gap-2">
                  <Paperclip className="w-5 h-5" />
                  المرفقات
                </h3>
                <div className="flex items-center gap-3 p-3 bg-[#F8F7F4] rounded-lg">
                  <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">📄</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#1E3A8A]">صورة_المكيف.jpg</p>
                    <p className="text-sm text-[#64748B]">2.4 MB</p>
                  </div>
                  <Button variant="secondary" size="sm">تحميل</Button>
                </div>
              </div>
            </Card>

            {/* Timeline */}
            <Card>
              <div className="p-6">
                <h3 className="text-[#1E3A8A] mb-4">سجل الأحداث</h3>
                <div className="space-y-4">
                  {timeline.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          event.type === "created" ? "bg-[#2563EB]" :
                          event.type === "assigned" ? "bg-[#F59E0B]" :
                          event.type === "progress" ? "bg-[#14B8A6]" :
                          "bg-[#64748B]"
                        }`}>
                          {event.type === "created" && <AlertCircle className="w-4 h-4 text-white" />}
                          {event.type === "assigned" && <User className="w-4 h-4 text-white" />}
                          {event.type === "progress" && <Clock className="w-4 h-4 text-white" />}
                          {event.type === "comment" && <MessageSquare className="w-4 h-4 text-white" />}
                        </div>
                        {index < timeline.length - 1 && (
                          <div className="w-0.5 h-12 bg-[#E2E8F0]" />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <p className="font-medium text-[#1E3A8A]">{event.action}</p>
                        <p className="text-sm text-[#64748B]">
                          {event.user} • {event.date}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Left Panel - Metadata */}
          <div className="space-y-6">
            {/* SLA Timer */}
            <Card>
              <div className="p-6">
                <h3 className="text-[#1E3A8A] mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  الوقت المتبقي
                </h3>
                <div className="space-y-3">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#2563EB] mb-1">{requestDetails.slaRemaining}</p>
                    <p className="text-sm text-[#64748B]">حتى انتهاء الموعد</p>
                  </div>
                  <div className="relative h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${requestDetails.slaProgress}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="absolute top-0 right-0 h-full bg-gradient-to-l from-[#2563EB] to-[#14B8A6] rounded-full"
                    />
                  </div>
                  <p className="text-xs text-center text-[#64748B]">{requestDetails.slaProgress}% من الوقت المحدد</p>
                </div>
              </div>
            </Card>

            {/* Status & Priority */}
            <Card>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-[#64748B] mb-2">الحالة</p>
                  <Badge variant="yellow" className="w-full justify-center">{requestDetails.status}</Badge>
                </div>
                <div>
                  <p className="text-sm text-[#64748B] mb-2">الأولوية</p>
                  <Badge variant="red" className="w-full justify-center">{requestDetails.priority}</Badge>
                </div>
              </div>
            </Card>

            {/* Details */}
            <Card>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-[#64748B] mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-[#64748B] mb-1">المسؤول</p>
                    <p className="font-medium text-[#1E3A8A]">{requestDetails.assignee}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-[#64748B] mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-[#64748B] mb-1">المُبلِّغ</p>
                    <p className="font-medium text-[#1E3A8A]">{requestDetails.reporter}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-[#64748B] mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-[#64748B] mb-1">القسم</p>
                    <p className="font-medium text-[#1E3A8A]">{requestDetails.department}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[#64748B] mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-[#64748B] mb-1">تاريخ الإنشاء</p>
                    <p className="font-medium text-[#1E3A8A]">{requestDetails.createdDate}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#64748B] mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-[#64748B] mb-1">الموعد النهائي</p>
                    <p className="font-medium text-[#1E3A8A]">{requestDetails.dueDate}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
