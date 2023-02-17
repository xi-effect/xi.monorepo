import { SvgIcon } from '@mui/material';

export type LinkProps = {
  [key: string]: any;
};

export const Link = ({ ...props }: LinkProps) => (
  <SvgIcon {...props} viewBox="0 0 16 16">
    <path
      d="M9.856 2.35a3.418 3.418 0 0 0-1.575.693c-.103.083-.632.597-1.174 1.141l-.987.989.466.467.466.466.974-.969a33.633 33.633 0 0 1 1.119-1.082 1.936 1.936 0 0 1 1.228-.404c.319.001.604.07.907.221.184.092.274.16.481.367.207.207.275.297.367.481.152.306.219.583.219.91 0 .37-.062.631-.225.952-.114.225-.271.399-1.259 1.392l-.969.974.467.466.467.466 1.075-1.08c1.136-1.141 1.234-1.257 1.456-1.72a3.41 3.41 0 0 0 .172-2.445 3.375 3.375 0 0 0-2.166-2.166 3.786 3.786 0 0 0-1.509-.119M7.52 7.533l-1.88 1.88.473.474.474.473 1.886-1.887 1.887-1.886-.467-.467a12.282 12.282 0 0 0-.479-.467c-.008 0-.86.846-1.894 1.88m-3.417-.34c-1.188 1.194-1.317 1.352-1.543 1.9a3.128 3.128 0 0 0-.242 1.282 3.308 3.308 0 0 0 3.317 3.307c.543 0 .99-.102 1.472-.334.437-.212.626-.373 1.733-1.481l1.04-1.04-.466-.466-.465-.466-1.015 1.007c-.995.988-1.166 1.137-1.464 1.273-.284.13-.553.179-.908.165-.55-.021-.923-.182-1.311-.567a1.97 1.97 0 0 1-.508-.8c-.068-.194-.074-.248-.075-.6-.001-.439.045-.642.217-.96.143-.264.213-.341 1.253-1.387l.968-.974-.46-.459c-.253-.253-.466-.46-.473-.46-.008 0-.489.477-1.07 1.06"
      fill="inherit"
      fillRule="evenodd"
    />
  </SvgIcon>
);
