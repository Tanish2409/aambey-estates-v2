import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-border/70 bg-secondary/70 p-8 shadow-[0_32px_90px_-72px_hsl(var(--primary))] md:grid-cols-[1.15fr_0.85fr] md:items-center lg:p-14">
        <div>
          <h2 className="h-lg max-w-3xl">Share the basics. Speak with a human advisor.</h2>
          <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
            Send your budget, preferred location, timeline, and property goal. Aambey Estates will
            help compare relevant NCR options before site visits.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <Link
            className={buttonVariants({ variant: "gold", size: "lg" })}
            href={siteConfig.contact.whatsappHref}
          >
            Plan my search
          </Link>
          <Link
            className={buttonVariants({ variant: "outline", size: "lg" })}
            href={siteConfig.contact.phoneHref}
          >
            Call advisor
          </Link>
        </div>
      </div>
    </section>
  );
}
