import React from 'react';
import { RenderElementProps } from 'slate-react';
import H1 from '../Blocks/H1';
import H2 from '../Blocks/H2';
import Paragraph from '../Blocks/Paragraph';
import DividerComp from '../Blocks/DividerComp';
import Quote from '../Blocks/Quote';
import H3 from '../Blocks/H3';
import { Type } from '../../config';
// import File from '../Blocks/File';

export function Element({ element, children }: RenderElementProps) {
  switch (element.type) {
    case Type.H1:
      return <H1>{children}</H1>;

    case Type.H2:
      return <H2>{children}</H2>;

    case Type.H3:
      return <H3>{children}</H3>;

    case Type.DIVIDER:
      return <DividerComp />;

    case Type.QUOTE:
      return <Quote>{children}</Quote>;

    // case Type.IMAGE:
    //   return <File type="image" icon="imageMedium" text="Добавить изображение" />;

    // case Type.FILE:
    //   return <File type="file" text="Добавить файл" icon="fileEditorMedium" />;

    default:
      return <Paragraph>{children}</Paragraph>;
  }
}
