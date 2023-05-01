export type UserT = {
  username: string;
  avatar: FileT | null;
};
export type FileT = {
  id: string;
  filename: string;
};

export type ChatProps = {
  id: string;
};

export type ChatInfoT = {
  id: string;
  name: string;
  host: UserT;
};

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
  file?: FileT;
  author: UserT;
};

export type DayMessagesT = {
  date: string;
  messages: MessageT[];
};
