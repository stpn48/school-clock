import { getLessonDetails } from "@/lib/get-lesson-details";
import { LessonDetails } from "@/types/types";
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";

export function useLessonTimeLeft(setShowConfetti: Dispatch<SetStateAction<boolean>>) {
  const [lessonDetails, setLessonDetails] = useState<LessonDetails | null | undefined>(undefined);
  const [timeLeftMs, setTimeLeftMs] = useState(0);

  const handleTimerEnd = useCallback(() => {
    setShowConfetti(true);
    const newDetails = getLessonDetails();
    setLessonDetails(newDetails);
  }, []);

  // get details on mount
  useEffect(() => {
    const details = getLessonDetails();
    setLessonDetails(details);
  }, []);

  useEffect(() => {
    if (!lessonDetails) {
      return;
    }

    console.log("LessonDetails", lessonDetails);
    setTimeLeftMs(lessonDetails.timeLeftMs);

    const interval = setInterval(() => {
      setTimeLeftMs((prev) => {
        if (prev <= 0) {
          handleTimerEnd();
          clearInterval(interval);
        }

        return prev - 1000;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [lessonDetails]);

  return { timeLeftMs, lessonDetails };
}
