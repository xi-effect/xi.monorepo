import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

export type UpdateT = {
  title: string;
  description: string;
  user: any;
  date: Date;
  content: () => EmotionJSX.Element;
};
