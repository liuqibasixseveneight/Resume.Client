import { type FC } from 'react';

import { ToggleProps } from './types';
import { ToggleCheckbox } from './ToggleCheckbox';
import { ToggleLabel } from './ToggleLabel';
import { ToggleButton } from './ToggleButton';

const Toggle: FC<ToggleProps> = ({
  id,
  isOn,
  handleToggle,
  offColor,
  onColor,
}) => {
  return (
    <>
      <ToggleCheckbox
        id={id}
        checked={isOn}
        onChange={handleToggle}
        type='checkbox'
      />
      <ToggleLabel
        htmlFor={id}
        $isOn={isOn}
        $offColor={offColor}
        $onColor={onColor}
      >
        <ToggleButton $isOn={isOn} $offColor={offColor} $onColor={onColor} />
      </ToggleLabel>
    </>
  );
};

export default Toggle;
