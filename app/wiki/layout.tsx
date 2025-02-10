"use client"

import { AppSidebar } from "@/components/app-sidebar"

// import {
//   SidebarProvider,
//   SidebarTrigger
// } from "@/components/ui/sidebar"

// import { sideTitle } from "./sidebarItems"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { items } from "./sidebarData";


export default function IlyadaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar items={items} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          {/* benim sayfaya yönlendirmeler --> buton olabilir belki sağa yaslı şekilde */}
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>


    // <SidebarProvider>
    //   <AppSidebar items={sidebarItems} sideTitle={sideTitle} />
    //   <main>
    //     <SidebarTrigger />
    //     {children}
    //   </main>
    // </SidebarProvider>
  );
}
