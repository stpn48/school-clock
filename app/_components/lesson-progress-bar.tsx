import React, { useEffect, useState } from "react";

type Props = {
  timeLeftMs: number;
};

export function LessonProgressBar({ timeLeftMs }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalLessonDurationMs = 45 * 60 * 1000; // 45 minutes in milliseconds
    const progress = ((totalLessonDurationMs - timeLeftMs) / totalLessonDurationMs) * 100;
    setProgress(progress);
  }, [timeLeftMs]);

  return (
    <div className="absolute bottom-0 h-[3px] w-screen bg-secondary">
      <div style={{ width: `${progress}%` }} className="h-full rounded-md bg-foreground" />
    </div>
  );
}
