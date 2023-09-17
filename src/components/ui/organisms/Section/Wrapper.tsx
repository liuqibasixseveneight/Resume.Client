import styled from 'styled-components';

import { WrapperProps } from './types';

export const Wrapper = styled.section<WrapperProps>`
  background: ${({ $background }) => $background};
  height: 100%;
  min-height: ${({ $minHeight }) => $minHeight ?? '100vh'};
  width: 100%;
`;
