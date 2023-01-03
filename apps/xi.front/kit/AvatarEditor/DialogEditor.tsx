import * as React from 'react';
import { observer } from 'mobx-react';
import { Box, Button, Dialog, IconButton, Slider, Stack, Typography } from '@mui/material';
import { Close } from 'pkg.icons.close';
import AvatarEditor from 'react-avatar-editor';

export type DialogEditorT = {
  /**
   * The store type is the store itself.
   */
  uiSt: any;
};

const DialogEditor = observer(({ uiSt }: DialogEditorT) => {
  const onClose = () => uiSt.setDialogs('avatarEditor', false);
  const [scale, setScale] = React.useState(1);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setScale(newValue as number);
  };

  return (
    <Dialog
      open={uiSt.dialogs.avatarEditor}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          width: '360px',
          height: '496px',
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
          p: 3,
          height: '100%',
          width: '100%',
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '32px',
          }}
        >
          Изменить аватар
        </Typography>
        <Box
          sx={{
            mt: 3,
            mb: 1,
            width: '310px',
            height: '300px',
            position: 'relative',
          }}
        >
          <AvatarEditor
            image="https://cdn.discordapp.com/attachments/706806130348785718/1059887219722166372/2022-11-23_16.39.51.png"
            style={{
              height: '100%',
              width: '100%',
              borderRadius: '8px',
            }}
            borderRadius={150}
            color={[0, 0, 0, 0.6]} // RGBA
            scale={scale}
          />
        </Box>
        <Slider
          aria-label="Temperature"
          value={scale}
          onChange={handleChange}
          valueLabelDisplay="auto"
          step={0.1}
          marks
          min={0.7}
          max={1.5}
        />
        <Button
          onClick={() => uiSt.setDialogs('passwordChange', true)}
          variant="contained"
          sx={{
            mt: 3,
            width: '100%',
            height: '48px',
            borderRadius: '8px',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '22px',
            textTransform: 'capitalize',
            boxShadow: 0,
            '&:hover': {
              boxShadow: 0,
            },
          }}
        >
          Изменить
        </Button>
      </Stack>
    </Dialog>
  );
});

export default DialogEditor;
