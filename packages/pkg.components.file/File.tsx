import { File as FileIcon } from 'pkg.icons.file';
import { Close } from 'pkg.icons.close';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export type FileProps = {
  /* File name */
  name: string;
  /* File url */
  url: string;
  /* File size in bytes */
  size: number;
  /* File icon (screenshot/image) url */
  icon?: string;
  hideCloseIcon?: boolean;
};

const formatSize = (size: number): string => {
  const sizes = ['байт', 'Кб', 'Мб', 'Гб', 'Тб'];
  // coefficient bytes to Kb
  const k = 1000;
  const n: number = Math.floor(Math.log10(size) / Math.log10(k));
  const formattedSizeNum: number = Math.ceil(size / k ** n);
  const formattedSize: string = `${formattedSizeNum} ${sizes[n]}`;
  return formattedSize;
};

export const File = ({ name, url, size, icon, hideCloseIcon }: FileProps) => (
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
        gap: '8px',
      }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ width: '48px', height: '48px', flexShrink: 0 }}
      >
        {(!icon && (
          <Box sx={{ maxWidth: '48px', maxHeight: '48px', height: '100%', width: '100%' }}>
            <FileIcon
              color="primary"
              preserveAspectRatio="none"
              sx={{
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
        )) || (
          <Box sx={{ maxWidth: '48px', maxHeight: '48px' }}>
            <Image
              src={icon || ''}
              alt={name}
              width={0}
              height={0}
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '48px',
                maxWidth: '48px',
                borderRadius: 4,
              }}
            />
          </Box>
        )}
      </Stack>

      <Box sx={{ textAlign: 'left', width: '100%' }}>
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
