/* eslint-disable no-undef */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createEditor, Transforms } from 'slate';
import { Slate, withReact, Editable, ReactEditor, DefaultElement } from 'slate-react';
import { withHistory } from 'slate-history';
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { createPortal } from 'react-dom';
import dynamic from 'next/dynamic';

import './styles.css';

import { Add, Move } from 'pkg.icons';
import { Button } from 'pkg.inputs.button';
import { Stack } from '@mui/material';
import { makeNodeId, withNodeId } from './plugins/withNodeId';
import { FormatToolbar } from './components/FormatToolbar';
import { Leaf } from './components/Leaf';

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
const useEditor = () => useMemo(() => withNodeId(withHistory(withReact(createEditor()))), []);

const ContentEditor = () => {
  const editor = useEditor();

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
    const overIndex = editor.children.findIndex((x: any) => x.id === overId);

    if (overId !== activeId && overIndex !== -1) {
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

  return (
    // @ts-ignore
    <Slate editor={editor} value={value} onChange={setValue}>
      <FormatToolbar />
      <DndContext
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <Editable className="editor" renderElement={renderElement} renderLeaf={Leaf} />
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

const renderElementContent = (props: any) => <DefaultElement {...props} />;

const SortableElement = ({ attributes, element, children, renderElement }: any) => {
  const sortable = useSortable({
    id: element.id,
    transition: {
      duration: 350,
      easing: 'ease',
    },
  });

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
  const editor = useEditor();
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
          <Editable readOnly renderElement={renderElementContent} />
        </Slate>
      </Stack>
    </Stack>
  );
};

const withNoSSR = (Component: React.FunctionComponent) =>
  dynamic(() => Promise.resolve(Component), { ssr: false });

export default withNoSSR(ContentEditor);
