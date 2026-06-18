import Link from "next/link";
import { AambeyLogo } from "@/components/brand/aambey-logo";
import { buttonVariants } from "@/components/ui/button";
import { nav, siteConfig } from "@/content/site";
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="container flex min-h-20 items-center justify-between gap-4">
        <Link aria-label="Aambey Estates home" className="flex items-center" href="/">
          <AambeyLogo className="h-14 max-w-[220px] sm:max-w-[250px]" eager />
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
        <Link className={buttonVariants({ variant: "gold", size: "sm" })} href={siteConfig.contact.whatsappHref}>
          WhatsApp
        </Link>
      </div>
    </header>
  );
}
