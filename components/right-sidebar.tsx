import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface TableOfContentsItem {
  id: string
  title: string
  level: number
}

interface RightSidebarProps {
  tableOfContents: TableOfContentsItem[]
}

export default function RightSidebar({ tableOfContents }: RightSidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -80% 0px" },
    )

    tableOfContents.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => {
      tableOfContents.forEach((item) => {
        const element = document.getElementById(item.id)
        if (element) observer.unobserve(element)
      })
    }
  }, [tableOfContents])

  return (
    <>
      <aside className="fixed right-0 top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-64 overflow-y-auto border-l bg-background px-4 pb-10 pt-4 lg:block">
        <nav className="space-y-2">
          <h4 className="mb-2 font-semibold">On this page</h4>
          <TableOfContents items={tableOfContents} activeId={activeId} />
        </nav>
      </aside>
      <div className="fixed bottom-4 right-4 lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center rounded-full bg-primary p-3 text-primary-foreground shadow-lg"
          aria-label="Table of Contents"
          aria-expanded={isOpen}
        >
          <ChevronDown className={cn("h-6 w-6 transition-transform", isOpen && "rotate-180")} />
        </button>
        {isOpen && (
          <div className="absolute bottom-full right-0 mb-2 w-64 rounded-lg border bg-background p-4 shadow-lg">
            <TableOfContents items={tableOfContents} activeId={activeId} />
          </div>
        )}
      </div>
    </>
  )
}

function TableOfContents({ items, activeId }: { items: TableOfContentsItem[]; activeId: string }) {
  return (
    <ul className="space-y-2 text-sm">
      {items.map((item) => (
        <li key={item.id} style={{ marginLeft: `${(item.level - 1) * 12}px` }}>
          <Link
            href={`#${item.id}`}
            className={cn(
              "block text-muted-foreground transition-colors hover:text-foreground",
              activeId === item.id && "font-medium text-foreground",
            )}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

