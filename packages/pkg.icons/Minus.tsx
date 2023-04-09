import { SvgIcon } from '@mui/material';
import { IconProps } from './types';

export const Minus = ({ ...props }: IconProps) => (
  <SvgIcon {...props}>
    <path
      d="M4.252 11.078C4.03 11.213 4 11.325 4 12s.03.787.252.922c.126.076.261.078 7.748.078s7.622-.002 7.748-.078c.222-.135.252-.247.252-.922s-.03-.787-.252-.922C19.622 11.002 19.487 11 12 11s-7.622.002-7.748.078"
      fillRule="evenodd"
    />
  </SvgIcon>
);
