"use client";

import { useConfetti } from "@/hooks/use-confetti";
import { useLessonTimeLeft } from "@/hooks/useLessonTimeLeft";
import { useConfigStore } from "@/hooks/zustand/use-config-store";
import { useTimeLeft } from "@/hooks/zustand/use-time-left";
import { formatTime } from "@/lib/format-time";
import { Loader2 } from "lucide-react";
import Confetti from "react-confetti";
import { LessonProgressBar } from "./lesson-progress-bar";

export function LessonEndTimer() {
  const { config } = useConfigStore();
  const { showConfetti, setShowConfetti } = useConfetti();
  const { lessonDetails } = useLessonTimeLeft(setShowConfetti);
  const { timeLeftMs } = useTimeLeft();

  return (
    <div className="flex flex-col items-center gap-4">
      {showConfetti && <Confetti recycle={false} />}

      <LessonProgressBar />

      <div>
        {lessonDetails && (
          <>
            {config.showLessonNumber && (
              <span>
                {lessonDetails.type} {lessonDetails.lessonNumber}{" "}
              </span>
            )}
            {config.showLessonNumber && config.showLessonEndCountdown && " | "}
            {config.showLessonEndCountdown && <span>{formatTime(timeLeftMs)}</span>}
          </>
        )}
        {config.showLessonNumber && lessonDetails === null && (
          <span>school is over for today 🎉</span>
        )}
        {lessonDetails === undefined && <Loader2 className="size-4 animate-spin" />}
      </div>
    </div>
  );
}
