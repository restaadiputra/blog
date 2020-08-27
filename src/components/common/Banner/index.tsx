import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/common/Container';
import Button from 'components/common/Button';
import TitleSection from 'components/common/TitleSection';

import * as Styled from './styles';

interface Props {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  linkTo: string;
  linkText: string;
}

const Banner: React.FC<Props> = ({
  title,
  subtitle,
  content,
  linkTo,
  linkText,
}) => (
  <Styled.Banner>
    <Container section>
      <TitleSection title={title} subtitle={subtitle} />
      <Styled.Content>{content}</Styled.Content>
      <Link to={linkTo}>
        <Button primary>{linkText}</Button>
      </Link>
    </Container>
  </Styled.Banner>
);

export default Banner;
