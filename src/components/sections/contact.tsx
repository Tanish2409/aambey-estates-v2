import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

export function Contact() {
  return (
    <section className="bg-primary text-primary-foreground" id="contact">
      <div className="section grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="h-lg mt-3 text-primary-foreground">
            Share your budget, location, timeline, and property goal.
          </h2>
          <p className="mt-4 text-primary-foreground/75">
            Aambey Estates will help you compare relevant Noida NCR options before site visits.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            className={buttonVariants({ variant: "gold", size: "lg" })}
            href={siteConfig.contact.whatsappHref}
          >
            WhatsApp requirement
          </Link>
          <Link
            className={buttonVariants({ variant: "dark", size: "lg" })}
            href={siteConfig.contact.emailHref}
          >
            Email inquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
