/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createEditor, Editor, Transforms } from 'slate';
import { Slate, withReact, Editable, ReactEditor } from 'slate-react';
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { createPortal } from 'react-dom';
import dynamic from 'next/dynamic';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

import * as Y from 'yjs';
import { Add, Move } from 'pkg.icons';
import { Button } from 'pkg.inputs.button';
import { Stack } from '@mui/material';
import { HocuspocusProvider } from '@hocuspocus/provider';
import { withCursors, withYHistory, withYjs, YjsEditor } from '@slate-yjs/core';
import { useDecorateRemoteCursors } from '@slate-yjs/react';
import { makeNodeId, withNodeId } from './plugins/withNodeId';
import { FormatToolbar } from './components/FormatToolbar';
import { Leaf, renderDecoratedLeaf } from './components/Leaf';

import { CreationMenu } from './components/CreationMenu';

import { Element } from './components/Element';

import './styles.css';
import { randomCursorData } from './utils';

const urlWS = 'ws://127.0.0.1:1234';

const initialValue = [
  {
    id: makeNodeId(),
    children: [
      {
        text: 'In music theory, an interval is a difference in pitch between two sounds. An interval may be described as horizontal, linear, or melodic if it refers to successively sounding tones, such as two adjacent pitches in a melody, and vertical or harmonic if it pertains to simultaneously sounding tones, such as in a chord.',
      },
    ],
  },
];

const toPx = (value: any) => (value ? `${Math.round(value)}px` : undefined);

function DecoratedEditable({ ...props }) {
  const decorate = useDecorateRemoteCursors();
  return <Editable decorate={decorate} {...props} />;
}

const ContentEditor = () => {
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
        jitter: true,
        minDelay: 20000,
      }),
    [],
  );

  const editor = useMemo(() => {
    const sharedType = provider.document.get('content', Y.XmlText) as Y.XmlText;

    const e = withNodeId(
      withReact(
        withCursors(
          withYHistory(withYjs(createEditor(), sharedType, { autoConnect: false })),
          provider.awareness,
          {
            data: randomCursorData(),
          },
        ),
      ),
    );

    const { normalizeNode } = e;
    e.normalizeNode = (entry: [any]) => {
      const [node] = entry;
      if (!Editor.isEditor(node) || node.children.length > 0) {
        return normalizeNode(entry);
      }

      Transforms.insertNodes(
        editor,
        {
          type: 'paragraph',
          children: [{ text: '' }],
        },
        { at: [0] },
      );
    };

    return e;
  }, [provider.awareness, provider.document]);

  useEffect(() => {
    provider.connect();
    return () => provider.disconnect();
  }, [provider]);
  useEffect(() => {
    YjsEditor.connect(editor);
    return () => YjsEditor.disconnect(editor);
  }, [editor]);

  const [value, setValue] = useState(initialValue);
  const [activeId, setActiveId] = useState(null);
  const activeElement = editor.children.find((x: any) => x.id === activeId);

  const handleDragStart = (event: DragStartEvent) => {
    if (event.active) {
      clearSelection();
      // @ts-ignore
      setActiveId(event.active.id);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const overId = event.over?.id;
    console.log('editor.children', editor.children);
    const overIndex = editor.children.findIndex((x: any) => x.id === overId);

    if (overId !== activeId && overIndex !== -1) {
      // Transforms.insertNodes(
      //   editor,
      //   // @ts-ignore
      //   { type, children: [{ text: 'rrrr' }] },
      //   { at: [overIndex] },
      // );
      Transforms.moveNodes(editor, {
        at: [],
        // @ts-ignore
        match: (node) => node.id === activeId,
        to: [overIndex],
      });
    }

    setActiveId(null);
  };

  const handleDragCancel = () => {
    setActiveId(null);
  };

  const clearSelection = () => {
    ReactEditor.blur(editor);
    Transforms.deselect(editor);
    window.getSelection()?.empty();
  };

  const renderElement = useCallback((props: any) => {
    const isTopLevel = ReactEditor.findPath(editor, props.element).length === 1;

    return isTopLevel ? (
      <SortableElement {...props} renderElement={renderElementContent} />
    ) : (
      renderElementContent(props)
    );
  }, []);

  const items = useMemo(() => editor.children.map((element: any) => element.id), [editor.children]);
  console.log('items', items);

  return (
    // @ts-ignore
    <Slate editor={editor} value={value} onChange={setValue}>
      <FormatToolbar />
      <DndContext
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
        modifiers={[restrictToVerticalAxis]}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <DecoratedEditable
            className="editor"
            renderElement={renderElement}
            renderLeaf={renderDecoratedLeaf}
          />
        </SortableContext>
        {createPortal(
          <DragOverlay adjustScale={false}>
            {activeElement && <DragOverlayContent element={activeElement} />}
          </DragOverlay>,
          document.body,
        )}
      </DndContext>
    </Slate>
  );
};

