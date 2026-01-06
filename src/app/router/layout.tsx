import { Outlet, useLocation } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/ui/appSidebar";
import { ChevronRight } from "lucide-react";
import { getMenuLabelByPath } from "./menu";

export default function MainLayout() {
  const location = useLocation();
  const currentLabel = getMenuLabelByPath(location.pathname);

  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen">
        <AppSidebar />
        <SidebarTrigger />

        <div className="flex flex-col flex-1">
          <header className="flex items-center gap-3 p-5">
            <h2 className="text-xl font-semibold">React LKH Framework</h2>
            {currentLabel.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">
                  {crumb.label}
                </span>
              </span>
            ))}
          </header>
          <div className="border-b mx-5" />
          <main className="flex-1 p-5">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
