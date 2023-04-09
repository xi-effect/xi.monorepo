import 'pkg.config.muidts';
import { Typography, TypographyProps, StackProps, SvgIconProps, Stack } from '@mui/material';
import { FC, FunctionComponent } from 'react';
import { getStyles } from './utils';

export type BadgeProps = {
  icon?: FunctionComponent<SvgIconProps>;
  children: string;
  bgColor: string;
  iconColor?: string;
  fontColor?: string;
  size?: 'small';
  stackProps?: StackProps;
  typographyProps?: TypographyProps;
  iconProps?: SvgIconProps;
};

export const Badge: FC<BadgeProps> = ({
  icon,
  children,
  bgColor,
  iconColor,
  fontColor,
  size,
  stackProps = { sx: {} },
  iconProps = { sx: {} },
  typographyProps,
}) => {
  const IconComponent = icon as FunctionComponent<any>;

  const styles = getStyles(size);

  const { sx: iconSx, ...otherIconProps } = iconProps;
  const { sx: stackSx, ...otherStackProps } = stackProps;

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        backgroundColor: bgColor,
        ...styles.stack.sx,
        ...stackSx,
      }}
      {...otherStackProps}
    >
      {icon && (
        <IconComponent
          sx={{ color: iconColor, ...styles.icon.sx, ...iconSx }}
          {...otherIconProps}
        />
      )}

      <Typography
        variant={styles.typography.variant}
        component="span"
        sx={{
          color: fontColor,
        }}
        {...typographyProps}
      >
        {children}
      </Typography>
    </Stack>
  );
};
