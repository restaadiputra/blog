import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import HeroBanner from 'components/HeroBanner';
import LatestPosts from 'components/LatestPosts';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroBanner />
      <hr />
      <LatestPosts />
    </Layout>
  );
};

export default HomePage;
