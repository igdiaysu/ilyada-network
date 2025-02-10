import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"


export default function CardWiki() {
  return (
    <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-1">

      <Link href="/">
        <Card className="hover:text-sky-600 hover:border-sky-600">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
        </Card>
      </Link>

      <Link href="/">
        <Card className="hover:text-sky-600 hover:border-sky-600">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
        </Card>
      </Link>

      <Link href="/">
        <Card className="hover:text-sky-600 hover:border-sky-600">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
        </Card>
      </Link>

      <Link href="/">
        <Card className="hover:text-sky-600 hover:border-sky-600">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </div>
  )
}