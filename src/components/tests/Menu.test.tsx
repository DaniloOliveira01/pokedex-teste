import { render, screen } from "@testing-library/react";
import { Menu } from "../Menu";

jest.mock("@apollo/client", () => ({
    ...jest.requireActual("@apollo/client"),
    useApolloClient: () => null,
    useQuery() {
        return {
            data: {
                pokemons: {
                    results: [
                        {
                            id: 1,
                            name: "Bulbasaur",
                        },
                    ],
                },
            },
        };
    },
}));

describe("#Menu", () => {
    it("Should be able to render description", () => {
        render(<Menu />);
        const description = screen.getByText(
            "Everything you wanted to know about your favorite pocket monsters!"
        );
        expect(description).toBeInTheDocument();
    });

    it("Should be able to render a list of pokemons", () => {
        render(<Menu />);
        const pokemon = screen.getByText(/bulbasaur/i);
        expect(pokemon).toBeInTheDocument();
    });
});