import { FC } from 'react';

import { Wrapper } from './Wrapper';
import { InnerWrapper } from './InnerWrapper';
import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { getTheme } from '../../../../utils';

const HomeHero: FC = () => {
  const theme = getTheme();
  const textSecondary = theme?.palette?.secondary?.text;

  return (
    <Wrapper>
      <InnerWrapper>
        <Title $textSecondary={textSecondary}>{'Joshua <Riz /> Layton'}</Title>
        <Subtitle $textSecondary={textSecondary}>Frontend Developer</Subtitle>
      </InnerWrapper>
    </Wrapper>
  );
};

export default HomeHero;
