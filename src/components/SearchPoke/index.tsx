import * as S from "./styles";
import { FaSearch } from 'react-icons/fa'

export const SearchPoke = () => {
  return (
    <S.SearchInput>
      <S.InputCustom 
        placeholder="Search by name or number"
      />
      <FaSearch />
    </S.SearchInput>
  );
};
