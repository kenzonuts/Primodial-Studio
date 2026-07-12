import { describe, expect, it } from "vitest";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("px-2", "px-4")).toContain("px-4");
  });
});

describe("buttonVariants", () => {
  it("returns default variant classes", () => {
    const classes = buttonVariants({ variant: "default", size: "lg" });
    expect(classes).toContain("bg-primary");
    expect(classes).toContain("h-11");
  });

  it("supports outline variant", () => {
    expect(buttonVariants({ variant: "outline" })).toContain("border");
  });
});
