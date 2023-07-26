import linkIcon from '../../assets/icons/link.svg';
import backIcon from '../../assets/icons/back.svg';
import githubIcon from '../../assets/icons/github.svg';
import calendarIcon from '../../assets/icons/calendar.svg';
import commentIcon from '../../assets/icons/comment.svg';

import { PostDetailsData } from '../../pages/PostDetails';
import { formatDateFromNow } from '../../utils/format';
import { BackLink, GithubLink, InfoItem, InfoRow, PostHeaderContainer, PostTitle, Content, ContentDetails } from "./styles"



export interface PostHeaderProps {
  details: PostDetailsData;
}

export function PostHeader({ details }: PostHeaderProps) {
  return (
    <PostHeaderContainer>
      <Content>
        <BackLink to="/" className="font-bold uppercase">
          <img src={backIcon} alt="" />
          Voltar
        </BackLink>
        <GithubLink
          target="_blank"
          href={details.html_url}
          rel="noreferrer"
          className="font-bold uppercase"
        >
          Ver no Github
          <img src={linkIcon} alt="" />
        </GithubLink>
      </Content>
      <ContentDetails>
        <PostTitle>{details.title}</PostTitle>
        <InfoRow>
          <InfoItem>
            <img src={githubIcon} alt="" />
            <div>{details.user.login}</div>
          </InfoItem>
          <InfoItem>
            <img src={calendarIcon} alt="" />
            <div>{formatDateFromNow(details.created_at)}</div>
          </InfoItem>
          <InfoItem>
            <img src={commentIcon} alt="" />
            <div>{details.comments} comentários</div>
          </InfoItem>
        </InfoRow>
      </ContentDetails>

    </PostHeaderContainer>
  );
}
