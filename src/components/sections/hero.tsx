import Image from "next/image";
import Link from "next/link";
import { ServiceWordCycle } from "@/components/motion/service-word-cycle";
import { buttonVariants } from "@/components/ui/button";

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
      <div className="container relative flex min-h-[100dvh] items-center pb-16 pt-28 sm:pb-20 lg:pb-24">
        <div className="max-w-5xl text-primary-foreground">
          <p className="inline-flex rounded-full border border-primary-foreground/25 bg-primary/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-soft backdrop-blur">
            Aambey Estates
          </p>
          <h1 className="mt-6 max-w-5xl text-[clamp(2.55rem,6.6vw,6.35rem)] font-semibold leading-[0.92] tracking-tight">
            <span className="block">Find the right property</span>
            <span className="block">
              in <ServiceWordCycle />
            </span>
          </h1>
          <p className="text-primary-foreground/84 mt-7 max-w-2xl text-lg leading-8">
            Aambey Estates helps serious buyers and investors compare Noida NCR homes with clear
            advice on budget, location, builder, documents, and site visits.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className={buttonVariants({ variant: "gold", size: "lg" })} href="#contact">
              Get my shortlist on WhatsApp
            </Link>
            <Link className={buttonVariants({ variant: "inverse", size: "lg" })} href="#locations">
              Compare locations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
