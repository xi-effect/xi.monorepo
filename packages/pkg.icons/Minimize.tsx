import { SvgIcon } from '@mui/material';
import { IconProps } from './types';

export const Minimize = ({ ...props }: IconProps) => (
  <SvgIcon {...props}>
    <path d="M10 20v-4a2 2 0 0 0-2-2H4v-2h4a4 4 0 0 1 4 4v4h-2ZM14 4v4a2 2 0 0 0 2 2h4v2h-4a4 4 0 0 1-4-4V4h2ZM10 20h2a1 1 0 1 1-2 0ZM4 12v2a1 1 0 1 1 0-2ZM14 4h-2a1 1 0 1 1 2 0ZM20 12v-2a1 1 0 1 1 0 2Z" />
  </SvgIcon>
);
