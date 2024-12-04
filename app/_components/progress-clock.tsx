"use client";

import { useLessonDetails } from "@/hooks/zustand/use-time-left";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

type Props = {
  timeChars: string[];
};

export function ProgressClock({ timeChars }: Props) {
  const [progress, setProgress] = useState(0);
  const { timeLeftMs, lessonDetails } = useLessonDetails();

  useEffect(() => {
    if (!timeLeftMs || !lessonDetails) {
      return;
    }

    const totalLessonDurationMs = lessonDetails.lessonEndMs - lessonDetails.lessonStartMs; // 45 minutes in milliseconds
    const progress = ((totalLessonDurationMs - timeLeftMs) / totalLessonDurationMs) * 100;
    setProgress(progress);
  }, [timeLeftMs, lessonDetails]);

  return (
    <div className="relative flex">
      <div
        className="relative flex bg-foreground/10 bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--foreground)), hsl(var(--foreground))`,
          backgroundSize: progress + "%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {timeChars.map((char, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[150px] font-bold text-transparent"
            key={index}
          >
            {char}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
