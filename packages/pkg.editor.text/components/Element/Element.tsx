/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import React from 'react';
import { Stack } from '@mui/material';
import H1 from '../Blocks/H1';
import H2 from '../Blocks/H2';
import Paragraph from '../Blocks/Paragraph';
import DividerComp from '../Blocks/DividerComp';
import Quote from '../Blocks/Quote';
import H3 from '../Blocks/H3';
import { Type } from '../../config';

const getElement = (type: string, children: React.ReactNode, props: any) => {
  switch (type) {
    case Type.H1:
      return <H1 {...props}>{children}</H1>;

    case Type.H2:
      return <H2 {...props}>{children}</H2>;

    case Type.H3:
      return <H3 {...props}>{children}</H3>;

    case Type.DIVIDER:
      return <DividerComp {...props} />;

    case Type.QUOTE:
      return <Quote {...props}>{children}</Quote>;

    // case Type.IMAGE:
    //   return <File type="image" icon="imageMedium" text="Добавить изображение" />;

    // case Type.FILE:
    //   return <File type="file" text="Добавить файл" icon="fileEditorMedium" />;

    default:
      return <Paragraph {...props}>{children}</Paragraph>;
  }
};

export function Element({ element, children, ...props }: any) {
  return (
    <Stack sx={{ width: '100%' }} direction="row">
      {getElement(element.type, children, props)}
    </Stack>
  );
}
