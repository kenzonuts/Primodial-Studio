"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  BUDGET_OPTIONS,
  CONTACT_FORM_DEFAULTS,
  CONTACT_INTEGRATIONS,
  CONTACT_PRIVACY_NOTE,
  DESCRIPTION_MAX_LENGTH,
  PROJECT_TYPE_OPTIONS,
  type ContactFormValues,
} from "@/features/home/sections/contact/constants";
import { FloatingField } from "@/features/home/sections/contact/floating-field";
import { FloatingSelect } from "@/features/home/sections/contact/floating-select";
import { cn } from "@/lib/utils";
import Link from "next/link";

type FormErrors = Partial<Record<keyof ContactFormValues, string>>;

function validate(values: ContactFormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";
  if (!values.company.trim()) errors.company = "Please enter your company.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.projectType) errors.projectType = "Select a project type.";
  if (!values.budget) errors.budget = "Select a budget range.";
  if (!values.description.trim()) {
    errors.description = "Tell us a bit about the project.";
  } else if (values.description.trim().length < 20) {
    errors.description = "Please add a little more detail (20+ characters).";
  }

  return errors;
}

type ContactFormProps = {
  className?: string;
};

/**
 * Premium contact form — client validation + future API/CRM ready.
 */
function ContactForm({ className }: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>(
    CONTACT_FORM_DEFAULTS,
  );
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formError, setFormError] = useState<string | null>(null);

  const update = <K extends keyof ContactFormValues>(
    key: K,
    value: ContactFormValues[K],
  ) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("loading");
    setFormError(null);

    try {
      const response = await fetch(CONTACT_INTEGRATIONS.apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent(CONTACT_INTEGRATIONS.analyticsEvent, {
            detail: {
              projectType: values.projectType,
              budget: values.budget,
            },
          }),
        );
      }

      setStatus("success");
      setValues(CONTACT_FORM_DEFAULTS);
    } catch {
      setStatus("error");
      setFormError(
        "Something went wrong. Please try again or email us directly.",
      );
    }
  };

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex flex-col items-start gap-4 rounded-2xl border border-success/25 bg-success/5 p-8",
          className,
        )}
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="size-8 text-success" aria-hidden />
        <div className="space-y-2">
          <h3 className="text-heading-sm text-foreground">Message received</h3>
          <p className="text-body-sm leading-relaxed text-text-secondary">
            Thank you. We will review your project details and respond within
            one to two business days.
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("space-y-4", className)}
      noValidate
      data-api={CONTACT_INTEGRATIONS.apiEndpoint}
      data-crm-ready={CONTACT_INTEGRATIONS.crmReady || undefined}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <FloatingField
          label="Full name"
          name="fullName"
          autoComplete="name"
          value={values.fullName}
          onChange={(event) => update("fullName", event.target.value)}
          error={errors.fullName}
          required
        />
        <FloatingField
          label="Company"
          name="company"
          autoComplete="organization"
          value={values.company}
          onChange={(event) => update("company", event.target.value)}
          error={errors.company}
          required
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <FloatingField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
          error={errors.email}
          required
        />
        <FloatingField
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          optional
          value={values.phone}
          onChange={(event) => update("phone", event.target.value)}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <FloatingSelect
          label="Project type"
          name="projectType"
          value={values.projectType}
          onValueChange={(value) => update("projectType", value)}
          options={PROJECT_TYPE_OPTIONS}
          error={errors.projectType}
        />
        <FloatingSelect
          label="Budget range"
          name="budget"
          value={values.budget}
          onValueChange={(value) => update("budget", value)}
          options={BUDGET_OPTIONS}
          error={errors.budget}
        />
      </div>

      <div className="space-y-2">
        <FloatingField
          as="textarea"
          label="Project description"
          name="description"
          value={values.description}
          maxLength={DESCRIPTION_MAX_LENGTH}
          onChange={(event) => update("description", event.target.value)}
          error={errors.description}
          required
        />
        <p className="text-right text-[0.6875rem] text-text-muted tabular-nums">
          {values.description.length}/{DESCRIPTION_MAX_LENGTH}
        </p>
      </div>

      {formError ? (
        <p className="text-[0.8125rem] text-danger" role="alert">
          {formError}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.75rem] text-text-muted">
          By submitting, you agree to our{" "}
          <Link
            href={CONTACT_PRIVACY_NOTE.href}
            className="text-text-secondary underline-offset-2 hover:text-foreground hover:underline"
          >
            {CONTACT_PRIVACY_NOTE.label}
          </Link>
          .
        </p>
        <Button
          type="submit"
          size="lg"
          isLoading={status === "loading"}
          className="group min-w-[10.5rem]"
        >
          {status === "loading" ? (
            "Sending"
          ) : (
            <>
              Send message
              <Send
                className="size-4 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5"
                aria-hidden
              />
            </>
          )}
        </Button>
      </div>

      {/* Reserved for Calendly / CRM widgets */}
      <div
        data-calendly={CONTACT_INTEGRATIONS.calendlyUrl ?? undefined}
        hidden
        aria-hidden
      />
    </form>
  );
}

export { ContactForm };
