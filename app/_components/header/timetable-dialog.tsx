import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { CalendarRange } from "lucide-react";
import { Timetable } from "./timetable";

export function TimeTableDialog() {
  return (
    <Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <CalendarRange className="size-4 cursor-pointer text-foreground" />
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Timetable</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DialogContent hideX className="max-w-[900px] border-none bg-transparent">
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle className="flex w-full justify-center">Timetable</DialogTitle>
          </DialogHeader>
        </VisuallyHidden>

        <Timetable />
      </DialogContent>
    </Dialog>
  );
}
