import { type FC } from 'react';

import { Wrapper } from './Wrapper';
import { getTheme } from '../../../../utils';

const Footer: FC = () => {
  const theme = getTheme();
  const textPrimary = theme?.palette?.primary?.text;

  return (
    <Wrapper id='footer' $textPrimary={textPrimary}>
      <h1>Footer</h1>
    </Wrapper>
  );
};

export default Footer;
