import Link from "next/link";
import { AambeyLogo } from "@/components/brand/aambey-logo";
import { authorityLinks, locations, services, siteConfig } from "@/content/site";
export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-secondary/50">
      <div className="container grid gap-8 py-12 md:grid-cols-4">
        <div>
          <div className="inline-flex rounded-[1.5rem] bg-background/70 p-3">
            <AambeyLogo className="h-16 max-w-[230px]" />
          </div>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Finding spaces and creating legacies across Noida NCR through documentation-first real
            estate advisory.
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold text-foreground">Locations</h2>
          {locations.map((l) => (
            <Link
              className="block py-1 text-sm text-muted-foreground hover:text-foreground"
              href={`/locations/${l.slug}`}
              key={l.slug}
            >
              {l.name}
            </Link>
          ))}
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold text-foreground">Services</h2>
          {services.map((s) => (
            <Link
              className="block py-1 text-sm text-muted-foreground hover:text-foreground"
              href={`/services/${s.slug}`}
              key={s.slug}
            >
              {s.title}
            </Link>
          ))}
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold text-foreground">Verify</h2>
          {authorityLinks.map((a) => (
            <a
              className="block py-1 text-sm text-muted-foreground hover:text-foreground"
              href={a.href}
              key={a.label}
              rel="noopener noreferrer"
              target="_blank"
            >
              {a.label}
            </a>
          ))}
          <p className="mt-4 text-xs leading-6 text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. Verify price, RERA, availability, and
            documents before any transaction.
          </p>
        </div>
      </div>
    </footer>
  );
}
