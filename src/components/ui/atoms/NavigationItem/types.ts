export type NavigationItemProps = {
  id: number;
  name: string;
  text: string;
  type: 'li' | 'button';
  to: string | null;
};

export type WrapperProps = {
  $textPrimary: string;
  $textSecondary: string;
  $backgroundPrimary: string;
  $type: 'li' | 'button';
};
