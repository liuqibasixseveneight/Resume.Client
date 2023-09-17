import styled, { css } from 'styled-components';

import { WrapperProps } from './types';

const getTypeStyles = (
  type: string,
  backgroundPrimary: string,
  textPrimary: string
) => {
  switch (type) {
    case 'li':
      return css`
        background-color: transparent;

        &:hover {
          color: ${textPrimary};
        }
      `;
    case 'button':
      return css`
        border: 1px solid ${textPrimary};

        &:hover {
          background-color: ${textPrimary};
          color: ${backgroundPrimary};
        }
      `;
    default:
      return css`
        background-color: transparent;
      `;
  }
};

export const Wrapper = styled.li<WrapperProps>`
  color: ${({ $textSecondary }) => $textSecondary};
  cursor: pointer;
  font-weight: 500;
  padding: 0.4rem 0.8rem;
  text-transform: uppercase;
  transition: all 100ms linear;
  ${({ $type, $backgroundPrimary, $textPrimary }) =>
    getTypeStyles($type, $backgroundPrimary, $textPrimary)};
`;
