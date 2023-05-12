import { Button, Typography } from '@mui/material';
import { observer } from 'mobx-react';
import { useThemeDetector } from 'pkg.hooks';

const Appearance = observer(() => {
  const [theme, setTheme] = useThemeDetector();

  console.log('theme', theme);

  const changeTheme = (value: 'dark' | 'light') => {
    setTheme(value);
  };

  return (
    <>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '24px',
          lineHeight: '32px',
          ml: 2,
        }}
      >
        Внешний вид
      </Typography>
      <Button onClick={() => changeTheme('light')}> Светлая </Button>
      <Button onClick={() => changeTheme('dark')}> Тёмная </Button>
    </>
  );
});

export default Appearance;
