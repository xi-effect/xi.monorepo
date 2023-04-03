import { observer } from 'mobx-react';
import { Button, Dialog, IconButton, Stack, Typography } from '@mui/material';
import { Close } from 'pkg.icons';

export type SaveConfirmT = {
  /**
   * The store type is the store itself.
   */
  uiSt: any;
  /**
   * The store type is the store itself.
   */
  rootStore: any;
};

export const SaveConfirm = observer(({ uiSt, rootStore }: SaveConfirmT) => {
  const handleExit = () => {
    rootStore.signout();
    uiSt.setDialogsFalse();
  };

  const onClose = () => uiSt.setDialogs('exit', false);

  return (
    <Dialog
      open={uiSt.dialogs.exit}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          width: '420px',
          height: '176px',
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
        <Typography sx={{ fontWeight: 600, fontSize: '24px', lineHeight: '32px' }}>
          Выйти из аккаунта?
        </Typography>
        <Button
          onClick={handleExit}
          variant="contained"
          sx={{
            mt: '32px',
            width: '356px',
            height: '48px',
            boxShadow: 'none',
            color: 'grayscale.0',
            bgcolor: 'error.dark',
            '&:hover': {
              boxShadow: 'none',
              color: 'grayscale.0',
              bgcolor: 'error.dark',
            },
          }}
        >
          Выйти
        </Button>
      </Stack>
    </Dialog>
  );
});
