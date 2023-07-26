import styled from "styled-components";
import { Link } from 'react-router-dom';


export const PostHeaderContainer = styled.div`
  margin-top: -6rem; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 864px; 
  gap: 1.25rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  color: ${(props) => props.theme['base-title']};

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem 0;
  }
`;

export const BackLink = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme['blue']};
  text-decoration: none;

  img {
    width: 1rem; 
    color: ${(props) => props.theme['base-blue']};
  }
`;


export const GithubLink = styled.a`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme['blue']};
  text-decoration: none;

  img {
    width: 1rem;
    color: ${(props) => props.theme['base-blue']};
  }
`;


export const PostTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;


export const InfoRow = styled.div`
  display: flex;
  gap: 2rem;
`;

export const InfoItem = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  img {
    width: 1rem; 
    color: ${(props) => props.theme['base-blue']};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 1rem; 
  }

`

export const ContentDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 768px) {
    gap: 1rem; 
  }
`