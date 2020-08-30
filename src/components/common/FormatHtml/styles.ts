import styled from 'styled-components';
import tw from 'tailwind.macro';

export const ContainerMarkdown = styled.div`
  ${tw`w-full`}
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${tw`font-semibold`}
  }

  h1 {
    ${tw`text-3xl tracking-wider leading-10 mt-10 mb-4`}
  }

  h2 {
    ${tw`text-2xl tracking-wider  leading-8 mt-8 mb-4`}
  }

  h3 {
    ${tw`text-xl tracking-wide leading-8 mt-4 mb-2`}
  }

  h4 {
    ${tw`text-lg leading-4 mt-4 mb-2`}
  }

  h5 {
    ${tw`text-md leading-4 mt-6 mb-2`}
  }

  h6 {
    ${tw`leading-5 mt-6 mb-2`}
  }

  img {
    ${tw`border-0 max-w-full block`}
  }

  a {
    ${tw`text-secondary hover:text-primary hover:underline`}
  }

  b,
  strong {
    ${tw`font-semibold`}
  }

  ol,
  ul {
    ${tw`ml-4 mb-6`}
    & li {
      ${tw`mb-4`}
      & p {
        ${tw`mb-3`}
      }
    }
  }

  ul {
    ${tw`list-disc`}
  }

  ol {
    ${tw`list-decimal`}
    vertical-align: top;
  }

  p {
    ${tw`mb-6`}
  }

  blockquote {
    ${tw`p-0 ml-6 text-gray-600 italic relative`}

    &:before {
      content: '';
      ${tw`bg-tertiary h-full w-2 absolute`};
      left: -1.5rem;
    }
  }

  figure {
    ${tw`block w-full h-auto`}
  }

  figcaption {
    ${tw`leading-3 text-sm mt-3 text-gray-600 text-primary italic mb-0 text-center`}
    > p {
      span {
        ${tw`text-gray-600`}
      }
    }
  }

  code {
    ${tw`bg-gray-200 text-sm italic px-2 py-1 rounded-sm`}
  }
`;
