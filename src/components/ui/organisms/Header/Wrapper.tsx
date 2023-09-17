import styled from 'styled-components';

import { WrapperProps } from './types';

export const Wrapper = styled.header<WrapperProps>`
  align-items: center;
  backdrop-filter: ${({ $isHeaderVisible }) =>
    $isHeaderVisible ? 'blur(12px)' : 'none'};
  background: transparent;
  border-bottom: 1px solid ${({ $textSecondary }) => $textSecondary};
  display: flex;
  height: 78px;
  left: 0;
  margin: 0 auto;
  position: fixed;
  right: 0;
  top: ${({ $isHeaderVisible }) => ($isHeaderVisible ? '0' : '-78px')};
  transition: all 100ms linear, top 300ms ease-in, box-shadow 300ms ease-in;
  width: 100%;
  max-width: 1980px;
  z-index: 99;
`;
