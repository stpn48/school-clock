"use client";

import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {time.split("").map((char, index) => (
        <motion.span key={index} initial={{}} className="text-foreground text-6xl">
          {char}
        </motion.span>
      ))}
    </div>
  );
}
