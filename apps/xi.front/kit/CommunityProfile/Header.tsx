import { observer } from 'mobx-react';
import { useMediaQuery, Theme, Stack, IconButton, Typography } from '@mui/material';
import { Close } from 'pkg.icons.close';
import { Arrow } from 'pkg.icons.arrow';
import { Burger } from 'pkg.icons.burger';

const settingsTitles = [
  'Обзор',
  'Роли',
  'История активности',
  'Участники',
  'Категории',
  'Приглашения',
];

type HeaderProps = {
  activeContent: number | null;
  changeMenuStatus: (arg0: boolean) => void;
  handleCloseProfile: () => void;
};

const Header = observer(({ activeContent, changeMenuStatus, handleCloseProfile }: HeaderProps) => {
  const mobile700: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(700));

  const getCustomBtn = () => {
    if (activeContent === null) {
      return (
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sx={{
            height: '56px',
            width: '100%',
            position: 'relative',
          }}
        >
          <IconButton
            sx={{
              width: '40px',
              height: '40px',
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            <Burger />
          </IconButton>
        </Stack>
      );
    }

    return (
      <Stack direction="row" alignItems="center">
        <IconButton
          onClick={() => changeMenuStatus(true)}
          sx={{
            width: '40px',
            height: '40px',
            transform: 'rotate(180deg)',
            backgroundColor: 'grayscale.0',
          }}
        >
          <Arrow />
        </IconButton>
        <Typography
          sx={{
            ml: '8px',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '20px',
          }}
        >
          {settingsTitles[activeContent]}
        </Typography>
      </Stack>
    );
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ width: '100%', height: '56px', position: 'sticky', top: 0 }}
    >
      {/* custom btn */}
      {mobile700 && getCustomBtn()}

      {/* close btn */}
      <IconButton
        onClick={handleCloseProfile}
        sx={{
          width: '40px',
          height: '40px',
          bgcolor: 'grayscale.0',
          position: 'absolute',
          right: 0,
        }}
      >
        <Close />
      </IconButton>
    </Stack>
  );
});

export default Header;
