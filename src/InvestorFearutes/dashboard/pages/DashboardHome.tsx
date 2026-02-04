// InvestorFearutes/dashboard/pages/DashboardHome.tsx
// import React from "react";
import {
  TrendingUp,
  DollarSign,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

export default function DashboardHome() {
  const stats = [
    {
      title: "Portfolio Value",
      value: "$125,430",
      change: "+12.5%",
      trend: "up",
      icon: <DollarSign className="text-green-500" size={24} />,
    },
    {
      title: "Active Investments",
      value: "5",
      change: "+2 this month",
      trend: "up",
      icon: <TrendingUp className="text-yellow-500" size={24} />,
    },
    {
      title: "Total Returns",
      value: "$15,280",
      change: "+8.3%",
      trend: "up",
      icon: <ArrowUpRight className="text-blue-500" size={24} />,
    },
    {
      title: "KYC Status",
      value: "Verified",
      change: "Level 2",
      trend: "verified",
      icon: <ShieldCheck className="text-purple-500" size={24} />,
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2 text-gradient bg-linear-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
          Welcome to Diaspora Invest! 🎉
        </h2>
        <p className="text-gray-400">Your gateway to Ethiopian investments</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm mb-2">{stat.title}</p>
                <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                <div className="flex items-center gap-1">
                  <ArrowUpRight className="text-green-500" size={16} />
                  <span className="text-sm text-green-500">{stat.change}</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-gray-800">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
        <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-linear-to-r from-green-900/30 to-green-700/30 border border-green-800/50 rounded-lg hover:border-green-700 transition-all">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-900/50 rounded-lg">
                <TrendingUp className="text-green-400" size={20} />
              </div>
              <div className="text-left">
                <h4 className="font-semibold">View Market</h4>
                <p className="text-sm text-gray-400">
                  Explore investment opportunities
                </p>
              </div>
            </div>
          </button>

          <button className="p-4 bg-linear-to-r from-yellow-900/30 to-yellow-700/30 border border-yellow-800/50 rounded-lg hover:border-yellow-700 transition-all">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-900/50 rounded-lg">
                <DollarSign className="text-yellow-400" size={20} />
              </div>
              <div className="text-left">
                <h4 className="font-semibold">Send Money</h4>
                <p className="text-sm text-gray-400">Transfer to Ethiopia</p>
              </div>
            </div>
          </button>

          <button className="p-4 bg-linear-to-r from-blue-900/30 to-blue-700/30 border border-blue-800/50 rounded-lg hover:border-blue-700 transition-all">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-900/50 rounded-lg">
                <ShieldCheck className="text-blue-400" size={20} />
              </div>
              <div className="text-left">
                <h4 className="font-semibold">Complete KYC</h4>
                <p className="text-sm text-gray-400">Increase your limits</p>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="mt-8 p-6 bg-linear-to-r from-green-900/20 to-yellow-900/20 border border-yellow-800/30 rounded-xl">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-yellow-500/20 rounded-lg">
            <span className="text-2xl">🚀</span>
          </div>
          <div>
            <h3 className="text-xl font-bold">More Features Coming Soon!</h3>
            <p className="text-gray-300">
              Stock Trading, Investment Portfolio, Market Analysis, and more...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
