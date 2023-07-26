import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../services/api';
import { PostHeader } from '../components/PostHeader';
import { MarkdownHandler } from '../components/MarkdownHandler';
import styled from 'styled-components';
import { PostCardProps } from '../components/Posts';


export interface PostDetailsData extends PostCardProps {
  comments: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Container = styled.div`
  width: 864px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    width: 100%; /* Preencher a largura disponível para telas menores */
    padding: 0.5rem; /* Reduzir o espaçamento interno para telas menores */
  }
`;

const Content = styled.div`
  padding: 2rem 0;

  @media (max-width: 768px) {
    padding: 1rem 0; /* Reduzir o espaçamento interno para telas menores */
  }
`;

export function PostDetails() {
  const [postDetail, setPostDetail] = useState<PostDetailsData>();
  const { id } = useParams();

  useEffect(() => {
    async function loadPostDetails() {
      const { data } = await api.get(`repos/elencio/blog-github-challenge/issues/${id}`);
      setPostDetail(data);
    }

    loadPostDetails();
  }, [id]);

  return (
    <Container>
      {postDetail && (
        <>
          <PostHeader details={postDetail} />
          <Content>
            <MarkdownHandler markdown={postDetail.body} />
          </Content>
        </>
      )}
    </Container>
  );
}
