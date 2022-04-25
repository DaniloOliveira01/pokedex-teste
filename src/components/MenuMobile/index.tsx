import { SearchPoke } from "@/components/SearchPoke";
import { LogoPoke } from "@/components/LogoPoke";
import * as S from "./styles";

import { useQuery } from "@apollo/client";
import { 
  GET_POKEMONS, 
  gqlVariables 
} from "@/querys/pokemons";

import { IoClose } from 'react-icons/io5'
import { SwitchTheme } from "../Switch";
import { useAppTheme } from "@/contexts/theme";

import { MenuMobileProps } from "@/types/menu-mobile-props";

export const MenuMobile = ({ 
  isOpen, 
  setIsOpen 
}: MenuMobileProps) => {
  const { themeState, toogleTheme } = useAppTheme();

  const { data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables
  });

  return (
    <S.Container Active={isOpen}>
      <SwitchTheme 
        themeState={themeState}
        onToggleTheme={toogleTheme}
      />

      <IoClose 
        size={43} 
        color="#fff"
        onClick={() => setIsOpen(false)}
      />

      <S.Content>
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
              <a 
                onClick={() => setIsOpen(false)}
                href={`/dashboard/${poke.name}`}
              >
                {linkText}
              </a>
            </S.PokeItem>
            )
          })}
        </S.PokeList>
      </S.Content>
    </S.Container>
  );
}