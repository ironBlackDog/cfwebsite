import { createFileRoute, Link } from "@tanstack/react-router";
import { LayoutDashboard, Network, MessagesSquare, MapPin, Briefcase, Route as RouteIcon } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site";
import ecosystem from "@/assets/ecosystem-diagram.png.asset.json";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform features — NXTSteps" },
      { name: "description", content: "Student dashboards, support network management, collaboration tools, resource directory, career partnerships and transition planning." },
      { property: "og:title", content: "Platform features — NXTSteps" },
      { property: "og:description", content: "Everything a student's support team needs, in one accessible platform." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Platform,
});

const features = [
  { icon: LayoutDashboard, title: "Personalized student dashboard", items: ["Goals and interests", "Upcoming appointments", "Career opportunities", "Milestones and achievements"] },
  { icon: Network, title: "Support network management", items: ["See every support contact", "Clarify responsibilities", "Manage referrals", "Coordinated communication between camp, extracurriculars, teachers, parents, etc."] },
  { icon: MessagesSquare, title: "Parent & educator collaboration", items: ["Shared planning checklists", "Reminders and task assignments", "Progress updates", "Approved communication channels"] },
  { icon: MapPin, title: "Community resource directory", items: ["Search by location and interests", "Filter by age and services", "Organization profiles", "Clear referral processes"] },
  { icon: Briefcase, title: "Career exploration & employers", items: ["Workshops and workplace tours", "Mentorship and job shadowing", "Internships", "Supported and entry-level roles"] },
  { icon: RouteIcon, title: "Personalized transition planning", items: ["Individual roadmaps", "Built on goals and interests", "Flexible stages, ages 10 through 20 and beyond", "Grows with the student"] },
];

const partners = [
  { name: "Schools", note: "Per school or district partnerships", items: ["Student dashboards for every learner", "Educator & parent collaboration", "Transition planning tools", "Onboarding & staff training"] },
  { name: "External Organizations/Nonprofits", note: "Partnerships with community organizations", items: ["Organization profile in the directory", "Referral management", "Coordinated communication", "Pilot program options"] },
];

const Dot = () => <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />;

function Platform() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="The platform" title={<>Everything in <span className="text-brand">one place</span></>} intro="NXTSteps complements schools and existing programs — it doesn't replace official records or IEP procedures. It helps everyone work together." />
      <section className="mx-auto max-w-5xl px-6 pb-16 text-center">
        <figure className="rounded-3xl bg-card p-6 shadow-elegant md:p-10">
          <img src={ecosystem.url} alt="Diagram showing NXTSteps at the center, connected to Education (HS/College), Parents/Family, Caregivers/NPO, and Professional services" className="mx-auto w-full max-w-3xl" />
          <figcaption className="mt-4 text-sm text-muted-foreground">NXTSteps at the center of a student's support network.</figcaption>
        </figure>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Platform <span className="text-brand">features</span></h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-3xl border bg-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-primary-foreground"><f.icon className="h-6 w-6" /></div>
              <h3 className="mt-6 text-xl font-bold">{f.title}</h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {f.items.map((i) => <li key={i} className="flex gap-2"><Dot />{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section id="demo" className="bg-soft">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Plans & <span className="text-brand">partnerships</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">Simple, affordable pricing for families, with flexible partnership options for schools and organizations. For inquiries about need-based financial assistance, please contact us.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col rounded-3xl border-2 border-primary bg-card p-8 shadow-elegant">
              <h3 className="text-2xl font-bold">Families</h3>
              <p className="mt-2 text-4xl font-bold text-brand">$20<span className="text-lg font-semibold text-muted-foreground"> / month</span></p>
              <p className="mt-1 text-sm text-muted-foreground">or $200 billed annually — save $40</p>
              <ul className="mt-6 space-y-2 text-muted-foreground">
                {["Personalized student dashboard", "Shared transition roadmap", "Support network coordination", "Community resource directory"].map((i) => <li key={i} className="flex gap-2"><Dot />{i}</li>)}
              </ul>
              <Link to="/contact" className="mt-auto pt-8"><span className="block w-full rounded-full bg-primary py-3 text-center font-semibold text-primary-foreground">Get started</span></Link>
            </div>
            <div className="flex flex-col rounded-3xl bg-brand p-8 text-primary-foreground shadow-elegant">
              <h3 className="text-2xl font-bold">Request a demo</h3>
              <p className="mt-3 opacity-90">A guided walkthrough of the platform, tailored to your students, families and team.</p>
              <ul className="mt-6 space-y-2 opacity-90">
                <li>• 30-minute live session</li><li>• Q&A, get any questions you have answered</li><li>• No commitment, totally costless</li>
              </ul>
              <Link to="/contact" className="mt-auto pt-8"><span className="block w-full rounded-full bg-background py-3 text-center font-semibold text-foreground">Request a demo</span></Link>
            </div>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {partners.map((p) => (
              <div key={p.name} className="flex flex-col rounded-3xl border bg-card p-8">
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
                <ul className="mt-6 space-y-2 text-muted-foreground">
                  {p.items.map((i) => <li key={i} className="flex gap-2"><Dot />{i}</li>)}
                </ul>
                <Link to="/contact" className="mt-auto pt-8"><span className="block w-full rounded-full border border-primary py-3 text-center font-semibold text-primary">Reach out for partnership</span></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
