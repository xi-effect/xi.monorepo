import { SvgIcon } from '@mui/material';
import { IconProps } from './types';

export const ChevronBottom = ({ ...props }: IconProps) => (
  <SvgIcon {...props}>
    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.33301 1L5.99967 5.66667L10.6663 1"
        stroke="#9F9F9F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </SvgIcon>
);
