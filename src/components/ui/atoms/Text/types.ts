import { ReactNode } from 'react';

export type TextProps = {
  children: ReactNode;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
};

export type WrapperProps = {
  $paddingBottom?: string | number;
  $paddingLeft?: string | number;
  $paddingRight?: string | number;
  $paddingTop?: string | number;
  $textSecondary: string;
};
