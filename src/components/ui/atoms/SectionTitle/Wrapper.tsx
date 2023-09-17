import styled from 'styled-components';

import { WrapperProps } from './types';

export const Wrapper = styled.header<WrapperProps>`
  padding-bottom: ${({ $paddingBottom }) => $paddingBottom};
  padding-left: ${({ $paddingLeft }) => $paddingLeft};
  padding-right: ${({ $paddingRight }) => $paddingRight};
  padding-top: ${({ $paddingTop }) => $paddingTop};
  margin: 0 auto;
  width: 100%;
  max-width: 1980px;
`;
