import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import HeroBanner from 'components/HeroBanner';
import LatestPosts from 'components/LatestPosts';

interface Props {
  location: {
    pathname: string;
  };
}

const HomePage: React.FC<Props> = ({ location }) => {
  return (
    <Layout>
      <SEO title="Home" pathname={location.pathname} />
      <HeroBanner />
      <hr />
      <LatestPosts />
    </Layout>
  );
};

export default HomePage;
