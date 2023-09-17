import { FC } from 'react';

import { SectionTitleProps } from './types';
import { Wrapper } from './Wrapper';
import { InnerWrapper } from './InnerWrapper';
import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { getTheme } from '../../../../utils';

const SectionTitle: FC<SectionTitleProps> = ({
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  sectionTitle: { title, subtitle },
  titleCenter,
  titleLeft,
  titleRight,
}) => {
  const theme = getTheme();
  const textSecondary = theme?.palette?.secondary?.text;

  return (
    <Wrapper
      $paddingBottom={paddingBottom}
      $paddingLeft={paddingLeft}
      $paddingRight={paddingRight}
      $paddingTop={paddingTop}
    >
      <InnerWrapper
        $titleCenter={titleCenter}
        $titleLeft={titleLeft}
        $titleRight={titleRight}
      >
        <Title
          $textSecondary={textSecondary}
          $titleCenter={titleCenter}
          $titleLeft={titleLeft}
          $titleRight={titleRight}
        >
          {title}
        </Title>
        {subtitle && (
          <Subtitle $textSecondary={textSecondary}>{subtitle}</Subtitle>
        )}
      </InnerWrapper>
    </Wrapper>
  );
};

export default SectionTitle;
