import linkIcon from '../assets/icons/link.svg';
import githubIcon from '../assets/icons/github.svg';
import usersIcon from '../assets/icons/users.svg';

import styled from 'styled-components';


export interface UserData {
  login: string;
  html_url: string;
  followers: number;
  bio: string;
  avatar_url: string;
  name: string;
}

interface ProfileProps {
  user: UserData | undefined;
}


const ProfileContainer = styled.div`
  margin-top: -6rem; 
  display: flex;
  width: 864px; 
  gap: 2rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  color: ${(props) => props.theme['base-title']};
`;

// Styled component for the user avatar
const AvatarImage = styled.img`
  height: 148px; /* Adjust the height as needed */
  width: 148px; /* Adjust the width as needed */
  border-radius: 0.75rem; /* Adjust the border radius as needed */
  background-size: contain;
`;

// Styled component for the user name and GitHub link
const NameAndGithubLink = styled.div`
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


const GithubLinkIcon = styled.img`
  width: 1rem; 
  color: ${(props) => props.theme['blue']};
`;


const BioParagraph = styled.p`
  margin-top: 0.5rem; 
  font-size: 1rem; 
  color: ${(props) => props.theme['base-text']};
`;


const InfoRow = styled.div`
  display: flex;
  gap: 2rem;
`;


const InfoItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 1rem; 
    color: ${(props) => props.theme['blue']};
    margin-right: 0.5rem; /* Adjust the margin-right as needed */
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

export function Profile({ user }: ProfileProps) {
  return (
    <ProfileContainer>
      <AvatarImage src={user?.avatar_url} alt="User profile" />
      <Content>
        <ContentHeader>
        <NameAndGithubLink>
          <h1 className="text-2xl font-bold">{user?.name}</h1>
          <a
            target="_blank"
            href={user?.html_url}
            className="flex gap-2 font-bold uppercase text-base-blue"
            rel="noreferrer"
          >
            Github
            <GithubLinkIcon src={linkIcon} alt="" />
          </a>
        </NameAndGithubLink>
        <BioParagraph>{user?.bio}</BioParagraph>
        </ContentHeader>
       
        <InfoRow>
          <InfoItem>
            <img src={githubIcon} alt="" />
            <div className="text-base-subtitle">{user?.login}</div>
          </InfoItem>
          <InfoItem>
            <img src={usersIcon} alt="" />
            <div className="text-base-subtitle">
              {user?.followers} seguidores
            </div>
          </InfoItem>
        </InfoRow>
      </Content>
    </ProfileContainer>
  );
}
