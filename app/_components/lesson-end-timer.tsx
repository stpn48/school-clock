"use client";

import { useLessonTimeLeft } from "@/hooks/useLessonTimeLeft";
import { formatTime } from "@/lib/format-time";
import { getLessonDetails } from "@/lib/get-lesson-details";
import { LessonDetails } from "@/types/types";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { LessonProgressBar } from "./lesson-progress-bar";

export function LessonEndTimer() {
  const [lessonDetails, setLessonDetails] = useState<LessonDetails | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const { timeLeftMs } = useLessonTimeLeft(lessonDetails, () => {
    setLessonDetails(getLessonDetails());
    setShowConfetti(true);
  });

  useEffect(() => {
    const details = getLessonDetails();
    setLessonDetails(details);
  }, []);

  useEffect(() => {
    if (showConfetti) {
      const timeout = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [showConfetti]);

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
        {!lessonDetails && <span>school is over for today 🎉</span>}
      </div>
    </div>
  );
}
