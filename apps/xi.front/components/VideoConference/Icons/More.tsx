import { Box } from '@mui/material';

export type MoreT = {
  [key: string]: any;
};

export const More = ({ ...props }: MoreT) => (
  <Box
    sx={{
      svg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
      height: '22px',
      width: '28px',
      ...props,
    }}
  >
    <svg width="28" height="8" viewBox="0 0 28 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.00002 0.666748C2.16669 0.666748 0.666687 2.16675 0.666687 4.00008C0.666687 5.83342 2.16669 7.33342 4.00002 7.33342C5.83335 7.33342 7.33335 5.83342 7.33335 4.00008C7.33335 2.16675 5.83335 0.666748 4.00002 0.666748ZM24 0.666748C22.1667 0.666748 20.6667 2.16675 20.6667 4.00008C20.6667 5.83342 22.1667 7.33342 24 7.33342C25.8334 7.33342 27.3334 5.83342 27.3334 4.00008C27.3334 2.16675 25.8334 0.666748 24 0.666748ZM14 0.666748C12.1667 0.666748 10.6667 2.16675 10.6667 4.00008C10.6667 5.83342 12.1667 7.33342 14 7.33342C15.8334 7.33342 17.3334 5.83342 17.3334 4.00008C17.3334 2.16675 15.8334 0.666748 14 0.666748Z"
        fill="white"
      />
    </svg>
  </Box>
);
