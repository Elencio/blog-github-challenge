import linkIcon from '../../assets/icons/link.svg';
import githubIcon from '../../assets/icons/github.svg';
import usersIcon from '../../assets/icons/users.svg';
import {AvatarImage, BioParagraph, Content, ContentHeader, GithubLinkIcon, InfoItem,InfoRow, NameAndGithubLink, ProfileContainer} from "./styles"



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
