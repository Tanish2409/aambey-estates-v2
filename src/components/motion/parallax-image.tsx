"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function ParallaxImage({
  src,
  alt,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-18, 18]);

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      <Image
        alt={alt}
        className="image-filter h-full w-full object-cover"
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        src={src}
      />
    </motion.div>
  );
}
