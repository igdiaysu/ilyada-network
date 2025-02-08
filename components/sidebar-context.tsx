import type React from "react"
import { createContext, useContext, useState } from "react"

type SidebarContextType = {
  leftSidebarOpen: boolean
  toggleLeftSidebar: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false)

  const toggleLeftSidebar = () => {
    setLeftSidebarOpen(!leftSidebarOpen)
  }

  return <SidebarContext.Provider value={{ leftSidebarOpen, toggleLeftSidebar }}>{children}</SidebarContext.Provider>
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

