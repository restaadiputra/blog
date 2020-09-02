import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

export const Logo = styled(Link)`
  ${tw`flex items-center mr-auto text-primary tracking-wider relative hover:text-primary`};

  &:before {
    ${tw`absolute bg-primary h-px left-0 invisible`};
    left: 3.25rem;
    width: 70%;
    content: '';
    bottom: -1px;
    transform: scaleX(0);
    transition: 0.2s;
  }

  &:hover:before {
    ${tw`visible`};
    transform: scaleX(1);
  }
`;

export const Text = styled.h1`
  ${tw`text-lg font-bold tracking-wider uppercase`};
`;

export const Image = styled.figure`
  ${tw`w-10 h-10 mr-3 border border-primary rounded-full`};

  img {
    ${tw`border-4 border-white rounded-full`};
  }
`;
