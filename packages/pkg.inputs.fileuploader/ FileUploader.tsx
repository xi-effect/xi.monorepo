import 'pkg.config.muidts';
import { ChangeEvent, DragEvent, FC, useRef, useState } from 'react';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import { Download } from 'pkg.icons';
import { File } from './File';
import { FileUploaderProps } from './types';
import {
  buttonTextVariants,
  containerStyle,
  getActionContainerStyle,
  getActionTextStyle,
  textVariants,
} from './styles/fileUploaderStyle';
import { iconSizesStyle } from './styles/fileStyle';

const stopDefaultEvents = (e: DragEvent<HTMLDivElement>) => {
  e.stopPropagation();
  e.preventDefault();
};

export const FileUploader: FC<FileUploaderProps> = ({
  size = 'large',
  fileName,
  buttonText,
  descriptionText,
  multiple,
  disabled,
  isError,
  isWarning,
  isPending,
  isSucceeded,
  onChange,
  onDeleteClick,
  onAbortRequestClick,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const isAsyncUploader = isPending || isSucceeded;
  const isLarge = size === 'large';

  const defaultDescription = isLarge
    ? 'JPG, GIF, PNG, PDF или ZIP, до 4 мб'
    : '\u00A0или перетащите сюда';

  const defaultButtonText = isLarge ? 'Перетащите сюда или выберите файл' : 'Выберите файл';

  const actionContainerStyle = getActionContainerStyle(
    size,
    isDragOver,
    isHover,
    isFocus,
    !!isError,
    !!isWarning,
    !!disabled,
  );

  const actionTextStyle = getActionTextStyle(
    size,
    isDragOver,
    isHover,
    isFocus,
    !!isError,
    !!isWarning,
    !!disabled,
  );

  const handleUploadButtonClick = () => {
    inputRef.current?.click();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    stopDefaultEvents(e);
    setIsDragOver(false);

    const fileList = e.dataTransfer.files;
    if (multiple) {
      onChange([...fileList]);
    }

    if (!multiple) {
      onChange(fileList[0]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (fileList?.length) {
      if (multiple) {
        onChange([...fileList]);
        e.target.value = '';
      }

      if (!multiple) {
        onChange(fileList[0]);
        e.target.value = '';
      }
    }
  };

  return (
    <Stack>
      <Stack
        sx={{
          ...containerStyle.default,
          ...containerStyle[size],
          ...actionContainerStyle,
        }}
        onDrop={handleDrop}
        onDragOver={(e: DragEvent<HTMLDivElement>) => {
          stopDefaultEvents(e);
          setIsDragOver(true);
        }}
        onDragLeave={(e: DragEvent<HTMLDivElement>) => {
          stopDefaultEvents(e);
          setIsDragOver(false);
        }}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
        onMouseEnter={() => {
          setIsHover(true);
          setIsFocus(false);
        }}
        onMouseLeave={() => {
          setIsHover(false);
          setIsFocus(false);
        }}
      >
        <input
          onChange={handleChange}
          multiple={multiple}
          ref={inputRef}
          type="file"
          style={{ display: 'none' }}
          disabled={disabled}
        />

        {fileName && !isLarge ? (
          <File
            size={size}
            isDeleteIcon={!isPending && !isSucceeded}
            isPending={isPending}
            isSucceeded={isSucceeded}
            isError={isError}
            onClick={!isAsyncUploader ? handleUploadButtonClick : undefined}
            onDeleteClick={onDeleteClick}
            onAbortRequestClick={onAbortRequestClick}
            p={0}
            backgroundColor="transparent"
            height="100%"
            maxWidth="100%"
            width="100%"
          >
            {fileName}
          </File>
        ) : (
          <>
            <Button
              disabled={disabled}
              disableRipple
              sx={{
                textTransform: 'initial',
                p: 0,
                pointerEvents: isDragOver ? 'none' : 'initial',
                transition: 'all 0.1s ease-in',
                '&:hover': { background: 'initial' },
                color: actionTextStyle.button.color,
                '&:disabled': {
                  color: actionTextStyle.button.color,
                },
              }}
              onClick={handleUploadButtonClick}
            >
              <Typography
                variant={buttonTextVariants[size]}
                sx={{ pointerEvents: 'none', fontWeight: isLarge ? 500 : 400 }}
              >
                {buttonText || defaultButtonText}
              </Typography>
            </Button>

            <Typography
              variant={textVariants[size]}
              sx={{
                pointerEvents: 'none',
                fontWeight: 400,
                transition: 'all 0.1s ease-in',
                color: actionTextStyle.description.color,
              }}
            >
              {descriptionText || defaultDescription}
            </Typography>
          </>
        )}

        {!isLarge && !fileName && (
          <IconButton
            disabled={disabled}
            disableRipple
            sx={{ p: 0, marginLeft: 'auto' }}
            onClick={handleUploadButtonClick}
          >
            <Download
              sx={{
                transition: 'all 0.1s ease-in',
                color: actionTextStyle.description.color,
                ...iconSizesStyle[size],
              }}
            />
          </IconButton>
        )}
      </Stack>
    </Stack>
  );
};
