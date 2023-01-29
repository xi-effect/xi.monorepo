import { Link as MuiLink, Stack, Typography } from '@mui/material';

export type LinkProps = {
  text: string;
};

export const Link = ({ text }: LinkProps) => (
  <MuiLink>
    <Stack direction="row">
      <Typography>{text}</Typography>
    </Stack>
  </MuiLink>
);
