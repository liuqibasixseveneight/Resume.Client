import styled from 'styled-components';

import { WrapperProps } from './types';

export const Wrapper = styled.section<WrapperProps>`
  align-items: center;
  background: ${({ $primaryBackground }) => $primaryBackground};
  display: flex;
  height: 100%;
  min-height: 100vh;
  justify-content: center;
  position: relative;
  width: 100%;
`;
