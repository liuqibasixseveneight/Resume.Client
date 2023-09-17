import { type FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Wrapper } from './Wrapper';
import { InnerWrapper } from './InnerWrapper';
import { Navigation, Toggle } from '../../../ui';
import { navigationItems } from './navigationItems';
import { getTheme, getIsGlobalThemeDark } from '../../../../utils';
import { setIsGlobalThemeDark } from '../../../../redux/slices/globalThemeSlice';

const Header: FC = () => {
  const dispatch = useDispatch();

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

  const isGlobalThemeDark = getIsGlobalThemeDark();
  const theme = getTheme();
  const textSecondary = theme?.palette?.secondary?.text;

  const toggleTheme = () => {
    dispatch(setIsGlobalThemeDark());
  };

  return (
    <Wrapper $isHeaderVisible={isHeaderVisible} $textSecondary={textSecondary}>
      <InnerWrapper>
        <Toggle
          id={'header-themeToggle'}
          isOn={isGlobalThemeDark}
          handleToggle={toggleTheme}
          onColor='purple'
        />
        <Navigation items={navigationItems} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Header;
