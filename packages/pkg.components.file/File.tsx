import { Stack, Typography } from '@mui/material';
import Image from 'next/image';

export type FileProps = {
  name: string; // The name of the file
  icon?: string; // File icon (screenshot/image) url
  url: string; // File url
  size: number; // File size in bytes
  showCloseIcon?: boolean;
};

const formatSize = (size: number): string => {
  const sizes = ['байт', 'Кб', 'Мб', 'Гб', 'Тб'];
  // coefficient bytes to Kb
  const k = 1000;
  const n = Math.floor(Math.log10(size) / Math.log10(k));
  const formattedSizeNum = Math.ceil(size / k ** n);
  const formattedSize = `${formattedSizeNum} ${sizes[n]}`;
  return formattedSize;
};

export const File = ({ name, url, size }: FileProps) => (
  <Stack>
    <Typography>{name}</Typography>
    <Image src={url} alt="test" width={100} height={100} />
    <Typography>{formatSize(size)}</Typography>
  </Stack>
);

