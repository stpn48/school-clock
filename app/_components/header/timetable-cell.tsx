import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  name: string | null;
  isActive?: boolean;
};

export function TimetableCell({ name, isActive }: Props) {
  return (
    <div
      className={cn(
        "flex aspect-square max-h-[100px] max-w-[100px] flex-shrink items-center justify-center border-r border-border p-2 text-xs last:border-r-0 md:text-base",
        isActive && "rounded-md border border-primary",
      )}
    >
      {name}
    </div>
  );
}
