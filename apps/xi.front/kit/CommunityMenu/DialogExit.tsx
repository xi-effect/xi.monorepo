import React from 'react';
import { observer } from 'mobx-react';
import { Button, Dialog, IconButton, Stack, Typography } from '@mui/material';
import { Close } from 'pkg.icons';
import { useStore } from 'store/connect';
import { Link } from 'pkg.navigation.link';

const DialogExit = observer(() => {
  const rootStore = useStore();
  const { uiSt } = rootStore;

  const onClose = () => uiSt.setDialogs('communityExit', false);

  return (
    <Dialog
      open={uiSt.dialogs.communityExit}
      onClose={onClose}
      fullWidth
      maxWidth={false}
      PaperProps={{
        sx: {
          m: 2,
          maxWidth: 'calc(100% - 16px)',
          width: '420px',
          borderRadius: '16px',
          border: '1px solid #E6E6E6',
          bgcolor: 'grayscale.0',
          boxShadow: 'none',
          position: 'relative',
        },
      }}
    >
      <IconButton
        sx={{
          color: 'text.secondary',
          position: 'absolute',
          top: '12px',
          right: '12px',
        }}
        onClick={onClose}
      >
        <Close />
      </IconButton>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          p: 4,
          height: '100%',
          width: '100%',
        }}
      >
        <Typography textAlign="center" variant="l" sx={{ fontWeight: 600, width: '240px' }}>
          Вы уверены, что хотите выйти из сообщества?
        </Typography>
        <Button
          onClick={onClose}
          variant="contained"
          color="error"
          sx={{
            mt: 2,
            width: '100%',
            height: '48px',
            boxShadow: 'none',
            borderRadius: 1,
            color: 'grayscale.0',
            fontSize: '18px',
            textTransform: 'capitalize',
            '&:hover': {
              boxShadow: 'none',
            },
          }}
        >
          Покинуть сообщество
        </Button>
        <Link sx={{ mt: 2 }} onClick={onClose}>
          Отмена
        </Link>
      </Stack>
    </Dialog>
  );
});

export default DialogExit;
