import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { faqs, locations, services, siteConfig } from "@/content/site";
export function Hero() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="section grid min-h-[660px] gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-7">
          <Badge className="border-accent/40 bg-accent/20 text-accent">
            Noida NCR Real Estate Advisory
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
        <div className="grid gap-4 sm:grid-cols-2">
          <Stat value="3" label="Focus markets" />
          <Stat value="RERA" label="Documentation-first" />
          <Stat value="New + resale" label="Inventory coverage" />
          <Stat value="SSG" label="SEO-first website" />
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
export function Services() {
  return (
    <section className="section" id="services">
      <p className="eyebrow">Services</p>
      <h2 className="h-lg mt-3">Focused services for serious property decisions</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {services.map((s) => (
          <Card key={s.slug}>
            <CardHeader>
              <CardTitle>{s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-7 text-muted-foreground">{s.description}</p>
              <Link
                className="mt-5 inline-block font-semibold text-primary"
                href={`/services/${s.slug}`}
              >
                Explore service →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
export function Locations() {
  return (
    <section className="border-y bg-card/60" id="locations">
      <div className="section">
        <p className="eyebrow">Locations</p>
        <h2 className="h-lg mt-3">Static local pages for Noida NCR search intent</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {locations.map((l) => (
            <Card key={l.slug}>
              <CardHeader>
                <CardTitle>{l.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">{l.meta}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {l.markets.slice(0, 4).map((m) => (
                    <Badge key={m}>{m}</Badge>
                  ))}
                </div>
                <Link
                  className="mt-5 inline-block font-semibold text-primary"
                  href={`/locations/${l.slug}`}
                >
                  Explore {l.name} →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
export function SeoMarket() {
  return (
    <section className="section">
      <div className="rounded-[2rem] border bg-card p-8">
        <p className="eyebrow">SEO strategy</p>
        <h2 className="h-lg mt-3">Built around what ranking portals do well</h2>
        <p className="lead mt-4">
          The site uses visible city, locality, service, FAQ, and authority-resource content for
          high-intent searches such as property in Noida, new launch projects in Noida, resale
          flats, ready-to-move flats, Noida Extension, Yamuna Expressway property, and Ghaziabad
          flats.
        </p>
      </div>
    </section>
  );
}
export function FAQ() {
  return (
    <section className="section" id="faq">
      <p className="eyebrow">FAQ</p>
      <h2 className="h-lg mt-3">Buyer questions answered clearly</h2>
      <div className="mt-8 space-y-4">
        {faqs.map((f) => (
          <details className="rounded-3xl border bg-card p-5" key={f.question}>
            <summary className="cursor-pointer font-serif text-xl font-semibold">
              {f.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
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