const renderElementContent = (props: any) => <Element {...props} />;

const SortableElement = ({ attributes, element, children, renderElement }: any) => {
  const sortable = useSortable({
    id: element.id,
    transition: {
      duration: 350,
      easing: 'ease',
    },
  });

  // const [editAnchorEl, setEditAnchorEl] = useState<null | HTMLDivElement>(null);
  const [addAnchorEl, setAddAnchorEl] = useState<null | HTMLButtonElement>(null);

  return (
    <Sortable sortable={sortable}>
      <Stack direction="row" spacing={1} {...attributes}>
        <Stack sx={{ pr: 1, pt: '4px', width: '48px' }} direction="row" spacing={1}>
          <Button
            variant="text"
            size="small"
            sx={{
              width: '20px',
              height: '20px',
              minWidth: '20px',
              p: '3px',
              '&:active': { p: '3px' },
            }}
            aria-label="Добавить элемент"
            contentEditable={false}
            startIcon={Add}
            onClick={(e) => setAddAnchorEl(e.currentTarget)}
          />
          <Button
            variant="text"
            size="small"
            sx={{
              width: '20px',
              height: '20px',
              minWidth: '20px',
              p: '3px',
              cursor: 'grab',
            }}
            aria-label="Перетащить элемент"
            contentEditable={false}
            startIcon={Move}
            {...sortable.listeners}
          />
        </Stack>
        <CreationMenu
          id={element.id}
          anchorEl={addAnchorEl}
          closeMenu={() => setAddAnchorEl(null)}
        />
        <Stack>{renderElement({ element, children })}</Stack>
      </Stack>
    </Sortable>
  );
};

const Sortable = ({ sortable, children }: any) => (
  <div
    className="sortable"
    {...sortable.attributes}
    ref={sortable.setNodeRef}
    style={{
      transition: sortable.transition,
      '--translate-y': toPx(sortable.transform?.y),
      pointerEvents: sortable.isSorting ? 'none' : undefined,
      opacity: sortable.isDragging ? 0 : 1,
    }}
  >
    {children}
  </div>
);

const DragOverlayContent = ({ element }: any) => {
  const editor = createEditor();
  const [value] = useState([JSON.parse(JSON.stringify(element))]); // clone

  useEffect(() => {
    document.body.classList.add('dragging');

    return () => document.body.classList.remove('dragging');
  }, []);

  return (
    <Stack direction="row" spacing={1}>
      <Stack sx={{ pr: 1, pt: '4px', width: '48px' }} direction="row" spacing={1}>
        <Button
          variant="text"
          size="small"
          sx={{ width: '20px', height: '20px', minWidth: '20px', p: '3px' }}
          aria-label="Добавить элемент"
          contentEditable={false}
          startIcon={Add}
        />
        <Button
          variant="text"
          size="small"
          sx={{
            width: '20px',
            height: '20px',
            minWidth: '20px',
            p: '3px',
            cursor: 'grab',
          }}
          aria-label="Перетащить элемент"
          contentEditable={false}
          startIcon={Move}
        />
      </Stack>
      <Stack>
        <Slate editor={editor} value={value}>
          <Editable readOnly renderElement={renderElementContent} renderLeaf={Leaf} />
        </Slate>
      </Stack>
    </Stack>
  );
};

const withNoSSR = (Component: React.FunctionComponent) =>
  dynamic(() => Promise.resolve(Component), { ssr: false });

export default withNoSSR(ContentEditor);
