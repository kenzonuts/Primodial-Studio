import { describe, expect, it } from "vitest";

import { FAQ_ITEMS } from "@/features/home/sections/faq/constants";
import { HOME_PROJECTS } from "@/features/home/sections/featured-work/constants";
import { HOME_SERVICES } from "@/features/home/sections/services/constants";
import { FINAL_CTA_COPY } from "@/features/home/sections/cta/constants";
import { PRIMARY_NAVIGATION } from "@/constants/navigation";
import { ROUTES } from "@/constants/routes";

describe("navigation", () => {
  it("exposes primary nav items with hrefs", () => {
    expect(PRIMARY_NAVIGATION.items.length).toBeGreaterThan(0);
    for (const item of PRIMARY_NAVIGATION.items) {
      expect(item.href).toBeTruthy();
      expect(item.label).toBeTruthy();
    }
  });

  it("has a start-project CTA", () => {
    expect(PRIMARY_NAVIGATION.cta.href).toBe(ROUTES.contact);
  });
});

describe("homepage content contracts", () => {
  it("has FAQ items with question and answer", () => {
    expect(FAQ_ITEMS.length).toBeGreaterThan(0);
    for (const item of FAQ_ITEMS) {
      expect(item.question.length).toBeGreaterThan(0);
      expect(item.answer.length).toBeGreaterThan(0);
    }
  });

  it("has portfolio projects with slugs", () => {
    expect(HOME_PROJECTS.length).toBeGreaterThan(0);
    for (const project of HOME_PROJECTS) {
      expect(project.slug).toBeTruthy();
      expect(project.title).toBeTruthy();
    }
  });

  it("has services with icons and features", () => {
    expect(HOME_SERVICES.length).toBeGreaterThan(0);
    for (const service of HOME_SERVICES) {
      expect(service.slug).toBeTruthy();
      expect(service.features.length).toBeGreaterThan(0);
      expect(service.icon).toBeTruthy();
    }
  });

  it("has final CTA copy and anchors", () => {
    expect(FINAL_CTA_COPY.primary.href).toContain("#");
    expect(FINAL_CTA_COPY.secondary.label.length).toBeGreaterThan(0);
  });
});
