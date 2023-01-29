import { Link as MuiLink, Stack, Typography } from '@mui/material';
import { Link as LinkIcon } from 'pkg.icons.link';

export type LinkProps = {
  text: string;
};

export const Link = ({ text }: LinkProps) => (
  <MuiLink>
    <Stack direction="row">
      <LinkIcon viewBox="0 0 16 16" />
      <Typography>{text}</Typography>
    </Stack>
  </MuiLink>
);
