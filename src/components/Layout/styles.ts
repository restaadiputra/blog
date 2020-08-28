import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Layout = styled.main`
  ${tw`flex flex-col min-h-screen`};
  > div {
    min-height: calc(100vh - 9.5rem);
  }
`;
