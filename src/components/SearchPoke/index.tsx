import * as S from "./styles";
import { FaSearch } from 'react-icons/fa'

const SearchPoke = () => {
  return (
    <S.SearchInput>
      <S.InputCustom 
        placeholder="Search by name or number"
      />
      <FaSearch />
    </S.SearchInput>
  );
};

export default SearchPoke;