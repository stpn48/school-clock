"use client";

import { useConfigStore } from "@/hooks/zustand/use-config-store";
import { motion } from "motion/react";

type Props = {
  char: string;
  isLast: boolean;
};

export function ClockChar({ char, isLast }: Props) {
  return (
    <motion.div
      className={`${isLast && "w-[110px]"} text-[150px] font-bold`}
      key={char}
      initial={{ opacity: 0, y: 20 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {char}
    </motion.div>
  );
}
