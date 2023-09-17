export type ItemProps = {
  id: number;
  name: string;
  text: string;
  type: 'li' | 'button';
  to: string | null;
};

export type NavigationProps = {
  items: ItemProps[];
};
