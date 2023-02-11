import { SvgIcon } from '@mui/material';

export type FolderProps = {
  [key: string]: any;
};

export const Folder = ({ ...props }: FolderProps) => (
  <SvgIcon {...props}>
    <path
      d="M4.5 4.059c-.683.151-1.316.557-1.805 1.161a3.084 3.084 0 0 0-.615 1.201C2.002 6.725 2 6.871 2 12s.002 5.275.08 5.579c.282 1.102 1.238 2.059 2.339 2.341.309.079.435.08 7.581.08 7.146 0 7.272-.001 7.581-.08 1.098-.281 2.058-1.241 2.339-2.339.078-.305.08-.439.08-4.581s-.002-4.276-.08-4.581c-.263-1.026-1.098-1.917-2.143-2.287l-.317-.112-3.721-.011-3.722-.011-.998-.999L10.021 4l-2.641.003c-2.03.003-2.695.016-2.88.056M10.18 7l.999 1h3.961c2.604 0 4.011.015 4.109.042.211.059.469.268.61.496l.121.196v8.532l-.121.196c-.141.228-.399.437-.61.496-.1.028-2.491.041-7.289.041-6.824-.001-7.147-.004-7.3-.074a1.168 1.168 0 0 1-.531-.479l-.109-.186V6.734l.12-.193c.066-.106.185-.246.265-.31.284-.229.267-.227 2.615-.229L9.181 6l.999 1"
      fillRule="evenodd"
    />
  </SvgIcon>
);