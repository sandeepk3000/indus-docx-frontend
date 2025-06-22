import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
const SidebarLayout = ({ children }) => {
  return (
    <SidebarProvider>
      {children}
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
  );
};

export default SidebarLayout;
