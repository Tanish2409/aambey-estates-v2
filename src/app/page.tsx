import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Locations } from "@/components/sections/locations";
import { SeoMarket } from "@/components/sections/seo-market";
import { Services } from "@/components/sections/services";
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
