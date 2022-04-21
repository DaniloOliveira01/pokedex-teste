import { InputCustom, SearchInput } from "./styles";
import { FaSearch } from 'react-icons/fa'

const SearchPoke = () => {
  return (
    <SearchInput>
      <InputCustom placeholder="Search by name or number"/>
      <FaSearch />
    </SearchInput>
  );
};

export default SearchPoke;