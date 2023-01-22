import {
  Typography,
  TypographyProps,
  Box,
  BoxProps,
  SvgIconProps,
} from '@mui/material';

import { FC, FunctionComponent } from 'react';

export type BadgeProps = {
  Icon?: FunctionComponent<SvgIconProps>;
  iconProps?: SvgIconProps;
  text: string;
  boxProps?: BoxProps;
  typographyProps?: TypographyProps;
  size?: 'small' | 'heigh';
};

export const Badge: FC<BadgeProps> = ({
  Icon,
  iconProps,
  text,
  boxProps,
  typographyProps,
  size = 'heigh',
}) => (
  <Box
    component="span"
    sx={{
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
        gap: size === 'heigh' ? '8px' : '7.5px',
        height: size === 'heigh' ? '28px' : '20px',
        borderRadius: size === 'heigh' ? '6px' : '4px',
        padding: size === 'heigh' ? '4px 8px 4px 10px ' : '2px 6px',
      }}
    {...boxProps}
  >
    {Icon && (
    <Icon
      sx={{
            width: size === 'heigh' ? '16px' : '12px',
            height: size === 'heigh' ? '16px' : '12px',
          }}
      {...iconProps}
    />
      )}
    <Typography
      component="span"
      sx={{
          fontWeight: '500',
          fontSize: size === 'heigh' ? '14px' : '12px',
          lineHeight: size === 'heigh' ? '20px' : '16px',
        }}
      {...typographyProps}
    >
      {text}
    </Typography>
  </Box>
  );
