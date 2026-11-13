import { createFileRoute, Link } from "@tanstack/react-router";
import { Network, ListChecks, Sparkles, GraduationCap, Users, School, HeartHandshake, Briefcase, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site";
import logo from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NXTSteps — Connecting Support. Creating Opportunity." },
      { name: "description", content: "One platform connecting students with disabilities, families, schools, nonprofits and employers for the transition into adulthood." },
      { property: "og:title", content: "NXTSteps — Connecting Support. Creating Opportunity." },
      { property: "og:description", content: "One platform connecting students with disabilities and their support networks for life after high school." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const pillars = [
  { icon: Network, title: "Connection", text: "Bring families, educators, support professionals and community partners into one coordinated network." },
  { icon: ListChecks, title: "Organization", text: "Manage appointments, resources, goals, responsibilities and milestones in one place." },
  { icon: Sparkles, title: "Opportunity", text: "Discover programs, career exploration, internships and pathways matched to each student." },
];

const audiences = [
  { icon: GraduationCap, title: "Students", text: "Explore interests, set goals and track progress through an accessible dashboard." },
  { icon: Users, title: "Families", text: "Coordinate your child's support team and plan ahead with confidence." },
  { icon: School, title: "Schools", text: "Organize partnerships and transition activities with authorized team members." },
  { icon: HeartHandshake, title: "Nonprofits", text: "Share services, coordinate referrals and reach the families who need you." },
  { icon: Briefcase, title: "Employers", text: "Offer job shadowing, mentorship and internships built around individual strengths." },
];

const roadmap = [
  { age: "10-12", text: "Develop Interests through education", step: "Stage 1" },
  { age: "13-15", text: "Join community programs & engage", step: "Stage 2" },
  { age: "16-19", text: "Internships, training, secondary education", step: "Stage 3" },
  { age: "20+", text: "Education, work or adult services", step: "Stage 4" },
];

function Home() {
  return (
    <SiteLayout>
      <section className="bg-soft">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="inline-block rounded-full bg-secondary px-4 py-1 text-sm font-semibold text-primary">For students and young adults with disabilities</p>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] md:text-6xl">
              Every next step, <span className="text-brand">supported.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              NXTSteps brings students, families, schools, nonprofits and employers together on one platform — so the transition into adulthood feels clear, connected and full of possibility.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 font-semibold text-primary-foreground shadow-elegant hover:opacity-95">
                Join the early list <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/platform" className="rounded-full border-2 border-foreground/15 px-7 py-3 font-semibold hover:bg-card">
                See the platform
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-6 rounded-[3rem] bg-brand opacity-25 blur-3xl" />
            <img src={logo.url} alt="NXTSteps logo showing people walking a shared path" className="relative mx-auto w-full max-w-md rounded-[2.5rem] bg-card shadow-elegant" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">The problem</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Support is everywhere — and scattered.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Teachers, coordinators, counselors, nonprofits, employers and families often share the same goals but work in separate systems. NXTSteps ends the fragmentation.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-3xl border bg-card p-8 transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-primary-foreground"><p.icon className="h-6 w-6" /></div>
              <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-bold md:text-4xl">A flexible roadmap, built around the student.</h2>
          <p className="mt-4 max-w-2xl text-lg opacity-80">Built for children, students and young adults and beyond.</p>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {roadmap.map((r, i) => (
              <div key={r.age} className="rounded-3xl border border-ink-foreground/15 p-6">
                <p className="text-sm opacity-60">{r.step}</p>
                <p className="mt-2 font-display text-4xl font-bold text-teal">{r.age}</p>
                <p className="mt-3 font-semibold">{r.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm opacity-70">Stages stay flexible to each person's needs, preferences and circumstances.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-bold md:text-4xl">One network. Five partners.</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {audiences.map((a) => (
            <div key={a.title} className="rounded-3xl bg-secondary p-6">
              <a.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-4 font-bold">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-brand px-8 py-16 text-center text-primary-foreground shadow-elegant">
          <h2 className="text-3xl font-bold md:text-5xl">Help shape what comes next.</h2>
          <p className="mx-auto mt-4 max-w-xl opacity-90">We're building NXTSteps with families, schools and partners. Tell us how you'd like to be involved.</p>
          <Link to="/contact" className="mt-8 inline-block rounded-full bg-card px-8 py-3 font-semibold text-foreground">Get in touch</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
