/* eslint-disable no-param-reassign */
import React from 'react';
import { css } from '@emotion/css';
import { Text } from 'slate';
import { RenderLeafProps } from 'slate-react';
import { getRemoteCaretsOnLeaf, getRemoteCursorsOnLeaf } from '@slate-yjs/react';
import { CursorData } from '../../types';
import { addAlpha } from '../../utils';

export const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  Object.keys(leaf).forEach((key) => {
    switch (key) {
      case 'bold':
        children = <strong>{children}</strong>;
        break;
      case 'italic':
        children = <em>{children}</em>;
        break;
      case 'underlined':
        children = <u>{children}</u>;
        break;
      case 'strike':
        children = <s>{children}</s>;
        break;
      case 'code':
        children = (
          <code
            className={css`
              background-color: #333;
              padding: 0.25em 0.5em;
              border-radius: 0.25em;
            `}
          >
            {children}
          </code>
        );
        break;
      default:
        break;
    }
  });
  return <span {...attributes}>{children}</span>;
};

export const renderDecoratedLeaf = (props: RenderLeafProps) => {
  let newChild = props.children;

  getRemoteCursorsOnLeaf<CursorData, Text>(props.leaf).forEach((cursor) => {
    if (cursor.data) {
      newChild = (
        <span style={{ backgroundColor: addAlpha(cursor.data.color, 0.5) }}>{props.children}</span>
      );
    }
  });

  getRemoteCaretsOnLeaf<CursorData, Text>(props.leaf).forEach((caret) => {
    if (caret.data) {
      newChild = (
        <span style={{ position: 'relative' }}>
          <span
            contentEditable={false}
            style={{ position: 'absolute', top: 0, bottom: 0, backgroundColor: caret.data.color }}
          />
          <span
            contentEditable={false}
            style={{
              position: 'absolute',
              backgroundColor: caret.data.color,
              transform: 'translateY(-100%)',
              userSelect: 'none',
              fontSize: '12px',
              textDecoration: 'none',
              textTransform: 'none',
              fontStyle: 'normal',
              borderRadius: '4px',
              color: '#fafafa',
              padding: '4px',
              whiteSpace: 'nowrap',
            }}
          >
            {caret.data.name}
          </span>
          {props.children}
        </span>
      );
    }
  });

  return <Leaf {...props}>{newChild}</Leaf>;
};
