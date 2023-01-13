import { SvgIcon } from '@mui/material';

export type AnnounceProps = {
  [key: string]: any;
};

export const Announce = ({ ...props }: AnnounceProps) => (
  <SvgIcon {...props}>
    <path
      d="m12.86 5.179-4.88.819L6.4 6c-1.729.002-1.947.023-2.331.228-.268.143-.698.573-.841.841-.224.419-.227.466-.227 3.931s.003 3.512.227 3.931c.061.115.228.327.371.472.321.324.657.497 1.091.564l.31.047v.603c.001 1.235.199 1.783.9 2.483.72.72 1.238.899 2.6.899 1.016 0 1.461-.087 1.98-.388.337-.195.936-.794 1.131-1.131.247-.426.388-.981.389-1.53 0-.148.009-.27.019-.27.011 0 1.321.217 2.91.483 2.65.443 2.92.481 3.235.459.771-.054 1.383-.329 1.92-.861.5-.496.77-1.012.871-1.669.063-.401.063-7.783 0-8.184a2.91 2.91 0 0 0-.9-1.706 2.913 2.913 0 0 0-1.935-.822c-.356-.019-.687.031-5.26.799m5.52 1.256c.241.109.402.264.517.494l.103.207-.001 3.862c-.001 3.651-.005 3.871-.074 4.022-.164.36-.53.62-.874.62-.133 0-8.437-1.359-8.941-1.464L9 14.154v-6.31l.13-.024c1.194-.22 8.71-1.453 8.87-1.455a.95.95 0 0 1 .38.07M7 11v3H5V8h2v3m1.974 5.169 1.034.17-.014.481c-.013.439-.023.496-.125.669a1.038 1.038 0 0 1-.539.454c-.208.074-1.452.074-1.66 0a1.038 1.038 0 0 1-.539-.454c-.107-.182-.111-.212-.124-.839L6.993 16l.474-.001c.37 0 .697.037 1.507.17"
      fillRule="evenodd"
    />
  </SvgIcon>
);
