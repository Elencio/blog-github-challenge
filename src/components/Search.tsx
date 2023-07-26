import { useState } from 'react';
import styled from 'styled-components';


interface SearchProps {
  postsCount: number;
  getSearchString: (str: string) => void;
}


const SearchContainer = styled.div`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  width: 864px; 
  gap: 0.75rem; 
  padding-top: 1.125rem; 
`;

// Styled component for the header with "Publicações" and posts count
const SearchHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  .header-text {
    font-size: 1.125rem; /* Adjust the font size as needed */
    color: ${(props) => props.theme['base-subtitle']};
  }

  .count-text {
    font-size: 0.875rem; /* Adjust the font size as needed */
    color: ${(props) => props.theme['base-span']};
  }
`;

// Styled component for the search input
const SearchInput = styled.input`
  width: 100%;
  border-radius: 0.375rem; /* Adjust the border radius as needed */
  border: 1px solid ${(props) => props.theme['base-border']};
  background-color: ${(props) => props.theme['base-input']};
  padding: 0.75rem 1rem; /* Adjust the padding as needed */
  color: ${(props) => props.theme['base-text']};
  outline: none;
  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
  &:focus {
    border-color: ${(props) => props.theme['blue']};
  }
`;

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
