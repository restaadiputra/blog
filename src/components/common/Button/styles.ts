import styled from 'styled-components';
import tw from 'tailwind.macro';
import { motion } from 'framer-motion';

export interface StyledProps {
  primary?: boolean;
  block?: boolean;
}

export const Button = motion.custom(styled.button<StyledProps>`
  outline: none !important;
  ${tw`py-2 px-8 border-orange-600 bg-orange-600 text-white`};
  ${({ block }) => block && tw`w-full`};
`);
