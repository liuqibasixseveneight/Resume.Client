import { type FC } from 'react';

import { Section } from '../../ui';
import { getTheme } from '../../../utils';

const Portfolio: FC = () => {
  const theme = getTheme();
  const primaryBackground = theme?.palette?.primary?.background;

  return (
    <Section
      id='portfolio'
      backgroundColor={primaryBackground}
      titleRight
      sectionTitle={{
        title: '/03 Portfolio',
        subtitle: 'A glimpse into my projects',
      }}
    />
  );
};

export default Portfolio;
