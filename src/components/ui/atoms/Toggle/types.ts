import { type ChangeEvent } from 'react';

export type ToggleProps = {
  id: string;
  isOn: boolean;
  handleToggle: (event: ChangeEvent<HTMLInputElement>) => void;
  onColor?: string;
};
