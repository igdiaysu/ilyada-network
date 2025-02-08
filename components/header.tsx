import Link from "next/link"
import { Menu, MoonIcon, SunIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useSidebar } from "@/components/sidebar-context"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { toggleLeftSidebar } = useSidebar()

  useEffect(() => setMounted(true), [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 md:hidden"
          onClick={toggleLeftSidebar}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Docs</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/docs" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Documentation
          </Link>
          <Link href="/api" className="transition-colors hover:text-foreground/80 text-foreground/60">
            API
          </Link>
          <Link href="/examples" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Examples
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className={cn("transition-colors hover:bg-muted", !mounted && "opacity-0")}
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

