import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/common/Container';
import TitleSection from 'components/common/TitleSection';
import PostCard, { Post } from 'components/common/PostCard';
import { SectionTitle } from 'helpers/definitions';
import * as Styled from './styles';

const Posts: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "blog section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: {
          frontmatter: { category: { eq: "blog" }, published: { eq: true } }
        }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            html
            fields {
              slug
            }
            remoteCover {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            frontmatter {
              title
              description
              date(formatString: "MMM DD, YYYY")
              tags
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const posts: Post[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection
        title={sectionTitle.title}
        subtitle={sectionTitle.subtitle}
        center
      />
      <Styled.Posts>
        {posts.map(item => {
          return <PostCard key={item.node.id} node={item.node} />;
        })}
      </Styled.Posts>
    </Container>
  );
};

export default Posts;
