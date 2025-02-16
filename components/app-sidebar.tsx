"use client"
import * as React from "react"

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
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export function AppSidebar({ items }: { items: Items }) {
  const router = useRouter()
  return (
    <Sidebar>
      <SidebarHeader className="pt-4">
        <Button variant="link" onClick={() => router.push("./")} className="h-fit pt-0 pb-0 text-base md:text-xl lg:text-2xl font-bold">İlyada Network
        </Button>
      </SidebarHeader>
      <SidebarContent>
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
