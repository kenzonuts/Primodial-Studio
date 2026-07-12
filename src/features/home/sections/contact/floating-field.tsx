"use client";

import { useId, useState, type ComponentProps } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type FloatingInputProps = {
  as?: "input";
  label: string;
  name: string;
  error?: string;
  optional?: boolean;
  className?: string;
} & ComponentProps<"input">;

type FloatingTextareaProps = {
  as: "textarea";
  label: string;
  name: string;
  error?: string;
  optional?: boolean;
  className?: string;
} & ComponentProps<"textarea">;

type FloatingFieldProps = FloatingInputProps | FloatingTextareaProps;

function FloatingField(props: FloatingFieldProps) {
  const {
    label,
    name,
    error,
    optional,
    className,
    as = "input",
    ...rest
  } = props;
  const id = useId();
  const fieldId = `${name}-${id}`;
  const errorId = `${fieldId}-error`;
  const [focused, setFocused] = useState(false);

  const value =
    "value" in rest && typeof rest.value === "string" ? rest.value : "";
  const floated = focused || value.length > 0;

  const sharedClass = cn(
    "peer h-14 w-full rounded-xl border bg-surface/60 px-4 pt-5 pb-2 text-sm text-foreground shadow-none transition-[border-color,box-shadow,background-color] duration-[var(--duration-fast)]",
    error
      ? "border-danger focus-visible:ring-danger/20"
      : "border-border/80 focus-visible:border-ring focus-visible:ring-ring/40",
    "focus-visible:ring-[3px]",
  );

  return (
    <div className={cn("relative", className)}>
      <label
        htmlFor={fieldId}
        className={cn(
          "pointer-events-none absolute left-4 z-10 origin-left text-text-muted transition-all duration-[var(--duration-fast)] ease-[var(--ease-out)]",
          floated
            ? "top-2 translate-y-0 text-[0.625rem] tracking-[0.08em] uppercase"
            : as === "textarea"
              ? "top-4 translate-y-0 text-sm"
              : "top-1/2 -translate-y-1/2 text-sm",
        )}
      >
        {label}
        {optional ? (
          <span className="ml-1 tracking-normal text-text-muted/70 normal-case">
            (optional)
          </span>
        ) : null}
      </label>

      {as === "textarea" ? (
        <Textarea
          id={fieldId}
          name={name}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            sharedClass,
            "field-sizing-fixed min-h-[8.5rem] resize-y bg-surface/60 dark:bg-surface/60",
          )}
          onFocus={(event) => {
            setFocused(true);
            (rest as ComponentProps<"textarea">).onFocus?.(event);
          }}
          onBlur={(event) => {
            setFocused(false);
            (rest as ComponentProps<"textarea">).onBlur?.(event);
          }}
          {...(rest as ComponentProps<"textarea">)}
        />
      ) : (
        <Input
          id={fieldId}
          name={name}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={error ? errorId : undefined}
          className={sharedClass}
          onFocus={(event) => {
            setFocused(true);
            (rest as ComponentProps<"input">).onFocus?.(event);
          }}
          onBlur={(event) => {
            setFocused(false);
            (rest as ComponentProps<"input">).onBlur?.(event);
          }}
          {...(rest as ComponentProps<"input">)}
        />
      )}

      {error ? (
        <p
          id={errorId}
          className="mt-1.5 text-[0.75rem] text-danger"
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

export { FloatingField };
