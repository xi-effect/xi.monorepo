import { SxProps } from '@mui/material';

export type SizeType = 'large' | 'medium' | 'small';
export type FileSizeType = 'medium' | 'small';
export type StatusType = 'idle' | 'pending' | 'succeeded' | 'failed';
export type FileType = { name: string; status?: StatusType; id?: string } & Partial<File>;

export type FileUploaderProps = {
  size?: SizeType;
  fileSize?: FileSizeType;
  files?: FileType[] | null;
  filesPosition?: 'bottom';
} & Omit<FileUploadProps, 'size'>;

export type FileUploadProps = {
  size: SizeType;
  file?: FileType | null;
  multiple?: boolean;
  isError?: boolean;
  isWarning?: boolean;
  disabled?: boolean;
  descriptionText?: string;
  buttonText?: string;
  onDeleteClick: (id?: string, index?: number) => void;
  onChange: (files: File[] | File) => void;
  onAbortRequestClick?: (id?: string, index?: number) => void;
};

export type FileProps = {
  fileSize: FileSizeType;
  children?: string;
  isDeleteIcon?: boolean;
  isPendingIcon?: boolean;
  isSucceededIcon?: boolean;
  isError?: boolean;
  id?: string;
  index?: number;
  onDeleteClick: (id?: string, index?: number) => void;
  onAbortRequestClick?: (id?: string, index?: number) => void;
} & SxProps;

export type IconsProps = {
  size: FileSizeType;
  color: string;
  isDeleteIcon?: boolean;
  isLoadingIcon?: boolean;
  isSucceededIcon?: boolean;
  isAbortIcon?: boolean;
  id?: string;
  index?: number;
  onDeleteClick: (id?: string, index?: number) => void;
  onAbortRequestClick?: (id?: string, index?: number) => void;
};
