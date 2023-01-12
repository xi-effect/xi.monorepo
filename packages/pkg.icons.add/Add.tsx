import { SvgIcon } from '@mui/material';

export type AddProps = {
  [key: string]: any;
};

export const Add = ({ ...props }: AddProps) => (
  <SvgIcon {...props}>
    <path
      d="M11.634 4.063c-.251.077-.559.361-.679.626l-.095.211-.011 2.99-.011 2.99H7.849l-2.989.001-.202.094A1.18 1.18 0 0 0 4 12c0 .427.288.863.689 1.045l.211.095 2.969.011 2.969.011.011 2.969.011 2.969.095.211c.182.401.618.689 1.045.689.427 0 .863-.288 1.045-.689l.095-.211.011-2.969.011-2.969 2.969-.011 2.969-.011.211-.095c.401-.182.689-.618.689-1.045a1.18 1.18 0 0 0-.658-1.025l-.202-.094-2.989-.001h-2.989l-.011-2.99-.011-2.99-.095-.211a1.16 1.16 0 0 0-1.411-.626"
      fillRule="evenodd"
    />
  </SvgIcon>
);
