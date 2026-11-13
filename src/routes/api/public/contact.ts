import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { sendTemplateEmail } from "@/lib/email-templates/send-email";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  role: z
    .enum([
      "Student",
      "Parent or family member",
      "Educator or school",
      "Nonprofit organization",
      "Employer",
    ])
    .or(z.string().trim().min(1).max(120)),
  message: z.string().trim().min(1).max(4000),
});

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ ok: false }, { status: 400 });
        }

        const parsed = contactSchema.safeParse(payload);
        if (!parsed.success) {
          return Response.json({ ok: false }, { status: 400 });
        }

        const { name, email, role, message } = parsed.data;

        try {
          const result = await sendTemplateEmail("contact-owner-notification", email, {
            templateData: { name, email, role, message },
          });
          if (!result.sent) {
            return Response.json({ ok: false }, { status: 502 });
          }
          return Response.json({ ok: true });
        } catch (error) {
          console.error("Contact form email failed", error);
          return Response.json({ ok: false }, { status: 502 });
        }
      },
    },
  },
});
