import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  images,
  quemSomos,
  aulasLista,
  impacto,
  formasColaborar,
  espacoTexto,
  frase,
} from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ONG Espaço Tia Jú — Educação e acolhimento em Mongaguá-SP" },
      {
        name: "description",
        content:
          "Associação sem fins lucrativos de Mongaguá-SP que transforma a vida de crianças por meio da educação, leitura, arte e cultura.",
      },
      { property: "og:title", content: "ONG Espaço Tia Jú" },
      {
        property: "og:description",
        content:
          "Educação, leitura, arte e acolhimento para crianças em Mongaguá-SP. Conheça, colabore e faça parte.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="warm-sky relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:py-20 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="eyebrow reveal">Mongaguá · São Paulo</span>
            <h1 className="reveal mt-5 text-[2.6rem] font-extrabold leading-[1.05] text-ink sm:text-6xl">
              ONG <span className="text-primary">Espaço Tia Jú</span>
            </h1>
            <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {quemSomos}
            </p>
            <div className="reveal mt-8 flex flex-wrap gap-3">
              <Link to="/sobre-nos" className="btn-base btn-primary">
                Conheça mais sobre nós
              </Link>
              <Link to="/colabore" className="btn-base btn-ghost">
                Colabore
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 hidden h-28 w-28 rounded-3xl bg-accent-soft sm:block" />
            <div className="absolute -bottom-6 -right-4 hidden h-24 w-24 rounded-full bg-primary-soft sm:block" />
            <img
              src={images.hero}
              alt="Crianças atendidas pelo Espaço Tia Jú"
              className="relative aspect-4/3 w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="surface-card relative -mt-10 ml-4 mr-4 flex items-center gap-3 px-5 py-4 sm:ml-8">
              <img src={images.logo} alt="" className="h-11 w-11 shrink-0 object-contain" />
              <p className="min-w-0 text-sm font-bold text-ink">
                Educação, leitura, arte e acolhimento todos os dias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOSSAS AULAS */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow">Nossas aulas</span>
            <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">
              Em nossas aulas, nós oferecemos algumas práticas como:
            </h2>
            <p className="mt-4 text-muted-foreground">
              Dentre diversas outras. Para conhecer nossa rotina de aulas completa, clique no botão
              abaixo:
            </p>
            <Link to="/servicos" className="btn-base btn-accent mt-6">
              Ver aulas
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {aulasLista.map((a) => (
              <li
                key={a}
                className="surface-card flex min-h-24 items-center justify-center px-4 py-5 text-center text-sm font-extrabold text-ink"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* GALERIA */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-5">
          <span className="eyebrow">Nosso dia a dia</span>
          <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">
            Momentos do Espaço Tia Jú
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {images.gallery.map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`h-full w-full rounded-2xl object-cover shadow-[var(--shadow-soft)] transition-transform duration-500 hover:scale-[1.03] ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="eyebrow">Impacto</span>
            <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">{impacto.titulo}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{impacto.texto}</p>
            <Link to="/colabore" className="btn-base btn-primary mt-7">
              Venha participar também
            </Link>
          </div>
          <div className="space-y-4">
            {impacto.itens.map((item) => (
              <div key={item} className="surface-card flex gap-4 p-6">
                <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-accent" />
                <p className="min-w-0 font-semibold leading-relaxed text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO AJUDAR */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <span className="eyebrow">Como posso ajudar?</span>
          <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">
            Você pode colaborar conosco de diversas formas
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {formasColaborar.map((f) => (
              <div key={f.titulo} className="surface-card p-7 text-left">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft">
                  <img src={f.icon} alt="" className="h-8 w-8 object-contain" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-accent">{f.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.texto}</p>
              </div>
            ))}
          </div>
          <Link to="/colabore" className="btn-base btn-primary mt-10">
            Colabore
          </Link>
        </div>
      </section>

      {/* ESPAÇO TIA JÚ */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="surface-card grid gap-8 p-8 md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <img
            src={images.gallery[2]?.src}
            alt="Atividade no Espaço Tia Jú"
            loading="lazy"
            className="aspect-4/3 w-full rounded-2xl object-cover"
          />
          <div>
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">Espaço Tia Jú</h2>
            {espacoTexto.map((p) => (
              <p key={p.slice(0, 20)} className="mt-4 leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* FRASE */}
      <section className="mx-auto max-w-4xl px-5 pb-10 text-center">
        <p className="font-display text-2xl font-extrabold leading-snug text-ink md:text-4xl">
          {frase.antes}
          <span className="text-accent">{frase.destaque1}</span>
          {frase.meio}
          <span className="text-accent">{frase.destaque2}</span>
        </p>
      </section>
    </SiteLayout>
  );
}
