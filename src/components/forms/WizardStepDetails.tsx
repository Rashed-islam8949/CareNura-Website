import { UseFormReturn } from "react-hook-form";
import { Lead, BUDGET_OPTIONS, TIMELINE_OPTIONS } from "@/lib/schemas/lead";

export function WizardStepDetails({ form }: { form: UseFormReturn<Lead> }) {
  const { register, formState: { errors } } = form;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="font-heading text-3xl font-bold mb-3">Project Details</h2>
        <p className="text-muted-foreground text-lg">Give us the technical and business context of your project.</p>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2 text-foreground">
            Brief Description <span className="text-primary">*</span>
          </label>
          <textarea
            id="description"
            {...register("description")}
            placeholder="What are we building? Who is it for?"
            className="w-full min-h-[120px] p-4 rounded-xl border border-border/50 bg-card/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-y"
          />
          {errors.description && <p role="alert" className="text-destructive text-sm mt-2">{errors.description.message}</p>}
        </div>

        <div>
          <label htmlFor="objective" className="block text-sm font-medium mb-2 text-foreground">
            Main Objective / Problem to Solve
          </label>
          <input
            id="objective"
            type="text"
            {...register("objective")}
            placeholder="e.g. Reduce customer churn, Automate manual data entry..."
            className="w-full p-4 rounded-xl border border-border/50 bg-card/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
          {errors.objective && <p role="alert" className="text-destructive text-sm mt-2">{errors.objective.message}</p>}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="budget" className="block text-sm font-medium mb-2 text-foreground">
              Budget Range <span className="text-primary">*</span>
            </label>
            <select
              id="budget"
              {...register("budget")}
              className="w-full p-4 rounded-xl border border-border/50 bg-card/20 text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            >
              <option value="">Select a budget...</option>
              {BUDGET_OPTIONS.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {errors.budget && <p role="alert" className="text-destructive text-sm mt-2">{errors.budget.message}</p>}
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium mb-2 text-foreground">
              Timeline <span className="text-primary">*</span>
            </label>
            <select
              id="timeline"
              {...register("timeline")}
              className="w-full p-4 rounded-xl border border-border/50 bg-card/20 text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            >
              <option value="">Select a timeline...</option>
              {TIMELINE_OPTIONS.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {errors.timeline && <p role="alert" className="text-destructive text-sm mt-2">{errors.timeline.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="referenceUrl" className="block text-sm font-medium mb-2 text-foreground">
            Existing Website or App URL
          </label>
          <input
            id="referenceUrl"
            type="url"
            {...register("referenceUrl")}
            placeholder="https://..."
            className="w-full p-4 rounded-xl border border-border/50 bg-card/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
          {errors.referenceUrl && <p role="alert" className="text-destructive text-sm mt-2">{errors.referenceUrl.message}</p>}
        </div>
      </div>
    </div>
  );
}
