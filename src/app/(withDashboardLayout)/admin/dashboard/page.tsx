// "use client";

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarRail,
// } from "@/components/ui/sidebar";
// import {
//   Plus,
//   Minus,
//   Home,
//   BarChart3,
//   Users,
//   Settings,
//   FileText,
//   Calendar,
//   Bell,
//   LogOut,
// } from "lucide-react";

// const navigationItems = [
//   {
//     title: "Dashboard",
//     icon: Home,
//     url: "/",
//   },
//   {
//     title: "Analytics",
//     icon: BarChart3,
//     url: "/analytics",
//   },
//   {
//     title: "Users",
//     icon: Users,
//     url: "/users",
//   },
//   {
//     title: "Reports",
//     icon: FileText,
//     url: "/reports",
//   },
//   {
//     title: "Calendar",
//     icon: Calendar,
//     url: "/calendar",
//   },
//   {
//     title: "Notifications",
//     icon: Bell,
//     url: "/notifications",
//   },
// ];

// const projectActions = [
//   {
//     title: "Add Project",
//     icon: Plus,
//     action: "add",
//   },
//   {
//     title: "Remove Project",
//     icon: Minus,
//     action: "remove",
//   },
// ];

// export function DashboardSidebar() {
//   const handleProjectAction = (action: string) => {
//     // Handle project actions here
//     console.log(`[v0] Project action: ${action}`);
//     if (action === "add") {
//       // Add project logic
//       alert("Add Project clicked");
//     } else if (action === "remove") {
//       // Remove project logic
//       alert("Remove Project clicked");
//     }
//   };

//   return (
//     <Sidebar variant="inset">
//       <SidebarHeader>
//         <div className="flex items-center gap-2 px-4 py-2">
//           <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
//             <BarChart3 className="h-4 w-4" />
//           </div>
//           <div className="grid flex-1 text-left text-sm leading-tight">
//             <span className="truncate font-semibold">Dashboard Pro</span>
//             <span className="truncate text-xs text-muted-foreground">
//               Enterprise
//             </span>
//           </div>
//         </div>
//       </SidebarHeader>

//       <SidebarContent>
//         {/* Main Navigation */}
//         <SidebarGroup>
//           <SidebarGroupLabel>Navigation</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {navigationItems.map((item) => (
//                 <SidebarMenuItem key={item.title}>
//                   <SidebarMenuButton tooltip={item.title}>
//                     <item.icon />
//                     <span>{item.title}</span>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>

//         {/* Project Actions */}
//         <SidebarGroup>
//           <SidebarGroupLabel>Project Management</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {projectActions.map((item) => (
//                 <SidebarMenuItem key={item.title}>
//                   <SidebarMenuButton
//                     tooltip={item.title}
//                     onClick={() => handleProjectAction(item.action)}
//                   >
//                     <item.icon />
//                     <span>{item.title}</span>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>

//         {/* Settings */}
//         <SidebarGroup>
//           <SidebarGroupLabel>Account</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               <SidebarMenuItem>
//                 <SidebarMenuButton tooltip="Settings">
//                   <Settings />
//                   <span>Settings</span>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>
//               <SidebarMenuItem>
//                 <SidebarMenuButton tooltip="Logout">
//                   <LogOut />
//                   <span>Logout</span>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>

//       <SidebarFooter>
//         <div className="p-1">
//           <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
//             <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center">
//               <Users className="h-4 w-4" />
//             </div>
//             <div className="grid flex-1 text-left text-sm leading-tight">
//               <span className="truncate font-semibold">John Doe</span>
//               <span className="truncate text-xs text-muted-foreground">
//                 john@example.com
//               </span>
//             </div>
//           </div>
//         </div>
//       </SidebarFooter>

//       <SidebarRail />
//     </Sidebar>
//   );
// }

// import React from "react";

// const page = () => {
//   return <div className="text-6xl">Welcome to Asadur Jaman Nur Dashboard</div>;
// };

// export default page;
