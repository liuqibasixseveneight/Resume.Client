import { FC } from 'react';

import { TextProps } from './types';
import { Wrapper } from './Wrapper';
import { getTheme } from '../../../../utils';

const Text: FC<TextProps> = ({
  children,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
}) => {
  const theme = getTheme();
  const textSecondary = theme?.palette?.secondary?.text;

  return (
    <Wrapper
      $paddingBottom={paddingBottom}
      $paddingLeft={paddingLeft}
      $paddingRight={paddingRight}
      $paddingTop={paddingTop}
      $textSecondary={textSecondary}
    >
      {children}
    </Wrapper>
  );
};

export default Text;
