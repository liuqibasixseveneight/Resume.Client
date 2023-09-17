import styled from 'styled-components';

import { ToggleLabel } from './ToggleLabel';
import { ToggleButton } from './ToggleButton';

export const ToggleCheckbox = styled.input`
  display: none;
  height: 0;
  visibility: hidden;
  width: 0;

  &:checked + ${ToggleLabel} ${ToggleButton} {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;
