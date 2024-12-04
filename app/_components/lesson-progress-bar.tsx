"use client";

import { useConfigStore } from "@/hooks/zustand/use-config-store";
import { useLessonDetails } from "@/hooks/zustand/use-time-left";
import { useEffect, useState } from "react";

export function LessonProgressBar() {
  const { config } = useConfigStore();
  const { timeLeftMs, lessonDetails } = useLessonDetails();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!timeLeftMs || !lessonDetails) {
      return;
    }

    const totalLessonDurationMs = lessonDetails.lessonEndMs - lessonDetails.lessonStartMs;

    const progress = ((totalLessonDurationMs - timeLeftMs) / totalLessonDurationMs) * 100;
    setProgress(progress);
  }, [timeLeftMs, lessonDetails]);

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
        <div style={{ width: `${progress}%` }} className="h-full bg-primary" />
      </div>
    );
  }
}
