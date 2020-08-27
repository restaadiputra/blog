import React from 'react';

import Nav from './Nav';
import Logo from './Logo';
import * as Styled from './styles';

interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = () => {
  return (
    <Styled.Header>
      <Styled.Wrapper>
        <Logo />
        <Nav />
      </Styled.Wrapper>
    </Styled.Header>
  );
};

export default Header;
