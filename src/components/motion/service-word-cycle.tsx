"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const serviceWords = ["new launch", "resale", "investor exit deals", "builder inventory"];

export function ServiceWordCycle() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const word = serviceWords[index] ?? serviceWords[0];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % serviceWords.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="inline-grid align-baseline text-accent" data-current-service={word}>
      <motion.span
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        className="col-start-1 row-start-1 inline-block will-change-transform"
        initial={reduce ? false : { opacity: 0, y: 18, filter: "blur(8px)" }}
        key={word}
        transition={{ duration: reduce ? 0 : 0.42, ease: [0.16, 1, 0.3, 1] }}
      >
        {word}
      </motion.span>
    </span>
  );
}
