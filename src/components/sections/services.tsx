import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/content/site";

const imagePositions = ["object-left", "object-center", "object-right", "object-center"] as const;

export function Services() {
  return (
    <section className="section" id="services">
      <div className="max-w-3xl">
        <h2 className="h-lg">Focused services for serious property decisions.</h2>
        <p className="lead mt-5">
          New launch, resale, investor exits, and builder inventory are treated as different buying
          problems, not the same listing card.
        </p>
      </div>
      <div className="mt-12 grid grid-flow-dense gap-4 lg:auto-rows-[240px] lg:grid-cols-4">
        {services.map((service, index) => (
          <Reveal
            className="group overflow-hidden rounded-[2rem] bg-card text-foreground lg:col-span-2"
            delay={index * 0.06}
            key={service.slug}
          >
            <Link
              className="grid h-full min-h-[260px] md:grid-cols-2"
              href={`/services/${service.slug}`}
            >
              <div className="flex h-full flex-col justify-between p-7">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <span className="mt-8 font-semibold text-primary">View service</span>
              </div>
              <div className="relative min-h-[220px] overflow-hidden md:min-h-0">
                <Image
                  alt={`${service.title} advisory context in Noida NCR`}
                  className={`image-filter h-full w-full object-cover opacity-85 transition duration-700 ease-out group-hover:scale-105 ${imagePositions[index] ?? "object-center"}`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  src="/images/aambey-residence-hero.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
