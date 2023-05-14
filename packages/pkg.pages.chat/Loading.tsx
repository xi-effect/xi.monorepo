import { Stack } from '@mui/material';
import { EmptyMessage } from './EmptyMessage';

export const Loading = () => {
  const emptyMessagesCount: number[] = [1, 2, 3, 4, 5];

  return (
    <Stack spacing={2}>
      {emptyMessagesCount.map((msg, index) => (
        <EmptyMessage key={`empty_msg_${index}`} />
      ))}
    </Stack>
  );
};
