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
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";


export default function IlyadaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <SidebarProvider>
    //   <AppSidebar items={items} />
    //   <SidebarInset>
    //     <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
    //       <SidebarTrigger className="-ml-1" />
    //       {/* benim sayfaya yönlendirmeler --> buton olabilir belki sağa yaslı şekilde */}
    //     </header>
    //     <main className="flex flex-1 flex-col gap-4 p-4">
    //       {children}
    //     </main>
    //   </SidebarInset>
    // </SidebarProvider>

    // TODO: aşağısı v0.dev den alınma.
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SidebarProvider>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground"
        >
          Skip to main content
        </a>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex flex-1">
            <AppSidebar items={items} />
            <main id="main-content" className="flex-1 px-4 py-8 md:px-8 lg:px-12">
              {children}
            </main>
            {/* <RightSidebar tableOfContents={[]} /> */}
          </div>
        </div>
        <Toaster />
      </SidebarProvider>
    </ThemeProvider>

    // <SidebarProvider>
    //   <AppSidebar items={sidebarItems} sideTitle={sideTitle} />
    //   <main>
    //     <SidebarTrigger />
    //     {children}
    //   </main>
    // </SidebarProvider>
  );
}
