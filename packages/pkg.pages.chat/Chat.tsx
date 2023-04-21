import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { Input } from 'pkg.inputs.input';
import { Upbar } from './Upbar';
import { DateBlock } from './DateBlock';
import { ChatProps, ChatT } from './types';
import { defaultChatData } from './data';

export const Chat = ({ id }: ChatProps) => {
  const [data, setData] = useState<ChatT>({} as ChatT);

  const { body, upbar } = data;

  useEffect(() => {
    // fetch request to get chat data by chatId
    console.log(id);
    setData(defaultChatData);
  }, []);

  return (
    <Stack
      direction="column"
      spacing={3}
      justifyContent="flex-end"
      sx={{
        bgcolor: 'grayscale.0',
        height: '100%',
        overflow: 'auto',
        borderRadius: '8px',
        p: '16px',
      }}
    >
      <Upbar {...upbar} />
      {body?.map((data) => (
        <DateBlock {...data} />
      ))}

      <Input />

      <Stack sx={{ height: '1000px', width: '100%' }} />
    </Stack>
  );
};
