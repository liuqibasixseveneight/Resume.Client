import styled from 'styled-components';

import { SubtitleProps } from './types';

export const Subtitle = styled.div<SubtitleProps>`
  color: ${({ $textSecondary }) => $textSecondary};
  font-size: 20px;
  font-weight: 300;
  margin-top: -0.8rem;
  text-transform: uppercase;
  transition: all 100ms linear;
`;
