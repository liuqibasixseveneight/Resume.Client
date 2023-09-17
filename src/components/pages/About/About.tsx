import { FC } from 'react';

import { Section } from '../../ui';
import { AboutSectionContent } from '../../modules';
import { getTheme } from '../../../utils';

const About: FC = () => {
  const theme = getTheme();
  const primaryBackground = theme?.palette?.primary?.background;

  return (
    <Section
      id='about'
      backgroundColor={primaryBackground}
      titleLeft
      titlePaddingTop='4rem'
      sectionTitle={{
        title: '/02 About',
        subtitle: 'Creating intuitive web experiences',
      }}
      sectionContent={<AboutSectionContent />}
    />
  );
};

export default About;
