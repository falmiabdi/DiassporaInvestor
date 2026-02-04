// BusinessFeatures/dashboard/components/BusinessHeader.tsx
import {
  Bell,
  DollarSign,
  Users,
  Calendar,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function BusinessHeader() {
  return (
    <header className="bg-gray-900 border-b border-gray-800 p-6">
      <div className="flex justify-between items-center">
        {/* Left: Business Title */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-700 bg-clip-text text-transparent">
            Addis Tech Solutions
          </h1>
          <p className="text-gray-400">
            Manage your business funding and investors
          </p>
        </div>

        {/* Right: Quick Actions & Notifications */}
        <div className="flex items-center gap-4">
          {/* Funding Status */}
          <Link to="/business/funding">
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-900/30 to-yellow-900/30 text-yellow-400 border border-yellow-800/50 rounded-lg hover:from-orange-900/50 hover:to-yellow-900/50 hover:border-yellow-700 transition-all">
              <DollarSign size={18} />
              <span>$75K Raised</span>
            </button>
          </Link>

          {/* Investor Management */}
          <Link to="/business/investors">
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-900/30 to-yellow-900/30 text-yellow-400 border border-yellow-800/50 rounded-lg hover:from-orange-900/50 hover:to-yellow-900/50 hover:border-yellow-700 transition-all">
              <Users size={18} />
              <span>18 Investors</span>
            </button>
          </Link>

          {/* Analytics */}
          <Link to="/business/analytics">
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-900/30 to-yellow-900/30 text-yellow-400 border border-yellow-800/50 rounded-lg hover:from-orange-900/50 hover:to-yellow-900/50 hover:border-yellow-700 transition-all">
              <BarChart3 size={18} />
              <span>Analytics</span>
            </button>
          </Link>

          {/* Messages */}
          <Link to="/business/messages">
            <button className="relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-900/30 to-yellow-900/30 text-yellow-400 border border-yellow-800/50 rounded-lg hover:from-orange-900/50 hover:to-yellow-900/50 hover:border-yellow-700 transition-all">
              <MessageSquare size={18} />
              <span>Messages</span>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-orange-600 to-yellow-600 text-xs text-white rounded-full flex items-center justify-center">
                12
              </span>
            </button>
          </Link>

          {/* Calendar */}
          <Link to="/business/calendar">
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-900/30 to-yellow-900/30 text-yellow-400 border border-yellow-800/50 rounded-lg hover:from-orange-900/50 hover:to-yellow-900/50 hover:border-yellow-700 transition-all">
              <Calendar size={18} />
              <span>Calendar</span>
            </button>
          </Link>

          {/* Notifications */}
          <button className="relative p-3 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg hover:border-yellow-700 transition-colors">
            <Bell size={22} className="text-yellow-400" />
            <span className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-orange-600 to-yellow-600 text-xs text-white rounded-full flex items-center justify-center">
              8
            </span>
          </button>

          {/* Business Avatar */}
          <Link to="/business/profile">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-700 flex items-center justify-center text-white font-bold cursor-pointer text-lg">
              AT
            </div>
          </Link>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mt-6 flex gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"></div>
          <span className="text-sm text-gray-300">
            Active Listings:{" "}
            <span className="text-yellow-400 font-bold">2</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"></div>
          <span className="text-sm text-gray-300">
            Funding Progress:{" "}
            <span className="text-yellow-400 font-bold">75%</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"></div>
          <span className="text-sm text-gray-300">
            Pending Tasks: <span className="text-yellow-400 font-bold">7</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"></div>
          <span className="text-sm text-gray-300">
            Compliance: <span className="text-yellow-400 font-bold">85%</span>
          </span>
        </div>
      </div>
    </header>
  );
}
