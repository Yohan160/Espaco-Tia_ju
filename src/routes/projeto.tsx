import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { projetoParagrafos } from "@/content/site";

export const Route = createFileRoute("/projeto")({
  head: () => ({
    meta: [
      { title: "Projeto — Espaço Tia Jú" },
      {
        name: "description",
        content:
          "Estimular a integração social, o potencial artístico e a cultura através de vivências em oficinas de arte no Espaço Tia Jú.",
      },
      { property: "og:title", content: "Projeto — Espaço Tia Jú" },
      {
        property: "og:description",
        content: "Leitura, arte e cultura para crianças, adultos e idosos em Mongaguá-SP.",
      },
    ],
  }),
  component: ProjetoPage,
});

function ProjetoPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Projeto"
        title="Arte, leitura e cultura"
        subtitle={projetoParagrafos[0] ?? ""}
      />

      <section className="mx-auto max-w-3xl px-5 py-16">
        <div className="space-y-5">
          {projetoParagrafos.slice(1).map((p) => (
            <div key={p.slice(0, 24)} className="surface-card p-7">
              <p className="leading-relaxed text-muted-foreground">{p}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
