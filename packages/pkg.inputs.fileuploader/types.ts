import { SxProps } from '@mui/material';

export type SizeType = 'large' | 'medium' | 'small';
export type FileSizeType = 'medium' | 'small';

export type FileUploaderProps = {
  size?: SizeType;
  fileName?: string | null;
  multiple?: boolean;
  isError?: boolean;
  isWarning?: boolean;
  isPending?: boolean;
  isSucceeded?: boolean;
  disabled?: boolean;
  descriptionText?: string;
  buttonText?: string;
  onChange: (files: File[] | File) => void;
  onDeleteClick?: () => void;
  onAbortRequestClick?: () => void;
};

export type FileProps = {
  size?: FileSizeType;
  children?: string;
  isDeleteIcon?: boolean;
  isPending?: boolean;
  isSucceeded?: boolean;
  isError?: boolean;
  onClick?: () => void;
  onDeleteClick?: () => void;
  onAbortRequestClick?: () => void;
} & SxProps;

export type IconsProps = {
  size: FileSizeType;
  color: string;
  isDeleteIcon?: boolean;
  isLoadingIcon?: boolean;
  isSucceededIcon?: boolean;
  isAbortIcon?: boolean;
  onDeleteClick?: () => void;
  onAbortRequestClick?: () => void;
};
