"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Settings } from "lucide-react";
import { AppearanceSection } from "./config-dialong/appearance-section";

export default function ConfigDialog() {
  return (
    <Sheet>
      <SheetTrigger className="absolute right-4 top-4">
        <Settings className="size-4" />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4">
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
        </SheetHeader>

        <AppearanceSection />
      </SheetContent>
    </Sheet>
  );
}
