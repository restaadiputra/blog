import React from 'react';
import { Link } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Container from 'components/common/Container';
import TitleSection from 'components/common/TitleSection';
import Button from 'components/common/Button';

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container section>
      <TitleSection title="404" subtitle="Page not found" center />
      <p className="mt-4 text-center w-full">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
      <div className="w-full mt-4 flex justify-center">
        <Link to="/">
          <Button primary>Back to Home</Button>
        </Link>
      </div>
    </Container>
  </Layout>
);

export default NotFoundPage;
