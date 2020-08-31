import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Personal from 'components/Personal';
import Experience from 'components/Experience';
import Education from 'components/Education';
import Skills from 'components/Skills';

interface Props {
  location: {
    pathname: string;
  };
}

const AboutPage: React.FC<Props> = ({ location }) => {
  return (
    <Layout>
      <SEO title="About" pathname={location.pathname} />
      <Personal />
      <hr />
      <Experience />
      <hr />
      <Education />
      <hr />
      <Skills />
    </Layout>
  );
};

export default AboutPage;
