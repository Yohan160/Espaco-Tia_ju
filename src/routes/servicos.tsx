import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { images, servicos, aulasLista } from "@/content/site";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços e aulas — Espaço Tia Jú" },
      {
        name: "description",
        content:
          "Contação de histórias, oficinas de artes, leitura, informática, libras e teatro: conheça as atividades do Espaço Tia Jú.",
      },
      { property: "og:title", content: "Serviços e aulas — Espaço Tia Jú" },
      {
        property: "og:description",
        content: "Conheça a rotina de aulas e atividades oferecidas pelo Espaço Tia Jú.",
      },
    ],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Serviços" title={servicos.titulo} />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {aulasLista.map((a) => (
            <div
              key={a}
              className="surface-card flex items-center gap-3 px-5 py-5 text-base font-extrabold text-ink"
            >
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
              <span className="min-w-0">{a}</span>
            </div>
          ))}
        </div>

        <div className="surface-card mt-12 overflow-hidden p-3 sm:p-5">
          <img
            src={images.aulas}
            alt="Quadro de horários das aulas do Espaço Tia Jú"
            className="w-full rounded-2xl object-contain"
          />
        </div>

        <div className="mt-12 grid gap-8 rounded-3xl bg-cream p-8 md:p-12 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-2xl font-extrabold text-accent md:text-3xl">{servicos.subtitulo}</h2>
          <p className="leading-relaxed text-muted-foreground">{servicos.texto}</p>
        </div>
      </section>
    </SiteLayout>
  );
}
