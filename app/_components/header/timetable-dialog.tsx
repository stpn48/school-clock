import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
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

      <DialogContent className="max-w-[80%]">
        <DialogHeader>
          <DialogTitle>Timetable</DialogTitle>
        </DialogHeader>

        <Timetable />
      </DialogContent>
    </Dialog>
  );
}
