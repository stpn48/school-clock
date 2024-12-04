"use client";

import { useConfetti } from "@/hooks/use-confetti";
import { useDayProgress } from "@/hooks/use-day-progress";
import { useLessonTimeLeft } from "@/hooks/useLessonTimeLeft";
import { useConfigStore } from "@/hooks/zustand/use-config-store";
import { useLessonDetails } from "@/hooks/zustand/use-time-left";
import { formatTime } from "@/lib/format-time";
import { Loader2 } from "lucide-react";
import Confetti from "react-confetti";

export function LessonEndTimer() {
  const { config } = useConfigStore();

  const { showConfetti, setShowConfetti } = useConfetti();

  const { lessonDetails } = useLessonTimeLeft(setShowConfetti);

  const { timeLeftMs } = useLessonDetails();

  const { progress } = useDayProgress();

  return (
    <div className="flex flex-col items-center gap-4">
      {showConfetti && <Confetti recycle={false} />}

      <div className="flex flex-col items-center gap-8">
        <div>
          {lessonDetails && (
            <>
              {config.showLessonNumber && (
                <span>
                  {lessonDetails.type} {lessonDetails.lessonNumber}{" "}
                </span>
              )}
              {config.showLessonNumber && config.showLessonEndCountdown && " | "}
              {config.showLessonEndCountdown && <span>{timeLeftMs && formatTime(timeLeftMs)}</span>}
            </>
          )}
          {config.showLessonNumber && lessonDetails === null && (
            <span>school is over for today 🎉</span>
          )}
          {lessonDetails === undefined && <Loader2 className="size-4 animate-spin" />}
        </div>
        {config.showDayProgress && <span>day progress {progress.toFixed(0)}%</span>}
      </div>
    </div>
  );
}
