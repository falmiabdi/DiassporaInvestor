// InvestorFeatures/dashboard/components/Header.tsx
import { Bell, TrendingUp, Send, BarChart3, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800 p-6">
      <div className="flex justify-between items-center">
        {/* Left: Page Title */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-700 bg-clip-text text-transparent">
            Welcome to DiasporaInvest
          </h1>
          <p className="text-gray-400">Your gateway to Ethiopian investments</p>
        </div>

        {/* Right: Quick Actions & Notifications */}
        <div className="flex items-center gap-4">
          {/* Market Button */}
          <Link to="/dashboard/market">
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-900/30 to-yellow-900/30 text-yellow-400 border border-yellow-800/50 rounded-lg hover:from-orange-900/50 hover:to-yellow-900/50 hover:border-yellow-700 transition-all">
              <TrendingUp size={18} />
              <span>Market</span>
            </button>
          </Link>

          {/* Remittance Button */}
          <Link to="/dashboard/remittance">
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-900/30 to-yellow-900/30 text-yellow-400 border border-yellow-800/50 rounded-lg hover:from-orange-900/50 hover:to-yellow-900/50 hover:border-yellow-700 transition-all">
              <Send size={18} />
              <span>Remittance</span>
            </button>
          </Link>

          {/* Stock Button */}
          <Link to="/dashboard/stock">
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-900/30 to-yellow-900/30 text-yellow-400 border border-yellow-800/50 rounded-lg hover:from-orange-900/50 hover:to-yellow-900/50 hover:border-yellow-700 transition-all">
              <BarChart3 size={18} />
              <span>Stock</span>
            </button>
          </Link>

          {/* KYC Button */}
          <Link to="/dashboard/kyc">
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-900/30 to-yellow-900/30 text-yellow-400 border border-yellow-800/50 rounded-lg hover:from-orange-900/50 hover:to-yellow-900/50 hover:border-yellow-700 transition-all">
              <ShieldCheck size={18} />
              <span className="text-xs">KYC ✓</span>
            </button>
          </Link>

          {/* Notifications */}
          <button className="relative p-3 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg hover:border-yellow-700 transition-colors">
            <Bell size={22} className="text-yellow-400" />
            <span className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-orange-600 to-yellow-600 text-xs text-white rounded-full flex items-center justify-center">
              5
            </span>
          </button>

          {/* User Avatar */}
          <Link to="/dashboard/profile">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-700 flex items-center justify-center text-white font-bold cursor-pointer text-lg">
              JD
            </div>
          </Link>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mt-6 flex gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"></div>
          <span className="text-sm text-gray-300">
            Portfolio:{" "}
            <span className="text-yellow-400 font-bold">$125,430</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"></div>
          <span className="text-sm text-gray-300">
            Active Investments:{" "}
            <span className="text-yellow-400 font-bold">5</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"></div>
          <span className="text-sm text-gray-300">
            Returns: <span className="text-yellow-400 font-bold">+12.5%</span>
          </span>
        </div>
      </div>
    </header>
  );
}
