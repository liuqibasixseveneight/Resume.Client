import { type FC } from 'react';

import { ListProps } from './types';
import { Text } from '../../../ui';
import { OrderedList } from './OrderedList';
import { UnorderedList } from './UnorderedList';

const List: FC<ListProps> = ({ listItems, isOrdered, isUnordered }) => {
  if (isOrdered) {
    return (
      <OrderedList>
        {listItems?.map((listItem) => (
          <li key={listItem?.id}>
            <Text>{listItem?.content}</Text>
          </li>
        ))}
      </OrderedList>
    );
  }

  if (isUnordered) {
    return (
      <UnorderedList>
        {listItems?.map((listItem) => (
          <li key={listItem?.id}>
            <Text>{listItem?.content}</Text>
          </li>
        ))}
      </UnorderedList>
    );
  }

  return null;
};

export default List;
