import { HocuspocusProvider } from '@hocuspocus/provider';
import { withCursors, withYHistory, withYjs, YjsEditor } from '@slate-yjs/core';
import React, {
  useEffect,
  useMemo,
  useState,
  CSSProperties,
  useRef,
} from 'react';
import type { Descendant } from 'slate';
import { createEditor } from 'slate';
import { Slate, withReact } from 'slate-react';
import * as Y from 'yjs';
import { CursorOverlayData, useRemoteCursorOverlayPositions } from '@slate-yjs/react';
import clsx from 'clsx';
import { CustomEditable } from './components/CustomEditable';
import { FormatToolbar } from './components/FormatToolbar';
import { withMarkdown } from './plugins/withMarkdown';
import { withNormalize } from './plugins/withNormalize';
import { randomCursorData, addAlpha } from './utils';

import { CursorData } from './types';

type CaretProps = Pick<CursorOverlayData<CursorData>, 'caretPosition' | 'data'>;

function Caret({ caretPosition, data }: CaretProps) {
  const caretStyle: CSSProperties = {
    ...caretPosition,
    background: data?.color,
  };

  const labelStyle: CSSProperties = {
    transform: 'translateY(-100%)',
    background: data?.color,
  };

  return (
    <div style={caretStyle} className="w-0.5 absolute">
      <div
        className="absolute text-xs text-white whitespace-nowrap top-0 rounded rounded-bl-none px-1.5 py-0.5"
        style={labelStyle}
      >
        {data?.name}
      </div>
    </div>
  );
}

function RemoteSelection({ data, selectionRects, caretPosition }: CursorOverlayData<CursorData>) {
  if (!data) {
    return null;
  }

  const selectionStyle: CSSProperties = {
    // Add a opacity to the background color
    backgroundColor: addAlpha(data.color, 0.5),
  };

  return (
    <>
      {selectionRects.map((position, i) => (
        <div
          style={{ ...selectionStyle, ...position }}
          className="absolute pointer-events-none"
          // eslint-disable-next-line react/no-array-index-key
          key={i}
        />
      ))}
      {caretPosition && <Caret caretPosition={caretPosition} data={data} />}
    </>
  );
}

export function ContentEditor() {
  const [value, setValue] = useState<Descendant[]>([]);
  const [connected, setConnected] = useState(false);
  console.log('connected', connected);

  const provider = useMemo(
    () =>
      new HocuspocusProvider({
        url: 'ws://127.0.0.1:1234',
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

  const containerRef = useRef<HTMLDivElement>(null);
  const [cursors] = useRemoteCursorOverlayPositions<CursorData>({
    containerRef,
  });

  return (
    <Slate value={value} onChange={setValue} editor={editor}>
      <div className={clsx('relative')} ref={containerRef}>
        <FormatToolbar />
        <CustomEditable className="max-w-4xl w-full flex-col break-words" />
        {cursors.map((cursor) => (
          <RemoteSelection key={cursor.clientId} {...cursor} />
        ))}
      </div>
    </Slate>
  );
}
