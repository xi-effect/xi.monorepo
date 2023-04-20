/* eslint-disable no-param-reassign */
import React from 'react';
import { css } from '@emotion/css';
import { RenderLeafProps } from 'slate-react';

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
              font-style: IBM Plex Mono;
              background-color: #E8E8E8;
              padding: 0 2px;
              border-radius: 2px;
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
