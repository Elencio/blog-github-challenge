import styled from 'styled-components';


export const ProfileContainer = styled.div`
  margin-top: -6rem; 
  display: flex;
  width: 864px; 
  gap: 2rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  color: ${(props) => props.theme['base-title']};


  @media (max-width: 768px) {

    width: 100%;
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const AvatarImage = styled.img`
  height: 148px; 
  width: 148px; 
  border-radius: 0.75rem; 
  background-size: contain;

  @media (max-width: 768px) {
    height: 200px;
    width: 600px;
    object-fit: cover;
    padding: 0.95rem;
  }
`;


export const NameAndGithubLink = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

   a {
     text-decoration: none;
     display: flex;
     flex-direction: row;
     gap: 1rem;
     align-items: center;
     color: ${(props) => props.theme['blue']};
     text-transform: uppercase;
   }
`;


export const GithubLinkIcon = styled.img`
  width: 1rem; 
  color: ${(props) => props.theme['blue']};
`;


export const BioParagraph = styled.p`
  margin-top: 0.5rem; 
  font-size: 1rem; 
  color: ${(props) => props.theme['base-text']};
`;


export const InfoRow = styled.div`
  display: flex;
  gap: 2rem;
`;


export const InfoItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 1rem; 
    color: ${(props) => props.theme['blue']};
    margin-right: 0.5rem; 
  }
`;

export const Content = styled.div`
display: flex;
flex-direction: column;
gap: 1.5rem;

`

export const ContentHeader = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;

`
