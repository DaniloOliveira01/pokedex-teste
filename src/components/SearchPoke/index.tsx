import * as S from "./styles";
import { FaSearch } from 'react-icons/fa'
import { ISearchProps } from "@/@types/type-components";

export const SearchPoke = ({ search, setSearch }: ISearchProps) => {
  return (
    <S.SearchInput>
      <S.InputCustom 
        placeholder="Search by name or number"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
      <FaSearch />
    </S.SearchInput>
  );
};
