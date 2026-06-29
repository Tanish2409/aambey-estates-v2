import Image from "next/image";
import Link from "next/link";
import { ServiceWordCycle } from "@/components/motion/service-word-cycle";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <Image
        alt="A refined high-rise apartment balcony looking over residential towers and greenery"
        className="image-filter object-cover"
        fill
        priority
        sizes="100vw"
        src="/images/aambey-residence-hero.jpg"
      />
      <div className="absolute inset-0 bg-primary/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_34%,rgba(255,255,255,0.18),transparent_34rem)]" />
      <div className="container relative flex min-h-[100dvh] items-end pb-16 pt-28 sm:pb-20 lg:pb-24">
        <div className="max-w-5xl text-primary-foreground">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Aambey Estates
          </p>
          <h1 className="mt-6 max-w-5xl text-balance text-[clamp(2.85rem,7vw,6.8rem)] font-semibold leading-[0.92] tracking-tight">
            Guided NCR property for <ServiceWordCycle />
          </h1>
          <p className="text-primary-foreground/84 mt-7 max-w-2xl text-lg leading-8">
            Compare Noida NCR location, paperwork, budget, and timing before site visits.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className={buttonVariants({ variant: "gold", size: "lg" })} href="#contact">
              Plan my search
            </Link>
            <Link
              className={buttonVariants({ variant: "inverse", size: "lg" })}
              href={siteConfig.contact.phoneHref}
            >
              Call advisor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
