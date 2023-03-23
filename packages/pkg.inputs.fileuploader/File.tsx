import 'pkg.config.muidts';
import { FC, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import Icons from './Icons';
import {
  containerStyle,
  getActionColorStyle,
  getActionContainerStyle,
  textVariants,
} from './styles/fileStyle';
import { FileProps } from './types';

const File: FC<FileProps> = ({
  fileSize,
  children,
  isDeleteIcon,
  isPendingIcon,
  isSucceededIcon,
  isError,
  id,
  index,
  onDeleteClick,
  onAbortRequestClick,
  ...props
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const actionContainerStyle = getActionContainerStyle(isHover, isFocus);
  const actionColorStyle = getActionColorStyle(isHover, isFocus, !!isError);

  const isAbortIcon = onAbortRequestClick && isPendingIcon && (isHover || isFocus);

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        maxWidth: '500px',
        backgroundColor: 'grayscale.0',
        transition: 'all 0.1s ease-in',
        ...containerStyle[fileSize],
        ...actionContainerStyle,
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
        variant={textVariants[fileSize]}
        sx={{
          wordBreak: 'break-all',
          transition: 'all 0.1s ease-in',
          color: actionColorStyle.text,
          fontWeight: 400,
        }}
      >
        {children}
      </Typography>
      <Icons
        id={id}
        index={index}
        size={fileSize}
        color={actionColorStyle.icon}
        isDeleteIcon={isDeleteIcon}
        isLoadingIcon={!isAbortIcon && isPendingIcon}
        isSucceededIcon={isSucceededIcon}
        isAbortIcon={isAbortIcon}
        onDeleteClick={onDeleteClick}
        onAbortRequestClick={onAbortRequestClick}
      />
    </Stack>
  );
};

export default File;
