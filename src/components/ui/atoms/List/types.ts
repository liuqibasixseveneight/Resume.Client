import { ReactNode } from 'react';

export type ListItem = {
  id: string | number;
  content: ReactNode;
};

export type ListProps = {
  listItems: ListItem[];
} & (
  | { isOrdered: true; isUnordered?: never }
  | { isUnordered: true; isOrdered?: never }
);
