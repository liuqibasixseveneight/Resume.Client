import styled from 'styled-components';

import { WrapperProps } from './types';

export const Wrapper = styled.footer<WrapperProps>`
  background: ${({ $textPrimary }) => $textPrimary};
  height: 100%;
  min-height: 40vh;
  width: 100%;
`;
