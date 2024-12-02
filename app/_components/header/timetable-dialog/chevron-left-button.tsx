"use client";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ChevronLeft } from "lucide-react";

type Props = {
  switchTimetable: () => void;
  currWeekIsEven: boolean | null;
  displayedTimetableIsEven: boolean | null;
};

export function ChevronLeftButton({
  switchTimetable,
  currWeekIsEven,
  displayedTimetableIsEven,
}: Props) {
  const isHidden = currWeekIsEven === displayedTimetableIsEven;

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            tabIndex={isHidden ? -1 : 1}
            onClick={switchTimetable}
            className={`${isHidden && "pointer-events-none opacity-0"} w-fit outline-none`}
          >
            <ChevronLeft />
          </button>
        </TooltipTrigger>

        <TooltipContent>
          <p>Current Week Timetable</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
