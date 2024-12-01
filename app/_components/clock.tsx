"use client";

import { useConfigStore } from "@/hooks/zustand/use-config-store";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { ClockChar } from "./clock-char";
import { ProgressClock } from "./progress-clock";

export function Clock() {
  const { config } = useConfigStore();
  const [time, setTime] = useState(getEuTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = getEuTime();
      setTime(newTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeChars = config.showSeconds ? time.split("") : time.slice(0, -3).split("");

  if (config.progressBarVariant === "text") {
    return (
      <div className={`${config.font}`}>
        <ProgressClock timeChars={timeChars} />
      </div>
    );
  }

  return (
    <div className={`${config.font} relative flex`}>
      {timeChars.map((char, index) => (
        <AnimatePresence key={index}>
          <ClockChar char={char} isLast={index === 7} />
        </AnimatePresence>
      ))}
    </div>
  );
}

function getEuTime() {
  return new Date().toLocaleTimeString("en-GB", { hour12: false });
}
