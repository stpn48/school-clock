import { useConfigStore } from "@/hooks/zustand/use-config-store";
import { useTimeLeft } from "@/hooks/zustand/use-time-left";
import React, { useEffect, useState } from "react";

export function LessonProgressBar() {
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
        <div style={{ width: `${progress}%` }} className="h-screen bg-foreground/10" />
      </div>
    );
  }

  if (config.progressBarVariant === "default") {
    return (
      <div className="absolute bottom-0 h-[3px] w-screen bg-secondary">
        <div style={{ width: `${progress}%` }} className="h-full bg-foreground" />
      </div>
    );
  }
}
