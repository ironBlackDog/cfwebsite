import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout, PageHeader } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get involved — NXTSteps" },
      { name: "description", content: "Families, schools, nonprofits and employers: tell us how you'd like to partner with NXTSteps." },
      { property: "og:title", content: "Get involved — NXTSteps" },
      { property: "og:description", content: "Partner with NXTSteps as a family, school, nonprofit or employer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const field = "w-full rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring";
const ROLES = ["Student", "Parent or family member", "Educator or school", "Nonprofit organization", "Employer"];

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", role: ROLES[0], message: "" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const update = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <SiteLayout>
      <PageHeader eyebrow="Get involved" title="See our demo, let's build the next step together" intro="Whether you're a family, educator, nonprofit or employer, we'd love to hear from you. Get in touch with us and we'd love to show you the Demo so you can fully immerse yourself." />
      <section className="mx-auto max-w-xl px-6 py-16">
        {status === "sent" ? (
          <div className="rounded-3xl bg-secondary p-10 text-center">
            <h2 className="text-2xl font-bold">Thank you!</h2>
            <p className="mt-2 text-muted-foreground">We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border bg-card p-8 shadow-elegant">
            {status === "error" && (
              <p className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
                Something went wrong sending your message. Please try again, or email us directly at inquiries@nxtsteps.dev.
              </p>
            )}
            <label className="block text-sm font-semibold">
              Name
              <input required className={`${field} mt-1`} value={form.name} onChange={update("name")} />
            </label>
            <label className="block text-sm font-semibold">
              Email
              <input required type="email" className={`${field} mt-1`} value={form.email} onChange={update("email")} />
            </label>
            <label className="block text-sm font-semibold">
              I am a…
              <select className={`${field} mt-1`} value={form.role} onChange={update("role")}>
                {ROLES.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-semibold">
              Message
              <textarea required rows={4} className={`${field} mt-1`} value={form.message} onChange={update("message")} />
            </label>
            <button type="submit" disabled={status === "sending"} className="w-full rounded-full bg-brand py-3 font-semibold text-primary-foreground disabled:opacity-60">
              {status === "sending" ? "Sending…" : "Send"}
            </button>
          </form>
        )}
      </section>
    </SiteLayout>
  );
}
