import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AdminSidebar from "./AdminSidebar";
import AdminDashboard from "./AdminDashboard";
const DashboardLayout = ({ role }) => {
  const roleMap = {
    ADMIN: {
      element: <AdminDashboard />,
    },
  };
  return <>{roleMap[role].element}</>;
};

export default DashboardLayout;
