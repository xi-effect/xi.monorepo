import { FC } from 'react';
import { IconButton, CircularProgress } from '@mui/material';
import { Check } from 'pkg.icons.check';
import { Close } from 'pkg.icons.close';
import { iconSizesStyle } from './styles/fileStyle';
import { IconsProps } from './types';

const Icons: FC<IconsProps> = ({
  size,
  color,
  isDeleteIcon,
  isLoadingIcon,
  isSucceededIcon,
  isAbortIcon,
  onDeleteClick,
  onAbortRequestClick,
}) => (
  <>
    {isDeleteIcon && (
      <IconButton disableRipple sx={{ p: 0 }} onClick={onDeleteClick}>
        <Close
          sx={{
            transition: 'all 0.1s ease-in',
            color,
            ...iconSizesStyle[size],
          }}
        />
      </IconButton>
    )}

    {isAbortIcon && (
      <IconButton disableRipple sx={{ p: 0 }} onClick={onAbortRequestClick}>
        <Close
          sx={{
            transition: 'all 0.1s ease-in',
            color,
            ...iconSizesStyle[size],
          }}
        />
      </IconButton>
    )}

    {isLoadingIcon && (
      <CircularProgress
        size={iconSizesStyle[size].width}
        sx={{
          minWidth: iconSizesStyle[size].width,
          marginLeft: 'auto',
          transition: 'all 0.1s ease-in',
          color,
        }}
      />
    )}

    {isSucceededIcon && (
      <Check
        sx={{
          marginLeft: 'auto',
          transition: 'all 0.1s ease-in',
          color,
          ...iconSizesStyle[size],
        }}
      />
    )}
  </>
);

export default Icons;
