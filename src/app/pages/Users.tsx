import { useState } from "react";
import { Plus, Shield, Search, UserCog } from "lucide-react";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Table, TableHead, TableBody, TableRow, TableCell, TableHeader } from "../components/Table";
import { Modal } from "../components/Modal";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { motion } from "motion/react";

// Mock data
const users = [
  { id: 1, name: "أحمد محمد", email: "ahmed@rassmi.gov", role: "مدير قسم", department: "الصيانة", status: "نشط", lastLogin: "2024-03-03" },
  { id: 2, name: "فاطمة علي", email: "fatima@rassmi.gov", role: "مدير قسم", department: "المشتريات", status: "نشط", lastLogin: "2024-03-03" },
  { id: 3, name: "محمد سعيد", email: "mohammed@rassmi.gov", role: "موظف", department: "المالية", status: "نشط", lastLogin: "2024-03-02" },
  { id: 4, name: "سارة أحمد", email: "sara@rassmi.gov", role: "موظف", department: "الموارد البشرية", status: "غير نشط", lastLogin: "2024-02-28" },
  { id: 5, name: "خالد عمر", email: "khaled@rassmi.gov", role: "مشرف", department: "التطوير", status: "نشط", lastLogin: "2024-03-03" },
  { id: 6, name: "نورة سالم", email: "noura@rassmi.gov", role: "موظف", department: "التسويق", status: "نشط", lastLogin: "2024-03-01" },
];

const roles = {
  "مدير قسم": { color: "blue", permissions: ["إدارة كاملة"] },
  "مشرف": { color: "yellow", permissions: ["عرض", "تعديل", "تعيين"] },
  "موظف": { color: "gray", permissions: ["عرض", "تعديل"] },
};

