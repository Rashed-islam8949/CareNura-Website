"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LeadSchema, Lead } from "@/lib/schemas/lead";
import { WizardStepIntent } from "./WizardStepIntent";
import { WizardStepDetails } from "./WizardStepDetails";
import { WizardStepContact } from "./WizardStepContact";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";

const STEPS = ["Intent", "Details", "Contact"];

export function ProjectWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const form = useForm<Lead>({
    resolver: zodResolver(LeadSchema),
    mode: "onTouched",
    defaultValues: {
      services: [],
      description: "",
      objective: "",
      budget: "",
      timeline: "",
      referenceUrl: "",
      name: "",
      email: "",
      company: "",
      country: "",
      preferredContact: "Email",
      phone: "",
      bot_field: "",
    }
  });

  const processNextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (currentStep === 0) fieldsToValidate = ["services"];
    if (currentStep === 1) fieldsToValidate = ["description", "objective", "budget", "timeline", "referenceUrl"];
    
    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep(s => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const processPrevStep = () => {
    setCurrentStep(s => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = async (data: Lead) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setErrorMsg("");
    
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setErrorMsg("We encountered an issue submitting your brief. Please try again or email us directly at hello@carenura.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto text-center py-24 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>
        <h2 className="font-heading text-4xl font-bold mb-4">Thanks, {form.getValues("name")}.</h2>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Your project brief has been received. Our team will review your requirements and get back to you shortly.
        </p>
        <Button variant="outline" onClick={() => window.location.href = "/"}>
          Return to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-12">
        <div className="flex justify-between relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border/40 -z-10 -translate-y-1/2" />
          {STEPS.map((step, idx) => (
            <div key={step} className="flex flex-col items-center gap-3 bg-background px-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
                idx <= currentStep 
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(99,102,241,0.3)]" 
                  : "bg-card border border-border/50 text-muted-foreground"
              }`}>
                {idx + 1}
              </div>
              <span className={`text-xs font-semibold uppercase tracking-wider ${idx <= currentStep ? "text-foreground" : "text-muted-foreground"}`}>
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>

      {errorMsg && (
        <div role="alert" className="mb-8 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-center">
          {errorMsg}
        </div>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        
        {/* Honeypot */}
        <div className="hidden" aria-hidden="true">
          <input type="text" {...form.register("bot_field")} tabIndex={-1} autoComplete="off" />
        </div>

        <div className="min-h-[400px]">
          {currentStep === 0 && <WizardStepIntent form={form} />}
          {currentStep === 1 && <WizardStepDetails form={form} />}
          {currentStep === 2 && <WizardStepContact form={form} />}
        </div>

        <div className="flex justify-between pt-8 border-t border-border/40">
          {currentStep > 0 ? (
            <Button type="button" variant="ghost" onClick={processPrevStep} disabled={isSubmitting}>
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>
          ) : <div />}

          {currentStep < STEPS.length - 1 ? (
            <Button type="button" onClick={processNextStep} className="shadow-[0_0_20px_rgba(99,102,241,0.2)]">
              Continue <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <div className="text-right">
              <Button type="submit" disabled={isSubmitting} className="shadow-[0_0_20px_rgba(99,102,241,0.2)] h-12 px-8">
                {isSubmitting ? (
                  <>Transmitting... <Loader2 className="w-4 h-4 ml-2 animate-spin" /></>
                ) : (
                  <>Submit Brief <ArrowRight className="w-4 h-4 ml-2" /></>
                )}
              </Button>
              <p className="text-xs text-muted-foreground mt-4 max-w-xs ml-auto">
                By submitting this form, you agree to be contacted about your project inquiry. See our <a href="/privacy" className="underline hover:text-foreground">Privacy Policy</a>.
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
