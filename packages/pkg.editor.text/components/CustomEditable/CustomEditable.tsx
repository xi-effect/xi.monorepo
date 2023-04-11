import React, { ComponentProps } from 'react';
import { Editable } from 'slate-react';
import { Element } from '../Element';
import { Leaf } from '../Leaf';

type CustomEditableProps = Omit<ComponentProps<typeof Editable>, 'renderElement' | 'renderLeaf'> &
  Partial<Pick<ComponentProps<typeof Editable>, 'renderElement' | 'renderLeaf'>>;

export function CustomEditable({
  renderElement = Element,
  renderLeaf = Leaf,
  ...props
}: CustomEditableProps) {
  return (
    <Editable
      placeholder="Write something ..."
      style={{ display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'column' }}
      {...props}
      renderElement={renderElement}
      renderLeaf={renderLeaf}
    />
  );
}