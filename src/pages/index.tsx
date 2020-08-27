import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import HeroBanner from 'components/HeroBanner';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroBanner />
    </Layout>
  );
};

export default HomePage;
