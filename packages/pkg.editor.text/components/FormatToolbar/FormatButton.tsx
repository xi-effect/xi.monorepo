/* eslint-disable no-nested-ternary */
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import CodeIcon from '@mui/icons-material/Code';
import { Editor, Text, Transforms } from 'slate';
import { useSlate } from 'slate-react';
import { cx, css } from '@emotion/css';

import React, { LegacyRef, PropsWithChildren } from 'react';

interface BaseProps {
  className: string;

  [key: string]: unknown;
}

const Button = React.forwardRef(
  (
    {
      className,
      active,
      reversed,
      ...props
    }: PropsWithChildren<
      {
        active: boolean;
        reversed: boolean;
      } & BaseProps
    >,
    ref: LegacyRef<HTMLSpanElement> | undefined,
  ) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          cursor: pointer;
          color: ${reversed ? (active ? 'white' : '#aaa') : active ? 'black' : '#ccc'};
        `,
      )}
    />
  ),
);

Button.displayName = 'Button';

function isFormatActive(editor: Editor, format: string) {
  const [match] = Editor.nodes(editor, {
    // @ts-ignore
    match: (n: any) => Text.isText(n) && !n[format],
    mode: 'all',
  });
  return !match;
}

function toggleFormat(editor: Editor, format: string) {
  const isActive = isFormatActive(editor, format);
  Transforms.setNodes(
    editor,
    { [format]: isActive ? null : true },
    { match: Text.isText, split: true },
  );
}

type FormatButtonProps = {
  format: string;
  icon: 'bold' | 'italic' | 'strike' | 'underlined' | 'code';
};

export function FormatButton({ format, icon }: FormatButtonProps) {
  const editor = useSlate();
  const active = isFormatActive(editor, format);

  return (
    <Button
      reversed
      active={isFormatActive(editor, format)}
      onClick={() => toggleFormat(editor, format)}
    >
      {icon === 'bold' && (
        <FormatBoldIcon sx={{ color: active ? 'secondary.main' : 'text.main' }} />
      )}
      {icon === 'italic' && (
        <FormatItalicIcon sx={{ color: active ? 'secondary.main' : 'text.main' }} />
      )}
      {icon === 'underlined' && (
        <FormatUnderlinedIcon sx={{ color: active ? 'secondary.main' : 'text.main' }} />
      )}
      {icon === 'strike' && (
        <StrikethroughSIcon sx={{ color: active ? 'secondary.main' : 'text.main' }} />
      )}
      {icon === 'code' && <CodeIcon sx={{ color: active ? 'secondary.main' : 'text.main' }} />}
    </Button>
  );
}
