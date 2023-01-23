import { Typography, TypographyProps, Box, BoxProps, SvgIconProps } from '@mui/material';

import { FC, FunctionComponent } from 'react';

export type BadgeProps = {
  Icon?: FunctionComponent<SvgIconProps>;
  text: string;
  bgColor: string;
  fontColor?: string;
  size?: 'small' | 'heigh';
  boxProps?: BoxProps;
  typographyProps?: TypographyProps;
  iconProps?: SvgIconProps;
};

export const Badge: FC<BadgeProps> = ({
  Icon,
  text,
  bgColor,
  fontColor,
  size = 'heigh',
  boxProps,
  iconProps,
  typographyProps,
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
      backgroundColor: bgColor,
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
        color: fontColor,
      }}
      {...typographyProps}
    >
      {text}
    </Typography>
  </Box>
);
