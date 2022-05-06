import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

describe("#Header", () => {
    it("Should be able to render Header", () => {
        render(<Header />);

        expect(screen.getByTestId("header")).toBeInTheDocument();
    })
})