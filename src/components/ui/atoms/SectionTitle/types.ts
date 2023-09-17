export type SectionTitleProps = {
  sectionTitle: {
    title: string;
    subtitle?: string;
  };
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingTop?: number | string;
  titleCenter?: boolean;
  titleLeft?: boolean;
  titleRight?: boolean;
};

export type WrapperProps = {
  $paddingBottom?: number | string;
  $paddingLeft?: number | string;
  $paddingRight?: number | string;
  $paddingTop?: number | string;
};

export type InnerWrapperProps = {
  $titleCenter?: boolean;
  $titleLeft?: boolean;
  $titleRight?: boolean;
};

export type TitleProps = {
  $textSecondary: string;
  $titleCenter?: boolean;
  $titleLeft?: boolean;
  $titleRight?: boolean;
};

export type SubtitleProps = {
  $textSecondary: string;
};
