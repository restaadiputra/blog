import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  center?: boolean;
}

export const TitleSection = styled.div`
  ${tw`flex flex-col w-full`};
`;

export const Title = styled.h2<StyledProps>`
  ${tw`uppercase text-gray-800 mb-4 text-lg font-bold w-full text-left`};
  ${({ center }) => center && tw`text-center`};
`;

export const SubTitle = styled.h4<StyledProps>`
  ${tw`text-xs text-primary w-full text-left`};
  ${({ center }) => center && tw`text-center`};
`;

export const Separator = styled.div<StyledProps>`
  ${tw`relative w-2 h-8 mb-6 -mt-2`};
  ${({ center }) => center && tw`mx-auto`};

  span:first-child {
    ${tw`bg-primary w-6 absolute h-px top-1/2`}
  }
  span:last-child {
    ${tw`bg-tertiary w-6 absolute h-px top-1/2 mt-1 -ml-1`}
  }

  &:before {
    content: '';
    ${tw`bg-primary mt-2 h-6 w-px absolute left-0`};
  }

  &:after {
    content: '';
    ${tw`bg-tertiary h-6 w-px absolute ml-1`};
  }
`;
