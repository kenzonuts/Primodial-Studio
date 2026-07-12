import * as React from "react";

import { cn } from "@/lib/utils";

const textVariants = {
  "display-xl": "text-display-xl",
  "display-lg": "text-display-lg",
  "display-md": "text-display-md",
  "heading-xl": "text-heading-xl",
  "heading-lg": "text-heading-lg",
  "heading-md": "text-heading-md",
  "heading-sm": "text-heading-sm",
  "body-lg": "text-body-lg",
  "body-md": "text-body-md",
  "body-sm": "text-body-sm",
  caption: "text-caption",
  label: "text-label",
  button: "text-button",
  code: "text-code",
} as const;

type TextVariant = keyof typeof textVariants;

type TextProps<T extends React.ElementType = "p"> = {
  as?: T;
  variant?: TextVariant;
  muted?: boolean;
  balance?: boolean;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

function Text<T extends React.ElementType = "p">({
  as,
  variant = "body-md",
  muted = false,
  balance = false,
  className,
  children,
  ...props
}: TextProps<T>) {
  const Component = as ?? "p";

  return (
    <Component
      className={cn(
        textVariants[variant],
        muted && "text-text-secondary",
        balance && "text-balance",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export { Text, type TextProps, type TextVariant };
