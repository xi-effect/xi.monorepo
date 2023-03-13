import { BaseEditor } from 'slate';
import { HistoryEditor } from 'slate-history';
import { ReactEditor } from 'slate-react';

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;

export type ParagraphElementT = {
  type: 'paragraph';
  children: CustomText[];
};

export type HeadingElementT = {
  type: 'heading';
  level: number;
  children: CustomText[];
};

export type CodeElementT = {
  type: 'code';
  children: CustomText[];
};

export type CustomElement = ParagraphElementT | HeadingElementT | CodeElementT;

export type FormattedText = { text: string; bold?: true };

export type CustomText = FormattedText;

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
