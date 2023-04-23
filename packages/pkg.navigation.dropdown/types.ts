import { MenuProps } from '@mui/material';
import { FunctionComponent, ReactElement } from 'react';

export type DropdownSizesT = 's' | 'm' | 'l';

export type DropdownPropsT = {
  Element: FunctionComponent<any>;
  size?: DropdownSizesT;
  children?: ReactElement;
  menuProps?: MenuProps;
  menuSx?: any;
};
