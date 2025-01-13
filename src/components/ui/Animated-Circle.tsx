"use client";

import { motion } from "framer-motion";

export function AnimatedCircle() {
  return (
    <motion.div
      className="absolute inset-0 border-4 border-dashed  border-emerald-400 rounded-full"
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}
