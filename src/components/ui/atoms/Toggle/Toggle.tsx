import { type FC } from 'react';

import { ToggleProps } from './types';
import { ToggleCheckbox } from './ToggleCheckbox';
import { ToggleLabel } from './ToggleLabel';
import { ToggleButton } from './ToggleButton';

const Toggle: FC<ToggleProps> = ({ id, isOn, handleToggle, onColor }) => {
  const labelBackground = isOn ? onColor : 'transparent';

  return (
    <>
      <ToggleCheckbox
        id={id}
        checked={isOn}
        onChange={handleToggle}
        type='checkbox'
      />
      <ToggleLabel htmlFor={id} style={{ background: labelBackground }}>
        <ToggleButton />
      </ToggleLabel>
    </>
  );
};

export default Toggle;
