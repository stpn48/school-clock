"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CalendarRange } from "lucide-react";

type Props = {};

export function TimetableBtn({}: Props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <CalendarRange className="size-4 cursor-pointer text-foreground" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Timetable</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
