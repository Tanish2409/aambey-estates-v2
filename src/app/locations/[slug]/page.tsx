import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { JsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { locations, siteConfig } from "@/content/site";
import { breadcrumbJsonLd } from "@/lib/seo";
type Props = { params: Promise<{ slug: string }> };
export const dynamic = "force-static";
export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const l = locations.find((x) => x.slug === slug);
  if (!l) return {};
  return {
    title: `${l.name} Property Advisory`,
    description: l.meta,
    alternates: { canonical: `${siteConfig.url}/locations/${l.slug}` },
  };
}
export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const l = locations.find((x) => x.slug === slug);
  if (!l) notFound();
  return (
    <>
      <JsonLd
        id={`${l.slug}-breadcrumb`}
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: l.name, url: `${siteConfig.url}/locations/${l.slug}` },
        ])}
      />
      <section className="section">
        <div className="rounded-[2rem] bg-secondary/70 p-8 shadow-[0_32px_90px_-72px_hsl(var(--primary))] lg:p-14">
          <p className="eyebrow">Location advisory</p>
          <h1 className="h-xl mt-4">{l.name} property advisory</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{l.meta}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {l.markets.map((m) => (
              <Badge className="border-accent/35 bg-background/60 text-primary" key={m}>
                {m}
              </Badge>
            ))}
          </div>
          <Link
            className={buttonVariants({ variant: "gold", size: "lg" }) + " mt-8"}
            href="/#contact"
          >
            Discuss {l.name} options
          </Link>
        </div>
      </section>
      <FAQ />
      <Contact />
    </>
  );
}
