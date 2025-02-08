import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"

export function Breadcrumb() {
  const pathname = usePathname()
  const pathSegments = pathname.split("/").filter((segment) => segment !== "")

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`
    const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ")
    return { href, label }
  })

  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            {index === breadcrumbs.length - 1 ? (
              <span className="text-foreground font-medium ml-2">{breadcrumb.label}</span>
            ) : (
              <Link href={breadcrumb.href} className="text-muted-foreground hover:text-foreground ml-2">
                {breadcrumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

