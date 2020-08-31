import React from 'react';
import { graphql } from 'gatsby';
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
  excerpt: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    tags: string[];
    image: {
      childImageSharp: {
        resize: {
          src: string;
          height: number;
          width: number;
        };
      };
    };
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
  location: {
    pathname: string;
  };
}

const BlogPost: React.FC<Props> = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;
  const image = post.frontmatter.image
    ? post.frontmatter.image.childImageSharp.resize
    : undefined;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={image}
        pathname={location.pathname}
      />
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
      excerpt(pruneLength: 160)
      frontmatter {
        title
        description
        date(formatString: "MMM DD, YYYY")
        tags
        image: cover {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    }
  }
`;
