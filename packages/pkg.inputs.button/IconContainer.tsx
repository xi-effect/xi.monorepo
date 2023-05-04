import { Stack } from '@mui/material';
import { Check } from 'pkg.icons';
import { FC, FunctionComponent } from 'react';
import { Loading } from './Loading';
import { iconSizes } from './styles';
import { Size, Status } from './types';

export const IconContainer: FC<IconComponentProps> = ({
  order,
  icon,
  size,
  status,
  isLoadingIcon,
}) => {
  const IconComponent = icon as FunctionComponent<any>;

  return (
    <Stack order={order} sx={{ position: 'relative', ...iconSizes[size] }}>
      {icon && (
        <IconComponent
          sx={{
            opacity: status === 'idle' ? 1 : 0,
            color: 'inherit',
            ...iconSizes[size],
          }}
        />
      )}
      <Check
        sx={{
          opacity: status === 'completed' ? 1 : 0,
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'inherit',
          ...iconSizes[size],
        }}
      />
      {isLoadingIcon && (
        <Loading
          size={size}
          top="50%"
          transform="translateY(-50%)"
          opacity={status === 'pending' ? 1 : 0}
        />
      )}
    </Stack>
  );
};

type IconComponentProps = {
  icon?: FunctionComponent<any>;
  order: number;
  size: Size;
  status: Status;
  isLoadingIcon: boolean;
};
