import styled from 'styled-components';

import { TitleProps } from './type';

export const Title = styled.h1<TitleProps>`
  color: ${({ $textSecondary }) => $textSecondary};
  font-size: 60px;
  font-weight: 600;
  text-transform: uppercase;
  user-select: none;
`;
