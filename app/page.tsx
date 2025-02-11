"use client"

import * as React from "react"
import { useState } from "react"
import { Copy, Check, Star, Facebook, Twitter, Instagram } from "lucide-react"
import Link from "next/link"

// NOTE: HEADER İÇİN GEREKLİLER
// import { cn } from "@/lib/utils"
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-gray-100">
      <main>
        {/* <Header /> */}
        <Hero />
        <VIPPackages />
      </main>
      <Footer />
    </div>
  )
}

// NOTE: AŞAĞISI HEADER - export function Header() ve const ListItem
// export function Header() {
//   return (
//     <NavigationMenu>
//       <p>İlyada Network</p>
//       <NavigationMenuList>
//         <NavigationMenuItem>
//           <Link href="/wiki" legacyBehavior passHref>
//             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//               Wiki
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <Link href="#vip" legacyBehavior passHref>
//             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//               VIP
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <Link href="https://discord.gg/bqhTn5wMeK" legacyBehavior passHref>
//             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//               Discord
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   )
// }

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   )
// })
// ListItem.displayName = "ListItem"


function Hero() {
  const [javaCopied, setJavaCopied] = useState(false)

  const copyToClipboard = (text: string, setStateFn: (value: boolean) => void) => {
    navigator.clipboard.writeText(text)
    setStateFn(true)
    setTimeout(() => setStateFn(false), 2000)
  }

  return (
    <section id="hero" className="flex flex-col items-center gap-4 m-16 space-y-4 h-fit">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        İlyada Network
      </h1>
      <p className="text-xl max-w-2xl text-center">
        Tatlı mı tatlış sunucumuza seni de bekleriz!
      </p>
      <ServerCard
        address="oyna.ilyada.online"
        copied={javaCopied}
        onCopy={() => copyToClipboard("oyna.ilyada.online", setJavaCopied)}
      />
    </section>
  )
}

