import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link as GatsbyLink } from 'gatsby';

export const Title = styled.h3`
  ${tw`font-semibold mb-4`};
`;

export const Image = styled.figure`
  ${tw`w-full rounded-lg overflow-hidden mt-4 mb-10`};
`;

export const Links = styled.div`
  ${tw`w-full flex justify-between mt-10`};
`;

export const Link = styled(GatsbyLink)`
  ${tw`text-tertiary hover:text-secondary`}
  transition: 0.2s;
`;

export const Tags = styled.div`
  ${tw`pr-4 pt-10 mt-auto`}
`;

export const Tag = styled.span`
  ${tw`text-xs text-white bg-secondary px-2 py-1 mr-2`}
`;
