import { SvgIcon } from '@mui/material';
import { IconProps } from './types';

export const ArrowLeft = ({ ...props }: IconProps) => (
  <SvgIcon {...props}>
    <path
      d="M1 8L15 8M1 8L8 15M1 8L8 1"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);
