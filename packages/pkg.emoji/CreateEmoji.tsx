import { SvgIcon, SvgIconProps } from '@mui/material';

type CreateSvg = {
  unicode: string;
  title?: string;
} & SvgIconProps;

export const CreateEmoji = ({ unicode, title, ...props }: CreateSvg) => (
  <SvgIcon {...props}>
    <use href={`/emojis.svg#${unicode}`}>
      <title>{title}</title>
    </use>
  </SvgIcon>
);
