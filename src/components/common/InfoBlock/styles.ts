import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  center?: boolean;
}

export const InfoBlock = styled.div<StyledProps>`
  ${tw`flex flex-col my-4 mx-3 p-4 bg-white rounded-lg border border-orange-300`};
  ${({ center }) => center && tw`items-center`};
  height: 100%;
`;

export const Icon = styled.span`
  ${tw`flex items-center justify-center w-10 h-10 text-orange-500 border border-orange-600 rounded-full mb-2 text-xl`};
`;

export const Wrapper = styled.div<StyledProps>`
  ${({ center }) => center && tw`text-center`};
`;

export const Title = styled.h3`
  ${tw`text-md mt-1 font-semibold`};
`;

export const Content = styled.p`
  ${tw`mt-1 text-sm leading-8`};
`;

export const WrapperLink = styled.a`
  ${tw`h-full w-full inline-block cursor-pointer outline-none text-gray-800 hover:text-gray-800`}
  > div {
    height: 85%;
  }
`;
