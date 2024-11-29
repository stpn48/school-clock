"use client";

import { useLessonTimeLeft } from "@/hooks/useLessonTimeLeft";
import { formatTime } from "@/lib/format-time";
import { getLessonDetails } from "@/lib/get-lesson-details";
import { LessonDetails } from "@/types/types";
import { useEffect, useState } from "react";
import { LessonProgressBar } from "./lesson-progress-bar";

export function LessonEndTimer() {
  const [lessonDetails, setLessonDetails] = useState<LessonDetails | null>(null);

  const { timeLeftMs } = useLessonTimeLeft(lessonDetails, () =>
    setLessonDetails(getLessonDetails()),
  );

  useEffect(() => {
    const details = getLessonDetails();
    setLessonDetails(details);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <LessonProgressBar timeLeftMs={timeLeftMs} />
      <div>
        {lessonDetails && (
          <>
            <span>{lessonDetails.type}</span> <span>{lessonDetails.lessonNumber}</span> |{" "}
            <span>{formatTime(timeLeftMs)}</span>
          </>
        )}
      </div>
    </div>
  );
}
