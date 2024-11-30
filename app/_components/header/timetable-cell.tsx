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
        "flex items-center justify-center p-2 text-sm md:size-[50px] lg:size-[100px] lg:text-base",
        isActive && "rounded-md border border-primary",
      )}
    >
      {name}
    </div>
  );
}
