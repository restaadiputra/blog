import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

interface StyledProps {
  open: boolean;
}

export const Nav = styled.nav<StyledProps>`
  ${tw`sm:flex flex-col sm:flex-row sm:w-auto w-full order-last sm:order-none my-4 sm:my-0 hidden`};
  ${({ open }) => open && tw`flex`};
`;

export const NavItem = motion.custom(styled(Link)`
  ${tw`relative text-gray-900 border-b border-transparent hover:text-gray-900 ml-0 sm:ml-8 mt-3 sm:mt-0`};
  width: max-content;

  &.active {
    ${tw`border-orange-600`};
  }

  &:before {
    ${tw`absolute w-full bg-orange-600 h-px left-0 invisible`};
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
    ${tw`bg-gray-500 inline-block w-6 h-px`};
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
