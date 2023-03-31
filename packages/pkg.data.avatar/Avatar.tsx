import { Stack } from '@mui/material';
import Image from 'next/image';

export type AvatarPropsT = {
  size?: number;
  label?: string;
  name?: string;
};

export const Avatar = ({ size = 48, label = 'L', name = 'rauchg' }: AvatarPropsT) => (
  <Stack
    direction="column"
    justifyContent="center"
    alignItems="center"
    sx={{
      width: size,
      height: size,
      borderRadius: size * 0.5,
    }}
  >
    <Image
      alt="User avatar"
      height={size}
      width={size}
      style={{ borderRadius: '50%' }}
      src={`https://avatar.vercel.sh/${name}.png?size=${size}&text=${label}`}
    />
  </Stack>
);
