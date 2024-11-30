"use client";

import { useConfetti } from "@/hooks/use-confetti";
import { useLessonTimeLeft } from "@/hooks/useLessonTimeLeft";
import { formatTime } from "@/lib/format-time";
import { Loader2 } from "lucide-react";
import Confetti from "react-confetti";
import { LessonProgressBar } from "./lesson-progress-bar";

export function LessonEndTimer() {
  const { showConfetti, setShowConfetti } = useConfetti();
  const { lessonDetails, timeLeftMs } = useLessonTimeLeft(setShowConfetti);

  return (
    <div className="flex flex-col items-center gap-4">
      {showConfetti && <Confetti recycle={false} />}

      <LessonProgressBar timeLeftMs={timeLeftMs} />

      <div>
        {lessonDetails && (
          <>
            <span>{lessonDetails.type}</span> <span>{lessonDetails.lessonNumber}</span> |{" "}
            <span>{formatTime(timeLeftMs)}</span>
          </>
        )}
        {lessonDetails === null && <span>school is over for today 🎉</span>}
        {lessonDetails === undefined && <Loader2 className="size-4 animate-spin" />}
      </div>
    </div>
  );
}
