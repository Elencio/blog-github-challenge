import { Post, PostCardProps } from './Post';
import styled from 'styled-components';


export interface PostsData {
  items: Array<PostCardProps>;
  total_count: number;
}

interface PostsProps {
  posts: PostsData;
}


const PostsContainer = styled.div`
  display: grid;
  width: 864px; 
  grid-template-columns: repeat(auto-fit, minmax(416px, 2fr));
  gap: 2rem;
  padding: 3rem 0; 
`;

export function Posts({ posts }: PostsProps) {
  return (
    <PostsContainer>
      {posts.items.map((item) => (
        <Post data={item} key={item.number} />
      ))}
    </PostsContainer>
  );
}
