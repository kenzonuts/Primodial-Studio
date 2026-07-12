import { describe, expect, it } from "vitest";

import { isValidEmail, sanitizeEmail, sanitizeText } from "@/utils/sanitize";

describe("sanitizeText", () => {
  it("trims and collapses whitespace", () => {
    expect(sanitizeText("  hello   world  ")).toBe("hello world");
  });

  it("strips control characters", () => {
    expect(sanitizeText("hi\u0000there")).toBe("hithere");
  });

  it("respects max length", () => {
    expect(sanitizeText("abcdef", 3)).toBe("abc");
  });
});

describe("sanitizeEmail", () => {
  it("lowercases emails", () => {
    expect(sanitizeEmail("Hello@Primordial.Studio")).toBe(
      "hello@primordial.studio",
    );
  });
});

describe("isValidEmail", () => {
  it("accepts valid emails", () => {
    expect(isValidEmail("hello@primordial.studio")).toBe(true);
  });

  it("rejects invalid emails", () => {
    expect(isValidEmail("not-an-email")).toBe(false);
    expect(isValidEmail("")).toBe(false);
  });
});
