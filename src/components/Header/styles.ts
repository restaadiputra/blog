import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Container } from 'components/common/Container/styles';

export const Header = styled.header`
  ${tw`bg-background shadow-md -mb-px`};
`;

export const Wrapper = styled(Container)`
  ${tw`items-center`};
`;
