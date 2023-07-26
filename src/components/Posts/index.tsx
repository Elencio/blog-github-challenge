import { formatDateFromNow } from "../../utils/format";
import { MarkdownHandler } from "../MarkdownHandler";
import { PostCardContainer, Header, Title, Timestamp, BodyContent } from "./styles"


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
