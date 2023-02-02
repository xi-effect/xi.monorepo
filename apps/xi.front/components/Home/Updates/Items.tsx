import { Box, Grid } from '@mui/material';
import { observer } from 'mobx-react';
import { UpdateT } from './types';

import Item from './Item';
import Content from './Conetnt';

const contentArray: UpdateT[] = [
  {
    title: 'Большое обновление v0.1',
    description: 'Краткое описание обновления (Максимум 2 строки)',
    user: 'Ivan',
    date: new Date(),
    content: Content,
  },
];

const Items = observer(() => (
  <Box sx={{ width: '100%', mt: '24px' }}>
    <Grid sx={{ width: '100%' }} container spacing={2}>
      {contentArray.map((item, index) => (
        <Grid item xs key={index}>
          <Item {...item} />
        </Grid>
      ))}
    </Grid>
  </Box>
));

export default Items;
