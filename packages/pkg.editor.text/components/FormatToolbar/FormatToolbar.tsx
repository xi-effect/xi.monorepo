import React, { PropsWithChildren, ReactNode, LegacyRef, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Editor, Range } from 'slate';
import { useFocused, useSlate } from 'slate-react';
import { cx, css } from '@emotion/css';
import { FormatButton } from './FormatButton';

type PortalProps = { children?: ReactNode };

function Portal({ children }: PortalProps) {
  return document && typeof document === 'object'
    ? ReactDOM.createPortal(children, document.body)
    : null;
}

interface BaseProps {
  className: string;

  [key: string]: unknown;
}

const Menu = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: LegacyRef<HTMLDivElement> | undefined,
  ) => (
    <div
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          & > * {
            display: inline-block;
          }

          & > * + * {
            margin-left: 8px;
          }
        `,
      )}
    />
  ),
);

Menu.displayName = 'Menu';

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
      <Menu
        ref={ref}
        className={css`
          padding: 8px 7px 2px;
          position: absolute;
          z-index: 1;
          top: -10000px;
          left: -10000px;
          margin-top: 0px;
          opacity: 0;
          background-color: #757575;
          border-radius: 4px;
          transition: opacity 0.75s;
        `}
        onMouseDown={(e: React.MouseEvent) => {
          // prevent toolbar from taking focus away from EditorSample
          e.preventDefault();
        }}
      >
        <FormatButton format="bold" icon="bold" />
        <FormatButton format="italic" icon="italic" />
        <FormatButton format="strikethrough" icon="strike" />
        <FormatButton format="underlined" icon="underlined" />
        <FormatButton format="code" icon="code" />
      </Menu>
    </Portal>
  );
}
