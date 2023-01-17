import { File as FileIcon } from 'pkg.icons.file';
import { Close } from 'pkg.icons.close';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export type FileProps = {
  /* File name */
  name: string;
  /* File icon (screenshot/image) url */
  icon?: string;
  /* File url */
  url: string;
  /* File size in bytes */
  size: number;
  hideCloseIcon?: boolean;
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

export const File = ({ name, size, icon, hideCloseIcon, url }: FileProps) => (
  <a href={url} download={name} style={{ maxWidth: '377px', width: '100%' }}>
    <Stack
      sx={{
        width: '100%',
        height: '72px',
        padding: '8px 14px 8px 12px',
        bgcolor: 'grayscale.0',
        mt: '20px',
        border: '1px solid #E8E8E8',
        borderRadius: '8px',
      }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack justifyContent="center" alignItems="center" sx={{ width: '64px', height: '48px' }}>
        {(!icon && (
          <Box sx={{ maxWidth: '48px', maxHeight: '48px', height: '100%', width: '100%' }}>
            <FileIcon
              color="primary"
              height="36px"
              width="36px"
              preserveAspectRatio="none"
              sx={{
                width: '100%',
                height: '100%',
                fontSize: '36px',
              }}
            />
          </Box>
        )) || (
          <Box sx={{ maxWidth: '48px', maxHeight: '48px' }}>
            <Image
              src={icon || ''}
              alt="test"
              width={0}
              height={0}
              style={{
                minWidth: 0,
                width: '100%',
                height: '100%',
                maxHeight: '48px',
                maxWidth: '48px',
                display: 'inline-block',
                borderRadius: 4,
              }}
            />
          </Box>
        )}
      </Stack>

      <Box sx={{ textAlign: 'left', width: '100%', m: '0 8px' }}>
        <Typography sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '22px' }}>
          {name}
        </Typography>
        <Typography sx={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}>
          {formatSize(size)}
        </Typography>
      </Box>
      {!hideCloseIcon && <Close />}
    </Stack>
  </a>
);
