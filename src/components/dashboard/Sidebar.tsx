
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  Menu,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  isMobile: boolean;
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}

export function Sidebar({ isMobile, expanded, setExpanded }: SidebarProps) {
  const navItems = [
    {
      title: "Dashboard",
      href: "/",
      icon: <LayoutDashboard size={20} />,
    },
    {
      title: "Employees",
      href: "/employees",
      icon: <Users size={20} />,
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: <BarChart3 size={20} />,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <>
      {isMobile && (
        <div className="flex items-center p-4 justify-between bg-white border-b md:hidden">
          <div className="font-semibold text-lg">StartupDash</div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <Menu size={20} />
          </button>
        </div>
      )}

      <aside
        className={cn(
          "fixed h-full bg-sidebar border-r transition-all duration-300 ease-in-out z-30",
          expanded ? "w-64" : isMobile ? "w-0" : "w-16",
          isMobile && !expanded ? "left-[-100%]" : "left-0"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 flex items-center justify-between">
            {expanded && (
              <div className="font-semibold text-lg">StartupDash</div>
            )}
            {!isMobile && (
              <button
                onClick={() => setExpanded(!expanded)}
                className={cn(
                  "p-1.5 rounded-lg hover:bg-gray-100 ml-auto",
                  !expanded && "mx-auto"
                )}
              >
                <ChevronRight
                  size={18}
                  className={cn(
                    "transition-transform duration-300",
                    expanded && "rotate-180"
                  )}
                />
              </button>
            )}
          </div>

          <div className="mt-6 flex-1 px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center py-3 px-3 rounded-lg mb-1 transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-primary font-medium"
                      : "hover:bg-gray-100"
                  )
                }
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  {expanded && <span>{item.title}</span>}
                </div>
              </NavLink>
            ))}
          </div>

          <div className="p-4 mt-auto">
            {expanded && (
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                  A
                </div>
                <div className="flex-1">
                  <div className="font-medium">Admin</div>
                  <div className="text-gray-500 text-xs">admin@startup.com</div>
                </div>
              </div>
            )}
            {!expanded && !isMobile && (
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium mx-auto">
                A
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
