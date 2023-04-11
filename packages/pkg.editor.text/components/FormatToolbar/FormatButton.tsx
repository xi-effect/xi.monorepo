import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';

import clsx from 'clsx';
import { Editor, Text, Transforms } from 'slate';
import { useSlate } from 'slate-react';

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
  icon: 'bold' | 'italic' | 'strike';
};

export function FormatButton({ format, icon }: FormatButtonProps) {
  const editor = useSlate();
  const active = isFormatActive(editor, format);

  return (
    <button
      className={clsx('h-8 w-8 flex justify-center items-center hover:bg-gray-600')}
      type="button"
      onMouseDown={(event) => {
        event.preventDefault();
        toggleFormat(editor, format);
      }}
    >
      {icon === 'bold' && <FormatBoldIcon className={active ? 'text-primary' : 'text-white'} />}
      {icon === 'italic' && <FormatItalicIcon className={active ? 'text-primary' : 'text-white'} />}
      {icon === 'strike' && (
        <FormatStrikethroughIcon className={active ? 'text-primary' : 'text-white'} />
      )}
    </button>
  );
}
