import { SvgIcon } from '@mui/material';
import { IconProps } from './types';

export const SoundOn = ({ ...props }: IconProps) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M5 10a1 1 0 0 1 1-1h.803a4 4 0 0 0 2.44-.831L12 6.045v11.9L9.257 15.83A4 4 0 0 0 6.816 15H6a1 1 0 0 1-1-1v-4Zm-2 0a3 3 0 0 1 3-3h.803a2 2 0 0 0 1.22-.416L12.39 3.22a1 1 0 0 1 1.61.793v15.964a1 1 0 0 1-1.61.792l-4.354-3.353A2 2 0 0 0 6.816 17H6a3 3 0 0 1-3-3v-4Zm15.318 6.908c-.339.436-.345 1.065.046 1.456.39.39 1.028.393 1.378-.034A9.959 9.959 0 0 0 22 12a9.959 9.959 0 0 0-2.258-6.33c-.35-.427-.988-.425-1.378-.034-.39.39-.385 1.02-.046 1.456A7.965 7.965 0 0 1 20 12c0 1.85-.628 3.553-1.682 4.908Zm-1.43-8.388A5.973 5.973 0 0 1 18 12a5.973 5.973 0 0 1-1.112 3.48c-.32.45-.962.446-1.353.056-.39-.391-.376-1.02-.094-1.495.355-.598.559-1.295.559-2.041s-.204-1.444-.56-2.041c-.281-.475-.295-1.104.096-1.495.39-.39 1.031-.394 1.352.056Z"
    />
  </SvgIcon>
);
