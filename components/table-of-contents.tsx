"use client"
import * as React from "react"
import { cn } from "@/lib/utils"

// Types
interface TOCItem {
  id: string
  title: string
  level: number
  children?: TOCItem[]
}

interface TableOfContentsProps {
  items: TOCItem[]
  activeId?: string
  className?: string
}

interface ItemProps extends React.ComponentPropsWithoutRef<"li"> {
  item: TOCItem
  activeId?: string
  level?: number
}

// Components
const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  activeId,
  className,
}) => {
  return (
    <nav
      aria-label="Table of contents"
      className={cn("w-full max-w-xs", className)}
    >
      <ul className="m-0 list-none space-y-1 p-0">
        {items.map((item) => (
          <TableOfContentsItem
            key={item.id}
            item={item}
            activeId={activeId}
            level={0}
          />
        ))}
      </ul>
    </nav>
  )
}

const TableOfContentsItem: React.FC<ItemProps> = ({
  item,
  activeId,
  level = 0,
}) => {
  const isActive = activeId === item.id
  const hasChildren = item.children && item.children.length > 0

  return (
    <li className={cn("text-sm", level > 0 && "ml-4")}>
      <a
        href={`#${item.id}`}
        className={cn(
          "block py-1 text-muted-foreground no-underline transition-colors hover:text-foreground",
          isActive && "font-medium text-foreground",
          level === 0 && "font-medium"
        )}
      >
        {item.title}
      </a>
      {hasChildren && (
        <ul className="m-0 list-none space-y-1 pt-1">
          {item.children?.map((child) => (
            <TableOfContentsItem
              key={child.id}
              item={child}
              activeId={activeId}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  )
}

export { TableOfContents, type TOCItem } 