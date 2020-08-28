import React from 'react';
import { motion } from 'framer-motion';

import Icon, { IconProps } from 'components/common/Icon';
import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  title: string;
  content: React.ReactNode;
  icon: IconProps;
  link: string;
}

const InfoBlock: React.FC<Props> = ({ icon, title, content, center, link }) => (
  <Styled.WrapperLink href={link}>
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
      <Styled.InfoBlock center={center}>
        <Styled.Icon>
          <Icon icon={icon} />
        </Styled.Icon>
        <Styled.Wrapper center={center}>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Content>{content}</Styled.Content>
        </Styled.Wrapper>
      </Styled.InfoBlock>
    </motion.div>
  </Styled.WrapperLink>
);

export default InfoBlock;
