import React, { ComponentProps } from 'react';
import { Editable } from 'slate-react';
import { Leaf } from '../Leaf';

type CustomEditableProps = Omit<ComponentProps<typeof Editable>, 'renderElement' | 'renderLeaf'> &
  Partial<Pick<ComponentProps<typeof Editable>, 'renderElement' | 'renderLeaf'>>;

export function CustomEditable({ renderLeaf = Leaf, ...props }: CustomEditableProps) {
  return (
    <Editable
      placeholder="Напишите что-нибудь..."
      style={{ display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'column' }}
      {...props}
      renderLeaf={renderLeaf}
    />
  );
}
