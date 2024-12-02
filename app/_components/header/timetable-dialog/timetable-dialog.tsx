"use client";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

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
import { CalendarRange, ChevronLeft, ChevronRight } from "lucide-react";
import { ChevronLeftButton } from "./chevron-left-button";
import { ChevronRightButton } from "./chevron-right-button";
import { Timetable } from "./timetable";

export function TimeTableDialog() {
  const { timetable, switchTimetable, displayedTimetableIsEven, currWeekIsEven } = useTimetable();

  const getWeekLabel = () => {
    if (currWeekIsEven) {
      return displayedTimetableIsEven ? "(current)" : "(next)";
    }
    return displayedTimetableIsEven ? "(next)" : "(current)";
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

      <DialogContent
        hideX
        className={`flex max-w-[900px] items-center justify-center border-none bg-transparent p-0 outline-none`}
      >
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle className="flex w-full justify-center">
              {displayedTimetableIsEven ? "Even" : "Odd"} week {getWeekLabel()}
            </DialogTitle>
          </DialogHeader>
        </VisuallyHidden>

        <ChevronLeftButton
          switchTimetable={switchTimetable}
          currWeekIsEven={currWeekIsEven}
          displayedTimetableIsEven={displayedTimetableIsEven}
        />

        <Timetable
          timetable={timetable}
          currWeekIsEven={currWeekIsEven}
          displayedTimetableIsEven={displayedTimetableIsEven}
        />

        <ChevronRightButton
          switchTimetable={switchTimetable}
          currWeekIsEven={currWeekIsEven}
          displayedTimetableIsEven={displayedTimetableIsEven}
        />
      </DialogContent>
    </Dialog>
  );
}
