import styled from 'styled-components';
import { WrapperProps } from './types';

export const Wrapper = styled.div<WrapperProps>`
  color: ${({ $textSecondary }) => $textSecondary};
  padding-bottom: ${({ $paddingBottom }) => $paddingBottom};
  padding-left: ${({ $paddingLeft }) => $paddingLeft};
  padding-right: ${({ $paddingRight }) => $paddingRight};
  padding-top: ${({ $paddingTop }) => $paddingTop};
  max-width: 600px;
  transition: all 100ms linear;

  & a {
    color: #4c5ce6;
    font-weight: bold;
    text-transform: none;
    transition: all 100ms linear;

    &:hover {
      color: #1929b3;
    }
  }
`;
