import { SvgIcon } from '@mui/material';
import { IconProps } from './types';

export const Places = ({ ...props }: IconProps) => (
  <SvgIcon {...props}>
    <path
      d="M10.643 4.069a1.066 1.066 0 0 0-.577.591c-.057.168-.066.408-.066 1.767V8H6.427c-4.022 0-3.814-.015-4.128.299C1.979 8.619 2 8.217 2 14c0 5.783-.021 5.381.299 5.701.326.326-.563.299 9.701.299 10.264 0 9.375.027 9.701-.299.324-.324.299.322.299-7.701s.025-7.377-.299-7.701c-.32-.32.085-.299-5.718-.296-4.569.003-5.183.01-5.34.066M20 7v1h-2v2h2v2h-2v2h2v4h-4v-2h-2v2h-2V6h8v1m-6 2v1h2V8h-2v1m-4 5v4H8v-2H6v2H4v-8h6v4m-4-1v1h2v-2H6v1m8 0v1h2v-2h-2v1"
      fillRule="evenodd"
    />
  </SvgIcon>
);
