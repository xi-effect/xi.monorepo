import { Type } from '../../config';

import { makeNodeId } from '../../plugins/withNodeId';

export type CreationMenuConfigT = {
  type: Type;
  icon: string;
  label: string;
};

export const editorExample = (type: Type) => ({ type, id: makeNodeId() });

export const slateExample = (type: Type) => {
  switch (type) {
    case Type.H1:
      return [{ type, id: makeNodeId(), children: [{ text: '' }] }];

    case Type.H2:
      return [{ type, id: makeNodeId(), children: [{ text: '' }] }];

    case Type.H3:
      return [{ type, id: makeNodeId(), children: [{ text: '' }] }];

    case Type.QUOTE:
      return [{ type, id: makeNodeId(), children: [{ text: '' }] }];

    default:
      return [{ type, id: makeNodeId(), children: [{ text: '' }] }];
  }
};

export const creationMenuConfig: CreationMenuConfigT[] = [
  { type: Type.PARAGRAPH, icon: 'text', label: 'Текст' },
  { type: Type.H1, icon: 'h1', label: 'Заголовок 1' },
  { type: Type.H2, icon: 'h2', label: 'Заголовок 2' },
  { type: Type.H3, icon: 'h3', label: 'Заголовок 3' },
  { type: Type.Ol, icon: 'ol', label: 'Нумерованный список' },
  { type: Type.Ul, icon: 'ul', label: 'Маркированный список' },
  { type: Type.QUOTE, icon: 'quote', label: 'Цитата' },
  { type: Type.ADVICE, icon: 'advice', label: 'Совет' },
  { type: Type.DIVIDER, icon: 'divider', label: 'Разделитель' },
  { type: Type.IMAGE, icon: 'image', label: 'Изображение' },
  { type: Type.VIDEO, icon: 'video', label: 'Видео' },
  { type: Type.FILE, icon: 'file', label: 'Файл' },
  { type: Type.CODE, icon: 'code', label: 'Код' },
];
