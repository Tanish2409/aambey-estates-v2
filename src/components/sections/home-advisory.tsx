import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";

const buyerPaths = [
  {
    title: "Buying for family use",
    copy: "We compare daily travel, school and office access, society quality, possession, maintenance, and how the home will feel after you move in.",
  },
  {
    title: "Buying for investment",
    copy: "We look at location demand, project stage, entry price, rental logic, resale path, and risk. No guaranteed return claims.",
  },
  {
    title: "Upgrading to luxury",
    copy: "We help compare larger layouts, low-density living, builder brand, club life, privacy, parking, and long-term comfort.",
  },
] as const;

const processSteps = [
  "Understand your budget, purpose, family needs, and timeline.",
  "Shortlist suitable areas like Noida Expressway, Sector 150, Greater Noida, and Ghaziabad.",
  "Compare project type, builder record, possession stage, payment plan, and society fit.",
  "Flag basic checks around RERA, registry, dues, transfer rules, and hidden costs.",
  "Plan site visits only after the shortlist is clear.",
] as const;

const checks = [
  "RERA registration and project details",
  "Builder history and delivery record",
  "Total cost, payment plan, GST, PLC, and extra charges",
  "Possession timeline and construction stage",
  "Registry, dues, loan status, and transfer process for resale",
  "Connectivity, daily travel, nearby services, and future area plans",
] as const;

const contactBenefits = [
  {
    title: "Budget-fit shortlist",
    copy: "Options filtered by purpose, preferred area, family needs, and timeline.",
  },
  {
    title: "Location comparison",
    copy: "A simple view of which area suits you better and what tradeoffs to expect.",
  },
  {
    title: "Booking questions",
    copy: "What to ask about RERA, payment plan, possession, dues, and extra charges.",
  },
  {
    title: "Smarter site visits",
    copy: "Fewer random visits. More serious projects worth your time.",
  },
] as const;

export function HomeAdvisory() {
  return (
    <>
      <section className="section">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <div className="max-w-xl">
              <p className="eyebrow">Start with the buyer</p>
              <h2 className="h-lg mt-4">Every property search has a different reason.</h2>
              <p className="lead mt-6">
                A serious property decision should not start with a random list of projects. It
                should start with why you are buying, where your budget works, and what risk you
                want to avoid.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4">
            {buyerPaths.map((path, index) => (
              <Reveal
                className="rounded-[1.5rem] bg-card p-7 shadow-[0_28px_70px_-62px_hsl(var(--primary))]"
                delay={index * 0.06}
                key={path.title}
              >
                <h3 className="text-2xl font-semibold tracking-tight">{path.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{path.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-10 rounded-[2rem] bg-primary p-8 text-primary-foreground shadow-[0_40px_110px_-80px_hsl(var(--primary))] lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
          <div>
            <p className="eyebrow text-accent">Our process</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl">
              Clear shortlist first. Site visit after.
            </h2>
            <p className="text-primary-foreground/72 mt-6 max-w-xl text-sm leading-7">
              Most buyers waste weekends visiting projects that do not match their budget, family,
              or timing. Aambey keeps the first step simple: compare properly, then visit.
            </p>
          </div>
          <ol className="grid gap-3">
            {processSteps.map((step, index) => (
              <li
                className="bg-primary-foreground/8 grid gap-4 rounded-[1.25rem] p-5 text-sm leading-7 sm:grid-cols-[3rem_1fr]"
                key={step}
              >
                <span className="font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="eyebrow">Trust before booking</p>
            <h2 className="h-lg mt-4">What we ask buyers to check.</h2>
            <p className="lead mt-6 max-w-3xl">
              We keep the advice practical. Final pricing, availability, legal, loan, and tax
              details should always be confirmed before you commit.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {checks.map((check) => (
                <div className="rounded-[1.25rem] bg-card p-5 text-sm leading-7" key={check}>
                  {check}
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-[2rem] bg-secondary/80 p-8 lg:sticky lg:top-28">
            <h3 className="text-3xl font-semibold tracking-tight">
              What you get when you contact us
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm leading-6 text-muted-foreground">
              {contactBenefits.map((benefit) => (
                <li className="grid grid-cols-[1.25rem_1fr] gap-3" key={benefit.title}>
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>
                    <span className="block font-semibold text-foreground">{benefit.title}</span>
                    <span>{benefit.copy}</span>
                  </span>
                </li>
              ))}
            </ul>
            <Link
              className={buttonVariants({ variant: "gold", size: "lg" }) + " mt-8"}
              href="#contact"
            >
              Get my shortlist on WhatsApp
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
