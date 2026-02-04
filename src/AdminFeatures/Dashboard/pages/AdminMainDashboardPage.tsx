// AdminFeatures/Dashboard/pages/AdminMainDashboardPage.tsx
// import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
export default function MainDashboardPage() {
  return (
    <div className="bg-black w-full min-h-screen flex text-white">
      <AdminSidebar />
      <main className="flex-1 overflow-auto">
        <AdminHeader />
        <Outlet />
      </main>
    </div>
  );
}
