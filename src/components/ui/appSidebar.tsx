import { Link, useLocation } from "react-router-dom";
import {
  useSidebar,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { menuGroups } from "@/app/router/menu";
import { ThemeToggle } from "./themeToggle";
import { Building2, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function AppSidebar() {
  const location = useLocation();
  const { open } = useSidebar();
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (label: string) => {
    // 사이드바 닫혀있으면 그룹 토글 금지 test
    if (!open) return;

    setOpenGroups((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Link to="/" className="block">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="flex h-6 w-6 items-center justify-center">
              <Building2 className="h-5 w-5" />
            </span>
            <span className="group-data-[collapsible=icon]:hidden">
              LKH Framework
            </span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="flex-1 flex flex-col overflow-hidden">
        {menuGroups.map((group) => {
          const GroupIcon = group.icon;
          const isOpen = open && openGroups[group.label];

          return (
            <div className="px-1" key={group.label}>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={() => toggleGroup(group.label)}>
                    <span className="flex items-center gap-2">
                      {GroupIcon && <GroupIcon className="h-4 w-4" />}
                      <span className="group-data-[collapsible=icon]:hidden">
                        {group.label}
                      </span>
                    </span>

                    <ChevronDown
                      className={`ml-auto h-4 w-4 transition-transform
                ${isOpen ? "rotate-180" : ""}
                group-data-[collapsible=icon]:hidden`}
                    />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>

              {isOpen && (
                <SidebarMenu className="ml-6">
                  {group.items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <SidebarMenuItem key={item.path}>
                        <SidebarMenuButton
                          asChild
                          isActive={location.pathname === item.path}
                        >
                          <Link
                            to={item.path}
                            className="flex items-center gap-2"
                          >
                            {Icon && <Icon className="h-4 w-4" />}
                            <span className="group-data-[collapsible=icon]:hidden">
                              {item.label}
                            </span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              )}
            </div>
          );
        })}
      </SidebarContent>

      <SidebarFooter className="mt-auto">
        <ThemeToggle />
        <div className="group-data-[collapsible=icon]:hidden">© 2025 LKH</div>
      </SidebarFooter>
    </Sidebar>
  );
}
