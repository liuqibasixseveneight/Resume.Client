import { FC } from 'react';

import { SectionProps } from './types';
import { Wrapper } from './Wrapper';
import { SectionContent, SectionTitle } from '../../../ui';
import { getTheme } from '../../../../utils';

const Section: FC<SectionProps> = ({
  backgroundColor,
  id,
  minHeight,
  sectionContent,
  contentCenter,
  contentLeft,
  contentRight,
  sectionTitle,
  titleCenter,
  titleLeft,
  titleRight,
  titlePaddingBottom,
  titlePaddingLeft,
  titlePaddingRight,
  titlePaddingTop,
}) => {
  const theme = getTheme();
  const backgroundPrimary = theme?.palette?.primary?.background;

  return (
    <Wrapper
      id={id}
      $background={backgroundColor ?? backgroundPrimary}
      $minHeight={minHeight}
    >
      {!!sectionTitle && (
        <SectionTitle
          sectionTitle={sectionTitle}
          titleCenter={titleCenter}
          titleLeft={titleLeft}
          titleRight={titleRight}
          paddingBottom={titlePaddingBottom}
          paddingLeft={titlePaddingLeft}
          paddingRight={titlePaddingRight}
          paddingTop={titlePaddingTop}
        />
      )}

      {!!sectionContent && (
        <SectionContent
          contentCenter={contentCenter}
          contentLeft={contentLeft}
          contentRight={contentRight}
          sectionContent={sectionContent}
        />
      )}
    </Wrapper>
  );
};

export default Section;
