import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Personal from 'components/Personal';
import Experience from 'components/Experience';
import Education from 'components/Education';
import Skills from 'components/Skills';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About" />
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
