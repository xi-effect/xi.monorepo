import { Stack } from '@mui/material';
import { EmptyMessage } from './EmptyMessage';

export const Loading = () => {
  const emptyMessagesCount: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(emptyMessagesCount);

  return (
    <Stack>
      {emptyMessagesCount.map((msg, index) => (
        <EmptyMessage key={`empty_msg_${index}`} />
      ))}
    </Stack>
  );
};
