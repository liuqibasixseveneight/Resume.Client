import { type ChangeEvent } from 'react';

export type ToggleProps = {
  id: string;
  isOn: boolean;
  handleToggle: (event: ChangeEvent<HTMLInputElement>) => void;
  offColor?: string;
  onColor?: string;
};

export type ToggleLabelProps = {
  $isOn: boolean;
  $offColor?: string;
  $onColor?: string;
};

export type ToggleButtonProps = {
  $isOn: boolean;
  $offColor?: string;
  $onColor?: string;
};
