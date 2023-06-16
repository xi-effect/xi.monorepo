import { SvgIcon } from '@mui/material';
import { IconProps } from './types';

export const ArrowRight = ({ ...props }: IconProps) => (
  <SvgIcon {...props}>
    <path
      d="M15 8L1 8M15 8L8 1M15 8L8 15"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);
