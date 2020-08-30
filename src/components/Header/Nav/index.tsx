import React, { useState } from 'react';

import * as Styled from './styles';
import navItems from 'configs/nav';

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Styled.Nav open={open}>
        {navItems.map((item, index) => (
          <Styled.NavItem
            key={`nav-item-${index}`}
            to={item.slug}
            activeClassName="active"
            whileTap={{ scale: 0.9 }}
          >
            {item.title}
          </Styled.NavItem>
        ))}
      </Styled.Nav>
      <Styled.ToogleNav open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Styled.ToogleNav>
    </>
  );
};

export default Nav;
