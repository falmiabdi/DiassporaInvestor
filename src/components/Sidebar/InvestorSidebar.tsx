import { Link, useLocation } from "react-router-dom"
import {
  LayoutDashboard,
  PieChart,
  TrendingUp,
  DollarSign,
  BarChart3,
  ShieldCheck,
  User,
  LogOut
} from "lucide-react"
import { useAppDispatch } from "../../hooks/hooks"
import { logout } from "../../features/auth/slice/authSlice"

export default function InvestorSidebar() {
  const location = useLocation()

  // Investor specific menu items
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/investordashboard" },
    { icon: PieChart, label: "Portfolio", href: "/dashboard/portfolio" },
    { icon: TrendingUp, label: "Market", href: "/dashboard/market" },
    { icon: DollarSign, label: "Remittance", href: "/dashboard/remittance" },
    { icon: BarChart3, label: "Stock", href: "/dashboard/stock" },
    { icon: TrendingUp, label: "Investment", href: "/dashboard/investment" },
    { icon: ShieldCheck, label: "KYC", href: "/dashboard/kyc" },
    { icon: User, label: "Profile", href: "/dashboard/profile" },
  ];

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <aside className="flex w-64 bg-gray-900 border-r border-gray-800 h-screen sticky top-0 flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <Link to="/dashboard" className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-700 bg-clip-text text-transparent font-montserrat">
          Diaspora<span className="text-yellow-500">Invest</span>
        </Link>
      </div>

      {/* User Info */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-700 flex items-center justify-center text-white font-bold">
            JD
          </div>
          <div>
            <h4 className="text-white font-semibold">John Doe</h4>
            <p className="text-xs text-gray-400">Investor</p>
            <div className="flex items-center gap-1 mt-1">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <span className="text-xs text-yellow-400">Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Menu */}
      <nav className="py-8 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.href

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
                {item.label === "KYC" && (
                  <span className="ml-auto bg-yellow-600 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
                    ✓
                  </span>
                )}
              </div>
            </Link>
          )
        })}
      </nav>

      {/* Investment Status */}
      <div className="px-4 mb-4">
        <div className="bg-gray-800/50 rounded-lg p-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-300">Portfolio Value</span>
            <span className="text-yellow-400 font-bold">$125,430</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-700 h-2 rounded-full" style={{ width: '70%' }}></div>
          </div>
          <p className="text-xs text-gray-400 mt-2">5 investments active</p>
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
  )
}