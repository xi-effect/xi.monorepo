import { Paper, Stack } from '@mui/material';

export const EmojiPicker = () => {
  console.log('');

  return (
    <Paper sx={{ width: '276px', height: '296px' }} elevation={24}>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ width: '276px', height: '296px' }}
      >
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={1}
          sx={{ height: '100%', width: '40px', bgcolor: 'petersburg.5' }}
        >
          1
        </Stack>
        <Stack direction="column" justifyContent="flex-start" alignItems="center" spacing={1}>
          1
        </Stack>
      </Stack>
    </Paper>
  );
};
