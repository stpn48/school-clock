"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUserActivity } from "@/hooks/use-user-activity";
import clsx from "clsx";
import { Settings } from "lucide-react";
import { useActionState } from "react";
import { AppearanceSection } from "../config-dialog/appearance-section/appearance-section";
import { MaximizeBtn } from "./maximize-btn";

export function Header() {
  const { isActive } = useUserActivity();

  return (
    <Dialog>
      <div
        className={clsx(
          "fixed inset-0 flex h-12 w-full items-center bg-background px-[24px] transition-opacity",
          !isActive && "opacity-0",
        )}
      >
        <div className="flex-1" />
        <ul className="flex items-center gap-4">
          <li>
            <MaximizeBtn />
          </li>

          <li>
            <DialogTrigger asChild>
              <Settings className="size-4 cursor-pointer text-foreground" />
            </DialogTrigger>
          </li>
        </ul>
      </div>

      <DialogContent className="flex h-[75%] flex-col gap-4">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>

        <AppearanceSection />
      </DialogContent>
    </Dialog>
  );
}
