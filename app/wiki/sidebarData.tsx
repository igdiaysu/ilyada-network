"use client"
import { Items } from "@/components/app-sidebar-types";
import {
  Swords,
  Shovel,
  Sprout,
  BookOpen,
  LaptopMinimal,
  BookMarked
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
          url: "#",
          icon: BookOpen,
          isActive: true,
        },
        {
          title: "Server Kuralları",
          url: "/wiki/kurallar",
          icon: BookMarked,
        },
        {
          title: "Discord",
          url: "/wiki/discord",
          icon: LaptopMinimal,
        },
      ],
    },
    {
      title: "Oyun Modu",
      items: [
        {
          title: "PVP & PVP",
          url: "/wiki/oyun-modu",
          icon: BookOpen,
        },
        {
          title: "PVE Detayları",
          url: "/wiki/pve",
          icon: Sprout,
        },
        {
          title: "PVP Detayları",
          url: "/wiki/pvp",
          icon: Swords,
        },
      ],
    },
    {
      title: "Claim - Arazi Sahiplenme",
      items: [
        {
          title: "Claim Hakkında",
          url: "/wiki/claim-hakkinda",
          icon: BookOpen,
        },
        {
          title: "Claim Alma",
          url: "/wiki/claim-alma",
          icon: Shovel,
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