import Image from "next/image";
import Link from "next/link";
import { locations } from "@/content/site";

const imagePositions = ["object-left", "object-center", "object-right"] as const;

export function Locations() {
  return (
    <section className="section" id="locations">
      <p className="eyebrow">NCR focus</p>
      <h2 className="h-lg mt-4 max-w-4xl">Local guidance where the decision actually happens.</h2>
      <div className="mt-12 grid gap-4 md:min-h-[520px] md:grid-cols-3">
        {locations.map((location, index) => (
          <Link
            className="group relative min-h-[360px] overflow-hidden rounded-[2rem] bg-card p-7 text-primary-foreground transition duration-700 ease-out"
            href={`/locations/${location.slug}`}
            key={location.slug}
          >
            <Image
              alt={`${location.name} residential property market`}
              className={`image-filter absolute inset-0 h-full w-full object-cover opacity-55 transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-70 ${imagePositions[index] ?? "object-center"}`}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              src="/images/aambey-residence-hero.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
            <div className="relative flex h-full flex-col justify-end">
              <h3 className="text-3xl font-semibold tracking-tight">{location.name}</h3>
              <p className="text-primary-foreground/76 mt-4 max-w-sm text-sm leading-7">
                {location.meta}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {location.markets.slice(0, 3).map((market) => (
                  <span
                    className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium text-primary-foreground"
                    key={market}
                  >
                    {market}
                  </span>
                ))}
              </div>
              <span className="mt-7 font-semibold text-accent">View location</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
