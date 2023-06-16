import { observer } from 'mobx-react';
import { Stack, Typography } from '@mui/material';
import { Chevron } from 'pkg.icons';

const Breadcrumbs = observer(() => (
  <Stack
    direction="row"
    justifyContent="flex-start"
    alignItems="center"
    spacing={0.5}
    sx={{
      width: '100%',
      height: '16px',
    }}
  >
    <Typography
      sx={{
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '16px',
        color: 'brand.60',
      }}
    >
      4Д — БЖ
    </Typography>
    <Chevron sx={{ fontSize: 12 }} color="primary" />
    <Typography
      sx={{
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '16px',
        color: 'brand.60',
      }}
    >
      Задания
    </Typography>
  </Stack>
));

export default Breadcrumbs;
