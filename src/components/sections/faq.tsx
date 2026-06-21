import { faqs } from "@/content/site";

export function FAQ() {
  return (
    <section className="section" id="faq">
      <p className="eyebrow">FAQ</p>
      <h2 className="h-lg mt-3">Buyer questions answered clearly</h2>
      <div className="mt-8 space-y-4">
        {faqs.map((f) => (
          <details className="rounded-3xl border bg-card p-5" key={f.question}>
            <summary className="cursor-pointer font-serif text-xl font-semibold">
              {f.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
