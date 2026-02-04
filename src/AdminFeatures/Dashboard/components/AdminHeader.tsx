// AdminFeatures/dashboard/components/AdminHeader.tsx
import {
  Bell,
  Users,
  Shield,
  BarChart3,
  AlertTriangle,
  Eye,
  Settings,
  Database,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminHeader() {
  return (
    <header className="bg-gray-900 border-b border-gray-800 p-6">
      <div className="flex justify-between items-center">
        {/* Left: Admin Title */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-700 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-gray-400">System administration and monitoring</p>
        </div>

        {/* Right: Quick Actions & Notifications */}
        <div className="flex items-center gap-4">
          {/* User Management */}
          <Link to="/admin/users">
            <button className="relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-900/30 to-yellow-900/30 text-yellow-400 border border-yellow-800/50 rounded-lg hover:from-orange-900/50 hover:to-yellow-900/50 hover:border-yellow-700 transition-all">
              <Users size={18} />
              <span>Users</span>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-orange-600 to-yellow-600 text-xs text-white rounded-full flex items-center justify-center">
                15
              </span>
            </button>
          </Link>

          {/* KYC Verification */}
          <Link to="/admin/kyc">
            <button className="relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-900/30 to-yellow-900/30 text-yellow-400 border border-yellow-800/50 rounded-lg hover:from-orange-900/50 hover:to-yellow-900/50 hover:border-yellow-700 transition-all">
              <Shield size={18} />
              <span>KYC</span>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-orange-600 to-yellow-600 text-xs text-white rounded-full flex items-center justify-center">
                23
              </span>
            </button>
          </Link>

          {/* Analytics */}
          <Link to="/admin/analytics">
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-900/30 to-yellow-900/30 text-yellow-400 border border-yellow-800/50 rounded-lg hover:from-orange-900/50 hover:to-yellow-900/50 hover:border-yellow-700 transition-all">
              <BarChart3 size={18} />
              <span>Analytics</span>
            </button>
          </Link>

          {/* System Status */}
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-900/30 to-emerald-900/30 text-green-400 border border-green-800/50 rounded-lg">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>System Online</span>
          </button>

          {/* Alerts */}
          <Link to="/admin/compliance">
            <button className="relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-900/30 to-orange-900/30 text-red-400 border border-red-800/50 rounded-lg hover:from-red-900/50 hover:to-orange-900/50 hover:border-red-700 transition-all">
              <AlertTriangle size={18} />
              <span>Alerts</span>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-600 to-orange-600 text-xs text-white rounded-full flex items-center justify-center">
                5
              </span>
            </button>
          </Link>

          {/* Notifications */}
          <button className="relative p-3 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg hover:border-yellow-700 transition-colors">
            <Bell size={22} className="text-yellow-400" />
            <span className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-orange-600 to-yellow-600 text-xs text-white rounded-full flex items-center justify-center">
              12
            </span>
          </button>

          {/* Admin Avatar */}
          <Link to="/admin/profile">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-700 flex items-center justify-center text-white font-bold cursor-pointer text-lg">
              AD
            </div>
          </Link>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mt-6 flex gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"></div>
          <span className="text-sm text-gray-300">
            Total Users:{" "}
            <span className="text-yellow-400 font-bold">1,245</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"></div>
          <span className="text-sm text-gray-300">
            Active Businesses:{" "}
            <span className="text-yellow-400 font-bold">89</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"></div>
          <span className="text-sm text-gray-300">
            Total Investments:{" "}
            <span className="text-yellow-400 font-bold">$2.5M</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"></div>
          <span className="text-sm text-gray-300">
            System Load: <span className="text-yellow-400 font-bold">65%</span>
          </span>
        </div>
      </div>

      {/* Quick Admin Actions */}
      <div className="mt-4 flex gap-3">
        <button className="text-xs px-3 py-1 bg-gradient-to-r from-orange-900/20 to-yellow-900/20 text-yellow-400 rounded-full hover:from-orange-900/30 hover:to-yellow-900/30 transition-all">
          <Eye size={12} className="inline mr-1" />
          Monitor Logs
        </button>
        <button className="text-xs px-3 py-1 bg-gradient-to-r from-orange-900/20 to-yellow-900/20 text-yellow-400 rounded-full hover:from-orange-900/30 hover:to-yellow-900/30 transition-all">
          <Database size={12} className="inline mr-1" />
          Backup Database
        </button>
        <button className="text-xs px-3 py-1 bg-gradient-to-r from-orange-900/20 to-yellow-900/20 text-yellow-400 rounded-full hover:from-orange-900/30 hover:to-yellow-900/30 transition-all">
          <Settings size={12} className="inline mr-1" />
          System Settings
        </button>
      </div>
    </header>
  );
}
