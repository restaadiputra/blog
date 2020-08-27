import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1 className="bg-red-300">not found</h1>
    </Layout>
  );
};

export default HomePage;
