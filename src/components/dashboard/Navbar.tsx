
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


interface NavbarProps {
  sidebarExpanded: boolean;
  isMobile: boolean;
}

export function Navbar({ sidebarExpanded, isMobile }: NavbarProps) {
  return (
    <div
      className={cn(
        "bg-white border-b h-16 flex items-center px-4 sticky top-0 z-20",
        !isMobile && "pl-4 transition-all duration-300",
        !isMobile && sidebarExpanded ? "md:pl-64" : "md:pl-16"
      )}
    >
      <div className="flex-1 flex items-center gap-3">
        <div className="relative w-full max-w-md">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            placeholder="Search..."
            className="pl-10 bg-gray-50 border-none w-full max-w-md"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>
        
        {isMobile && (
          <div className="flex items-center gap-3 ml-4">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
              A
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
