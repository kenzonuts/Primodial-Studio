import { describe, expect, it, vi } from "vitest";

import { logger } from "@/lib/logger";

describe("logger", () => {
  it("exposes structured methods", () => {
    expect(typeof logger.info).toBe("function");
    expect(typeof logger.error).toBe("function");
    expect(typeof logger.performance).toBe("function");
  });

  it("does not throw when logging in test env", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => undefined);
    expect(() => logger.error("test-error", { code: 1 })).not.toThrow();
    spy.mockRestore();
  });
});
