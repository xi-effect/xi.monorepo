import { Box, Grid, Theme, useMediaQuery } from '@mui/material';
import { observer } from 'mobx-react';
import { UpdateT } from './types';

import Item from './Item';
import Content from './Conetnt';

const contentArray: UpdateT[] = [
  {
    title: 'Большое обновление v0.1',
    description: 'Краткое описание обновления (Максимум 2 строки)',
    date: new Date(),
    content: Content,
  },
];

const Items = observer(() => {
  const mobile700: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(700));
  const mobile375: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(375));

  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        sx={{
          width: '100%',
          pt: mobile700 ? '12px' : '',
          pl: mobile375 ? '4px' : `${mobile700 ? '12px' : ''}`,
        }}
        container
        spacing={2}
      >
        {contentArray.map((item, index) => (
          <Grid item xs key={index}>
            <Item {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});

export default Items;
