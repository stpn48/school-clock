"use client";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ChevronLeft } from "lucide-react";

type Props = {
  isVisible: boolean;
  switchTimetable: () => void;
};

export function ChevronLeftButton({ isVisible, switchTimetable }: Props) {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            tabIndex={isVisible ? 1 : -1}
            onClick={switchTimetable}
            className={`${!isVisible && "pointer-events-none opacity-0"} w-fit outline-none`}
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
