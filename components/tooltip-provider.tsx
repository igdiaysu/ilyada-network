import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipInline(trigger: string, hover: string) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="link" className="h-fit pt-0 pb-0">{trigger}</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{hover}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>


    // * ÇALIŞAN
    /* <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="link" className="h-fit pt-0 pb-0">"t"</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>"a"</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider> */
  )
}
