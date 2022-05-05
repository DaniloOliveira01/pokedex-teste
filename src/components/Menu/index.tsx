import {
  SearchPoke, 
  LogoPoke
} from '@/components/config-imports'

import * as S from "./styles";
import { useState } from "react";
import { PokeList } from "@/components/PokeList";

export const Menu = () => {
  const [search, setSearch] = useState('');

  return (
    <S.Container>
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
      />
    </S.Container>
  );
};