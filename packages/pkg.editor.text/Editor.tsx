/* eslint-disable no-undef */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createEditor, Transforms } from 'slate';
import { Slate, withReact, Editable, ReactEditor, DefaultElement } from 'slate-react';
import { withHistory } from 'slate-history';
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { createPortal } from 'react-dom';
import dynamic from 'next/dynamic';
import { Add, DragIndicator } from '@mui/icons-material';

import './styles.css';

import { IconButton } from '@mui/material';
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
    <div {...attributes}>
      <Sortable sortable={sortable}>
        <IconButton aria-label="Добавить элемент" contentEditable={false}>
          <Add sx={{ color: '#333' }} />
        </IconButton>
        <IconButton aria-label="Перетащить элемент" contentEditable={false} {...sortable.listeners}>
          <DragIndicator sx={{ color: '#333' }} />
        </IconButton>
        <div>{renderElement({ element, children })}</div>
      </Sortable>
    </div>
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
    <div className="drag-overlay">
      <IconButton aria-label="Добавить элемент" contentEditable={false}>
        <Add sx={{ color: '#333' }} />
      </IconButton>
      <IconButton aria-label="Перетащить элемент" contentEditable={false}>
        <DragIndicator sx={{ color: '#333' }} />
      </IconButton>
      <Slate editor={editor} value={value}>
        <Editable readOnly renderElement={renderElementContent} />
      </Slate>
    </div>
  );
};

const withNoSSR = (Component: React.FunctionComponent) =>
  dynamic(() => Promise.resolve(Component), { ssr: false });

export default withNoSSR(ContentEditor);
