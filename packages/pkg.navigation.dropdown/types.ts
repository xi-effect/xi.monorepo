import { ReactElement } from 'react';

export type DropdownSizesT = 's' | 'm' | 'l';

export type DropdownPropsT = {
  name: string;
  size?: DropdownSizesT;
  children?: ReactElement;
};
