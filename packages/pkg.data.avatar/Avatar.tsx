import { Stack, Typography } from '@mui/material';

export type AvatarPropsT = {
  size?: number;
  name?: string;
  label?: string;
  sx?: object;
};

function stringToHslColor(str: string, s: number, l: number) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    // eslint-disable-next-line no-bitwise
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const h = hash % 360;
  return `hsl(${h}, ${s}%, ${l}%)`;
}

export const Avatar = ({ size = 48, name = 'xi.effect', label = 'М', sx }: AvatarPropsT) => (
  <Stack
    direction="column"
    justifyContent="center"
    alignItems="center"
    sx={{
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: `${size / 0.5}px`,
      bgcolor: stringToHslColor(name, 30, 80),
      ...sx,
    }}
  >
    <Typography
      sx={{
        fontWeight: 600,
        fontSize: `${size / 2.5}px`,
        lineHeight: `${size / 2.5}px`,
        color: 'grayscale.0',
      }}
    >
      {label}
    </Typography>
  </Stack>
);