export function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isPermissionsModalOpen, setIsPermissionsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<typeof users[0] | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "موظف",
    department: "الصيانة",
  });

  const filteredUsers = users.filter((user) =>
    user.name.includes(searchTerm) || user.email.includes(searchTerm)
  );

  const handleAddUser = () => {
    // Handle user creation
    setIsAddModalOpen(false);
    setFormData({ name: "", email: "", role: "موظف", department: "الصيانة" });
  };

  const handleEditPermissions = (user: typeof users[0]) => {
    setSelectedUser(user);
    setIsPermissionsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-[#1E3A8A] mb-2">المستخدمين والصلاحيات</h1>
            <p className="text-[#64748B]">إدارة المستخدمين وأدوارهم</p>
          </div>
          <Button variant="primary" size="md" onClick={() => setIsAddModalOpen(true)}>
            <Plus className="w-4 h-4 ml-2" />
            إضافة مستخدم
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="hover:shadow-lg transition-all duration-200">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#64748B] mb-1">إجمالي المستخدمين</p>
                    <h3 className="text-2xl font-bold text-[#1E3A8A] m-0">72</h3>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">👥</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="hover:shadow-lg transition-all duration-200">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#64748B] mb-1">مستخدمين نشطين</p>
                    <h3 className="text-2xl font-bold text-[#22C55E] m-0">68</h3>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#22C55E] to-[#14B8A6] rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">✓</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="hover:shadow-lg transition-all duration-200">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#64748B] mb-1">مديرو الأقسام</p>
                    <h3 className="text-2xl font-bold text-[#2563EB] m-0">12</h3>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#14B8A6] rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">👔</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="hover:shadow-lg transition-all duration-200">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#64748B] mb-1">مستخدمين جدد</p>
                    <h3 className="text-2xl font-bold text-[#F59E0B] m-0">8</h3>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-[#C6A75E] rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">✨</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Search Bar */}
        <Card className="mb-6">
          <div className="p-6">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#94A3B8] w-5 h-5" />
              <Input
                type="text"
                placeholder="البحث عن مستخدم..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
            </div>
          </div>
        </Card>

        {/* Users Table */}
        <Card>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>المستخدم</TableHeader>
                <TableHeader>البريد الإلكتروني</TableHeader>
                <TableHeader>الدور</TableHeader>
                <TableHeader>القسم</TableHeader>
                <TableHeader>الحالة</TableHeader>
                <TableHeader>آخر دخول</TableHeader>
                <TableHeader>الإجراءات</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map((user, index) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-[#F8F7F4] transition-colors duration-200"
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#14B8A6] rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">{user.name.charAt(0)}</span>
                      </div>
                      <span className="font-semibold text-[#1E3A8A]">{user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-[#64748B]">{user.email}</span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={roles[user.role as keyof typeof roles].color as any}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.department}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === "نشط" ? "green" : "gray"}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-[#64748B]">{user.lastLogin}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => handleEditPermissions(user)}
                      >
                        <Shield className="w-3 h-3 ml-1" />
                        الصلاحيات
                      </Button>
                      <Button variant="secondary" size="sm">
                        تعديل
                      </Button>
                    </div>
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </Card>

        {/* Roles Overview */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(roles).map(([roleName, roleData], index) => (
            <motion.div
              key={roleName}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-all duration-200">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#14B8A6] rounded-xl flex items-center justify-center">
                      <UserCog className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1E3A8A] m-0">{roleName}</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-[#64748B] mb-2">الصلاحيات:</p>
                    {roleData.permissions.map((permission, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#2563EB] rounded-full" />
                        <span className="text-sm text-[#1E3A8A]">{permission}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add User Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="إضافة مستخدم جديد"
        size="md"
      >
        <div className="space-y-4">
          <Input
            label="الاسم الكامل"
            placeholder="أدخل الاسم"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            label="البريد الإلكتروني"
            type="email"
            placeholder="example@rassmi.gov"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <Select
            label="الدور"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            options={[
              { value: "موظف", label: "موظف" },
              { value: "مشرف", label: "مشرف" },
              { value: "مدير قسم", label: "مدير قسم" },
            ]}
          />
          <Select
            label="القسم"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            options={[
              { value: "الصيانة", label: "الصيانة" },
              { value: "المشتريات", label: "المشتريات" },
              { value: "المالية", label: "المالية" },
              { value: "الموارد البشرية", label: "الموارد البشرية" },
              { value: "التطوير", label: "التطوير" },
              { value: "التسويق", label: "التسويق" },
            ]}
          />
          <div className="flex gap-3 pt-4">
            <Button variant="primary" className="flex-1" onClick={handleAddUser}>
              إضافة
            </Button>
            <Button variant="secondary" className="flex-1" onClick={() => setIsAddModalOpen(false)}>
              إلغاء
            </Button>
          </div>
        </div>
      </Modal>

      {/* Edit Permissions Modal */}
      <Modal
        isOpen={isPermissionsModalOpen}
        onClose={() => setIsPermissionsModalOpen(false)}
        title={`تعديل صلاحيات: ${selectedUser?.name || ""}`}
        size="md"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-[#F8F7F4] rounded-lg">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-[#2563EB] rounded" />
              <div>
                <p className="font-medium text-[#1E3A8A]">عرض الطلبات</p>
                <p className="text-sm text-[#64748B]">القدرة على عرض جميع الطلبات</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#F8F7F4] rounded-lg">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-[#2563EB] rounded" />
              <div>
                <p className="font-medium text-[#1E3A8A]">تعديل الطلبات</p>
                <p className="text-sm text-[#64748B]">القدرة على تعديل الطلبات المعينة</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#F8F7F4] rounded-lg">
              <input type="checkbox" className="w-4 h-4 text-[#2563EB] rounded" />
              <div>
                <p className="font-medium text-[#1E3A8A]">حذف الطلبات</p>
                <p className="text-sm text-[#64748B]">القدرة على حذف الطلبات</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#F8F7F4] rounded-lg">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-[#2563EB] rounded" />
              <div>
                <p className="font-medium text-[#1E3A8A]">تعيين الطلبات</p>
                <p className="text-sm text-[#64748B]">القدرة على تعيين الطلبات للموظفين</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#F8F7F4] rounded-lg">
              <input type="checkbox" className="w-4 h-4 text-[#2563EB] rounded" />
              <div>
                <p className="font-medium text-[#1E3A8A]">إدارة المستخدمين</p>
                <p className="text-sm text-[#64748B]">القدرة على إدارة المستخدمين والصلاحيات</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="primary" className="flex-1" onClick={() => setIsPermissionsModalOpen(false)}>
              حفظ
            </Button>
            <Button variant="secondary" className="flex-1" onClick={() => setIsPermissionsModalOpen(false)}>
              إلغاء
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
