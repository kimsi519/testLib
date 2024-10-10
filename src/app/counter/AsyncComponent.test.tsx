import { render, screen, waitFor } from "@testing-library/react";
import AsyncComponent from "./AsyncComponent";
import React from "react";
describe("AsyncComponent", () => {
  test("AsyncComponent test", async () => {
    render(<AsyncComponent />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByText(/Data loaded/i)).toBeInTheDocument()
    );
  });
});
