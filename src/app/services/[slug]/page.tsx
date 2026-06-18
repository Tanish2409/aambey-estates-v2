import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Contact, FAQ } from "@/components/sections/home-sections";
import { JsonLd } from "@/components/seo/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { services, siteConfig } from "@/content/site";
import { breadcrumbJsonLd } from "@/lib/seo";
type Props = { params: Promise<{ slug: string }> };
export const dynamic = "force-static";
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.meta,
    alternates: { canonical: `${siteConfig.url}/services/${s.slug}` },
  };
}
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  return (
    <>
      <JsonLd
        id={`${s.slug}-breadcrumb`}
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: s.title, url: `${siteConfig.url}/services/${s.slug}` },
        ])}
      />
      <section className="bg-primary text-primary-foreground">
        <div className="section">
          <p className="eyebrow">Real estate service</p>
          <h1 className="h-xl mt-4 text-primary-foreground">{s.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-primary-foreground/80">
            {s.description}
          </p>
          <Link
            className={buttonVariants({ variant: "gold", size: "lg" }) + " mt-8"}
            href="/#contact"
          >
            Start with {s.title.toLowerCase()}
          </Link>
        </div>
      </section>
      <FAQ />
      <Contact />
    </>
  );
}
