import { ReactNode } from 'react';

export type SectionProps = {
  backgroundColor?: string;
  id?: string;
  minHeight?: string | number;
  sectionContent?: ReactNode;
  contentCenter?: boolean;
  contentLeft?: boolean;
  contentRight?: boolean;
  sectionTitle?: {
    title: string;
    subtitle?: string;
  };
  titleCenter?: boolean;
  titleLeft?: boolean;
  titleRight?: boolean;
  titlePaddingBottom?: string | number;
  titlePaddingLeft?: string | number;
  titlePaddingRight?: string | number;
  titlePaddingTop?: string | number;
};

export type WrapperProps = {
  $background: string;
  $minHeight?: string | number;
};
