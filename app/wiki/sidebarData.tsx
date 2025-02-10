"use client"
import { Items } from "@/components/app-sidebar-types";
import {
  Swords,
  Shovel,
  Sprout,
  BookOpen,
  LaptopMinimal,
  BookMarked,
  Terminal,
  SquareMousePointer
} from "lucide-react"


// Menu items.
export const sideTitle = [
  "İlyada Network"
];

export const items: Items = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "İlyada Network",
      items: [
        {
          title: "Hakkında",
          url: "/wiki",
          icon: BookOpen,
          isActive: true,
        },
        {
          title: "Server Kuralları",
          url: "/wiki/server-kurallari",
          icon: BookMarked,
        },
        {
          title: "Discord",
          url: "https://discord.gg/bqhTn5wMeK",
          icon: LaptopMinimal,
        },
      ],
    },
    {
      title: "Genel Bilgiler",
      items: [
        {
          title: "Para Birimi",
          url: "/wiki#para-birimi",
          icon: BookOpen,
          isActive: true,
        },
        {
          title: "Dünya Sınırı",
          url: "/wiki#dunya-siniri",
          icon: BookMarked,
        },
      ],
    },
    {
      title: "Claim Alma - Arazi Sahiplenme",
      items: [
        {
          title: "Claim Hakkında",
          url: "/wiki#claim-hakkinda",
          icon: BookOpen,
        },
        {
          title: "Claim Alma",
          url: "/wiki#claim-alma",
          icon: Shovel,
        },
        {
          title: "Claim Komutları",
          url: "/wiki#claim-komutlari",
          icon: Terminal,
        },
      ],
    },
    {
      title: "Görev Sistemi",
      items: [
        {
          title: "Görevler Hakkında",
          url: "/wiki#gorev-sistemi",
          icon: BookOpen,
        },
        {
          title: "Görev Komutları",
          url: "/wiki#gorev-komutlari",
          icon: Terminal,
        },
        {
          title: "Görevleri Açma",
          url: "/wiki#gorevleri-acma",
          icon: SquareMousePointer,
        },
      ],
    },
    {
      title: "Oyun Stili",
      items: [
        {
          title: "PVE & PVP",
          url: "/wiki#oyun-stili",
          icon: BookOpen,
        },
        {
          title: "PVP",
          url: "/wiki#pvp",
          icon: Swords,
        },
      ],
    },
  ],
}


// export const sidebarItems = [
//   {
//     title: "İlyada Network",
//     url: "/wiki",
//     children: [
//       {
//         title: "PVP",
//         url: "/wiki/pvp",
//         icon: Swords,
//       },
//       {
//         title: "Claiming",
//         url: "wiki/claiming",
//         icon: Shovel,
//       }
//     ]
//   }
// ]

// const colors = {
//   color: red,
// }