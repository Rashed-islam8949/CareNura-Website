import { UseFormReturn } from "react-hook-form";
import { Lead, SERVICE_OPTIONS } from "@/lib/schemas/lead";
import { Check } from "lucide-react";

export function WizardStepIntent({ form }: { form: UseFormReturn<Lead> }) {
  const { watch, setValue, formState: { errors } } = form;
  const selectedServices = watch("services") || [];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setValue("services", selectedServices.filter(s => s !== service), { shouldValidate: true });
    } else {
      setValue("services", [...selectedServices, service], { shouldValidate: true });
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="font-heading text-3xl font-bold mb-3">What do you want to build?</h2>
        <p className="text-muted-foreground text-lg">Select all the capabilities you require for this project.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {SERVICE_OPTIONS.map((service) => {
          const isSelected = selectedServices.includes(service);
          return (
            <button
              key={service}
              type="button"
              onClick={() => toggleService(service)}
              className={`flex items-start text-left p-4 rounded-xl border transition-all duration-200 ${
                isSelected 
                  ? "border-primary bg-primary/10 shadow-[0_0_15px_rgba(99,102,241,0.15)]" 
                  : "border-border/50 bg-card/20 hover:border-primary/50 hover:bg-card/40"
              }`}
            >
              <div className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center shrink-0 mr-3 border ${
                isSelected ? "bg-primary border-primary text-primary-foreground" : "border-muted-foreground/40"
              }`}>
                {isSelected && <Check className="w-3.5 h-3.5" />}
              </div>
              <span className={`font-medium ${isSelected ? "text-foreground" : "text-muted-foreground"}`}>
                {service}
              </span>
            </button>
          );
        })}
      </div>

      {errors.services && (
        <p role="alert" className="text-destructive text-sm font-medium mt-2">
          {errors.services.message}
        </p>
      )}
    </div>
  );
}
