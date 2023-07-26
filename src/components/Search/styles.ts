import styled from 'styled-components';



export const SearchContainer = styled.div`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  width: 864px; 
  gap: 0.75rem; 
  padding-top: 1.125rem; 


  @media (max-width: 768px) {
    width: 100%; 
    padding: 0.75rem 1rem; 
  }
`;


export const SearchHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  .header-text {
    font-size: 1.125rem; 
    color: ${(props) => props.theme['base-subtitle']};
  }

  .count-text {
    font-size: 0.875rem; 
    color: ${(props) => props.theme['base-span']};
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 0.375rem; 
  border: 1px solid ${(props) => props.theme['base-border']};
  background-color: ${(props) => props.theme['base-input']};
  padding: 0.75rem 1rem; 
  color: ${(props) => props.theme['base-text']};
  outline: none;
  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
  &:focus {
    border-color: ${(props) => props.theme['blue']};
  }

  
  @media (max-width: 768px) {
    font-size: 0.875rem; 
  } 

`;