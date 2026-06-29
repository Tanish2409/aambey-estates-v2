const searchGuides = [
  {
    query: "Property in Noida",
    title: "Start with the right sector",
    copy: "Noida has very different pockets. We help compare office access, metro reach, society age, builder mix, and daily comfort before you shortlist.",
  },
  {
    query: "Noida Expressway projects",
    title: "Check more than the brochure",
    copy: "Expressway buyers often compare growth, newer societies, and larger layouts. We also look at possession stage, payment plan, and nearby services.",
  },
  {
    query: "Resale flats in NCR",
    title: "Ready homes need document checks",
    copy: "For resale, the deal is not just the flat. Registry, dues, loan status, transfer process, maintenance, and negotiation scope matter.",
  },
] as const;

export function SeoMarket() {
  return (
    <section className="section">
      <div className="overflow-hidden rounded-[2rem] bg-card">
        <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
          <div>
            <p className="eyebrow">Search with context</p>
            <h2 className="h-lg mt-4 max-w-4xl">Better answers than a list of listings.</h2>
            <p className="lead mt-6 max-w-3xl">
              Most property searches begin with broad terms. We turn those searches into clear buyer
              questions: which area fits, what documents matter, and which projects deserve a visit.
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-background/70 p-6">
            <h3 className="text-2xl font-semibold tracking-tight">What we help you decide</h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Whether to choose new launch or resale, Noida or Greater Noida, ready-to-move or
              under-construction, family comfort or investment entry. One clear conversation can
              save many wrong visits.
            </p>
          </div>
        </div>
        <div className="grid gap-px bg-border/60 md:grid-cols-3">
          {searchGuides.map((guide) => (
            <article className="bg-card p-7" key={guide.query}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {guide.query}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">{guide.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{guide.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
