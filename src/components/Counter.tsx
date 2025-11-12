"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

type CounterProps = {
  from?: number;
  to: number;
  duration?: number;
};

export default function Counter({ from = 0, to, duration = 2 }: CounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: "easeOut",
      delay: 1.6,
    });
    return controls.stop;
  }, [count, to, duration]);

  return (
    <motion.span>
      {rounded}
    </motion.span>
  );
}
