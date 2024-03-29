import { observer } from 'mobx-react';
import { Stack, Typography, Box } from '@mui/material';
import { Avatar } from 'pkg.data.avatar';
import TextFieldCustom from 'kit/TextFieldCustom';

const Status = observer(() => {
  const getBgcolor = (v: number) => {
    if (v === 1) return '#B0F9CE';
    return '#11743A';
  };

  const getTextColor = (v: number) => {
    if (v === 1) return '#11743A';
    return '#11743A';
  };

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={1}
      sx={{
        width: '100%',
        height: '76px',
        borderRadius: '8px',
        bgcolor: getBgcolor(1),
        p: 1.5,
      }}
    >
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '22px',
          color: getTextColor(1),
        }}
      >
        Задание назначено
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '20px',
          color: getTextColor(1),
        }}
      >
        30 августа 2022 в 14:30
      </Typography>
    </Stack>
  );
});

const Message = observer(() => (
  <Stack
    direction="column"
    justifyContent="flex-start"
    alignItems="flex-start"
    spacing={1}
    sx={{
      width: '100%',
      borderRadius: '8px',
      position: 'relative',
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '48px',
        height: '48px',
      }}
    >
      <Avatar />
    </Box>
    <Typography
      sx={{
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '22px',
        color: 'petersburg.100',
        pl: '60px',
      }}
    >
      Морозов Михаил
    </Typography>
    <Typography
      sx={{
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '20px',
        color: 'petersburg.100',
        pl: '60px',
      }}
    >
      Доброго времени суток! Прикрепляю фотографии с коспектами.
    </Typography>
  </Stack>
));

const Timeline = observer(() => (
  <Stack
    direction="column"
    justifyContent="flex-start"
    alignItems="center"
    spacing={3}
    sx={{
      width: '100%',
      borderRadius: '8px',
      bgcolor: 'petersburg.0',
      p: 3,
    }}
  >
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-end"
      sx={{
        height: '32px',
        width: '100%',
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '24px',
          lineHeight: '32px',
          color: 'petersburg.100',
        }}
      >
        Личные комментарии
      </Typography>
      <Typography
        sx={{
          ml: '4px',
          fontWeight: 600,
          fontSize: '24px',
          lineHeight: '32px',
          color: 'petersburg.40',
        }}
      >
        3
      </Typography>
    </Stack>
    <Status />
    <Message />
    <Status />
    <Message />
    <TextFieldCustom
      variant="outlined"
      type="text"
      fullWidth
      placeholder="Напишите что-нибудь"
      sx={{
        backgroundColor: 'petersburg.0',
      }}
    />
  </Stack>
));

export default Timeline;
