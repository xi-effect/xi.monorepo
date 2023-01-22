import { File as FileIcon } from 'pkg.icons.file';
import { Close } from 'pkg.icons.close';
import { Box, Stack, Typography, Link } from '@mui/material';
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

const FILE_SIZES = ['байт', 'Кб', 'Мб', 'Гб', 'Тб'];
// coefficient bytes to Kb
const k = 1000;
const formatSize = (size: number): string => {
  const n: number = Math.floor(Math.log10(size) / Math.log10(k));
  const formattedSizeNum: number = Math.ceil(size / k ** n);
  const formattedSize: string = `${formattedSizeNum} ${FILE_SIZES[n]}`;
  return formattedSize;
};

export const File = ({ name, url, size, icon, hideCloseIcon }: FileProps) => (
  <Stack
    sx={{
      position: 'relative',
      maxWidth: '377px',
      width: '100%',
      height: '72px',
      border: '1px solid',
      borderColor: 'grayscale.10',
      borderRadius: '8px',
      transition: '0.3s',
      backgroundColor: 'grayscale.0',
      '&:hover': {
        backgroundColor: 'grayscale.5',
      },
    }}
    spacing={1}
    direction="row"
    alignItems="center"
  >
    <Link
      href={url}
      download={name}
      sx={{
        width: '100%',
        textDecoration: 'none',
        padding: '8px 14px 8px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
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
                borderRadius: 4,
              }}
            />
          </Box>
        )}
      </Stack>

      <Box sx={{ textAlign: 'left', width: '100%' }}>
        <Typography
          sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '22px', color: 'grayscale.100' }}
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'grayscale.100' }}
        >
          {formatSize(size)}
        </Typography>
      </Box>
    </Link>
    {!hideCloseIcon && (
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          position: 'absolute',
          right: '10px',
          width: '32px',
          height: '32px',
          display: 'flex',
          borderRadius: '50%',
          transition: '0.6s',
          cursor: 'pointer',
          '&:hover': { backgroundColor: 'grayscale.0' },
        }}
      >
        <Close />
      </Stack>
    )}
  </Stack>
);
