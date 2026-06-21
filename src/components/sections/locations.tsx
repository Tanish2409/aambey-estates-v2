import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { locations } from "@/content/site";

export function Locations() {
  return (
    <section className="border-y bg-card/60" id="locations">
      <div className="section">
        <p className="eyebrow">Locations</p>
        <h2 className="h-lg mt-3">Static local pages for Noida NCR search intent</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {locations.map((l) => (
            <Card key={l.slug}>
              <CardHeader>
                <CardTitle>{l.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">{l.meta}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {l.markets.slice(0, 4).map((m) => (
                    <Badge key={m}>{m}</Badge>
                  ))}
                </div>
                <Link
                  className="mt-5 inline-block font-semibold text-primary"
                  href={`/locations/${l.slug}`}
                >
                  Explore {l.name} →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
