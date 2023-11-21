import { SvgIcon } from '@mui/material';
import { IconProps } from './types';

export const SoundOff = ({ ...props }: IconProps) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M5 10a1 1 0 0 1 1-1h.803a4 4 0 0 0 2.44-.831L12 6.045v11.9L9.257 15.83A4 4 0 0 0 6.816 15H6a1 1 0 0 1-1-1v-4Zm-2 0a3 3 0 0 1 3-3h.803a2 2 0 0 0 1.22-.416L12.39 3.22a1 1 0 0 1 1.61.793v15.964a1 1 0 0 1-1.61.792l-4.354-3.353A2 2 0 0 0 6.816 17H6a3 3 0 0 1-3-3v-4Z"
    />
  </SvgIcon>
);
