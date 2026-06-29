import { faqs } from "@/content/site";

export function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="h-lg mt-4 max-w-3xl">Questions buyers ask before they visit.</h2>
          <p className="lead mt-6 max-w-xl">
            Clear answers for Noida NCR property buyers comparing locations, builders, resale homes,
            new launches, and documents.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, index) => (
            <details
              className="group rounded-[1.25rem] bg-card p-5 open:bg-secondary/80"
              key={f.question}
              name="buyer-faq"
              open={index === 0}
            >
              <summary className="grid cursor-pointer list-none grid-cols-[1fr_2rem] items-center gap-4 text-lg font-semibold tracking-tight">
                <span>{f.question}</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-xl leading-none text-accent transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
