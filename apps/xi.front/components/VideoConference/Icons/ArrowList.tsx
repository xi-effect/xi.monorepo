import { Box } from '@mui/material';

export type ArrowListT = {
  [key: string]: any;
};

export const ArrowList = ({ ...props }: ArrowListT) => (
  <Box
    sx={{
      svg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
      height: '13px',
      width: '13px',
      ...props,
    }}
  >
    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.33337 1L6.00004 5.66667L10.6667 1"
        stroke="#999999"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Box>
);
