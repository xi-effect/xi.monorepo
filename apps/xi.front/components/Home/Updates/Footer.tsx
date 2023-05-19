import { observer } from 'mobx-react';
import { Grid } from '@mui/material';
import { Link } from 'pkg.navigation.link';

const footerItems = [
  { item: '© xi.effect.ru', link: '#' },
  { item: 'Поддержка', link: '#' },
  { item: 'Политика конфиденциальности', link: 'https://xieffect.ru/policy' },
  { item: 'Пользовательское соглашение', link: '#' },
];

const Footer = observer(() => {
  const underline = false;
  return (
    <Grid container sx={{ mt: 'auto' }} spacing={4}>
      {footerItems.map((item) => (
        <Grid item>
          <Link href={item.link} size="s" underline={underline}>
            {item.item}
          </Link>
        </Grid>
      ))}
    </Grid>
  );
});

export default Footer;
