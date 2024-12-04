"use client";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ChevronRight } from "lucide-react";
import React from "react";

type Props = {
  isVisible: boolean;
  switchTimetable: () => void;
};

export function ChevronRightButton({ isVisible, switchTimetable }: Props) {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            tabIndex={isVisible ? 1 : 0}
            onClick={switchTimetable}
            className={`${!isVisible && "pointer-events-none opacity-0"} w-fit outline-none`}
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
