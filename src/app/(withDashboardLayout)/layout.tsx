// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div>
//       <div>{children}</div>
//     </div>
//   );
// }

"use client";

import type React from "react";

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Home, Info, Plus, Minus, Layers, FolderOpenDot } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const navigationItems = [
  {
    title: "Home",
    icon: Home,
    url: "/",
  },
  {
    title: "About",
    icon: Info,
    url: "/about",
  },
  {
    title: "All Project",
    icon: FolderOpenDot,
    url: "/allProject",
  },
  {
    title: "Add Project",
    icon: Plus,
    url: "/admin/dashboard/addProject",
  },
  {
    title: "Update Project",
    icon: Layers,
    url: "/allProject",
  },
  {
    title: "Remove Project",
    icon: Minus,
    url: "remove",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleAction = (action: string) => {
    if (action === "add") {
      alert("Add Project clicked");
    } else if (action === "remove") {
      alert("Remove Project clicked");
    }
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar variant="inset">
        <SidebarHeader>
          <div className="flex items-center gap-2 px-4 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Home className="h-4 w-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">Dashboard</span>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <div className="px-2">
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    onClick={
                      item.action ? () => handleAction(item.action) : undefined
                    }
                  >
                    <item.icon />
                    {/* <Link href={item.url}>{item.title}</Link> */}
                    <a href={item.url}>{item.title}</a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </div>
        </SidebarContent>
      </Sidebar>

      <SidebarInset>
        <div className="min-h-screen bg-background">
          {/* Header with collapse button */}
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>
          </header>

          {/* Main content area */}
          <main className="p-6">{children}</main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
