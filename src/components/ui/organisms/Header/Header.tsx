import { FC, useState, useEffect } from 'react';

import { Wrapper } from './Wrapper';
import { InnerWrapper } from './InnerWrapper';
import { Navigation } from '../../../ui';
import { navigationItems } from './navigationItems';
import { getTheme } from '../../../../utils';

const Header: FC = () => {
  const [previousScrollPosition, setPreviousScrollPosition] =
    useState<number>(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window?.scrollY;
      const isScrollingDown = previousScrollPosition < currentScrollPosition;

      setPreviousScrollPosition(currentScrollPosition);
      setIsHeaderVisible(!isScrollingDown || currentScrollPosition === 0);
    };

    window?.addEventListener('scroll', handleScroll);

    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, [previousScrollPosition]);

  const theme = getTheme();
  const textSecondary = theme?.palette?.secondary?.text;

  return (
    <Wrapper $isHeaderVisible={isHeaderVisible} $textSecondary={textSecondary}>
      <InnerWrapper>
        <Navigation items={navigationItems} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Header;
