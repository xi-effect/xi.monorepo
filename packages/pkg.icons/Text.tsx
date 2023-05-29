import { SvgIcon } from '@mui/material';
import { IconProps } from './types';

export const Text = ({ ...props }: IconProps) => (
  <SvgIcon {...props}>
    <path
      d="M2.56 7.38V8.4h3.56V18h2.44V8.4h3.56V6.36H2.56v1.02m10.24 2.839v.94l1.39.01 1.39.011.01 3.41.01 3.41h2.28l.01-3.41.01-3.41 1.39-.011 1.39-.01V9.28H12.8v.939"
      fillRule="evenodd"
    />
  </SvgIcon>
);
