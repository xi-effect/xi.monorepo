import React, { ReactNode, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Editor, Range } from 'slate';
import { useFocused, useSlate } from 'slate-react';
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
      <div
        ref={ref}
        style={{ position: 'absolute', display: 'flex', flexDirection: 'row' }}
        onMouseDown={(e) => e.preventDefault()}
      >
        <FormatButton format="bold" icon="bold" />
        <FormatButton format="italic" icon="italic" />
        <FormatButton format="strikethrough" icon="strike" />
      </div>
    </Portal>
  );
}
