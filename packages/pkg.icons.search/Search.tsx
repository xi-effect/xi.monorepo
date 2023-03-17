import { SvgIcon } from '@mui/material';

export type SearchProps = {
  [key: string]: any;
};

export const Search = ({ ...props }: SearchProps) => (
  <SvgIcon {...props}>
    <path
      d="M10.54 3.023c-1.062.102-1.848.312-2.63.703-2.072 1.036-3.462 2.94-3.836 5.254-.066.413-.066 1.627 0 2.04.5 3.092 2.814 5.406 5.906 5.906.413.066 1.627.066 2.04 0 1.179-.191 2.154-.6 3.203-1.345.043-.031.433.335 1.686 1.583 1.744 1.735 1.722 1.717 2.116 1.715.441-.002.853-.427.853-.879 0-.365-.062-.44-1.749-2.13-1.23-1.231-1.58-1.603-1.549-1.646.611-.861.974-1.62 1.198-2.504.157-.623.199-.983.199-1.72 0-.944-.101-1.538-.404-2.38-.858-2.383-2.992-4.147-5.471-4.522-.376-.057-1.289-.101-1.562-.075m1.012 2.02a5.008 5.008 0 0 1 4.128 3.205c.412 1.072.405 2.472-.017 3.545a5.076 5.076 0 0 1-3.063 2.939c-.556.19-.93.248-1.6.248s-1.044-.058-1.6-.248a5.041 5.041 0 0 1-3.239-3.492c-.241-.933-.178-2.115.159-2.992a4.997 4.997 0 0 1 5.232-3.205"
      fill="#000"
      fillRule="evenodd"
    />
  </SvgIcon>
);
