import React from 'react';
import { Box } from '@mui/material';
import { Microphone } from './Microphone';

export type MicrophoneMuteProps = {
  color?: string;
  [key: string]: any;
};

export const MicrophoneMute = ({ color, ...props }: MicrophoneMuteProps) => (
  <Box width="12px" position="relative" {...props}>
    <Microphone color={color} />

    <Box position="absolute" top="-1px" left="-2px">
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.6663 1.33325L1.33301 14.6666"
          stroke="#F42D2D"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </Box>
  </Box>
);
