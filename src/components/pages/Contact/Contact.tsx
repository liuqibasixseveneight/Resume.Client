import { type FC } from 'react';

import { Section } from '../../ui';
import { getTheme } from '../../../utils';

const Contact: FC = () => {
  const theme = getTheme();
  const primaryBackground = theme?.palette?.primary?.background;

  return (
    <Section
      id='contact'
      backgroundColor={primaryBackground}
      titleLeft
      sectionTitle={{
        title: '/04 Contact',
        subtitle: 'Drop me a message',
      }}
    />
  );
};

export default Contact;
