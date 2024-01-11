import { render, screen, fireEvent } from "@testing-library/react";
import Signup from "./Signup"; // Adjust the import path as needed
import { BrowserRouter } from "react-router-dom";

describe("Signup Component", () => {
  test("renders Signup component", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
    // Add assertions here
  });

  // More tests...
});
