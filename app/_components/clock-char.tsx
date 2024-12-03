"use client";

import { useConfigStore } from "@/hooks/zustand/use-config-store";
import { AnimationType } from "@/types/types";
import { motion } from "motion/react";

type Props = {
  char: string;
  isLast: boolean;
};

export function ClockChar({ char, isLast }: Props) {
  const { config } = useConfigStore();

  // Default fallback (if no valid clockAnimation)
  const defaultAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
  };

  const animations: Record<typeof config.clockAnimation, AnimationType> = {
    "land-in": {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.2, ease: "easeOut" },
    },
    default: defaultAnimation,
    "pop-in": {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.3, ease: "easeOut" },
    },
    "flip-in": {
      initial: { opacity: 0, rotateX: -90 },
      animate: { opacity: 1, rotateX: 0, y: 0 },
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Pick the right animation or fallback
  const animation = animations[config.clockAnimation] || defaultAnimation;

  return (
    <motion.div
      className={`${isLast ? "w-[110px]" : ""} text-[150px] font-bold text-primary`}
      key={char}
      initial={animation.initial}
      animate={animation.animate}
      transition={animation.transition}
    >
      {char}
    </motion.div>
  );
}
