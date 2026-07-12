import { render, type RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ReactElement, ReactNode } from "react";

/**
 * Shared RTL utilities — wrap providers here as the app grows.
 */
function AllProviders({ children }: { children: ReactNode }) {
  return children;
}

export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) {
  return {
    user: userEvent.setup(),
    ...render(ui, {
      wrapper: AllProviders,
      ...options,
    }),
  };
}

export * from "@testing-library/react";
export { userEvent };
