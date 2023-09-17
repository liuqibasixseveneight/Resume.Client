import { type FC } from 'react';

import { Wrapper } from './Wrapper';
import { HomeHero } from '../../modules';
import { getTheme } from '../../../utils';

const Home: FC = () => {
  const theme = getTheme();
  const primaryBackground = theme?.palette?.primary?.background;

  return (
    <Wrapper id='home' $primaryBackground={primaryBackground}>
      <HomeHero />
    </Wrapper>
  );
};

export default Home;
