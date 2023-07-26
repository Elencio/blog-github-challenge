import { Link } from 'react-router-dom';
import { formatDateFromNow } from '../utils/format';
import { MarkdownHandler } from './MarkdownHandler';
import styled from 'styled-components';

// Styled component for the outer container of the post card
const PostCardContainer = styled(Link)`
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
`;

export const Header = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   gap: 3rem;
`


const Title = styled.span`
  display: block;
  width: auto;
  font-size: 1.5rem; 
  color: ${(props) => props.theme['base-title']};
`;


const Timestamp = styled.span`
  display: block;
  text-align: right;
  font-size: 0.875rem; 
  color: ${(props) => props.theme['base-span']};
`;


const BodyContent = styled.div`
  margin-top: 1.25rem; 
  color: ${(props) => props.theme['base-text']};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export interface PostCardProps {
  created_at: string;
  body: string;
  title: string;
  url: string;
  number: number;
}

interface PostProps {
  data: PostCardProps;
}

export function Post({ data }: PostProps) {
  return (
    <PostCardContainer to={`posts/${data.number}`}>
      <Header>
        <Title>{data.title}</Title>
        <Timestamp>{formatDateFromNow(data.created_at)}</Timestamp>
      </Header>
      <BodyContent>
        <MarkdownHandler markdown={data.body} />
      </BodyContent>
    </PostCardContainer>
  );
}
