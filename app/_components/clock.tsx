"use client";

import { AnimatePresence } from "motion/react";
import React, { useEffect, useState } from "react";
import { ClockChar } from "./clock-char";

export function Clock() {
  const [time, setTime] = useState(getEuTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = getEuTime();
      setTime(newTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex">
      {time.split("").map((char, index) => (
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
