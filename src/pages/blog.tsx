import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1 className="bg-red-300">blog</h1>
    </Layout>
  );
};

export default HomePage;
