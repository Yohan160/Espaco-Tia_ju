import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { apoiador } from "@/content/site";

export const Route = createFileRoute("/apoiadores")({
  head: () => ({
    meta: [
      { title: "Apoiadores — Espaço Tia Jú" },
      {
        name: "description",
        content:
          "Pessoas e parceiros que apoiam o Espaço Tia Jú e fortalecem a presença da associação em Mongaguá-SP.",
      },
      { property: "og:title", content: "Apoiadores — Espaço Tia Jú" },
      {
        property: "og:description",
        content: "Conheça quem apoia o trabalho do Espaço Tia Jú.",
      },
    ],
  }),
  component: ApoiadoresPage,
});

function ApoiadoresPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Apoiadores"
        title="Quem caminha com a gente"
        subtitle="O Espaço Tia Jú segue firme graças a doadores, voluntários e parceiros que acreditam no nosso potencial."
      />

      <section className="mx-auto max-w-4xl px-5 py-16">
        <article className="surface-card p-8 md:p-12">
          <div className="grid gap-6 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center">
            <div className="rounded-3xl bg-accent-soft p-2">
              <img
                src={apoiador.foto}
                alt={apoiador.nome}
                className="h-36 w-36 rounded-2xl object-cover"
              />
            </div>
            <h2 className="min-w-0 text-3xl font-extrabold text-ink">{apoiador.nome}</h2>
          </div>

          {apoiador.textos.map((t) => (
            <p key={t.slice(0, 20)} className="mt-5 leading-relaxed text-muted-foreground">
              {t}
            </p>
          ))}

          <p className="mt-7 font-bold text-ink">{apoiador.contatoLabel}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {apoiador.links.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="btn-base btn-ghost"
              >
                {l.label}
              </a>
            ))}
          </div>
        </article>
      </section>
    </SiteLayout>
  );
}
