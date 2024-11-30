"use client";

import { useUserActivity } from "@/hooks/use-user-activity";
import { Settings } from "lucide-react";

export function DialogTriggerButton() {
  const { isActive } = useUserActivity();

  return (
    <Settings className={`${!isActive && "opacity-0"} size-4 text-foreground transition-opacity`} />
  );
}
