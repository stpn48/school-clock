import { getTimestamp } from "@/lib/get-timestamp";
import { useEffect, useState } from "react";
import { useTimeLeft } from "./zustand/use-time-left";

export function useDayProgress() {
  const { dayEndTimeMs } = useTimeLeft();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!dayEndTimeMs) {
      return;
    }

    const dayStartTimeMs = getTimestamp(7, 50);
    const dayDuration = dayEndTimeMs - dayStartTimeMs;

    const calculateProgress = () => {
      const now = new Date().getTime(); // Current time in ms
      const progressMs = now - dayStartTimeMs; // Time passed since 7:50 AM

      // Calculate progress percentage
      const progressPercent = Math.min((progressMs / dayDuration) * 100, 100); // Limit to 100%

      setProgress(progressPercent); // Update the progress
    };

    calculateProgress();

    // Update progress every 5 seconds
    const interval = setInterval(calculateProgress, 5000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [dayEndTimeMs]);

  return { progress };
}
