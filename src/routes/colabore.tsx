import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { images, colabore, contato, formasColaborar } from "@/content/site";

export const Route = createFileRoute("/colabore")({
  head: () => ({
    meta: [
      { title: "Colabore — Espaço Tia Jú" },
      {
        name: "description",
        content:
          "Doe via PIX, contribua com bens materiais, seja voluntário ou parceiro do Espaço Tia Jú em Mongaguá-SP.",
      },
      { property: "og:title", content: "Colabore com o Espaço Tia Jú" },
      {
        property: "og:description",
        content: "Sua doação vira alimento, educação, cultura, cuidado e esperança.",
      },
    ],
  }),
  component: ColaborePage,
});

function ColaborePage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Colabore" title={colabore.titulo} subtitle={colabore.intro} />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="surface-card p-8 md:p-10">
            <h2 className="text-2xl font-extrabold text-ink md:text-3xl">{colabore.doacao}</h2>
            <p className="mt-6 font-bold text-accent">{colabore.viraLabel}</p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {colabore.vira.map((v) => (
                <li
                  key={v}
                  className="rounded-full bg-primary-soft px-4 py-2 text-sm font-extrabold text-ink"
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card p-8 text-center md:p-10">
            <h2 className="text-xl font-extrabold text-accent">{colabore.pixTitulo}</h2>
            <img
              src={images.qrcode}
              alt="QR Code PIX para doação ao Espaço Tia Jú"
              className="mx-auto mt-6 w-56 max-w-full rounded-2xl border border-border bg-card p-3"
            />
            <p className="mt-5 font-bold text-ink">CNPJ: {contato.cnpj}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {colabore.pixTexto}
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {formasColaborar.map((f) => (
            <div key={f.titulo} className="surface-card p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft">
                <img src={f.icon} alt="" className="h-8 w-8 object-contain" />
              </div>
              <h3 className="mt-5 text-lg font-extrabold text-ink">{f.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.texto}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-cream p-8 text-center md:p-12">
          <p className="mx-auto max-w-2xl text-lg font-bold text-ink">{colabore.contatoTexto}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={contato.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-base btn-primary"
            >
              WhatsApp {contato.whatsapp}
            </a>
            <a href={`mailto:${contato.email}`} className="btn-base btn-ghost">
              {contato.email}
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
