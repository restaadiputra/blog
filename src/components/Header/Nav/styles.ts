import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

interface StyledProps {
  open: boolean;
}

export const Nav = styled.nav<StyledProps>`
  ${tw`flex flex-col sm:max-h-200 sm:flex-row sm:w-auto w-full order-last overflow-hidden sm:order-none my-4 sm:my-0`};
  ${({ open }) => (open ? tw`max-h-200` : tw`max-h-0 my-0`)};
  transition-property: all;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

export const NavItem = motion.custom(styled(Link)`
  ${tw`relative text-primary border-b border-transparent hover:text-primary ml-0 sm:ml-8 mt-3 sm:mt-0`};
  width: max-content;

  &.active {
    ${tw`border-primary`};
  }

  &:before {
    ${tw`absolute w-full bg-primary h-px left-0 invisible`};
    content: '';
    bottom: -1px;
    transform: scaleX(0);
    transition: 0.2s;
  }

  &:hover:before {
    ${tw`visible`};
    transform: scaleX(1);
  }
`);

export const ToogleNav = styled.button<StyledProps>`
  ${tw`flex flex-col items-end justify-center cursor-pointer w-6 h-6 sm:hidden`};
  outline: none !important;

  span {
    ${tw`bg-primary inline-block w-6 h-px`};
    transition: 0.2s;

    &:first-child {
      ${({ open }) => (open ? tw`-mb-px` : tw`mb-2`)};
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'none')};
    }

    &:last-child {
      ${({ open }) => (open ? tw`-mt-px` : tw`mt-2`)};
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'none')};
    }

    &:nth-child(2) {
      ${({ open }) => (open ? tw`opacity-0` : tw`opacity-1`)};
      transform: ${({ open }) => (open ? 'translate(20px)' : 'none')};
    }
  }
`;
