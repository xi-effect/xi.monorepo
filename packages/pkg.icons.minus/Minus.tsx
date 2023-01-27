import { SvgIcon } from '@mui/material';

export type MinusProps = {
  [key: string]: any;
};

export const Minus = ({ ...props }: MinusProps) => (
  <SvgIcon {...props}>
    <rect x="4" y="11" width="16" height="2" rx="0.5" fill="inherit" />
  </SvgIcon>
);
