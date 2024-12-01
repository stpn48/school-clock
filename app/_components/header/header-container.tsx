"use client";

import { useUserActivity } from "@/hooks/use-user-activity";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export function HeaderContainer({ children }: PropsWithChildren) {
  const { isActive } = useUserActivity();

  return (
    <div
      className={cn(
        "fixed inset-0 z-20 flex h-12 w-full items-center bg-background px-[24px] transition-opacity",
        !isActive && "opacity-0",
      )}
    >
      {children}
    </div>
  );
}
