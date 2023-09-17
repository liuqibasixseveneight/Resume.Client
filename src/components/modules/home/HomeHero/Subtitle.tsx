import styled from 'styled-components';

import { SubtitleProps } from './type';

export const Subtitle = styled.div<SubtitleProps>`
  color: ${({ $textSecondary }) => $textSecondary};
  font-size: 20px;
  font-weight: 300;
  text-transform: uppercase;
  user-select: none;
`;
