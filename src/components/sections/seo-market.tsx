export function SeoMarket() {
  return (
    <section className="section">
      <div className="rounded-[2rem] bg-card p-8 sm:p-10 lg:p-14">
        <h2 className="h-lg max-w-4xl">Built for buyers comparing real NCR search terms.</h2>
        <p className="lead mt-6 max-w-3xl">
          Location, service, FAQ, and verification content stays visible in the HTML so search
          visitors can find clear answers before they start a conversation.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {["Property in Noida", "New launch projects", "Resale flats"].map((term) => (
            <div className="rounded-[1.5rem] bg-background/70 p-5" key={term}>
              <p className="text-sm font-semibold text-foreground">{term}</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Plain-language pages backed by locality context and human confirmation.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
