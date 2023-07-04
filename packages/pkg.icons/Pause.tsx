import { SvgIcon } from '@mui/material';
import { IconProps } from './types';

export const Pause = ({ ...props }: IconProps) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M9 7a1 1 0 0 0-2 0v10a1 1 0 1 0 2 0V7Zm8 0a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0V7Z"
    />
  </SvgIcon>
);
