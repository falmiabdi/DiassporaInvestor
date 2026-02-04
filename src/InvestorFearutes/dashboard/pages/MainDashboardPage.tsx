// InvestorFearutes/dashboard/pages/MainDashboardPage.tsx
// import React from "react";
import InvestorSidebar from "@/components/Sidebar/InvestorSidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainDashboardPage() {
  return (
    <div className="bg-black w-full min-h-screen flex text-white">
      <InvestorSidebar />
      <main className="flex-1 overflow-auto">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
