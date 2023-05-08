import { Stack } from '@mui/material';
import { EmptyMessage } from './EmptyMessage';

export const Loading = () => {
  const emptyMessagesCount: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  ];

  return (
    <Stack>
      {emptyMessagesCount.map((msg, index) => (
        <EmptyMessage key={`empty_msg_${index}`} />
      ))}
    </Stack>
  );
};
