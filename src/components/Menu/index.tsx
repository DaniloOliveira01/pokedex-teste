import { useQuery } from "@apollo/client";
import Link from "next/link";
import { 
  GET_POKEMONS, 
  gqlVariables 
} from "@/querys/pokemons";

import {
  SearchPoke, 
  LogoPoke
} from '@/components/config-imports'


import * as S from "./styles";

const Menu = () => {
  const { data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables
  });

  return (
    <S.Container>
      <LogoPoke />
      <S.Description>
        Everything you wanted to know about your 
        favorite pocket monsters! 
      </S.Description>
      <S.SearchWrapper>
        <SearchPoke />
      </S.SearchWrapper>

      <S.HrStyle />
      
      <S.PokeList>
        {data?.pokemons.results.map((poke: any) => {
          const linkText = `#${String(poke.id).padStart(3,'0')} - ${poke.name}`
          return (
          <S.PokeItem 
          key={poke.id}
          >
            <Link 
              href={`/dashboard/${poke.name}`}
            >
              {linkText}
            </Link>
          </S.PokeItem>
          )
        })}
      </S.PokeList>
    </S.Container>
  );
};

export default Menu;