import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

export const Logo = styled(Link)`
  ${tw`flex items-center mr-auto text-orange-600 hover:text-orange-600`};
`;

export const Text = styled.h1`
  ${tw`text-lg font-bold tracking-wider`};
`;

export const Image = styled.figure`
  ${tw`w-10 h-10 mr-3 border border-orange-600 rounded-full`};

  img {
    ${tw`border-4 border-white rounded-full`};
  }
`;
