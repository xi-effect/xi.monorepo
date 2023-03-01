import 'pkg.config.muidts';
import { FC } from 'react';
import { Stack } from '@mui/material';
import File from './File';
import FileUpload from './FileUpload';
import { FileUploaderProps } from './types';

export const FileUploader: FC<FileUploaderProps> = ({
  size = 'large',
  fileSize = 'medium',
  files,
  file,
  filesPosition,
  multiple,
  disabled,
  isError,
  isWarning,
  onChange,
  onDeleteClick,
  onAbortRequestClick,
}) => {
  const isLarge = size === 'large';

  return (
    <Stack>
      {isLarge && file && (
        <File
          id={file.id}
          index={0}
          order={filesPosition === 'bottom' ? 1 : 0}
          isDeleteIcon={!file.status || (file.status !== 'pending' && file.status !== 'succeeded')}
          isPendingIcon={file.status === 'pending'}
          isSucceededIcon={file.status === 'succeeded'}
          onDeleteClick={onDeleteClick}
          onAbortRequestClick={onAbortRequestClick}
          fileSize={fileSize}
          isError={file.status === 'failed'}
        >
          {file.name}
        </File>
      )}

      {!!files?.length &&
        multiple &&
        files.map(({ name, status, id }, index) => (
          <File
            order={filesPosition === 'bottom' ? 1 : 0}
            key={id || index}
            id={id}
            index={index}
            isDeleteIcon={!status || (status !== 'pending' && status !== 'succeeded')}
            isPendingIcon={status === 'pending'}
            isSucceededIcon={status === 'succeeded'}
            isError={status === 'failed'}
            onDeleteClick={onDeleteClick}
            onAbortRequestClick={onAbortRequestClick}
            fileSize={fileSize}
          >
            {name}
          </File>
        ))}

      <FileUpload
        file={file}
        size={size}
        multiple={multiple}
        disabled={disabled}
        isError={isError}
        isWarning={isWarning}
        onChange={onChange}
        onDeleteClick={onDeleteClick}
        onAbortRequestClick={onAbortRequestClick}
      />
    </Stack>
  );
};
