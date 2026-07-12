"use client";

import { useId } from "react";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type FloatingSelectProps = {
  label: string;
  name: string;
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  options: readonly { value: string; label: string }[];
  className?: string;
};

function FloatingSelect({
  label,
  name,
  value,
  onValueChange,
  placeholder = "Select an option",
  error,
  options,
  className,
}: FloatingSelectProps) {
  const id = useId();
  const errorId = `${name}-${id}-error`;

  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={`${name}-${id}`} className="text-caption text-text-muted">
        {label}
      </Label>
      <Select value={value || undefined} onValueChange={onValueChange}>
        <SelectTrigger
          id={`${name}-${id}`}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "h-12 w-full rounded-xl border-border/80 bg-surface/60 px-4 dark:bg-surface/60 dark:hover:bg-surface-elevated/80",
            error && "border-danger aria-invalid:ring-danger/20",
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="border-border bg-popover">
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <input type="hidden" name={name} value={value} />
      {error ? (
        <p id={errorId} className="text-[0.75rem] text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export { FloatingSelect };
