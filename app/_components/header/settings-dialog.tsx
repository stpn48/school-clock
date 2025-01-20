"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Settings } from "lucide-react";
import { AppearanceSection } from "../config-dialog/appearance-section/appearance-section";

export function SettingsDialog() {
  return (
    <Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Settings className="size-4 cursor-pointer text-foreground" />
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Settings</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DialogContent className="flex max-h-[75%] flex-col gap-4">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>

        <AppearanceSection />

        {/* <a
          className="mt-4 flex w-full justify-end"
          href="https://github.com/stpn48/school-clock"
          target="_blank"
        >
          <GithubIcon className="size-4" />
        </a> */}
      </DialogContent>
    </Dialog>
  );
}
