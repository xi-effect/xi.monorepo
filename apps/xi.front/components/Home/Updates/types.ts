import { FunctionComponent } from 'react';

export type UpdateT = {
  title: string;
  description: string;
  date: Date;
  content: FunctionComponent<any>;
};
