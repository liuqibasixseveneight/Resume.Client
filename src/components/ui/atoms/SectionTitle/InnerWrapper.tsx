import styled from 'styled-components';

import { InnerWrapperProps } from './types';

export const InnerWrapper = styled.div<InnerWrapperProps>`
  align-items: ${({ $titleCenter, $titleLeft, $titleRight }) => {
    switch (true) {
      case $titleCenter:
        return 'center';
      case $titleLeft:
        return 'flex-start';
      case $titleRight:
        return 'flex-end';
      default:
        return 'flex-start';
    }
  }};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4rem;
  position: relative;
  width: 100%;
`;
