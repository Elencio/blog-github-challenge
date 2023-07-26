import { useState } from 'react';
import { SearchContainer, SearchHeader, SearchInput} from "./styles"



interface SearchProps {
  postsCount: number;
  getSearchString: (str: string) => void;
}


export function Search({ postsCount, getSearchString }: SearchProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    getSearchString(value);
  };

  return (
    <SearchContainer>
      <SearchHeader>
        <span className="header-text">Publicações</span>
        <span className="count-text">{postsCount} publicações</span>
      </SearchHeader>
      <SearchInput
        type="text"
        placeholder="Buscar conteúdo"
        value={searchValue}
        onChange={handleSearchChange}
      />
    </SearchContainer>
  );
}
