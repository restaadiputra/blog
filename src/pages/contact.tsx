import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import ContactInfo from 'components/ContactInfo';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactInfo />
    </Layout>
  );
};

export default ContactPage;
