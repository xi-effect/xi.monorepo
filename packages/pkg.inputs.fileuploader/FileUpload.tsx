import 'pkg.config.muidts';
import { ChangeEvent, DragEvent, FC, useRef, useState } from 'react';
import { Stack, Button, Typography, IconButton } from '@mui/material';
import { Download } from 'pkg.icons.download';
import { iconSizesStyle } from './styles/fileStyle';
import { FileUploadProps } from './types';
import {
  containerStyle,
  getActionContainerStyle,
  getActionTextStyle,
  textVariants,
  buttonTextVariants,
} from './styles/fileUploadStyle';
import { File } from './File';

const stopDefaultEvents = (e: DragEvent<HTMLDivElement>) => {
  e.stopPropagation();
  e.preventDefault();
};

export const FileUpload: FC<FileUploadProps> = ({
  size,
  file,
  multiple,
  isError,
  isWarning,
  disabled,
  buttonText,
  descriptionText,
  onChange,
  onDeleteClick,
  onAbortRequestClick,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

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

      {!isLarge && file && !multiple ? (
        <File
          id={file.id}
          index={0}
          fileSize={size}
          isDeleteIcon={!file.status || (file.status !== 'pending' && file.status !== 'succeeded')}
          isPendingIcon={file.status === 'pending'}
          isSucceededIcon={file.status === 'succeeded'}
          isError={file.status === 'failed'}
          onDeleteClick={onDeleteClick}
          onAbortRequestClick={onAbortRequestClick}
          p={0}
          backgroundColor="transparent"
          height="100%"
          maxWidth="100%"
          width="100%"
        >
          {file.name}
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

      {!isLarge && !file && (
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
  );
};
