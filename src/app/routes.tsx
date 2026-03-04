import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { SubmitReport } from "./pages/SubmitReport";
import { TrackReport } from "./pages/TrackReport";
import { EmployeePanel } from "./pages/EmployeePanel";
import { ManagerPanel } from "./pages/ManagerPanel";
import { Requests } from "./pages/Requests";
import { RequestDetails } from "./pages/RequestDetails";
import { InternalTasks } from "./pages/InternalTasks";
import { Departments } from "./pages/Departments";
import { Users } from "./pages/Users";
import { Reports } from "./pages/Reports";
import { SLAPerformance } from "./pages/SLAPerformance";
import { ExecutiveDashboard } from "./pages/ExecutiveDashboard";
import { Settings } from "./pages/Settings";
import { AuditLog } from "./pages/AuditLog";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "dashboard", Component: Dashboard },
      { path: "requests", Component: Requests },
      { path: "request/:id", Component: RequestDetails },
      { path: "internal-tasks", Component: InternalTasks },
      { path: "submit-report", Component: SubmitReport },
      { path: "track-report", Component: TrackReport },
      { path: "departments", Component: Departments },
      { path: "users", Component: Users },
      { path: "reports", Component: Reports },
      { path: "sla-performance", Component: SLAPerformance },
      { path: "executive", Component: ExecutiveDashboard },
      { path: "employee", Component: EmployeePanel },
      { path: "manager", Component: ManagerPanel },
      { path: "settings", Component: Settings },
      { path: "audit-log", Component: AuditLog },
      { path: "*", Component: NotFound },
    ],
  },
]);