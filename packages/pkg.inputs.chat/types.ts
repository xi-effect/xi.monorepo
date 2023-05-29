import { Descendant } from 'slate';
import { ReactEditor } from 'slate-react';

export type CustomText = {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strike?: boolean;
  code?: boolean;
  text: string;
};

export type Paragraph = {
  type: 'paragraph';
  children: Descendant[];
};

export type HeadingOne = {
  type: 'heading-one';
  children: Descendant[];
};

export type HeadingTwo = {
  type: 'heading-two';
  children: Descendant[];
};

export type HeadingThree = {
  type: 'heading-three';
  children: Descendant[];
};

export type InlineCode = {
  type: 'inline-code';
  children: Descendant[];
};

export type BlockQuote = {
  type: 'block-quote';
  children: Descendant[];
};

export type Divider = {
  type: 'divider';
  children: Descendant[];
};

export type File = {
  type: 'file';
  children: Descendant[];
};

export type Image = {
  type: 'image';
  children: Descendant[];
};

export type CustomElement =
  | Paragraph
  | HeadingOne
  | HeadingTwo
  | HeadingThree
  | InlineCode
  | BlockQuote
  | Divider
  | File
  | Image;

export type CustomEditor = ReactEditor;
declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
