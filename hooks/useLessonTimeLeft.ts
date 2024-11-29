import { LessonDetails } from "@/types/types";
import { useEffect, useState } from "react";

export function useLessonTimeLeft(
  lessonDetails: LessonDetails | null,
  getNewLessonDetails: () => void,
) {
  const [timeLeftMs, setTimeLeftMs] = useState(0);

  useEffect(() => {
    if (!lessonDetails) {
      return;
    }

    setTimeLeftMs(lessonDetails.timeLeftMs);

    const interval = setInterval(() => {
      setTimeLeftMs((prev) => prev - 1000);
    }, 1000);

    const timeout = setTimeout(() => {
      getNewLessonDetails();
      clearInterval(interval);
    }, lessonDetails.timeLeftMs);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [lessonDetails]);

  return { timeLeftMs };
}