function ServerCard({
  address,
  copied,
  onCopy,
}: {
  address: string
  copied: boolean
  onCopy: () => void
}) {
  return (
    <Button
      onClick={onCopy}
      className="rounded-md font-mono px-4 py-6 w-fit gap-4 hover:bg-primary/100 group">
      <span>{address}</span>
      {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-secondary group-hover:text-muted-foreground" />}
    </Button>
  )
}


function VIPPackages() {
  const packages = [
    {
      title: "Haftalık",
      items: [
        {
          name: "VIP",
          features: [
            "Evinize ışınlanma.",
            "Zombi spawnerı satın alımı açılır.",
            "Seviye 1 spawner açılır.",
            "Özel spawner indirimi %5 indirimli.",
            "Özel Spawner güçlendiricileri %5 indirimli."
          ],
          price: 25,
        },
        {
          name: "VIP+",
          features: [
            "Evinize ışınlanma.",
            "Ekstra 250 claim blok.",
            "İskelet spawner satın alımı açılır.",
            "Seviye 2 spawner yükseltmesi açılır.",
            "Özel spawner % 10 indirimli.",
            "Özel Spawner güçlendiricileri MK1 açılır.",
            "Özel Spawner güçlendiricileri % 10 indirimli.",
          ],
          price: 50,
        },
        {
          name: "MVIP",
          features: [
            "Evinize ışınlanma.",
            "Arkadaşlarınıza ışınlanma.",
            "Ekstra 1000 claim blok.",
            "Ölünce düşmeyen 27 slotluk sırt çantası.",
            "Haftada bir fly (uçma) kullanım hakkı (60 DK).",
            "Creeper spawner satın alımı açılır.",
            "Seviye 3 spawner yükseltmesi açılır.",
            "Özel spawner %20 indirimli.",
            "Özel Spawner güçlendiricileri MK2 açılır.",
            "Özel Spawner güçlendiricileri %20 indirimli."
          ],
          price: 200,
        },
      ],
    },
    {
      title: "Aylık",
      items: [
        {
          name: "VIP",
          features: [
            "Evinize ışınlanma.",
            "Zombi spawnerı satın alımı açılır.",
            "Seviye 1 spawner açılır.",
            "Özel spawner indirimi %5 indirimli.",
            "Özel Spawner güçlendiricileri %5 indirimli."
          ],
          price: 50,
        },
        {
          name: "VIP+",
          features: [
            "Evinize ışınlanma.",
            "Ekstra 250 claim blok.",
            "İskelet spawner satın alımı açılır.",
            "Seviye 2 spawner yükseltmesi açılır.",
            "Özel spawner % 10 indirimli.",
            "Özel Spawner güçlendiricileri MK1 açılır.",
            "Özel Spawner güçlendiricileri % 10 indirimli.",
          ],
          price: 100,
        },
        {
          name: "MVIP",
          features: [
            "Evinize ışınlanma.",
            "Arkadaşlarınıza ışınlanma.",
            "Ekstra 1000 claim blok.",
            "Ölünce düşmeyen 27 slotluk sırt çantası.",
            "Haftada bir fly (uçma) kullanım hakkı (60 DK).",
            "Creeper spawner satın alımı açılır.",
            "Seviye 3 spawner yükseltmesi açılır.",
            "Özel spawner %20 indirimli.",
            "Özel Spawner güçlendiricileri MK2 açılır.",
            "Özel Spawner güçlendiricileri %20 indirimli."
          ],
          price: 400,
        },
      ],
    },
    {
      title: "Sınırsız",
      items: [
        {
          name: "VIP",
          features: [
            "Evinize ışınlanma.",
            "Zombi spawnerı satın alımı açılır.",
            "Seviye 1 spawner açılır.",
            "Özel spawner indirimi %5 indirimli.",
            "Özel Spawner güçlendiricileri %5 indirimli."
          ],
          price: 200,
        },
        {
          name: "VIP+",
          features: [
            "Evinize ışınlanma.",
            "Ekstra 250 claim blok.",
            "İskelet spawner satın alımı açılır.",
            "Seviye 2 spawner yükseltmesi açılır.",
            "Özel spawner % 10 indirimli.",
            "Özel Spawner güçlendiricileri MK1 açılır.",
            "Özel Spawner güçlendiricileri % 10 indirimli.",
          ],
          price: 400,
        },
        {
          name: "MVIP",
          features: [
            "Evinize ışınlanma.",
            "Arkadaşlarınıza ışınlanma.",
            "Ekstra 1000 claim blok.",
            "Ölünce düşmeyen 27 slotluk sırt çantası.",
            "Haftada bir fly (uçma) kullanım hakkı (60 DK).",
            "Creeper spawner satın alımı açılır.",
            "Seviye 3 spawner yükseltmesi açılır.",
            "Özel spawner %20 indirimli.",
            "Özel Spawner güçlendiricileri MK2 açılır.",
            "Özel Spawner güçlendiricileri %20 indirimli."
          ],
          price: 800,
        },
      ],
    },
  ]

  return (
    <section id="vip-packages" className="flex flex-col items-center py-20 px-6 md:px-8 lg:px-12 bg-gray-200 dark:bg-zinc-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        VIP Packages
      </h2>
      {/* TODO: oğuz abiye açıklama: bir alt satırda className'e gap-1 varmış, bunu kaldırınca çözüldü. */}
      <Tabs defaultValue={packages[1].title} className="flex flex-col w-3/4 max-md:w-full">
        {/* TODO: oğuz abiye açıklama: aralığı aşağıdakine mb-4 vererek sabit tutmayı becerdik ^^ */}
        <TabsList className="grid w-full grid-cols-3 mb-4">
          {packages.map((pkg) => (
            <TabsTrigger key={pkg.title} value={pkg.title}>{pkg.title}</TabsTrigger>
          ))
          }
        </TabsList>
        <TabsContent value="Haftalık" className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 mt-0">
          {packages[0].items.map((item) => (
            <PackageCard key={item.name} {...item} />
          ))
          }
        </TabsContent>
        <TabsContent value="Aylık" defaultValue="active" className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 mt-0">
          {packages[1].items.map((item) => (
            <PackageCard key={item.name} {...item} />
          ))
          }
        </TabsContent>
        <TabsContent value="Sınırsız" className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 mt-0">
          {packages[2].items.map((item) => (
            <PackageCard key={item.name} {...item} />
          ))
          }
        </TabsContent>
      </Tabs>
    </section>
  )
}

// transition - all duration - 300 transform hover: -translate - y - 1
function PackageCard({ name, features, price }: { name: string; features: string[]; price: number }) {
  return (
    <Card className="shadow-lg hover:shadow-xl">
      <CardHeader className="flex-none">
        <CardTitle className="text-2xl font-bold text-center">{name}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        {/* TODO: Star emojisi li'nin icon'u olarak eklenmeli! */}
        <ul className="mb-6">
          {features.map((feature, index) => (
            // TODO: list icon ekleyemiyorum, mesela list-disc çalışmıyor. neden olabilir?
            <li key={index} className="flex gap-2">
              {/* TODO: size'ında responsive'de sorun var, class'la yapmayı ve size propsunu ezmeyi denedim ama olmadı. */}
              <Star size={16} className="items-start" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col flex-none gap-4 max-md:gap-2 tracking-wide">
        <div className="w-full text-center text-2xl font-bold tracking-wide">₺{price}</div>
        <Button variant="outline" className="w-full">AysArt&#39;ı Destekle</Button>
        <Button className="w-full">PersesCiklet&#39;i Destekle</Button>
      </CardFooter>
    </Card>

  )
}

function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-800 py-8 px-6 md:px-8 lg:px-12 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
          © 2023 ilyada.online. All rights reserved.
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link
            href="/privacy"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Terms of Service
          </Link>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}




// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

//     </div>

// <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//     <Image
//       className="dark:invert"
//       src="/next.svg"
//       alt="Next.js logo"
//       width={180}
//       height={38}
//       priority
//     />
//     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//       <li className="mb-2">
//         Get started by editing{" "}
//         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//           app/page.tsx
//         </code>
//         .
//       </li>
//       <li>Save and see your changes instantly.</li>
//     </ol>

//     <div className="flex gap-4 items-center flex-col sm:flex-row">
//       <a
//         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <Image
//           className="dark:invert"
//           src="/vercel.svg"
//           alt="Vercel logomark"
//           width={20}
//           height={20}
//         />
//         Deploy now
//       </a>
//       <a
//         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Read our docs
//       </a>
//     </div>
//   </main>
//   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//     <a
//       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Image
//         aria-hidden
//         src="/file.svg"
//         alt="File icon"
//         width={16}
//         height={16}
//       />
//       Learn
//     </a>
//     <a
//       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Image
//         aria-hidden
//         src="/window.svg"
//         alt="Window icon"
//         width={16}
//         height={16}
//       />
//       Examples
//     </a>
//     <a
//       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Image
//         aria-hidden
//         src="/globe.svg"
//         alt="Globe icon"
//         width={16}
//         height={16}
//       />
//       Go to nextjs.org →
//     </a>
//   </footer>
// </div>
//   );
// }
