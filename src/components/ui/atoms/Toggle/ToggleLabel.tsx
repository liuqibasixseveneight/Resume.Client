import styled from 'styled-components';

import { ToggleLabelProps } from './types';

const getBackgroundColor = (
  isOn: boolean,
  offColor?: string,
  onColor?: string
) => {
  if (isOn) {
    return onColor;
  } else {
    return offColor;
  }
};

export const ToggleLabel = styled.label<ToggleLabelProps>`
  align-items: center;
  background: ${({ $isOn, $offColor, $onColor }) =>
    getBackgroundColor($isOn, $offColor, $onColor)};
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  height: 30px;
  justify-content: space-between;
  position: relative;
  transition: background-color 100ms;
  width: 60px;
`;
