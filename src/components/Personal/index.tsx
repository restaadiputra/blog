import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/common/Container';
import TitleSection from 'components/common/TitleSection';
import * as Styled from './styles';

import { SectionTitle } from 'helpers/definitions';
import FormatHtml from 'components/common/FormatHtml';

interface Personal {
  frontmatter: {
    title: string;
    subtitle: string;
  };
  html: React.ReactNode;
}

const Banner: React.FC = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
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

  return (
    <Styled.Banner>
      <Container section>
        <TitleSection
          title={frontmatter.title}
          subtitle={frontmatter.subtitle}
        />
        <Styled.Content>
          <FormatHtml content={html} />
        </Styled.Content>
      </Container>
    </Styled.Banner>
  );
};

export default Banner;
