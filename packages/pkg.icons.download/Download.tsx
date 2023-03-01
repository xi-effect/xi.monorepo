import { SvgIcon } from '@mui/material';

export type DownloadProps = {
  [key: string]: any;
};

export const Download = ({ ...props }: DownloadProps) => (
  <SvgIcon {...props}>
    <path
      d="M11.664 3.061a1.02 1.02 0 0 0-.533.45l-.111.189-.011 3.938-.011 3.938-.889-.883c-.489-.486-.95-.914-1.024-.952-.476-.24-1.086-.031-1.338.459-.1.193-.111.253-.096.487a.915.915 0 0 0 .121.44c.056.095.909.976 1.895 1.958 1.609 1.601 1.813 1.791 1.99 1.85a.987.987 0 0 0 .686 0c.177-.059.381-.249 1.99-1.85.986-.982 1.839-1.863 1.895-1.958a.915.915 0 0 0 .121-.44c.015-.234.004-.294-.096-.487a1.047 1.047 0 0 0-.625-.523 1.175 1.175 0 0 0-.713.064c-.074.038-.535.466-1.025.952l-.89.885V7.719c0-2.535-.015-3.91-.042-4.008a1.06 1.06 0 0 0-.493-.587c-.236-.121-.578-.148-.801-.063m-8.956 6.997a.99.99 0 0 0-.569.466l-.119.216v2.92c0 2.646.007 2.953.071 3.271a5.042 5.042 0 0 0 3.978 3.978c.327.066.73.071 5.931.071 5.201 0 5.604-.005 5.931-.071a5.047 5.047 0 0 0 3.978-3.978c.064-.318.071-.625.071-3.271v-2.92l-.124-.22a1.008 1.008 0 0 0-1.013-.501 1.07 1.07 0 0 0-.699.501l-.124.22-.021 2.92c-.021 2.915-.021 2.92-.113 3.2a3.114 3.114 0 0 1-2.046 2.027l-.3.093H6.46l-.3-.093a3.114 3.114 0 0 1-2.046-2.027c-.092-.28-.092-.285-.113-3.2l-.021-2.92-.12-.217c-.229-.415-.729-.616-1.152-.465"
      fillRule="evenodd"
    />
  </SvgIcon>
);
