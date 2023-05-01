import React, { ReactNode, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Editor, Range } from 'slate';
import { useFocused, useSlate } from 'slate-react';
import { Paper, Stack } from '@mui/material';
import { FormatButton } from './FormatButton';

type PortalProps = { children?: ReactNode };

function Portal({ children }: PortalProps) {
  return document && typeof document === 'object'
    ? ReactDOM.createPortal(children, document.body)
    : null;
}

export function FormatToolbar() {
  const ref = useRef<HTMLDivElement>(null);
  const editor = useSlate();
  const focused = useFocused();

  useEffect(() => {
    const el = ref.current;
    const { selection } = editor;

    if (!el) {
      return;
    }

    if (
      !selection ||
      !focused ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ''
    ) {
      el.removeAttribute('style');
      return;
    }

    const domSelection = window.getSelection();
    if (!domSelection?.rangeCount) {
      return;
    }

    const domRange = domSelection.getRangeAt(0);

    const rect = domRange.getBoundingClientRect();
    el.style.opacity = '1';
    el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight - 6}px`;
    el.style.left = `${rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2}px`;
  });

  return (
    <Portal>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <Paper
        ref={ref}
        sx={{
          height: '40px',
          padding: 1,
          position: 'absolute',
          zIndex: 1,
          top: '-10000px',
          left: '-10000px',
          marginTop: '0px',
          opacity: 0,
          bgcolor: 'grayscale.0',
          borderRadius: '8px',
          border: '1px solid',
          borderColor: 'grayscale.10',
          transition: 'opacity 0.75s',
          boxShadow: '0px 8px 8px rgba(16, 16, 16, 0.04), 0px 12px 16px rgba(16, 16, 16, 0.04)',
        }}
        onMouseDown={(e: React.MouseEvent) => {
          // prevent toolbar from taking focus away from EditorSample
          e.preventDefault();
        }}
      >
        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={0.5}>
          <FormatButton format="bold" icon="bold" />
          <FormatButton format="italic" icon="italic" />
          <FormatButton format="strike" icon="strike" />
          <FormatButton format="underlined" icon="underlined" />
          <FormatButton format="code" icon="code" />
        </Stack>
      </Paper>
    </Portal>
  );
}
