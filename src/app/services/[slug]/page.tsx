import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
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
      <section className="section">
        <div className="rounded-[2rem] bg-secondary/70 p-8 shadow-[0_32px_90px_-72px_hsl(var(--primary))] lg:p-14">
          <p className="eyebrow">Real estate service</p>
          <h1 className="h-xl mt-4">{s.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{s.description}</p>
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
