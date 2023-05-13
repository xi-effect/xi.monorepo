import 'pkg.config.muidts';
import React, { useState } from 'react';
import { createEditor } from 'slate';
import { Slate, withReact } from 'slate-react';
import dynamic from 'next/dynamic';
import { FormControl, Stack, Button, Typography, MenuItem, ListItemIcon } from '@mui/material';
import { Clip, Emotions, File, Movie, Picture, Send } from 'pkg.icons';
import { Dropdown } from 'pkg.navigation.dropdown';
import { FormatToolbar } from './components/FormatToolbar';
import { withMarkdown } from './plugins/withMarkdown';
import { withNormalize } from './plugins/withNormalize';
import { CustomEditable } from './components/CustomEditable';

const initialValue: any = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
];

const DropdownClip = () => <Clip sx={{ fontSize: '24px' }} />;

const ChatInput = () => {
  const [editor] = useState(() => withReact(withMarkdown(withNormalize(createEditor()))));

  return (
    <Stack
      flexDirection="row"
      justifyContent="center"
      alignItems="flex-end"
      sx={{ display: 'flex', width: '100%' }}
    >
      <FormControl
        sx={{
          minHeight: '48px',
          width: '100%',
          p: '6px',
          border: '2px solid',
          borderColor: 'petersburg.30',
          borderRadius: '8px',
        }}
      >
        <Stack
          flexDirection="row"
          justifyContent="center"
          alignItems="flex-end"
          sx={{ width: '100%', height: '100%' }}
        >
          <Dropdown
            Element={DropdownClip}
            menuProps={{
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'left',
              },
              transformOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              },
            }}
            buttonSx={{
              width: '32px',
              height: '32px',
              minWidth: '32px',
              borderRadius: '4px',
              bgcolor: 'petersburg.0',
              '&:hover': { bgcolor: 'petersburg.5' },
              '&:focus-visible': {
                bgcolor: 'petersburg.5',
              },
            }}
            menuSx={{
              '&.MuiMenu-paper': {
                width: '130px',
                minWidth: '130px',
                height: '96px',
                p: 0,
              },
              '&.MuiList-root': {
                p: 0,
              },
            }}
          >
            <MenuItem sx={{ p: 0.5, height: '24px' }}>
              <ListItemIcon sx={{ '&.MuiListItemIcon-root': { minWidth: '24px' } }}>
                <Picture sx={{ fontSize: 16 }} />
              </ListItemIcon>
              <Typography sx={{ color: 'petersburg.80', fontWeight: 400 }} variant="xs">
                Изображение
              </Typography>
            </MenuItem>
            <MenuItem sx={{ p: 0.5, height: '24px' }}>
              <ListItemIcon sx={{ '&.MuiListItemIcon-root': { minWidth: '24px' } }}>
                <Movie sx={{ fontSize: 16 }} />
              </ListItemIcon>
              <Typography sx={{ color: 'petersburg.80', fontWeight: 400 }} variant="xs">
                Видео
              </Typography>
            </MenuItem>
            <MenuItem sx={{ p: 0.5, height: '24px' }}>
              <ListItemIcon sx={{ '&.MuiListItemIcon-root': { minWidth: '24px' } }}>
                <File sx={{ fontSize: 16 }} />
              </ListItemIcon>
              <Typography sx={{ color: 'petersburg.80', fontWeight: 400 }} variant="xs">
                Файл
              </Typography>
            </MenuItem>
          </Dropdown>
          <Stack
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            sx={{
              width: 'calc(100% - 64px)',
              ml: '4px',
              mr: '4px',
              minHeight: '32px',
              maxHeight: '158px',
              overflow: 'auto',
            }}
          >
            <Slate value={initialValue} editor={editor}>
              <CustomEditable />
              <FormatToolbar />
            </Slate>
          </Stack>
          <Button sx={{ width: '32px', height: '32px', minWidth: '32px', borderRadius: '4px' }}>
            <Emotions sx={{ fontSize: '24px' }} />
          </Button>
        </Stack>
      </FormControl>
      <Button
        variant="contained"
        sx={{ width: '48px', height: '48px', minWidth: '48px', borderRadius: '8px', ml: 3 }}
      >
        <Send sx={{ fontSize: '24px' }} />
      </Button>
    </Stack>
  );
};

const withNoSSR = (Component: React.FunctionComponent) =>
  dynamic(() => Promise.resolve(Component), { ssr: false });

export default withNoSSR(ChatInput);
