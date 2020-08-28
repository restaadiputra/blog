import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Posts from 'components/Posts';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Posts />
    </Layout>
  );
};

export default HomePage;
