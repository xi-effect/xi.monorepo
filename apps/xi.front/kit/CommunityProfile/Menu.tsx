import { Button, Stack, ButtonProps, useMediaQuery, Theme, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { observer } from 'mobx-react';
import { useStore } from 'store/connect';

const ColorButton = styled(Button)<ButtonProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  height: '40px',
  p: '9px 16px 11px 16px',
  borderRadius: '8px',
  textAlign: 'left',
  textTransform: 'capitalize',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '20px',
}));

const menu = [
  {
    mt: '0',
    name: 'Обзор',
  },
  {
    mt: '4px',
    name: 'Роли',
  },
  {
    mt: '4px',
    name: 'История активности',
  },
  {
    mt: '4px',
    name: 'Участники',
  },
  {
    mt: '4px',
    name: 'Классы',
  },
  {
    mt: '4px',
    name: 'Категории',
  },
  {
    mt: '4px',
    name: 'Приглашения',
  },
];

type MenuProps = {
  changeMenuStatus: (status: boolean) => void;
  activeContent: number;
  setActiveContent: (activeContent: number) => void;
};

const Menu = observer(({ activeContent, setActiveContent, changeMenuStatus }: MenuProps) => {
  const rootStore = useStore();
  const {
    uiSt: { setDialogs },
  } = rootStore;

  const mobile700: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(700));

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        position: 'sticky',
        top: -8,
        mt: 0,
        width: mobile700 ? '100%' : '220px',
        flexShrink: 0,
      }}
    >
      <Box sx={{ width: '100%' }}>
        {menu.map((item, index) => (
          <ColorButton
            onClick={() => {
              setActiveContent(index);
              if (mobile700) changeMenuStatus(false);
            }}
            key={index.toString()}
            sx={{
              mt: item.mt,
              color: 'grayscale.100',
              pl: '16px',
              textTransform: 'none',
              backgroundColor:
                index === activeContent && !mobile700 ? 'grayscale.0' : 'transparent',
              '&:hover': {
                backgroundColor: !mobile700 ? 'grayscale.0' : '',
              },
            }}
          >
            {item.name}
          </ColorButton>
        ))}
        <ColorButton
          onClick={() => {
            if (setDialogs) setDialogs('exit', true);
          }}
          sx={{
            mt: '24px',
            color: 'grayscale.100',
            backgroundColor: 'transparent',
            pl: '16px',
            '&:hover': {
              color: 'error.dark',
              backgroundColor: 'error.pale',
            },
          }}
        >
          Удалить сообщество
        </ColorButton>
      </Box>
    </Stack>
  );
});

export default Menu;
