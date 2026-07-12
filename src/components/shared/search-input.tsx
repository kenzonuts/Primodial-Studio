"use client";

import * as React from "react";
import { Loader2, Search, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type SearchInputProps = Omit<
  React.ComponentProps<typeof Input>,
  "value" | "onChange" | "type"
> & {
  value: string;
  onValueChange: (value: string) => void;
  isLoading?: boolean;
  onSubmit?: (value: string) => void;
};

function SearchInput({
  value,
  onValueChange,
  placeholder = "Search",
  isLoading = false,
  onSubmit,
  className,
  disabled,
  ...props
}: SearchInputProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.(value);
  }

  return (
    <form className={cn("relative", className)} onSubmit={handleSubmit}>
      <Search
        className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-text-secondary"
        aria-hidden
      />
      <Input
        type="search"
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="pr-9 pl-9"
        {...props}
      />
      {isLoading ? (
        <Loader2
          className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 animate-spin text-text-secondary"
          aria-label="Searching"
          role="status"
        />
      ) : value ? (
        <button
          type="button"
          className="absolute top-1/2 right-2 inline-flex size-6 -translate-y-1/2 items-center justify-center rounded-sm text-text-secondary transition-colors hover:bg-surface-elevated hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
          onClick={() => onValueChange("")}
          aria-label="Clear search"
        >
          <X className="size-4" aria-hidden />
        </button>
      ) : null}
    </form>
  );
}

export { SearchInput, type SearchInputProps };
