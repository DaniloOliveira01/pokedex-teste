import { GET_POKEMONS, gqlVariables } from "@/querys/pokemons";
import { useQuery } from "@apollo/client";
import Link from "next/link";

import * as S from "./styles";

import { IPokeList, 
    IPokeListNameId 
} from "@/@types/type-components";

export function PokeList({ search, setIsOpen }: IPokeList) {
    const { data } = useQuery(GET_POKEMONS, {
        variables: gqlVariables,
    });

    function filterPokemons(data: IPokeListNameId) {
        if (search === "") return data;
        if (data.id.toString() === search) return data;
        if (data.name.toLowerCase().includes(search.toLowerCase())) return data;
    }

    return (
        <S.PokeList>
            {data?.pokemons.results
                .filter((data: IPokeListNameId) => filterPokemons(data))
                .map((poke: IPokeListNameId) => {
                    const linkText = `#${String(poke.id).padStart(3, "0")} - ${
                        poke.name
                    }`;
                    return (
                        <S.PokeItem key={poke.id}>
                            {setIsOpen ? (
                                <span onClick={() => setIsOpen(false)}>
                                    <Link href={`/dashboard/${poke.name}`}>
                                        {linkText}
                                    </Link>
                                </span>
                            ) : (
                                <Link href={`/dashboard/${poke.name}`}>
                                    {linkText}
                                </Link>
                            )}
                        </S.PokeItem>
                    );
                })}
        </S.PokeList>
    );
}