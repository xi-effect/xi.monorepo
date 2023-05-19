import { FileProps } from 'pkg.components.file';
import { UserT } from './externals';

export type ChatMessagesT = {
  /* chat id */
  id: string;
  messages: DayMessagesT[];
  /* ur; to get next amount of messages */
  next: string;
};

export type MessageT = {
  id: string;
  createdTime: string;
  type: 'file' | 'text';
  text?: string;
  file?: FileProps;
  author: UserT;
};

export type DayMessagesT = {
  date: string;
  messages: MessageT[];
};
