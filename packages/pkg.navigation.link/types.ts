import React, { FunctionComponent } from 'react';

export type LinkSizes = 's' | 'm' | 'l';
export type LinkTypesT = 'link' | 'action';

export type LinkProps = {
  href?: string;
  onClick?: (e?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void | Promise<any>;
  size?: LinkSizes;
  color?: string;
  icon?: FunctionComponent<any>;
  disabled?: boolean;
  /* styles when link was visited */
  visitedStyles?: any;
  /* styles when link is hovered or focused */
  hoverStyles?: any;
  // default value - true
  underline?: boolean;
  sx?: any;
  children: React.ReactNode;
};
