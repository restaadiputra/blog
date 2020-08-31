import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Posts from 'components/Posts';

interface Props {
  location: {
    pathname: string;
  };
}

const BlogPage: React.FC<Props> = ({ location }) => {
  return (
    <Layout>
      <SEO title="Blog" pathname={location.pathname} />
      <Posts />
    </Layout>
  );
};

export default BlogPage;
