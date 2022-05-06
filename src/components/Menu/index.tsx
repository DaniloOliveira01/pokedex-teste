import { SearchPoke, } from "../SearchPoke";
import { LogoPoke } from "../LogoPoke";
import { PokeList } from "../PokeList";

import * as S from "./styles";
import { useState } from "react";


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