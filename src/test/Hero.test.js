import react from "react";
import { render, screen } from "@testing-library/react";

import Hero from "../landing_page/home/Hero";


describe("Hero Component", () => {
  test("renders Hero component with correct text", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
  
  });
});
