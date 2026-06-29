import Link from "next/link";
import { AambeyLogo } from "@/components/brand/aambey-logo";
import { buttonVariants } from "@/components/ui/button";
import { nav, siteConfig } from "@/content/site";
export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <div className="container flex min-h-[68px] items-center justify-between gap-4 rounded-full border border-background/80 bg-background/90 px-4 shadow-[0_28px_90px_-70px_hsl(var(--primary))] backdrop-blur-xl">
        <Link aria-label="Aambey Estates home" className="flex items-center" href="/">
          <AambeyLogo className="h-12 max-w-[190px] sm:max-w-[230px]" eager />
        </Link>
        <nav className="hidden gap-6 lg:flex" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link
              key={item.label}
              className="text-foreground/78 text-sm font-semibold hover:text-foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className={buttonVariants({ variant: "gold", size: "sm" })}
          href={siteConfig.contact.whatsappHref}
        >
          Plan my search
        </Link>
      </div>
    </header>
  );
}
