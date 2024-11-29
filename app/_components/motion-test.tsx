"use client";

import { motion } from "motion/react";

type Props = {};

export function MotionTest({}: Props) {
  return (
    <motion.div
      className="size-[200px] bg-blue-700"
      initial={{ rotateY: 0 }} // Start facing front
      animate={{ rotateY: 180 }} // Flip to the back (180 degrees)
      exit={{ rotateY: 0 }} // Flip back to the front
      transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth transition
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "200px",
        width: "200px",
        transformStyle: "preserve-3d", // Preserve 3D space for the flip
        perspective: "1000px", // Create depth for 3D transforms
      }}
    >
      MotionTest
    </motion.div>
  );
}
