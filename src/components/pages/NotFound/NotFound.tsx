import { type FC } from 'react';

import { Wrapper } from './Wrapper';
import { InnerWrapper } from './InnerWrapper';
import { SectionTitle } from '../../ui';
import { getTheme } from '../../../utils';

const NotFound: FC = () => {
  const theme = getTheme();
  const primaryBackground = theme?.palette?.primary?.background;

  return (
    <Wrapper $primaryBackground={primaryBackground}>
      <InnerWrapper>
        <SectionTitle
          titleCenter
          sectionTitle={{
            title: '404 Not Found',
            subtitle: 'Unfortunately this page does not exist',
          }}
        />
      </InnerWrapper>
    </Wrapper>
  );
};

export default NotFound;
