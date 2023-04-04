export type MsgBodyT = {
  text?: string;
  attachments?: any[];
};

export type MsgT = {
  body: MsgBodyT;
  reactions?: any;
  author: any;
  /* with minutes */
  date: string;
};

export type ChatBodyT = {
  date: string;
  msgs: MsgT[];
};

export type ChatProps = {
  name: string;
  body: ChatBodyT[];
};
