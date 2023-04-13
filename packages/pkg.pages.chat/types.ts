export type FileT = {
  id: string;
  filename: string;
};
export type UserT = {
  id: number | null; // ID пользователя, уникален
  username: string; // Имя пользователя, может быть неуникальным
  handle: string; // Уникальное имя пользователя, отображается в интерфейсе как основное
  avatar: FileT | null; // Аватарка пользователя
};

export type MsgBodyT = {
  text?: string;
  attachments?: any[];
};

export type MsgT = {
  body: MsgBodyT;
  reactions?: any;
  author: string;
  /* with minutes */
  date: string;
};

export type ChatBodyT = {
  date: string;
  msgs: MsgT[];
};

export type UpbarT = { name: string; host: string };

export type ChatProps = {
  upbar: UpbarT;
  body: ChatBodyT[];
};
