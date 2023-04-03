import * as React from 'react';
import { observer } from 'mobx-react';
import { Box, Button, Dialog, IconButton, Slider, Stack, Typography } from '@mui/material';
import { Close } from 'pkg.icons';
import AvatarEditor from 'react-avatar-editor';
import { usePostFiles } from 'utils/useFiles';
import { useStore } from 'store/connect';
import { useSnackbar } from 'notistack';

export type DialogEditorT = {
  /**
   * The store type is the store itself.
   */
  uiSt: any;
};

const DialogEditor = observer(({ uiSt }: DialogEditorT) => {
  const { enqueueSnackbar } = useSnackbar();

  const rootStore = useStore();
  const { userSt } = rootStore;

  const { handlePostFile } = usePostFiles();

  const editor = React.useRef(null);

  const onClose = () => uiSt.setDialogs('avatarEditor', false);
  const [isImage, setIsImage] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  const [scale, setScale] = React.useState(1);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setScale(newValue as number);
  };

  const handleChangeInput = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsImage(true);
  };

  const handleNewImage = async () => {
    if (editor && editor.current) {
      // @ts-ignore
      const canvasScaled = editor.current.getImageScaledToCanvas();
      canvasScaled.toBlob((blob) => {
        const file = new File([blob], 'avatar.jpeg', { type: 'image/jpeg' });
        handlePostFile(file).then((data) => {
          if (data?.id) {
            rootStore
              .fetchData(`${rootStore.url}/users/me/avatar/`, 'POST', {
                'avatar-id': data.id,
              })
              .then((answer) => {
                if (answer?.a) {
                  userSt.setUser('avatar', data);
                  uiSt.setDialogs('avatarEditor', false);
                  enqueueSnackbar('Новая Аватарка успешно сохранена', { variant: 'success' });
                } else {
                  enqueueSnackbar('Что-то пошло не так', { variant: 'error' });
                }
              });
          } else {
            enqueueSnackbar('Что-то пошло не так', { variant: 'error' });
          }
        });
      }, 'image/jpeg');
    }
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
          {isImage ? (
            <AvatarEditor
              ref={editor}
              image={selectedFile}
              style={{
                height: '100%',
                width: '100%',
                borderRadius: '8px',
              }}
              borderRadius={150}
              color={[0, 0, 0, 0.6]} // RGBA
              scale={scale}
            />
          ) : (
            <Button
              sx={{
                width: '310px',
                height: '300px',
                border: '1px solid',
                borderRadius: 4,
                position: 'relative',
              }}
            >
              <Typography> Загрузить </Typography>
              <input
                type="file"
                accept="image/*,.png,.jpg"
                onChange={handleChangeInput}
                style={{
                  position: 'absolute',
                  opacity: '0',
                  width: '310px',
                  height: '300px',
                  border: '2px solid',
                  cursor: 'pointer',
                }}
              />
            </Button>
          )}
        </Box>
        <Box
          sx={{
            pl: 2,
            pr: 2,
            height: '20px',
            width: '100%',
          }}
        >
          <Slider
            aria-label="Temperature"
            value={scale}
            onChange={handleChange}
            valueLabelDisplay="auto"
            step={0.1}
            marks
            min={1}
            max={1.5}
          />
        </Box>
        <Button
          onClick={handleNewImage}
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
