import styled from 'styled-components';

import { WrapperProps } from './types';

export const Wrapper = styled.section<WrapperProps>`
  background: ${({ $primaryBackground }) => $primaryBackground};
  height: 100%;
  min-height: calc(100vh - 78px);
  position: relative;
  width: 100%;
`;
