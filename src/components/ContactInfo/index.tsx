import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import InfoBlock from 'components/common/InfoBlock';
import Container from 'components/common/Container';
import TitleSection from 'components/common/TitleSection';
import { IconProps, IconName, IconPrefix } from 'components/common/Icon';

import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

interface Contact {
  node: {
    id: string;
    frontmatter: {
      title: string;
      content: string;
      icon: IconName;
      type: IconPrefix;
      link: string;
    };
  };
}

const getIcon = (icon: IconName, type: IconPrefix): IconProps => {
  if (type === 'fas') {
    return icon;
  } else {
    return [type, icon];
  }
};

const ConctactInfo: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "contact section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "contact" } } }
        sort: { fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              icon
              content
              type
              link
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const contacts: Contact[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection
        title={sectionTitle.title}
        subtitle={sectionTitle.subtitle}
        center
      />
      {contacts.map(item => {
        const {
          id,
          frontmatter: { title, icon, content, type, link },
        } = item.node;

        return (
          <Styled.ContactInfoItem key={id}>
            <InfoBlock
              icon={getIcon(icon, type)}
              title={title}
              content={content}
              link={link}
              center
            />
          </Styled.ContactInfoItem>
        );
      })}
    </Container>
  );
};

export default ConctactInfo;
