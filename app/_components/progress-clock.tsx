"use client";

import { useTimeLeft } from "@/hooks/zustand/use-time-left";
import { AnimatePresence } from "motion/react";
import React, { useEffect, useState } from "react";
import { ClockChar } from "./clock-char";

type Props = {
  timeChars: string[];
};

export function ProgressClock({ timeChars }: Props) {
  const [progress, setProgress] = useState(0);
  const { timeLeftMs } = useTimeLeft();

  useEffect(() => {
    const totalLessonDurationMs = 45 * 60 * 1000; // 45 minutes in milliseconds
    const progress = ((totalLessonDurationMs - timeLeftMs) / totalLessonDurationMs) * 100;
    setProgress(progress);
  }, [timeLeftMs]);

  return (
    <div className="relative flex">
      <div
        className="relative flex bg-black/10 bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(to right, black, black)`,
          backgroundSize: progress + "%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {timeChars.map((char, index) => (
          <AnimatePresence key={index}>
            <ClockChar char={char} isLast={index === 7} />
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
}
