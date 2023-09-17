import { FC } from 'react';
import { Link } from 'react-scroll';

import { NavigationItemProps } from './types';
import { Wrapper } from './Wrapper';
import { getTheme } from '../../../../utils';

const NavigationItem: FC<NavigationItemProps> = ({
  id,
  name,
  text,
  to,
  type,
}) => {
  const theme = getTheme();

  const { text: textPrimary, background: backgroundPrimary } =
    theme?.palette?.primary;
  const { text: textSecondary } = theme?.palette?.secondary;

  const hasToAddress = !!to;

  if (hasToAddress) {
    return (
      <Link spy={true} smooth={true} offset={0} duration={500} to={to}>
        <Wrapper
          key={`${id}-${name}`}
          $type={type}
          $textPrimary={textPrimary}
          $textSecondary={textSecondary}
          $backgroundPrimary={backgroundPrimary}
        >
          {text}
        </Wrapper>
      </Link>
    );
  }

  return (
    <Wrapper
      key={`${id}-${name}`}
      $type={type}
      $textPrimary={textPrimary}
      $textSecondary={textSecondary}
      $backgroundPrimary={backgroundPrimary}
    >
      {text}
    </Wrapper>
  );
};

export default NavigationItem;
