import { SvgIcon } from '@mui/material';
import { IconProps } from './types';

export const Window = ({ sx, ...restProps }: IconProps) => (
  <SvgIcon
    sx={{
      width: '24px',
      height: '24px',
      ...sx,
    }}
    viewBox="0 0 24 24"
    {...restProps}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7ZM20 8H4V17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17V8Z"
    />
  </SvgIcon>
);
