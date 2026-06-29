import { faqs } from "@/content/site";

export function FAQ() {
  return (
    <section className="section" id="faq">
      <p className="eyebrow">FAQ</p>
      <h2 className="h-lg mt-4 max-w-3xl">Buyer questions answered clearly.</h2>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {faqs.map((f) => (
          <article className="rounded-[1.5rem] bg-card p-6" key={f.question}>
            <h3 className="text-xl font-semibold tracking-tight">{f.question}</h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{f.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
