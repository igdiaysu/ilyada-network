"use client"
import * as React from "react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Items } from "@/components/app-sidebar-types"

export function AppSidebar({ items }: { items: Items }) {
  return (
    <Sidebar>
      <SidebarHeader>
        <VersionSwitcher
          versions={items?.versions ?? []}
          defaultVersion={items?.versions?.[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {items.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items?.map((subItems) => (
                  <SidebarMenuItem key={subItems.title}>
                    <SidebarMenuButton asChild isActive={subItems.isActive}>
                      <a href={subItems.url}>
                        {subItems.icon && <subItems.icon />}{subItems.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}






// SELF DEVELOPMENT ↓↓↓

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarFooter,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarMenuButton,
//   SidebarMenuSub,
//   SidebarMenuSubItem,
//   SidebarMenuSubButton,
// } from "@/components/ui/sidebar"
// export function AppSidebar({ items, sideTitle }: any) {
//   return (
//     <Sidebar>
//       <SidebarHeader />
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupLabel>{sideTitle}</SidebarGroupLabel>

//           <SidebarGroupContent>
//             <SidebarMenu>
//               {/* ? --> eğer veri yoksa hata verme */}
//               {items?.map?.((item: any) => (
//                 <SidebarMenuItem key={item.title}>
//                   <SidebarMenuButton asChild>
//                     <a href={item.url}>
//                       <span>{item.title}</span>
//                     </a>
//                   </SidebarMenuButton>
//                   <SidebarMenuSub>
//                     {item.children?.map((subItem: any) => (
//                       <SidebarMenuSubItem key={subItem.title}>
//                         <SidebarMenuSubButton asChild>
//                           <a href={subItem.url}>
//                             <subItem.icon />
//                             <span>{subItem.title}</span>
//                           </a>
//                         </SidebarMenuSubButton>
//                       </SidebarMenuSubItem>
//                     ))}
//                   </SidebarMenuSub>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//       <SidebarFooter />
//     </Sidebar>
//   )
// }

// type SidebarItemsProp = {
//   title: string;
//   url: string;
//   icon: React.ComponentType;
//   children?: {
//     title: string;
//     url: string;
//     icon: React.ComponentType;
//   }
// }

// export function AppSidebar({ items }: any) {
//   return (
//     <Sidebar>
//       <SidebarHeader />
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupLabel>Docs</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {/* ? --> eğer veri yoksa hata verme */}
//               {items?.map?.((item: SidebarItemsProp) => (
//                 <SidebarMenuItem key={item.title}>
//                   <SidebarMenuButton asChild>
//                     <a href={item.url}>
//                       <item.icon />
//                       <span>{item.title}</span>
//                     </a>
//                   </SidebarMenuButton>
//                   <SidebarMenuSub>
//                     {items.children?.map?.((subItem: SidebarItemsProp) => (
//                       <SidebarMenuSubItem key={subItem.title}>
//                         <SidebarMenuSubButton asChild>
//                           <a href={subItem.url}>
//                             <subItem.icon />
//                             <span>{subItem.title}</span>
//                           </a>
//                         </SidebarMenuSubButton>
//                       </SidebarMenuSubItem>
//                     ))}
//                   </SidebarMenuSub>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//       <SidebarFooter />
//     </Sidebar>
//   )
// }
