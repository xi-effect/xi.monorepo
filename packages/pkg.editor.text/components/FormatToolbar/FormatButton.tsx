/* eslint-disable no-nested-ternary */

import { Editor, Text, Transforms } from 'slate';
import { useSlate } from 'slate-react';

import { Bold, Stroke, Code, Underline, Italic } from 'pkg.icons';
import { Button } from '@mui/material';

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
  const bgcolor = active ? 'brand.20' : 'transparent';

  const icons = {
    bold: <Bold sx={{ color: 'petersburg.100' }} />,
    italic: <Italic sx={{ color: 'petersburg.100' }} />,
    underlined: <Underline sx={{ color: 'petersburg.100' }} />,
    strike: <Stroke sx={{ color: 'petersburg.100' }} />,
    code: <Code sx={{ color: 'petersburg.100' }} />,
  };

  return (
    <Button
      variant="text"
      type="button"
      sx={{
        minWidth: '24px',
        height: '24px',
        width: '24px',
        borderRadius: '4px',
        boxShadow: 'none',
        bgcolor,

        '&:hover': {
          bgcolor,
        },
      }}
      onClick={() => toggleFormat(editor, format)}
    >
      {icons[icon]}
    </Button>
  );
}
