export type PasswordSizeT = 's' | 'm';
export type PasswordTypesT = 'error' | 'warning' | 'disabled' | 'default';

export type PasswordProps = {
  size?: PasswordSizeT;
  type?: PasswordTypesT;
  width?: string;
};
