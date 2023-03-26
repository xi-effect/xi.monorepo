import { ChangeEvent } from 'react';

export type SizeType = 'large' | 'medium' | 'small';
export type ColorType = 'primary' | 'error' | 'warning';

export type RadioProps = {
  size?: SizeType;
  color?: ColorType;
  label?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (checked: boolean, event?: ChangeEvent<HTMLInputElement>) => void;
};

export type IconProps = {
  color: ColorType;
  sizes: {
    icon: { width: string; height: string };
    checkedIcon: { width: string; height: string };
  };
};
