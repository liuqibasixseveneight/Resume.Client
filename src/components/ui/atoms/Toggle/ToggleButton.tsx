import styled from 'styled-components';

import { ToggleButtonProps } from './types';

const getBackgroundColor = (
  isOn: boolean,
  offColor?: string,
  onColor?: string
) => {
  if (isOn) {
    return offColor;
  } else {
    return onColor;
  }
};

export const ToggleButton = styled.span<ToggleButtonProps>`
  background: ${({ $isOn, $offColor, $onColor }) =>
    getBackgroundColor($isOn, $offColor, $onColor)};
  border-radius: 30px;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  content: '';
  height: 25px;
  left: 2px;
  position: absolute;
  top: 2px;
  transition: 100ms;
  width: 25px;

  &:active {
    width: 40px;
  }
`;
