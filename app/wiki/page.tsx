import { Heading1Icon, Heading2Icon, Heading3Icon } from "lucide-react";


export default function IlyadaPage() {
  return (
    // <div>Hello</div>
    <div className="max-w-screen-lg space-y-8">
      <div className="space-y-1">
        <h1 className="text-2xl font-medium tracking-tight"><Heading1Icon /></h1>
        {/* <p className="text-base text-muted-foreground">
          Manage your servers and channels from your dashboard.
        </p> */}
        <p className="text-sm text-muted-foreground">
          Manage your servers and channels from your dashboard.
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-medium tracking-tight"><Heading2Icon /></h2>
        <p>
          Manage your servers and channels from your dashboard.<br />
          h1 - text 2xl , font medium, tracking tight<br />
          h2 - text xl, font medium, tracking tight
        </p>
        <div className="space y-4">
          <h3 className="text-xl font-medium tracking-tight"><Heading3Icon /></h3>
          <p>

          </p>
        </div>
      </div>
    </div>

    // <div className="max-w-screen-lg space-y-8">
    //   <div className="space-y-1">
    //     <h1 className="text-2xl font-medium tracking-tight">Dashboard</h1>
    //     <p className="text-sm text-muted-foreground">
    //       Manage your servers and channels from your dashboard.
    //     </p>
    //   </div>
    //   <div className="space-y-4">
    //     <h1 className="font-medium tracking-tight">My Servers & Channels</h1>
    //     content
    //   </div>
    // </div>


  )
}
