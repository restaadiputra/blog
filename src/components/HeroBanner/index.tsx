import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Banner from 'components/common/Banner';

import { SectionTitle } from 'helpers/definitions';

interface SectionHeroBanner extends SectionTitle {
  content: string;
  linkTo: string;
  linkText: string;
}

const HeroBanner: React.FC = () => {
  const heroBanner = {
    title: 'I am Resta Adiputra',
    subtitle: 'Front End Developer',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    linkTo: '/about',
    linkText: 'View My Profile',
  };

  return (
    <Banner
      title={heroBanner.title}
      subtitle={heroBanner.subtitle}
      content={heroBanner.content}
      linkTo={heroBanner.linkTo}
      linkText={heroBanner.linkText}
    />
  );
};

export default HeroBanner;
