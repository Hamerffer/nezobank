import {
  LayoutDashboardIcon,
  Wallet2Icon,
  HistoryIcon,
  Shield,
  BarChart3,
 
  // CreditCard,
 
  type LucideIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Link, useLocation } from "@tanstack/react-router";

type SidebarItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
};

const mainItems: SidebarItem[] = [
  { title: "Dashboard", url: "/", icon: LayoutDashboardIcon },
  // { title: "Accounts", url: "/accounts", icon: CreditCard },
  { title: "Wallet", url: "/wallet", icon: Wallet2Icon },
  { title: "Security", url: "/security", icon: Shield },
  { title: "History", url: "/history", icon: HistoryIcon },
  { title: "Reports", url: "/report", icon: BarChart3 },
];



export function AppSidebar() {
  const location = useLocation(); 
  const currentPath = location.pathname;

  return (
    <Sidebar className="w-72 min-h-screen border-r border-gray-800 shadow-xl">
      <SidebarContent className="p-5 bg-gray-950 dark:bg-gray-950 ">
        {/* Brand Section */}
        <div className="flex items-center gap-3 mb-2 px-3 py-2 border-b border-gray-800 ">
         <div
  className="h-28 w-28 mx-auto bg-gray-950"
  style={{
    WebkitMaskImage: `url(/images/logo1.png)`,
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    WebkitMaskSize: "cover",
    maskImage: `url(/images/logo1.png)`,
    maskRepeat: "no-repeat",
    maskPosition: "center",
    maskSize: "cover",
  }}
>
  <img
    src="/images/logo1.png"
    className="h-full w-full object-cover"
    alt="logo"
  />
</div>

          <div>
            
         
          </div>
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold uppercase tracking-wider mb-3 px-3">
            Main
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainItems.map((item) => {
                const fullPath = `/dashboard${item.url}`;
                const isActive = currentPath === fullPath;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link 
                        to={fullPath}
                        
                        className={`flex items-center gap-3 px-3 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                          isActive
                            ? "bg-gradient-to-r from-emerald-600/20 to-teal-500/20 text-white border-l-4 border-emerald-500 shadow-md"
                            : "hover:bg-gray-800/50 hover:text-emerald-400 "
                        }`}
                      >
                        {item.icon && (
                          <item.icon className={`w-5 h-5 ${isActive ? "text-emerald-400" : "text-gray-100"}`} />
                        )}
                        <span className="textwhite">{item.title}</span>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400 textwhite"></div>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      

      
      </SidebarContent>
    </Sidebar>
  );
}