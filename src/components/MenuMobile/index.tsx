import { SearchPoke } from "../SearchPoke";
import { LogoPoke } from "../LogoPoke";
import { SwitchTheme } from "../Switch";
import { PokeList } from "../PokeList";

import * as S from "./styles";

import { IoClose } from 'react-icons/io5'
import { useState } from "react";

import { useAppTheme } from "@/contexts/theme";
import { IMenuMobileProps } from "@/@types/type-components";

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