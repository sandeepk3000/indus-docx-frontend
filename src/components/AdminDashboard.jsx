import React from "react";
import { AdminLayout } from "./AdminLayout";
import AdminSidebar from "./AdminSidebar";
import SidebarLayout from "./SidebarLayout";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import AddPost from "./AddPost";
const AdminDashboard = () => {
  return (
    <div className="flex ">
      <div>
        <SidebarLayout>
          <AdminSidebar />
        </SidebarLayout>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminDashboard;
