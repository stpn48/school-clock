"use client";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ChevronRight } from "lucide-react";
import React from "react";

type Props = {
  switchTimetable: () => void;
  currWeekIsEven: boolean | null;
  displayedTimetableIsEven: boolean | null;
};

export function ChevronRightButton({
  switchTimetable,
  currWeekIsEven,
  displayedTimetableIsEven,
}: Props) {
  const isHidden = currWeekIsEven !== displayedTimetableIsEven;

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            tabIndex={isHidden ? 0 : 1}
            onClick={switchTimetable}
            className={`${isHidden && "pointer-events-none opacity-0"} w-fit outline-none`}
          >
            <ChevronRight />
          </button>
        </TooltipTrigger>

        <TooltipContent>
          <p>Next Week Timetable</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
