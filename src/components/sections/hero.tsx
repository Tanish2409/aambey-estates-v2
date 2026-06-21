import Link from "next/link";
import { AambeyLogo } from "@/components/brand/aambey-logo";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="section grid min-h-[680px] gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-7">
          <Badge className="border-accent/40 bg-accent/15 text-accent">
            Finding Spaces. Creating Legacies.
          </Badge>
          <h1 className="h-xl text-primary-foreground">
            Buy property in Noida, Greater Noida & Ghaziabad with sharper local guidance.
          </h1>
          <p className="text-lg leading-8 text-primary-foreground/80">{siteConfig.description}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link className={buttonVariants({ variant: "gold", size: "lg" })} href="#contact">
              Plan my property search
            </Link>
            <Link
              className={buttonVariants({ variant: "dark", size: "lg" })}
              href={siteConfig.contact.phoneHref}
            >
              Call advisor
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-[2rem] border border-primary-foreground/15 bg-primary-foreground p-6 shadow-soft sm:p-8">
            <AambeyLogo className="mx-auto w-full max-w-[440px]" eager variant="full" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Stat value="3" label="Focus markets" />
            <Stat value="RERA" label="Documentation-first" />
            <Stat value="New + resale" label="Inventory coverage" />
            <Stat value="Navy + gold" label="Brand-led design" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-primary-foreground/20 bg-white/10 p-6">
      <p className="font-serif text-3xl text-accent">{value}</p>
      <p className="mt-2 text-sm text-primary-foreground/75">{label}</p>
    </div>
  );
}
