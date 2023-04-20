import React, { useState } from 'react';
import { createEditor } from 'slate';
import { Slate, withReact } from 'slate-react';
import dynamic from 'next/dynamic';
import { FormControl, Stack, Button } from '@mui/material';
import { Clip, Emotions, Send } from 'pkg.icons';
import { FormatToolbar } from './components/FormatToolbar';
import { withMarkdown } from './plugins/withMarkdown';
import { withNormalize } from './plugins/withNormalize';
import { CustomEditable } from './components/CustomEditable';

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'sssssssss' }],
  },
];

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
          <Button sx={{ width: '32px', height: '32px', minWidth: '32px', borderRadius: '4px' }}>
            <Clip sx={{ fontSize: '24px' }} />
          </Button>
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
