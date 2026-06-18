import Link from "next/link";
import { authorityLinks, locations, services, siteConfig } from "@/content/site";
export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container grid gap-8 py-12 md:grid-cols-4">
        <div>
          <p className="font-serif text-2xl font-semibold">Aambey Estates</p>
          <p className="mt-3 text-sm leading-7 text-primary-foreground/70">
            Noida NCR advisory for new launch, resale, builder inventory, and investor exit
            opportunities.
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold text-accent">Locations</h2>
          {locations.map((l) => (
            <Link
              className="block py-1 text-sm text-primary-foreground/70"
              href={`/locations/${l.slug}`}
              key={l.slug}
            >
              {l.name}
            </Link>
          ))}
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold text-accent">Services</h2>
          {services.map((s) => (
            <Link
              className="block py-1 text-sm text-primary-foreground/70"
              href={`/services/${s.slug}`}
              key={s.slug}
            >
              {s.title}
            </Link>
          ))}
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold text-accent">Verify</h2>
          {authorityLinks.map((a) => (
            <a
              className="block py-1 text-sm text-primary-foreground/70"
              href={a.href}
              key={a.label}
              rel="noopener noreferrer"
              target="_blank"
            >
              {a.label}
            </a>
          ))}
          <p className="mt-4 text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} {siteConfig.name}. Verify price, RERA, availability, and
            documents before any transaction.
          </p>
        </div>
      </div>
    </footer>
  );
}
