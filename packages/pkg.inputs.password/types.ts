import { ReactNode } from 'react';

export type PasswordSizeT = 's' | 'm';
export type PasswordTypesT = 'error' | 'warning' | 'disabled' | 'default';
/*
  sign_in: enter password
  sign_up: setup password
*/
export type FiledTypeT = 'sign_in' | 'sign_up';

export type PasswordProps = {
  size?: PasswordSizeT;
  type?: PasswordTypesT;
  fieldType?: FiledTypeT;
  width?: string;
  errorWindow?: boolean;
  errorWindowContent?: string | ReactNode;
  sx?: any;
};
