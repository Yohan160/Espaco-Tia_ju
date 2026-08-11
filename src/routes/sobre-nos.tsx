import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { fundadora, integrantes } from "@/content/site";

export const Route = createFileRoute("/sobre-nos")({
  head: () => ({
    meta: [
      { title: "Sobre nós — Espaço Tia Jú" },
      {
        name: "description",
        content:
          "Conheça a fundadora Juçara Maria Silva e os integrantes que fazem o Espaço Tia Jú acontecer em Mongaguá-SP.",
      },
      { property: "og:title", content: "Sobre nós — Espaço Tia Jú" },
      {
        property: "og:description",
        content: "A equipe de educadores e voluntários por trás do Espaço Tia Jú.",
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Sobre nós"
        title="Quem faz o Espaço acontecer"
        subtitle="Uma equipe de educadores, artistas e voluntários dedicados às crianças de Mongaguá."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="surface-card grid gap-8 p-8 md:p-12 lg:grid-cols-[auto_1fr] lg:items-center">
          <div className="mx-auto">
            <div className="rounded-full bg-primary-soft p-2">
              <img
                src={fundadora.foto}
                alt={fundadora.nome}
                className="h-48 w-48 rounded-full object-cover"
              />
            </div>
          </div>
          <div>
            <span className="eyebrow">Fundadora</span>
            <h2 className="mt-3 text-3xl font-extrabold text-ink">{fundadora.nome}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{fundadora.texto}</p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-6xl px-5">
          <span className="eyebrow">Integrantes</span>
          <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">Nossa equipe</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {integrantes.map((p) => (
              <article key={p.nome} className="surface-card p-7">
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
                  <img
                    src={p.foto}
                    alt={p.nome}
                    loading="lazy"
                    className="h-20 w-20 shrink-0 rounded-2xl object-cover"
                  />
                  <h3 className="min-w-0 text-lg font-extrabold text-accent">{p.nome}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
