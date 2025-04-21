
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sidebarExpanded, setSidebarExpanded] = useState(!isMobile);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile && !sidebarExpanded) {
        setSidebarExpanded(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sidebarExpanded]);

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Sidebar
        isMobile={isMobile}
        expanded={sidebarExpanded}
        setExpanded={setSidebarExpanded}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar sidebarExpanded={sidebarExpanded} isMobile={isMobile} />
        <main
          className={cn(
            "flex-1 overflow-auto transition-all duration-300 p-6",
            !isMobile && sidebarExpanded ? "md:ml-64" : "md:ml-16"
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
