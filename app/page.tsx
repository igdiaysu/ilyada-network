"use client"

import * as React from "react"
import { useState } from "react"
import { Copy, Check, Star } from "lucide-react"
import Link from "next/link"

// NOTE: HEADER İÇİN GEREKLİLER
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

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
    <div className="min-h-screen text-gray-900 dark:text-gray-100">
      <HeaderSection />
      <main>
        <Hero />
        <VIPPackages />
      </main>
      <Footer />
    </div>
  )
}

// HEADER
function HeaderSection() {
  return (
    <header className="flex justify-center">
      <NavigationMenu className="p-4">
        <NavigationMenuList className="gap-4">
          <NavigationMenuItem>
            <Link href="/wiki" legacyBehavior passHref >
              <NavigationMenuLink>
                <span className="text-lg">Wiki</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#vip-packages" legacyBehavior passHref>
              <NavigationMenuLink>
                <span className="text-lg">VIP</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="https://discord.gg/bqhTn5wMeK" legacyBehavior passHref>
              <NavigationMenuLink>
                <span className="text-lg">Discord</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}

function Hero() {
  const [javaCopied, setJavaCopied] = useState(false)

  const copyToClipboard = (text: string, setStateFn: (value: boolean) => void) => {
    navigator.clipboard.writeText(text)
    setStateFn(true)
    setTimeout(() => setStateFn(false), 2000)
  }

  return (
    <section id="hero" className="flex flex-col items-center gap-4 p-12 space-y-4 h-fit">
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
            // "Ekstra 250 claim blok.",
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
            // "Ekstra 1000 claim blok.",
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
          price: 100,
        },
        {
          name: "VIP+",
          features: [
            "Evinize ışınlanma.",
            // "Ekstra 250 claim blok.",
            "İskelet spawner satın alımı açılır.",
            "Seviye 2 spawner yükseltmesi açılır.",
            "Özel spawner % 10 indirimli.",
            "Özel Spawner güçlendiricileri MK1 açılır.",
            "Özel Spawner güçlendiricileri % 10 indirimli.",
          ],
          price: 200,
        },
        {
          name: "MVIP",
          features: [
            "Evinize ışınlanma.",
            "Arkadaşlarınıza ışınlanma.",
            // "Ekstra 1000 claim blok.",
            "Ölünce düşmeyen 27 slotluk sırt çantası.",
            "Haftada bir fly (uçma) kullanım hakkı (60 DK).",
            "Creeper spawner satın alımı açılır.",
            "Seviye 3 spawner yükseltmesi açılır.",
            "Özel spawner %20 indirimli.",
            "Özel Spawner güçlendiricileri MK2 açılır.",
            "Özel Spawner güçlendiricileri %20 indirimli."
          ],
          price: 500,
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
          price: 299,
        },
        {
          name: "VIP+",
          features: [
            "Evinize ışınlanma.",
            // "Ekstra 250 claim blok.",
            "İskelet spawner satın alımı açılır.",
            "Seviye 2 spawner yükseltmesi açılır.",
            "Özel spawner % 10 indirimli.",
            "Özel Spawner güçlendiricileri MK1 açılır.",
            "Özel Spawner güçlendiricileri % 10 indirimli.",
          ],
          price: 499,
        },
        {
          name: "MVIP",
          features: [
            "Evinize ışınlanma.",
            "Arkadaşlarınıza ışınlanma.",
            // "Ekstra 1000 claim blok.",
            "Ölünce düşmeyen 27 slotluk sırt çantası.",
            "Haftada bir fly (uçma) kullanım hakkı (60 DK).",
            "Creeper spawner satın alımı açılır.",
            "Seviye 3 spawner yükseltmesi açılır.",
            "Özel spawner %20 indirimli.",
            "Özel Spawner güçlendiricileri MK2 açılır.",
            "Özel Spawner güçlendiricileri %20 indirimli."
          ],
          price: 999,
        },
      ],
    },
  ]

  return (
    <section id="vip-packages" className="flex flex-col items-center py-12 px-4 md:px-8 lg:px-12 bg-gray-200 dark:bg-zinc-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        VIP Paketleri
      </h2>
      <Tabs defaultValue={packages[1].title} className="flex flex-col w-3/4 max-md:w-full">
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

function PackageCard({ name, features, price }: { name: string; features: string[]; price: number }) {
  return (
    <Card className="flex flex-col sm:justify-between shadow-lg hover:shadow-xl sm:transition-all sm:duration-300 sm:transform sm:hover:-translate-y-1">
      <div className="flex-none">
        {/* <CardHeader className="flex-none"> */}
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">{name}</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          {/* [ ] Star emojisi li'nin icon'u olarak eklenmeli! */}
          <ul className="mb-6">
            {features.map((feature, index) => (
              // [ ] list icon ekleyemiyorum, mesela list-disc çalışmıyor. neden olabilir?
              <li key={index} className="flex gap-2">
                {/* [ ] size'ında responsive'de sorun var, class'la yapmayı ve size propsunu ezmeyi denedim ama olmadı. */}
                <Star size={16} className="items-start" />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </div>
      <CardFooter className="flex flex-col flex-none gap-3 max-md:gap-2 tracking-wide">
        <div className="w-full text-center text-2xl font-bold tracking-wide">₺{price}</div>
        <Button className="w-full" asChild>
          <Link href="https://donate.bynogame.com/persesciklet">PersesCiklet&#39;ı Destekle</Link>
        </Button>
        <Button className="w-full" asChild>
          <Link href="https://donate.bynogame.com/aysart">AysArt&#39;ı Destekle</Link>
        </Button>
      </CardFooter>
    </Card>

  )
}

function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-800 py-8 px-6 md:px-8 lg:px-12 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link
            href="https://github.com/igdiaysu"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Designed and Developed by AysArt
          </Link>

          {/* <Link
            href="/terms"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Terms of Service
          </Link> */}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
          © 2025 ilyada.online. All rights reserved.
        </div>

        {/* <div className="flex space-x-4">
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
        </div> */}
      </div>
    </footer>
  )
}

