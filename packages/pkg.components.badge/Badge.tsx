import { Typography, TypographyProps, StackProps, SvgIconProps, Stack } from '@mui/material';

import { FC, FunctionComponent } from 'react';
import { getStyles } from './utils';

export type BadgeProps = {
  icon?: FunctionComponent<SvgIconProps>;
  text?: string;
  bgColor: string;
  fontColor?: string;
  size?: 'small';
  stackProps?: StackProps;
  typographyProps?: TypographyProps;
  iconProps?: SvgIconProps;
};

export const Badge: FC<BadgeProps> = ({
  icon,
  text,
  bgColor,
  fontColor,
  size,
  stackProps,
  iconProps,
  typographyProps,
}) => {
  const Icon = icon;

  const styles = getStyles(size);

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        width: 'fit-content',
        backgroundColor: bgColor,
        ...styles.stack,
      }}
      {...stackProps}
    >
      {Icon && (
        <Icon
          sx={{
            ...styles.icon,
          }}
          {...iconProps}
        />
      )}

      {text && (
        <Typography
          component="span"
          sx={{
            fontWeight: '500',
            color: fontColor,
            ...styles.typography,
          }}
          {...typographyProps}
        >
          {text}
        </Typography>
      )}
    </Stack>
  );
};
