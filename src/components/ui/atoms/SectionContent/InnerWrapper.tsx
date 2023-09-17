import styled from 'styled-components';

import { InnerWrapperProps } from './types';

export const InnerWrapper = styled.div<InnerWrapperProps>`
  align-items: ${({ $contentCenter, $contentLeft, $contentRight }) => {
    switch (true) {
      case $contentCenter:
        return 'center';
      case $contentLeft:
        return 'flex-start';
      case $contentRight:
        return 'flex-end';
      default:
        return 'flex-start';
    }
  }};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4rem;
`;
