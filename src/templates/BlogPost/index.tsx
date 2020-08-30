import React from 'react';
import { graphql, Link } from 'gatsby';
import { defineCustomElements } from '@deckdeckgo/highlight-code/dist/loader';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Container from 'components/common/Container';
import TitleSection from 'components/common/TitleSection';
import FormatHtml from 'components/common/FormatHtml';

import * as Styled from './styles';

defineCustomElements();

interface Post {
  html: React.ReactNode;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    date: string;
    tags: string[];
  };
}

interface Props {
  data: {
    markdownRemark: Post;
  };
  pageContext: {
    slug: string;
    next: Post;
    previous: Post;
  };
}

const BlogPost: React.FC<Props> = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container section>
        <TitleSection
          title={post.frontmatter.title}
          subtitle={post.frontmatter.date}
        />
        <FormatHtml content={post.html} />
        <Styled.Tags>
          <p className="text-xs mb-2 text-gray-600">Tags: </p>
          {post.frontmatter.tags.map(item => (
            <Styled.Tag key={item}>{item}</Styled.Tag>
          ))}
        </Styled.Tags>
        <Styled.Links>
          <span>
            {previous && (
              <Styled.Link to={previous.fields.slug} rel="previous">
                ← {previous.frontmatter.title}
              </Styled.Link>
            )}
          </span>
          <span>
            {next && (
              <Styled.Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Styled.Link>
            )}
          </span>
        </Styled.Links>
      </Container>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        tags
      }
    }
  }
`;
