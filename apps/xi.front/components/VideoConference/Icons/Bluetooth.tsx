import { Box } from '@mui/material';

export type BluetoothT = {
  color?: string;
  [key: string]: any;
};

export const Bluetooth = ({ ...props }: BluetoothT) => (
  <Box
    sx={{
      svg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        fill: '#fff',
      },
      height: '22px',
      width: '16px',
      ...props,
    }}
  >
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_6138_2841)">
        <path
          d="M9.49333 8.00671L11.04 9.55337C11.2267 9.07337 11.3333 8.54671 11.3333 8.00004C11.3333 7.45337 11.2267 6.94004 11.0467 6.46004L9.49333 8.00671ZM13.02 4.47337L12.18 5.31337C12.6 6.12004 12.8333 7.02671 12.8333 7.99337C12.8333 8.96004 12.5933 9.87337 12.18 10.6734L12.98 11.4734C13.6267 10.4467 14.0067 9.23337 14.0067 7.93337C14 6.67337 13.64 5.48671 13.02 4.47337ZM10.4733 5.14004L6.66667 1.33337H6V6.39337L2.94 3.33337L2 4.27337L5.72667 8.00004L2 11.7267L2.94 12.6667L6 9.60671V14.6667H6.66667L10.4733 10.86L7.60667 8.00004L10.4733 5.14004ZM7.33333 3.88671L8.58667 5.14004L7.33333 6.39337V3.88671ZM8.58667 10.86L7.33333 12.1134V9.60671L8.58667 10.86Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_6138_2841">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </Box>
);
