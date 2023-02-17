import { observer } from 'mobx-react';
import { Grid } from '@mui/material';
import { Link } from 'pkg.navigation.link';

const footerItems = [
  { item: '© xi.effect', link: '#' },
  { item: 'Поддержка', link: '#' },
  { item: 'Политика конфиденциальности', link: 'https://xieffect.ru/policy' },
  { item: 'Пользовательское соглашение', link: '#' },
];

const Footer = observer(() => {
  const hideUnderline = true;
  return (
    <Grid container sx={{ mt: 'auto' }} spacing={4}>
      {footerItems.map((item) => (
        <Grid item>
          <Link action={item.link} text={item.item} size="s" hideUnderline={hideUnderline} />
        </Grid>
      ))}
    </Grid>
  );
});

export default Footer;
