import { Box } from '@mui/material';

export type WindowT = {
  [key: string]: any;
};

export const Window = ({ ...props }: WindowT) => (
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
        d="M2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7ZM20 8H4V17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17V8Z"
        fill="white"
      />
    </svg>
  </Box>
);
