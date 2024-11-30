"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useUserActivity } from "@/hooks/use-user-activity";
import { Settings } from "lucide-react";
import { AppearanceSection } from "./appearance-section/appearance-section";

export function ConfigDialog() {
  const { isActive } = useUserActivity();

  return (
    <Dialog>
      <DialogContent className="flex h-[75%] w-[50vw] flex-col gap-4">
        <DialogTrigger
          className={`${!isActive && "opacity-0"} absolute right-4 top-4 transition-opacity`}
        >
          <Settings className="size-4 text-white" />
        </DialogTrigger>

        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>

        <AppearanceSection />
      </DialogContent>
    </Dialog>
  );
}
