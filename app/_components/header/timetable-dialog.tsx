"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useTimetable } from "@/hooks/use-timetable";
import { CalendarRange } from "lucide-react";
import { Timetable } from "./timetable";

export function TimeTableDialog() {
  const { timetable, switchTimetable, isEven, currWeekIsEven } = useTimetable();

  const getWeekLabel = () => {
    if (currWeekIsEven) {
      return isEven ? "(current)" : "(next)";
    }
    return isEven ? "(next)" : "(current)";
  };

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

      <DialogContent hideX className="max-w-[900px] border-none bg-transparent outline-none">
        <DialogHeader>
          <DialogTitle className="flex w-full justify-center">
            {isEven ? "Even" : "Odd"} week {getWeekLabel()}
          </DialogTitle>
        </DialogHeader>

        <Timetable timetable={timetable} currWeekIsEven={currWeekIsEven} isEven={isEven} />

        <div className="flex w-full justify-end">
          <Button className="w-fit" variant={"outline"} onClick={switchTimetable}>
            Switch
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
