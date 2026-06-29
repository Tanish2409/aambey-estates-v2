"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const storyWords =
  "Good property decisions are not made from a noisy list. They come from matching budget, location, builder history, paperwork, and timing before a site visit is booked.".split(
    " ",
  );

export function MarketStoryMotion() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        ".market-image",
        { scale: 0.88, opacity: 0.62 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".market-image",
            start: "top 82%",
            end: "bottom 28%",
            scrub: 1,
          },
        },
      );

      gsap.to(".market-word", {
        opacity: 1,
        stagger: 0.045,
        ease: "none",
        scrollTrigger: {
          trigger: ".market-copy",
          start: "top 72%",
          end: "bottom 42%",
          scrub: 1,
        },
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="section">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="market-copy">
          <h2 className="h-lg max-w-3xl">
            A calmer way to compare{" "}
            <span
              aria-hidden
              className="hero-inline-image mx-2 inline-block h-8 w-20 rounded-full align-middle sm:h-10 sm:w-24"
            />
            NCR homes.
          </h2>
          <p className="mt-8 max-w-3xl text-2xl font-medium leading-[1.35] text-foreground sm:text-3xl">
            {storyWords.map((word, index) => (
              <span className="market-word opacity-25" key={`${word}-${index}`}>
                {word}{" "}
              </span>
            ))}
          </p>
        </div>
        <div className="market-image relative min-h-[520px] overflow-hidden rounded-[2rem] bg-primary shadow-[0_40px_110px_-70px_hsl(var(--primary))]">
          <Image
            alt="Modern residential towers and landscaped outdoor areas in NCR"
            className="image-filter h-full w-full object-cover opacity-90"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            src="/images/aambey-residence-hero.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
