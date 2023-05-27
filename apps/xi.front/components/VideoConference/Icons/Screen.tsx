import { Box } from '@mui/material';

export type ScreenT = {
  [key: string]: any;
};

export const Screen = ({ ...props }: ScreenT) => (
  <Box
    sx={{
      svg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
      height: '24px',
      width: '24px',
      ...props,
    }}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 6H17C17.5523 6 18 6.3473 18 7V13.9032C18 14.5559 17.5523 15 17 15H7C6.44772 15 6 14.6527 6 14V7C6 6.3473 6.44771 6 7 6ZM4 7C4 5.0419 5.34315 4 7 4H17C18.6569 4 20 5.0419 20 7V13.9032C20 15.8613 18.6569 17 17 17H7C5.34315 17 4 15.9581 4 14V7ZM3 18C2.44772 18 2 18.4477 2 19C2 19.5523 2.44772 20 3 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18H3Z"
        fill="white"
      />
    </svg>
  </Box>
);
