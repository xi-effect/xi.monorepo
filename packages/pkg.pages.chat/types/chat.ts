import { ReactNode } from 'react';
import { MenuT } from './Menu';
import { UserT } from './externals';

export type LayoutChatProps = {
  chosenMenu: MenuT;
  MenuWidth?: string;
  children: ReactNode;
};

export type ChatProps = {
  id: string;
};

export type ChatInfoT = {
  id: string;
  name: string;
  host: UserT;
  messages: string;
};

export type UpbarProps = ChatInfoT & {
  openMenu: (type: MenuT) => void;
  menuType: MenuT;
};
