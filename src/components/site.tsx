import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logo from "@/assets/logo.png.asset.json";
import mark from "@/assets/mark.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/platform", label: "Platform" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center gap-2" aria-label="NXTSteps home">
            <img src={mark.url} alt="" className="h-9 w-9" />
            <span className="font-display text-xl font-bold">
              NXT<span className="font-normal">Steps</span>
            </span>
          </Link>
          <nav className="hidden gap-7 text-sm font-semibold md:flex">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <Link to="/contact" className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-ink-foreground hover:opacity-90">
            Get involved
          </Link>
        </div>
        <nav className="flex justify-center gap-5 pb-3 text-sm font-semibold md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>{n.label}</Link>
          ))}
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-3">
          <div>
            <img src={logo.url} alt="NXTSteps" className="h-24 w-24 rounded-2xl bg-card p-1" />
            <p className="mt-4 text-sm opacity-80">Connecting Families, Educators &amp; Opportunities Through Technology.{"\n\n"}</p>
          </div>
          <div className="text-sm opacity-80">
            <p className="font-semibold opacity-100">Explore</p>
            <ul className="mt-3 space-y-2">
              {nav.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}
            </ul>
          </div>
          <p className="text-sm opacity-70">
            NXTSteps LLC is an early-stage education technology company helping students with disabilities transition into adulthood.
          </p>
        </div>
        <p className="border-t border-ink-foreground/10 py-5 text-center text-xs opacity-60">© {new Date().getFullYear()} NXTSteps LLC</p>
      </footer>
    </div>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro: string }) {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-12 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-bold md:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{intro}</p>
      </div>
    </section>
  );
}
