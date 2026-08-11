import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { images, nav, contato } from "@/content/site";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img src={images.logo} alt="Logo Espaço Tia Jú" className="h-11 w-11 shrink-0 object-contain" />
          <span className="truncate font-display text-lg font-extrabold text-ink">
            Espaço Tia Jú
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-accent bg-accent-soft" }}
              className="rounded-full px-3.5 py-2 text-sm font-bold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#contato"
            className="rounded-full px-3.5 py-2 text-sm font-bold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            Contato
          </a>
          <Link to="/colabore" className="btn-base btn-primary ml-2 px-5 py-2.5">
            Colabore
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-xl border border-border bg-card lg:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-5 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-card px-5 pb-5 pt-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-accent bg-accent-soft" }}
                className="rounded-xl px-4 py-3 text-base font-bold text-foreground transition-colors hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-bold text-foreground transition-colors hover:bg-muted"
            >
              Contato
            </a>
            <Link
              to="/colabore"
              onClick={() => setOpen(false)}
              className="btn-base btn-primary mt-2 w-full"
            >
              Colabore
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer id="contato" className="mt-24 bg-ink text-background/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={images.logo} alt="Logo Espaço Tia Jú" className="h-20 w-20 object-contain" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed opacity-80">
            Associação sem fins lucrativos de Mongaguá-SP que transforma a vida de crianças por meio
            da educação.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-extrabold text-background">Redes sociais</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="transition-colors hover:text-primary" href={contato.instagramUrl} target="_blank" rel="noreferrer">
                Instagram · {contato.instagram}
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-primary" href={contato.facebookUrl} target="_blank" rel="noreferrer">
                Facebook · {contato.facebook}
              </a>
            </li>
            <li>YouTube · {contato.youtube}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-extrabold text-background">Formas de contato</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="transition-colors hover:text-primary" href={contato.whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp · {contato.whatsapp}
              </a>
            </li>
            <li className="break-words">
              <a className="transition-colors hover:text-primary" href={`mailto:${contato.email}`}>
                {contato.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-extrabold text-background">Localização</h3>
          <p className="mt-4 text-sm leading-relaxed opacity-85">{contato.endereco}</p>
          <p className="mt-3 text-sm opacity-70">CNPJ: {contato.cnpj}</p>
        </div>
      </div>
      <div className="border-t border-background/15 py-5 text-center text-xs opacity-60">
        Espaço Tia Jú · Mongaguá — SP
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="warm-sky border-b border-border">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-24">
        <span className="eyebrow reveal">{eyebrow}</span>
        <h1 className="reveal mt-5 text-4xl font-extrabold text-ink md:text-6xl">{title}</h1>
        {subtitle && (
          <p className="reveal mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
