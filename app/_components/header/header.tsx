"use client";

import { useUserActivity } from "@/hooks/use-user-activity";
import clsx from "clsx";
import { MaximizeBtn } from "./maximize-btn";
import { SettingsDialog } from "./settings-dialog";
import { TimetableBtn } from "./timetable-btn";

export function Header() {
  const { isActive } = useUserActivity();

  return (
    <div
      className={clsx(
        "fixed inset-0 flex h-12 w-full items-center bg-background px-[24px] transition-opacity",
        !isActive && "opacity-0",
      )}
    >
      <div className="flex-1" />

      <ul className="flex items-center gap-4">
        <li>
          <TimetableBtn />
        </li>

        <li>
          <MaximizeBtn />
        </li>

        <li>
          <SettingsDialog />
        </li>
      </ul>
    </div>
  );
}
