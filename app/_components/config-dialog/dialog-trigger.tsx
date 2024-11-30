"use client";

import { DialogTrigger } from "@/components/ui/dialog";
import { useUserActivity } from "@/hooks/use-user-activity";
import { Settings } from "lucide-react";

export function DialogTriggerButton() {
  const { isActive } = useUserActivity();

  return (
    <DialogTrigger
      className={`${!isActive && "opacity-0"} absolute right-4 top-4 transition-opacity`}
    >
      <Settings className="size-4 text-foreground" />
    </DialogTrigger>
  );
}
