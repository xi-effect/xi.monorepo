import React from 'react';
import { RenderLeafProps } from 'slate-react';

export function Leaf({ attributes, children, leaf }: RenderLeafProps) {
  let child: React.ReactNode;
  if (leaf.bold) {
    child = <strong>{children}</strong>;
  }

  if (leaf.italic) {
    child = <em>{children}</em>;
  }

  if (leaf.underline) {
    child = <u>{children}</u>;
  }

  if (leaf.strikethrough) {
    child = <del>{children}</del>;
  }

  return <span {...attributes}>{child}</span>;
}
