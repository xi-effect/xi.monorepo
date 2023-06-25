import { ReactNode } from 'react';

export type PasswordSizeT = 's' | 'm';
export type PasswordTypesT = 'error' | 'warning' | 'disabled' | 'default';
/*
  login: enter password
  setup: setup password
*/
export type FiledTypeT = 'login' | 'setup';

export type PasswordProps = {
  size?: PasswordSizeT;
  type?: PasswordTypesT;
  fieldType?: FiledTypeT;
  width?: string;
  errorWindow?: boolean;
  errorWindowContent?: string | ReactNode;
};
