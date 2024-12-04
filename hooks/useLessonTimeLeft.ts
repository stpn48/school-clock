import { getLessonDetails } from "@/lib/get-lesson-details";
import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import { useLessonDetails } from "./zustand/use-time-left";

export function useLessonTimeLeft(setShowConfetti: Dispatch<SetStateAction<boolean>>) {
  const { setTimeLeftMs, setLessonDetails, lessonDetails } = useLessonDetails();

  const handleTimerEnd = useCallback(() => {
    if (lessonDetails?.type === "lesson") {
      setShowConfetti(true);
    }

    // lesson has ended, get new lesson details
    const newDetails = getLessonDetails();
    setLessonDetails(newDetails);
  }, [lessonDetails]);

  // get details on mount
  useEffect(() => {
    const details = getLessonDetails();
    setLessonDetails(details);
  }, []);

  useEffect(() => {
    if (!lessonDetails) {
      return;
    }

    setTimeLeftMs(lessonDetails.timeLeftMs);

    let startTime = Math.ceil(Date.now() / 1000) * 1000;

    let lastUpdate = startTime;
    let animationFrameId: number;

    const update = () => {
      const now = Math.ceil(Date.now() / 1000) * 1000;
      const elapsedTime = now - startTime;

      const newTimeLeftMs = Math.max(lessonDetails.timeLeftMs - elapsedTime, 0);

      // update every second
      if (now - lastUpdate >= 1000) {
        lastUpdate = now;
        setTimeLeftMs(newTimeLeftMs);
      }

      if (newTimeLeftMs === 0) {
        handleTimerEnd();
      } else {
        animationFrameId = requestAnimationFrame(update);
      }
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [lessonDetails]);

  return { lessonDetails };
}
