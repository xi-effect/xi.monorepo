import { BaseRange } from 'slate';

declare module 'slate' {
  interface CustomTypes {
    Range: BaseRange;
  }
}
