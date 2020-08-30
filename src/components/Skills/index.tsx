import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/common/Container';
import TitleSection from 'components/common/TitleSection';
import ProgressBar from 'components/common/ProgressBar';

import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

interface Skill {
  node: {
    id: string;
    frontmatter: {
      title: string;
      percentage: number;
    };
  };
}

const Skills: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "skills section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "skills" } } }
        sort: { fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              percentage
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const skills: Skill[] = allMarkdownRemark.edges;

  return (
    <Styled.Wrapper>
      <Container section>
        <TitleSection
          title={sectionTitle.title}
          subtitle={sectionTitle.subtitle}
          center
        />
        <Styled.Skills>
          {skills.map(item => {
            const {
              id,
              frontmatter: { title, percentage },
            } = item.node;

            return (
              <Styled.Skill key={id}>
                <ProgressBar title={title} percentage={percentage} />
              </Styled.Skill>
            );
          })}
        </Styled.Skills>
      </Container>
    </Styled.Wrapper>
  );
};

export default Skills;
