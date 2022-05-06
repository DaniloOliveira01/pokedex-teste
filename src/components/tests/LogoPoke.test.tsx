import { render, screen } from "@testing-library/react";
import { LogoPoke } from "../LogoPoke";

describe("#LogoPoke", () => {
    it("Should be able to render logo poke", () => {
        render(<LogoPoke />);

        expect(screen.getByTestId("logo")).toBeInTheDocument();
    });
});