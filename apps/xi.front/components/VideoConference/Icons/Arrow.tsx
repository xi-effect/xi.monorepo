import { SvgIcon } from '@mui/material';

export type ArrowT = {
  [key: string]: any;
};

export const Arrow = ({ ...props }: ArrowT) => (
  <SvgIcon {...props}>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 8L15 8M1 8L8 15M1 8L8 1"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </SvgIcon>
);
