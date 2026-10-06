import { z } from "zod";

export const LeadSchema = z.object({
  // Step 1: Intent
  services: z.array(z.string()).min(1, "Please select at least one service area."),
  
  // Step 2: Details
  description: z.string()
    .min(20, "Please provide a brief description (min 20 characters).")
    .max(2000, "Description is too long.")
    .trim(),
  objective: z.string().max(500, "Objective is too long.").trim().optional(),
  budget: z.string().min(1, "Please select a budget range."),
  timeline: z.string().min(1, "Please select a timeline."),
  referenceUrl: z.string()
    .url("Please enter a valid URL")
    .or(z.literal(""))
    .optional(),
  
  // Step 3: Contact
  name: z.string()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name is too long.")
    .trim(),
  email: z.string()
    .email("Please enter a valid email address.")
    .trim()
    .toLowerCase(),
  company: z.string().max(100, "Company name is too long.").trim().optional(),
  country: z.string().max(100, "Country name is too long.").trim().optional(),
  preferredContact: z.enum(["Email", "WhatsApp", "Phone"], {
    required_error: "Please select a preferred contact method.",
  }),
  phone: z.string().max(20, "Phone number is too long.").trim().optional(),
  
  // Anti-spam honeypot field
  bot_field: z.string().optional(),
}).superRefine((data, ctx) => {
  // Conditional validation: If WhatsApp or Phone is selected, phone number is required
  if (data.preferredContact === "WhatsApp" || data.preferredContact === "Phone") {
    if (!data.phone || data.phone.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Phone number is required when ${data.preferredContact} is selected.`,
        path: ["phone"],
      });
    }
  }
});

export type Lead = z.infer<typeof LeadSchema>;

// Shared Configs (for UI and Validation consistency)
export const BUDGET_OPTIONS = [
  "Under $2.5k",
  "$2.5k - $5k",
  "$5k - $10k",
  "$10k - $25k",
  "$25k+",
  "Not sure / To be discussed"
];

export const TIMELINE_OPTIONS = [
  "ASAP",
  "1-3 months",
  "3-6 months",
  "Flexible"
];

export const SERVICE_OPTIONS = [
  "Web & Software Engineering",
  "AI & Intelligent Automation",
  "Data & Business Intelligence",
  "Mobile Apps",
  "Growth & Digital Marketing",
  "Branding & Creative",
  "Video & Motion",
  "Other / Not Sure"
];
