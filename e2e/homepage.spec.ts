import { expect, test, type Page } from "@playwright/test";

/**
 * Dismiss cookie banner when present so overlays don't block interactions.
 */
export async function dismissCookieBanner(page: Page) {
  const reject = page.getByRole("button", { name: /reject optional/i });
  if (await reject.isVisible().catch(() => false)) {
    await reject.click();
  }
}

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await dismissCookieBanner(page);
});

test.describe("homepage smoke", () => {
  test("loads hero and primary landmarks", async ({ page }) => {
    await expect(page.locator("#main-content")).toBeVisible();
    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
  });

  test("navigates to contact section via CTA", async ({ page }) => {
    const cta = page.getByRole("link", { name: /start your project/i }).first();
    await expect(cta).toBeVisible();
    await cta.click();
    await expect(page.locator("#contact")).toBeVisible();
  });

  test("renders FAQ accordion content", async ({ page }) => {
    await page.goto("/#faq");
    await dismissCookieBanner(page);
    await expect(page.locator("#faq")).toBeVisible();
    await expect(
      page.getByText(/what services does primordial studio provide/i).first(),
    ).toBeVisible();
  });

  test("portfolio section is present", async ({ page }) => {
    await expect(page.locator("#portfolio")).toBeVisible();
  });

  test("services section is present", async ({ page }) => {
    await expect(page.locator("#services")).toBeVisible();
  });
});

test.describe("forms", () => {
  test("contact form validates empty submit", async ({ page }) => {
    await page.goto("/#contact");
    await dismissCookieBanner(page);
    const form = page.locator("#contact form").first();
    await expect(form).toBeVisible();
    await form.getByRole("button", { name: /send/i }).click();
    await expect(page.getByRole("alert").first()).toBeVisible({
      timeout: 5000,
    });
  });
});

test.describe("accessibility basics", () => {
  test("has skip link and main landmark", async ({ page }) => {
    await expect(
      page.getByRole("link", { name: /skip to main content/i }),
    ).toHaveCount(1);
    await expect(page.locator("main#main-content")).toBeVisible();
  });

  test("supports keyboard focus", async ({ page }) => {
    await page.keyboard.press("Tab");
    await expect(page.locator(":focus")).toHaveCount(1);
  });
});

test.describe("responsive", () => {
  test("mobile viewport keeps main content usable", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await dismissCookieBanner(page);
    await expect(page.locator("#main-content")).toBeVisible();
  });
});

test.describe("errors", () => {
  test("unknown route shows 404", async ({ page }) => {
    const response = await page.goto("/this-route-does-not-exist-xyz");
    expect(response?.status()).toBe(404);
    await expect(page.getByText(/page not found/i)).toBeVisible();
  });
});
