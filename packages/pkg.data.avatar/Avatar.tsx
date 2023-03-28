import { Stack, Typography } from '@mui/material';

export type AvatarPropsT = {
  size?: number;
};

export const Avatar = ({ size = 48 }: AvatarPropsT) => {
  const getBgcolor = (v: number) => {
    if (v === 1) return '#F5F0FF';
    return '#F5F0FF';
  };

  const getTextColor = (v: number) => {
    if (v === 1) return '#9769FF';
    return '#9769FF';
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: size,
        height: size,
        borderRadius: size * 0.5,
        bgcolor: getBgcolor(1),
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: `${size / 2.5}px`,
          lineHeight: `${size / 2.5}px`,
          color: getTextColor(1),
        }}
      >
        М
      </Typography>
    </Stack>
  );
};
