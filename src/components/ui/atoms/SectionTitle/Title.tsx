import styled, { css } from 'styled-components';

import { TitleProps } from './types';

export const Title = styled.h2<TitleProps>`
  color: ${({ $textSecondary }) => $textSecondary};
  font-size: 60px;
  font-weight: 600;
  position: relative;
  text-transform: uppercase;
  transition: all 100ms linear;

  ${({ $titleLeft }) =>
    $titleLeft &&
    css`
      &::after {
        background-color: #333333;
        content: '';
        flex: 1;
        height: 1px;
        left: calc(100% + 8rem);
        position: absolute;
        top: 50%;
        width: 100%;
        max-width: 1980px;
        min-width: calc(1980px - 100% - 12rem) !important;
      }
    `}

  ${({ $titleRight }) =>
    $titleRight &&
    css`
      &::before {
        background-color: #333333;
        content: '';
        flex: 1;
        height: 1px;
        right: calc(100% + 8rem);
        position: absolute;
        top: 50%;
        width: 100%;
        max-width: 1980px;
        min-width: calc(1980px - 100% - 12rem) !important;
      }
    `}
`;
