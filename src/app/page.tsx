import {
  Contact,
  FAQ,
  Hero,
  Locations,
  SeoMarket,
  Services,
} from "@/components/sections/home-sections";
import { JsonLd } from "@/components/seo/json-ld";
import { faqJsonLd, organizationJsonLd } from "@/lib/seo";
export const dynamic = "force-static";
export default function HomePage() {
  return (
    <>
      <JsonLd id="home-jsonld" data={[organizationJsonLd(), faqJsonLd()]} />
      <Hero />
      <Services />
      <Locations />
      <SeoMarket />
      <FAQ />
      <Contact />
    </>
  );
}
