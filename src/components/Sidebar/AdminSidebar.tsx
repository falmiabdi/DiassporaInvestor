// components/layout/AdminSidebar.tsx
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Shield,
  BarChart3,
  Settings,
  FileText,
  AlertTriangle,
  Database,
  Key,
  DollarSign,
  // Building,
  Eye,
  // Bell,
  LogOut,
} from "lucide-react";
import { useAppDispatch } from "../../hooks/hooks";
import { logout } from "../../features/auth/slice/authSlice";

export default function AdminSidebar() {
  const location = useLocation();

  // Admin specific menu items
  const menuItems = [
    { icon: LayoutDashboard, label: "admin", href: "/admin/dashboard" },
    { icon: Users, label: "Users", href: "/admin/users", badge: "15" },
    {
      icon: Shield,
      label: "KYC Verification",
      href: "/admin/kyc",
      badge: "23",
    },
    { icon: DollarSign, label: "Investments", href: "/admin/investments" },
    {
      icon: FileText,
      label: "Compliance",
      href: "/admin/compliance",
      badge: "5",
    },
    { icon: BarChart3, label: "Analytics", href: "/admin/analytics" },
    { icon: Database, label: "Content", href: "/admin/content" },
    { icon: Key, label: "Security", href: "/admin/security" },
    { icon: Settings, label: "System", href: "/admin/system" },
  ];

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <aside className="flex w-64 bg-gray-900 border-r border-gray-800 h-screen sticky top-0 flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <Link
          to="/admin/dashboard"
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-700 bg-clip-text text-transparent font-montserrat"
        >
          Admin<span className="text-yellow-500">Panel</span>
        </Link>
      </div>

      {/* Admin Info */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-700 flex items-center justify-center text-white font-bold">
            AD
          </div>
          <div>
            <h4 className="text-white font-semibold">Admin User</h4>
            <p className="text-xs text-gray-400">System Administrator</p>
            <div className="flex items-center gap-1 mt-1">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <span className="text-xs text-yellow-400">Super Admin</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Menu */}
      <nav className="py-8 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            location.pathname === item.href ||
            location.pathname.startsWith(item.href + "/");

          return (
            <Link key={item.href} to={item.href}>
              <div
                className={`mx-4 mb-2 px-4 py-3 rounded-lg flex items-center gap-3 transition-all cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-700 text-white"
                    : "text-gray-400 hover:text-yellow-500 hover:bg-gray-800"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-gradient-to-r from-orange-600 to-yellow-600 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* System Status */}
      <div className="px-4 mb-4">
        <div className="bg-gray-800/50 rounded-lg p-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-300">System Status</span>
            <span className="text-green-400 font-bold flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              Online
            </span>
          </div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-300">Active Users</span>
            <span className="text-yellow-400 font-bold">1,245</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Total Investments</span>
            <span className="text-yellow-400 font-bold">$2.5M</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div
              className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-700 h-2 rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
          <p className="text-xs text-gray-400 mt-2">System load: 65%</p>
        </div>
      </div>

      {/* Alerts */}
      <div className="px-4 mb-4">
        <div className="bg-gradient-to-r from-orange-900/20 to-yellow-900/20 border border-yellow-800/30 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle size={14} className="text-yellow-500" />
            <span className="text-xs font-semibold text-yellow-400">
              ALERTS
            </span>
          </div>
          <p className="text-xs text-gray-300">
            5 pending KYC verifications require attention
          </p>
          <button className="mt-2 text-xs text-yellow-500 hover:text-yellow-400 flex items-center gap-1">
            <Eye size={12} />
            Review Now →
          </button>
        </div>
      </div>

      {/* Logout */}
      <div className="px-4 pb-6">
        <button
          onClick={handleLogout}
          className="w-full px-4 py-3 bg-gradient-to-r from-red-900/30 to-red-700/30 text-red-400 border border-red-800/50 rounded-lg flex items-center gap-3 hover:from-red-900/50 hover:to-red-700/50 hover:border-red-700 transition-all"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
