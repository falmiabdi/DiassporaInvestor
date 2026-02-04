// InvestorFearutes/dashboard/pages/MainDashboardPage.tsx
// import React from "react";

import { Outlet } from "react-router-dom";
import BusinessHeader from "../components/BusinessHeader";
import BussinessOwner from "@/components/Sidebar/BussinessOwner";

export default function MainDashboardPage() {
  return (
    <div className="bg-black w-full min-h-screen flex text-white">
      <BussinessOwner />
      <main className="flex-1 overflow-auto">
        <BusinessHeader />
        <Outlet />
      </main>
    </div>
  );
}
