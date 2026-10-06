import { UseFormReturn } from "react-hook-form";
import { Lead } from "@/lib/schemas/lead";

export function WizardStepContact({ form }: { form: UseFormReturn<Lead> }) {
  const { register, watch, formState: { errors } } = form;
  const preferredContact = watch("preferredContact");

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="font-heading text-3xl font-bold mb-3">Contact Information</h2>
        <p className="text-muted-foreground text-lg">How should we reach you with the proposal?</p>
      </div>

      <div className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
              Full Name <span className="text-primary">*</span>
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              placeholder="John Doe"
              className="w-full p-4 rounded-xl border border-border/50 bg-card/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            {errors.name && <p role="alert" className="text-destructive text-sm mt-2">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2 text-foreground">
              Company Name
            </label>
            <input
              id="company"
              type="text"
              {...register("company")}
              placeholder="Acme Corp"
              className="w-full p-4 rounded-xl border border-border/50 bg-card/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            {errors.company && <p role="alert" className="text-destructive text-sm mt-2">{errors.company.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-4 text-foreground">
            Preferred Contact Method <span className="text-primary">*</span>
          </label>
          <div className="flex gap-4">
            {["Email", "WhatsApp", "Phone"].map((method) => (
              <label key={method} className="flex-1 cursor-pointer relative">
                <input
                  type="radio"
                  value={method}
                  {...register("preferredContact")}
                  className="peer sr-only"
                />
                <div className="text-center p-3 rounded-lg border border-border/50 bg-card/20 text-muted-foreground peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-foreground transition-all">
                  {method}
                </div>
              </label>
            ))}
          </div>
          {errors.preferredContact && <p role="alert" className="text-destructive text-sm mt-2">{errors.preferredContact.message}</p>}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
              Email Address <span className="text-primary">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="john@example.com"
              className="w-full p-4 rounded-xl border border-border/50 bg-card/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            {errors.email && <p role="alert" className="text-destructive text-sm mt-2">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
              Phone / WhatsApp {(preferredContact === "WhatsApp" || preferredContact === "Phone") && <span className="text-primary">*</span>}
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="+1 (555) 000-0000"
              className="w-full p-4 rounded-xl border border-border/50 bg-card/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            {errors.phone && <p role="alert" className="text-destructive text-sm mt-2">{errors.phone.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium mb-2 text-foreground">
            Country
          </label>
          <input
            id="country"
            type="text"
            {...register("country")}
            placeholder="e.g. United States, UK, Australia"
            className="w-full p-4 rounded-xl border border-border/50 bg-card/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
          {errors.country && <p role="alert" className="text-destructive text-sm mt-2">{errors.country.message}</p>}
        </div>

      </div>
    </div>
  );
}
