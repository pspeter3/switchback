import { render } from "@testing-library/preact";
import { expect, test } from "vitest";
import { App } from "./app";

test("renders name", () => {
  const ctx = render(<App />);
  expect(ctx.getByText("Switchback")).toBeDefined();
});
