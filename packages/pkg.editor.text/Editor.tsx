import { HocuspocusProvider } from '@hocuspocus/provider';
import { withCursors, withYHistory, withYjs, YjsEditor } from '@slate-yjs/core';
import React, { useEffect, useMemo, useState } from 'react';
import type { Descendant } from 'slate';
import { createEditor, Text } from 'slate';
import { RenderLeafProps, Slate, withReact } from 'slate-react';
import * as Y from 'yjs';
import {
  getRemoteCaretsOnLeaf,
  getRemoteCursorsOnLeaf,
  useDecorateRemoteCursors,
} from '@slate-yjs/react';
import dynamic from 'next/dynamic';
import { Input, Stack } from '@mui/material';
import { CustomEditable } from './components/CustomEditable';
import { FormatToolbar } from './components/FormatToolbar';
import { withMarkdown } from './plugins/withMarkdown';
import { withNormalize } from './plugins/withNormalize';
import { randomCursorData, addAlpha } from './utils';

import { CursorData } from './types';
import { Leaf } from './components/Leaf';

function renderDecoratedLeaf(props: RenderLeafProps) {
  let newChild = props.children;

  getRemoteCursorsOnLeaf<CursorData, Text>(props.leaf).forEach((cursor) => {
    if (cursor.data) {
      newChild = (
        <span style={{ backgroundColor: addAlpha(cursor.data.color, 0.5) }}>{props.children}</span>
      );
    }
  });

  getRemoteCaretsOnLeaf<CursorData, Text>(props.leaf).forEach((caret) => {
    if (caret.data) {
      newChild = (
        <span style={{ position: 'relative' }}>
          <span
            contentEditable={false}
            style={{ position: 'absolute', top: 0, bottom: 0, backgroundColor: caret.data.color }}
          />
          <span
            contentEditable={false}
            style={{
              position: 'absolute',
              backgroundColor: caret.data.color,
              transform: 'translateY(-100%)',
              userSelect: 'none',
              fontSize: '12px',
              textDecoration: 'none',
              textTransform: 'none',
              fontStyle: 'normal',
              borderRadius: '4px',
              color: '#fafafa',
              padding: '4px',
              whiteSpace: 'nowrap',
            }}
          >
            {caret.data.name}
          </span>
          {props.children}
        </span>
      );
    }
  });

  return <Leaf {...props}>{newChild}</Leaf>;
}

function DecoratedEditable() {
  const decorate = useDecorateRemoteCursors();
  return <CustomEditable decorate={decorate} renderLeaf={renderDecoratedLeaf} />;
}

const urlWS = 'ws://127.0.0.1:1234';

function ContentEditor() {
  const [value, setValue] = useState<Descendant[]>([
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ]);
  const [connected, setConnected] = useState(false);
  console.log('connected', connected);

  const provider = useMemo(
    () =>
      new HocuspocusProvider({
        url: urlWS,
        name: 'slate-yjs-demo',
        onConnect: () => setConnected(true),
        onDisconnect: () => setConnected(false),
        connect: false,
      }),
    [],
  );

  const editor = useMemo(() => {
    const sharedType = provider.document.get('content', Y.XmlText) as Y.XmlText;

    return withMarkdown(
      withNormalize(
        withReact(
          withCursors(
            withYHistory(withYjs(createEditor(), sharedType, { autoConnect: false })),
            provider.awareness,
            {
              data: randomCursorData(),
            },
          ),
        ),
      ),
    );
  }, [provider.awareness, provider.document]);

  // Connect editor and provider in useEffect to comply with concurrent mode
  // requirements.
  useEffect(() => {
    provider.connect();
    return () => provider.disconnect();
  }, [provider]);
  useEffect(() => {
    YjsEditor.connect(editor);
    return () => YjsEditor.disconnect(editor);
  }, [editor]);

  return (
    <Stack
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ display: 'flex', width: '100%' }}
    >
      <Stack
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ maxWidth: '960px', width: '100%' }}
      >
        <Input value="Заголовок" />

        <Slate value={value} onChange={setValue} editor={editor}>
          <FormatToolbar />
          <DecoratedEditable />
        </Slate>
      </Stack>
    </Stack>
  );
}

const withNoSSR = (Component: React.FunctionComponent) =>
  dynamic(() => Promise.resolve(Component), { ssr: false });

export default withNoSSR(ContentEditor);
