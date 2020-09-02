import React from 'react';
import * as Styled from './styles';

interface Props {
  content: any;
}

const FormatHtml: React.FC<Props> = ({ content }) => (
  <Styled.ContainerMarkdown
    dangerouslySetInnerHTML={{
      __html: content,
    }}
  />
);

export default FormatHtml;
