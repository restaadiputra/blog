import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Banner = styled.section``;

export const Content = styled.p`
  ${tw`mb-8`};
`;

export const Image = styled.figure`
  ${tw`w-56 h-56 mr-3 border border-primary rounded-full mx-auto mb-8`};

  img {
    ${tw`border-4 border-white rounded-full`};
  }
`;
