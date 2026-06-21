import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/content/site";

export function Services() {
  return (
    <section className="section" id="services">
      <p className="eyebrow">Services</p>
      <h2 className="h-lg mt-3">Focused services for serious property decisions</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {services.map((s) => (
          <Card key={s.slug}>
            <CardHeader>
              <CardTitle>{s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-7 text-muted-foreground">{s.description}</p>
              <Link
                className="mt-5 inline-block font-semibold text-primary"
                href={`/services/${s.slug}`}
              >
                Explore service →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
