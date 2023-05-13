import { FunctionComponent, ReactElement } from 'react';

export type DropdownSizesT = 's' | 'm' | 'l';

export type DropdownPropsT = {
  Element: FunctionComponent<any>;
  size?: DropdownSizesT;
  children?: ReactElement | ReactElement[];
  menuProps?: any;
  menuSx?: any;
  buttonSx?: any;
};
