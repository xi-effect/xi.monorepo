import { observer } from 'mobx-react';
import { Grid, Typography } from '@mui/material';

const footerItems = [
  '© Xieffect.ru',
  'Поддержка',
  'Политика конфиденциальности',
  'Пользовательское соглашение',
];

const Footer = observer(() => (
  <Grid container sx={{ mt: 'auto' }} spacing={4}>
    {footerItems.map((item) => (
      <Grid item>
        <Typography variant="xs">{item}</Typography>
      </Grid>
    ))}
  </Grid>
));

export default Footer;
