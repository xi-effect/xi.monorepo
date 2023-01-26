import 'pkg.config.muidts';
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
  const IconComponent = icon as FunctionComponent;

  const styles = getStyles(size);

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        backgroundColor: bgColor,
        ...styles.stack.sx,
      }}
      {...stackProps}
    >
      {icon && <IconComponent sx={styles.icon.sx} {...iconProps} />}

      {text && (
        <Typography
          variant={styles.typography.variant}
          component="span"
          sx={{
            color: fontColor,
          }}
          {...typographyProps}
        >
          {text}
        </Typography>
      )}
    </Stack>
  );
};
