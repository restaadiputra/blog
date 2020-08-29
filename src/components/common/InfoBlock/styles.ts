import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  center?: boolean;
}

export const InfoBlock = styled.div<StyledProps>`
  ${tw`flex flex-col my-4 mx-3 bg-white shadow hover:shadow-xl`};
  ${({ center }) => center && tw`items-center`};
  height: 100%;
  transition-property: box-shadow;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Icon = styled.span`
  ${tw`flex items-center justify-center w-10 h-10 text-white border border-white rounded-full mb-2 text-xl`};
`;

export const Wrapper = styled.div<StyledProps>`
  ${tw`w-full -mt-4 -mx-8 p-4 bg-primary flex flex-col items-center justify-center`}
  ${({ center }) => center && tw`text-center`};
`;

export const Title = styled.h3`
  ${tw`text-md mt-1 text-white font-semibold`};
`;

export const Content = styled.p`
  ${tw`mt-1 p-4 text-sm leading-8`};
`;

export const WrapperLink = styled.a`
  ${tw`h-full w-full inline-block cursor-pointer outline-none text-gray-800 hover:text-gray-800`}
  > div {
    height: 85%;
  }
`;
