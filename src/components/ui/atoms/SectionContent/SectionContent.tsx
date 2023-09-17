import { type FC } from 'react';

import { SectionContentProps } from './types';
import { Wrapper } from './Wrapper';
import { InnerWrapper } from './InnerWrapper';

const SectionContent: FC<SectionContentProps> = ({
  sectionContent,
  contentCenter,
  contentLeft,
  contentRight,
}) => {
  return (
    <Wrapper>
      <InnerWrapper
        $contentCenter={contentCenter}
        $contentLeft={contentLeft}
        $contentRight={contentRight}
      >
        {sectionContent}
      </InnerWrapper>
    </Wrapper>
  );
};

export default SectionContent;
