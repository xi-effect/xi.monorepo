import React from 'react';
import H1 from 'components/ContentEditor/Blocks/H1';
import H2 from 'components/ContentEditor/Blocks/H2';
import Text from 'components/ContentEditor/Blocks/Text';
import DividerComp from 'components/ContentEditor/Blocks/DividerComp';
import Quote from 'components/ContentEditor/Blocks/Quote';
import H3 from 'components/ContentEditor/Blocks/H3';
import { RenderElementProps } from 'slate-react';
import { Type } from 'kit/Editor/common/withListsPlugin';
import { CreationMenuConfigT } from 'kit/Editor/common/menuConfig';
import ListItem from '../Blocks/ListItem';
import File from '../Blocks/File';

export type ResultBlockT = RenderElementProps & {
  element: CreationMenuConfigT;
};

const ResultBlock: React.FC<ResultBlockT> = (props) => {
  const { attributes, children, element } = props;

  switch (element.type) {
    case Type.H1:
      // @ts-ignore
      return <H1>{children}</H1>;

    case Type.H2:
      // @ts-ignore
      return <H2>{children}</H2>;

    case Type.H3:
      // @ts-ignore
      return <H3>{children}</H3>;

    case Type.DIVIDER:
      return <DividerComp />;

    case Type.QUOTE:
      // @ts-ignore
      return <Quote>{children}</Quote>;

    case Type.LIST_ITEM:
      // @ts-ignore
      return <ListItem>{children}</ListItem>;

    case Type.LIST_ITEM_TEXT:
      return <div {...attributes}>{children}</div>;

    case Type.IMAGE:
      return <File type="image" icon="imageMedium" text="Добавить изображение" />;

    case Type.VIDEO:
      return <File type="video" icon="videoMedium" text="Добавить видео" />;

    case Type.FILE:
      return <File type="file" text="Добавить файл" icon="fileEditorMedium" />;

    default:
      // @ts-ignore
      return <Text>{children}</Text>;
  }
};

export default ResultBlock;
