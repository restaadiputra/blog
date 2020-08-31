import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import ContactInfo from 'components/ContactInfo';
import Skills from 'components/Skills';

interface Props {
  location: {
    pathname: string;
  };
}

const ContactPage: React.FC<Props> = ({ location }) => {
  return (
    <Layout>
      <SEO title="Contact" pathname={location.pathname} />
      <ContactInfo />
    </Layout>
  );
};

export default ContactPage;
