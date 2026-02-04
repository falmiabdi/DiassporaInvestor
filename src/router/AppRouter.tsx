// AppRouter.tsx
import LandingPages from "@/pages/LandingPages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPages from "@/features/auth/pages/LoginPages";
import RegisterPages from "@/features/auth/pages/RegisterPages";

// ========== ADMIN FEATURES ==========
import AdminMainDashboardPage from "@/AdminFeatures/Dashboard/pages/AdminMainDashboardPage";
import AdminDashboardHome from "@/AdminFeatures/Dashboard/pages/AdminDashboardHome";


// ========== BUSINESS OWNER FEATURES ==========
import BusinessMainDashboardPage from "@/BusinessOwnerFeatures/Dashboard/pages/BusinessMainDashboardPage";
import BusinessDashboardHome from "@/BusinessOwnerFeatures/Dashboard/pages/BussinessDashboardHome";


// ========== INVESTOR FEATURES ==========
import InvestmentPage from "@/InvestorFearutes/Investment/pages/InvestmentPage";
import StockPage from "@/InvestorFearutes/Stocks/pages/StockPage";
import MarketPage from "@/InvestorFearutes/Markets/pages/MarketPage";
import KycPage from "@/InvestorFearutes/Kyc/pages/KycPage";
import RemittancePage from "@/InvestorFearutes/Remittance/pages/RemittancePage";
import ProfilePage from "@/InvestorFearutes/Profiles/pages/ProfilePage";
import DashboardHome from "@/InvestorFearutes/dashboard/pages/DashboardHome";
import MainDashboardPage from "@/InvestorFearutes/dashboard/pages/MainDashboardPage";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPages />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/register" element={<RegisterPages />} />

        {/* ADMIN Dashboard Routes */}
        <Route path="/admin" element={<AdminMainDashboardPage />}>
          <Route index element={<AdminDashboardHome />} />
        
        </Route>

        {/* BUSINESS OWNER Dashboard Routes */}
        <Route path="/business" element={<BusinessMainDashboardPage />}>
          <Route index element={<BusinessDashboardHome />} />
        
        </Route>

        {/* INVESTOR Dashboard Routes */}
        <Route path="/investor" element={<MainDashboardPage />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="remittance" element={<RemittancePage />} />
          <Route path="kyc" element={<KycPage />} />
          <Route path="market" element={<MarketPage />} />
          <Route path="stock" element={<StockPage />} />
          <Route path="investment" element={<InvestmentPage />} />
        </Route>

        {/* 404 Page - Add if needed */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
