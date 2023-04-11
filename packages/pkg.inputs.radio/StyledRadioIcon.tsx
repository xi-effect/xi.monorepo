import { styled } from '@mui/material/styles';
import { IconProps } from './types';

export const Icon = styled('span')<IconProps & any>(({ theme, sizes, color }) => ({
  borderRadius: '50%',
  border: '1px solid',
  borderColor: color === 'primary' ? theme.palette.petersburg[40] : theme.palette[color].dark,
  backgroundColor: theme.palette.petersburg[0],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  'input:hover ~ &': {
    backgroundColor: theme.palette.petersburg[5],
  },
  'input:disabled ~ &': {
    background: theme.palette.petersburg[10],
    borderColor: theme.palette.petersburg[10],
  },
  ...sizes.icon,
}));

export const CheckedIcon = styled(Icon)<IconProps & any>(({ theme, sizes, color }) => ({
  backgroundColor: theme.palette[color].dark,
  borderColor: theme.palette[color].dark,
  '&:before': {
    content: '""',
    borderRadius: '50%',
    backgroundColor: theme.palette.petersburg[0],
    ...sizes.checkedIcon,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette[color].dark,
  },
  'input:disabled ~ &:before': {
    background: theme.palette.petersburg[40],
  },
}));
