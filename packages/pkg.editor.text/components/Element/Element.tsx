/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import React from 'react';
// import { Stack } from '@mui/material';
import { useSortable } from '@dnd-kit/sortable';
// import H1 from '../Blocks/H1';
// import H2 from '../Blocks/H2';
// import Paragraph from '../Blocks/Paragraph';
// import DividerComp from '../Blocks/DividerComp';
// import Quote from '../Blocks/Quote';
// import H3 from '../Blocks/H3';
// import { Type } from '../../config';
// import File from '../Blocks/File';

// const getElement = (type: string, children: React.ReactNode, props: any) => {
//   switch (type) {
//     case Type.H1:
//       return <H1 {...props}>{children}</H1>;

//     case Type.H2:
//       return <H2 {...props}>{children}</H2>;

//     case Type.H3:
//       return <H3 {...props}>{children}</H3>;

//     case Type.DIVIDER:
//       return <DividerComp {...props} />;

//     case Type.QUOTE:
//       return <Quote {...props}>{children}</Quote>;

//     // case Type.IMAGE:
//     //   return <File type="image" icon="imageMedium" text="Добавить изображение" />;

//     // case Type.FILE:
//     //   return <File type="file" text="Добавить файл" icon="fileEditorMedium" />;

//     default:
//       return <Paragraph {...props}>{children}</Paragraph>;
//   }
// };

// export function Element({ element, children, ...props }: RenderElementProps) {
//   return <Stack direction="row" sx={{ width: '100%' }}></Stack>;
// }

export const SortableElement = ({ attributes, element, children, renderElement }: any) => {
  const sortable = useSortable({
    id: element.id,
    transition: {
      duration: 350,
      easing: 'ease',
    },
  });

  return (
    <div {...attributes}>
      <Sortable sortable={sortable}>
        <button type="button" className="handle" contentEditable={false} {...sortable.listeners}>
          ⠿
        </button>
        <div>{renderElement({ element, children })}</div>
      </Sortable>
    </div>
  );
};

const Sortable = ({ sortable, children }: any) => (
  <div
    className="sortable"
    {...sortable.attributes}
    ref={sortable.setNodeRef}
    style={{
      transition: sortable.transition,
      '--translate-y': toPx(sortable.transform?.y),
      pointerEvents: sortable.isSorting ? 'none' : undefined,
      opacity: sortable.isDragging ? 0 : 1,
    }}
  >
    {children}
  </div>
);

const toPx = (value: any) => (value ? `${Math.round(value)}px` : undefined);
