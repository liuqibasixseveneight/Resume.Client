import { type FC } from 'react';

import { Wrapper } from './Wrapper';
import { NavigationProps } from './types';
import { NavigationItem } from '../../../ui';

const Navigation: FC<NavigationProps> = ({ items }) => {
  return (
    <Wrapper>
      <ul>
        {items?.map((item) => (
          <NavigationItem key={`${item?.id}-${item?.name}`} {...item} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default Navigation;
