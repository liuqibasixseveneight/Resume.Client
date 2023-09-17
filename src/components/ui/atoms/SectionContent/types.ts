import { ReactNode } from 'react';

export type SectionContentProps = {
  sectionContent: ReactNode;
  contentCenter?: boolean;
  contentLeft?: boolean;
  contentRight?: boolean;
};

export type InnerWrapperProps = {
  $contentCenter?: boolean;
  $contentLeft?: boolean;
  $contentRight?: boolean;
};
