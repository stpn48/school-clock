import { useConfigStore } from "@/hooks/zustand/use-config-store";
import { useTimeLeft } from "@/hooks/zustand/use-time-left";
import React, { useEffect, useState } from "react";

type Props = {};

export function LessonProgressBar({}: Props) {
  const { config } = useConfigStore();
  const { timeLeftMs } = useTimeLeft();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalLessonDurationMs = 45 * 60 * 1000; // 45 minutes in milliseconds
    const progress = ((totalLessonDurationMs - timeLeftMs) / totalLessonDurationMs) * 100;
    setProgress(progress);
  }, [timeLeftMs]);

  if (config.progressBarVariant === "background") {
    return (
      <div className="pointer-events-none absolute inset-0 h-screen w-screen">
        <div style={{ width: `${progress}%` }} className="h-screen rounded-md bg-foreground/10" />
      </div>
    );
  }

  return (
    <div className="absolute bottom-0 h-[3px] w-screen bg-secondary">
      <div style={{ width: `${progress}%` }} className="h-full rounded-md bg-foreground" />
    </div>
  );
}
