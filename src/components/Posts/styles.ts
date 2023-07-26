import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const PostCardContainer = styled(Link)`
  display: block;
  height: 15rem; 
  cursor: pointer;
  border-radius: 1rem;
  background-color: ${(props) => props.theme['base-post']};;
  padding: 2rem;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme['base-label']};
  }

  @media (max-width: 768px) {
    padding: 1rem; 
  }
`;

export const Header = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   gap: 3rem;

   @media (max-width: 768px) {
    flex-direction: column; 
    gap: 0.5rem; 
  }
`


export const Title = styled.span`
  display: block;
  width: auto;
  font-size: 1.5rem; 
  color: ${(props) => props.theme['base-title']};

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;


export const Timestamp = styled.span`
  display: block;
  text-align: right;
  font-size: 0.875rem; 
  color: ${(props) => props.theme['base-span']};

    /* Responsividade para telas menores */
    @media (max-width: 768px) {
    text-align: left; /* Alinhar o texto à esquerda para telas menores */
  }
`;


export const BodyContent = styled.div`
  margin-top: 1.25rem; 
  color: ${(props) => props.theme['base-text']};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

   
   @media (max-width: 768px) {
    -webkit-line-clamp: 4;
  }
`;