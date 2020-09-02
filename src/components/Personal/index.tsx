import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

import Container from 'components/common/Container';
import TitleSection from 'components/common/TitleSection';
import * as Styled from './styles';

import FormatHtml from 'components/common/FormatHtml';

interface Personal {
  frontmatter: {
    title: string;
    subtitle: string;
  };
  html: React.ReactNode;
}

const Banner: React.FC = () => {
  const { markdownRemark, profileImage } = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      markdownRemark(frontmatter: { category: { eq: "about" } }) {
        frontmatter {
          title
          subtitle
        }
        html
      }
    }
  `);

  const data: Personal = markdownRemark;
  const { frontmatter, html } = data;
  const profile: FluidObject | FluidObject[] =
    profileImage.childImageSharp.fluid;

  return (
    <Styled.Banner>
      <Container section>
        <TitleSection
          title={frontmatter.title}
          subtitle={frontmatter.subtitle}
        />
        <Styled.Content>
          <Styled.Image>
            <Img fluid={profile} alt="profile" />
          </Styled.Image>
          <FormatHtml content={html} />
        </Styled.Content>
      </Container>
    </Styled.Banner>
  );
};

export default Banner;
