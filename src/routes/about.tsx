import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NXTSteps — Our mission" },
      { name: "description", content: "NXTSteps simplifies the transition into adulthood for individuals with disabilities by connecting people, resources and opportunities." },
      { property: "og:title", content: "About NXTSteps — Our mission" },
      { property: "og:description", content: "Why we're building technology infrastructure for disability transition planning." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  { t: "Individual choice", d: "Meaningful experiences shaped by each person's interests — never one-size-fits-all." },
  { t: "Collaboration", d: "We strengthen the coordinators, caregivers and programs already doing the work." },
  { t: "Accessibility", d: "Designed so every student can use it, communicate preferences and own their goals." },
];

function About() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Our mission" title="Simplifying the transition into adulthood" intro="To simplify the transition into adulthood for individuals with disabilities by connecting the people, resources, and opportunities that support their future." />
      <section className="mx-auto max-w-3xl px-6 pt-10 pb-14">
        <h2 className="text-3xl font-bold">How we started</h2>
        <div className="mt-6 space-y-6 text-lg text-muted-foreground">
          <p>NXTSteps grew out of a long-standing passion for working with students with disabilities — and a frustration with how hard it is for the adults around them to pull in the same direction. Every student deserves a plan for adulthood that reflects who they are, yet the people who care most about them are often coordinating through email threads, paper binders and good intentions.</p>
          <p>We started NXTSteps to change that: to give every student a clear, personal path into adulthood, and to give the parents, educators, caregivers and employers around them one place to support it. Our commitment to individual choice, collaboration and accessibility isn't a marketing line — it's what we've believed since day one.</p>
        </div>
      </section>
      <section className="mx-auto max-w-3xl space-y-6 px-6 pb-24 text-lg text-muted-foreground">
        <p>For many families, navigating education, professional services, employment and community programs is overwhelming. Support is spread across many organizations, making long-term planning hard.</p>
        <p>NXTSteps isn't a job placement agency or a nonprofit. We're a technology company building the infrastructure that connects existing organizations and resources through one accessible platform.</p>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-3">
        {values.map((v) => (
          <div key={v.t} className="rounded-3xl bg-secondary p-8">
            <h2 className="text-xl font-bold">{v.t}</h2>
            <p className="mt-2 text-muted-foreground">{v.d}</p>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
