import { HocuspocusProvider } from '@hocuspocus/provider';
import { withCursors, withYHistory, withYjs, YjsEditor } from '@slate-yjs/core';
import React, { useEffect, useMemo, useState } from 'react';
import type { Descendant } from 'slate';
import { createEditor } from 'slate';
import { Slate, withReact } from 'slate-react';
import * as Y from 'yjs';
import { CustomEditable } from './components/CustomEditable';
import { FormatToolbar } from './components/FormatToolbar';
import { withMarkdown } from './plugins/withMarkdown';
import { withNormalize } from './plugins/withNormalize';
import { randomCursorData } from './utils';
import { RemoteCursorOverlay } from './components/Overlay';

const HOCUSPOCUS_ENDPOINT_URL = '';

export function ContentEditor() {
  const [value, setValue] = useState<Descendant[]>([]);
  const [connected, setConnected] = useState(false);
  console.log('connected', connected);

  const provider = useMemo(
    () =>
      new HocuspocusProvider({
        url: HOCUSPOCUS_ENDPOINT_URL,
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
          withYHistory(
            withCursors(
              withYjs(createEditor(), sharedType, { autoConnect: false }),
              provider.awareness,
              {
                data: randomCursorData(),
              },
            ),
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
    <Slate value={value} onChange={setValue} editor={editor}>
      <RemoteCursorOverlay className="flex justify-center my-32 mx-10">
        <FormatToolbar />
        <CustomEditable className="max-w-4xl w-full flex-col break-words" />
      </RemoteCursorOverlay>
    </Slate>
  );
}
