import Link from "next/link";
import { nav, siteConfig } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="container flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary font-serif text-primary-foreground">
            AE
          </span>
          <span className="font-serif text-xl font-semibold">Aambey Estates</span>
        </Link>
        <nav className="hidden gap-6 lg:flex" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link
              key={item.label}
              className="text-sm font-semibold text-muted-foreground hover:text-foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className={buttonVariants({ size: "sm" })} href={siteConfig.contact.whatsappHref}>
          WhatsApp
        </Link>
      </div>
    </header>
  );
}
