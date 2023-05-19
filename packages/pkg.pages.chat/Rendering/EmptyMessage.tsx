import { Stack, Skeleton } from '@mui/material';

export const EmptyMessage = () => (
  <Stack>
    <Stack>
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
    </Stack>

    <Skeleton variant="rounded" width={210} height={60} />
  </Stack>
);
