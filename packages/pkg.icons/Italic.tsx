import { SvgIcon } from '@mui/material';
import { IconProps } from './types';

export const Italic = ({ ...props }: IconProps) => (
  <SvgIcon {...props}>
    <path
      d="M10.381 6.09a29.798 29.798 0 0 0-.221 1.073c0 .021.341.037.803.037.745 0 .801.005.781.07-.011.039-.436 2.167-.944 4.73a784.594 784.594 0 0 1-.945 4.73c-.018.064-.093.07-.818.07-.438 0-.797.008-.797.019 0 .01-.054.271-.12.581-.066.31-.12.571-.12.581 0 .011 1.035.019 2.299.019h2.299l.021-.09c.067-.292.221-1.042.221-1.073 0-.021-.341-.037-.803-.037-.745 0-.801-.005-.781-.07.011-.038.436-2.167.944-4.73.508-2.563.933-4.691.944-4.73.019-.064.094-.07.819-.07.438 0 .797-.008.797-.019 0-.01.054-.271.12-.581.066-.31.12-.571.12-.581C15 6.008 13.965 6 12.701 6h-2.299l-.021.09"
      fill="#101010"
      fillRule="evenodd"
    />
  </SvgIcon>
);
