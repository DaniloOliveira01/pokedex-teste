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
import { IMenuMobileProps } from "@/@types/type-components";
import { PokeList } from "@/components/PokeList";
import { useState } from "react";

export const MenuMobile = ({ 
  isOpen, 
  setIsOpen 
}: IMenuMobileProps) => {
  const [search, setSearch] = useState('');
  const { themeState, toogleTheme } = useAppTheme();

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
          <SearchPoke 
            search={search}
            setSearch={setSearch}
          />
        </S.SearchWrapper>

        <S.HrStyle />

        <PokeList 
          search={search}
          setIsOpen={setIsOpen}
        />
      </S.Content>
    </S.Container>
  );
}