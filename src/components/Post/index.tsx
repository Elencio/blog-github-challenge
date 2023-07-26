
import { Post, PostCardProps } from '../Posts';
import { PostsContainer } from './styles';



export interface PostsData {
  items: Array<PostCardProps>;
  total_count: number;
}

interface PostsProps {
  posts: PostsData;
}




export function Posts({ posts }: PostsProps) {
  return (
    <PostsContainer>
      {posts.items.map((item) => (
        <Post data={item} key={item.number} />
      ))}
    </PostsContainer>
  );
}
