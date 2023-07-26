import styled from 'styled-components';

export const PostsContainer = styled.div`
  display: grid;
  width: 864px; 
  grid-template-columns: repeat(auto-fit, minmax(416px, 2fr));
  gap: 2rem;
  padding: 3rem 0;
  
  
  @media (max-width: 768px) {
    
    grid-template-columns: 1fr;
    gap: 1rem; 
    padding: 2rem 13rem; 
  }
`;