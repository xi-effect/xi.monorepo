import { SvgIcon } from '@mui/material';
import { IconProps } from './types';

export const H1 = ({ ...props }: IconProps) => (
  <SvgIcon {...props}>
    <path
      d="M3 12.18V18h2.48v-4.8h5V18h2.44V6.36h-2.44v4.8h-5v-4.8H3v5.82m13.19-4.908-1.429.908-.001 1.09v1.091l.33-.207 1.34-.84a33.972 33.972 0 0 1 1.03-.634c.011 0 .02 2.097.02 4.66V18h2.44V6.36l-1.15.002-1.15.003-1.43.907"
      fillRule="evenodd"
    />
  </SvgIcon>
);
