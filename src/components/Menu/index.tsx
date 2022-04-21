import { useQuery } from "@apollo/client";
import Link from "next/link";

import {SearchPoke, LogoPoke} from '@/components/config-imports'

//import {GET_POKEMONS, gqlVariables} from 'querys/pokemons'
import { GET_POKEMONS, gqlVariables } from "@/querys/pokemons";

import { Container, Description, HrStyle, PokeItem, PokeList, SearchWrapper } from "./styles";

const Menu = () => {
  const { data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables
  });

  return (
    <Container>
      <LogoPoke />
      <Description>
        Everything you wanted to know about your 
        favorite pocket monsters! 
      </Description>
      <SearchWrapper>
        <SearchPoke />
      </SearchWrapper>

      <HrStyle />
      
      <PokeList>
        {data?.pokemons.results.map((poke: any) => {
          const linkText = `#${String(poke.id).padStart(3,'0')} - ${poke.name}`
          return (
          <PokeItem 
          key={poke.id}
          >
            <Link 
            href={`/dashboard/${poke.name}`}
            >
              {linkText}
            </Link>
          </PokeItem>
          )
        })}
      </PokeList>
    </Container>
  );
};

export default Menu;