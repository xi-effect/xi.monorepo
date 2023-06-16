import 'pkg.config.muidts';
import { FC, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import Icons from './Icons';
import { containerStyle, textVariants } from './styles/fileStyle';
import { FileProps } from './types';

export const File: FC<FileProps> = ({
  size = 'medium',
  isDeleteIcon = true,
  isPending,
  isSucceeded,
  isError,
  children,
  onClick,
  onDeleteClick,
  onAbortRequestClick,
  ...props
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const isAbortIcon = onAbortRequestClick && isPending && (isHover || isFocus);

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        backgroundColor: isFocus ? 'petersburg.5' : 'petersburg.0',
        transition: 'all 0.1s ease-in',
        ...containerStyle[size],
        '&:hover': {
          backgroundColor: 'petersburg.5',

          '& .MuiTypography-root': { color: isError ? 'moscow.80' : 'petersburg.100' },

          '& .MuiSvgIcon-root': { color: 'petersburg.80' },

          '& .MuiCircularProgress-root': { color: 'petersburg.80' },
        },
        ...props,
      }}
      onFocus={() => {
        setIsFocus(true);
      }}
      onBlur={() => {
        setIsFocus(false);
        setIsHover(false);
      }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
        setIsFocus(false);
      }}
    >
      <Typography
        variant={textVariants[size]}
        sx={{
          wordBreak: 'break-all',
          transition: 'all 0.1s ease-in',
          color: isError ? 'moscow.80' : 'petersburg.90',
          fontWeight: 400,
          cursor: onClick ? 'pointer' : 'default',
          paddingRight: '10px',
        }}
        onClick={onClick}
      >
        {children}
      </Typography>

      <Icons
        size={size}
        color={isFocus ? 'petersburg.80' : 'petersburg.40'}
        isDeleteIcon={isDeleteIcon && !isPending && !isSucceeded}
        isLoadingIcon={!isAbortIcon && isPending}
        isSucceededIcon={isSucceeded}
        isAbortIcon={isAbortIcon}
        onDeleteClick={onDeleteClick}
        onAbortRequestClick={onAbortRequestClick}
      />
    </Stack>
  );
};
