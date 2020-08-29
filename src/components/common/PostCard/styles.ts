import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Post = styled.div`
  ${tw`w-full sm:w-1/2 p-3`};
`;

export const Card = styled.div`
  ${tw`w-full h-full flex flex-col overflow-hidden shadow hover:shadow-2xl`};
  transition-property: box-shadow;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Content = styled.div`
  ${tw`p-4 text-gray-900`};
`;

export const Image = styled.figure`
  ${tw`w-full`};
`;

export const Title = styled.h3`
  ${tw`font-semibold mb-4`};
`;

export const Description = styled.p``;

export const Date = styled.h3`
  ${tw`text-xs text-secondary`};
`;

export const Tags = styled.div`
  ${tw`p-4 pt-2 mt-auto`}
`;

export const Tag = styled.span`
  ${tw`text-xs text-white bg-secondary px-2 py-1 mr-2`}
`;
