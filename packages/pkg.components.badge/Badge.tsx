import { Typography, TypographyProps, Box, BoxProps, SvgIconProps } from '@mui/material';

import { FC, FunctionComponent } from 'react';

export type BadgeProps = {
  Icon?: FunctionComponent<SvgIconProps>;
  text?: string;
  bgColor: string;
  fontColor?: string;
  size?: 'small';
  boxProps?: BoxProps;
  typographyProps?: TypographyProps;
  iconProps?: SvgIconProps;
};

export const Badge: FC<BadgeProps> = ({
  Icon,
  text,
  bgColor,
  fontColor,
  size,
  boxProps,
  iconProps,
  typographyProps,
}) => (
  <Box
    component="div"
    sx={{
      display: 'flex',
      alignItems: 'center',
      width: 'fit-content',
      gap: size === 'small' ? '7.5px' : '8px',
      height: size === 'small' ? '20px' : '28px',
      borderRadius: size === 'small' ? '4px' : '6px',
      padding: size === 'small' ? '2px 6px' : '4px 8px ',
      backgroundColor: bgColor,
    }}
    {...boxProps}
  >
    {Icon && (
      <Icon
        sx={{
          width: size === 'small' ? '12px' : '16px',
          height: size === 'small' ? '12px' : '16px',
        }}
        {...iconProps}
      />
    )}

    {text && (
      <Typography
        component="span"
        sx={{
          fontWeight: '500',
          fontSize: size === 'small' ? '12px' : '14px',
          lineHeight: size === 'small' ? '16px' : '20px',
          color: fontColor,
        }}
        {...typographyProps}
      >
        {text}
      </Typography>
    )}
  </Box>
);
