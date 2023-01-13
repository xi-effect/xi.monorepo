import React from 'react';
import { observer } from 'mobx-react';
import { Grid, Box, Typography, Stack, useMediaQuery, Theme } from '@mui/material';
import { useRouter, NextRouter } from 'next/router';
import { TaskT } from './types';

type ItemsT = {
  item: TaskT;
  index: number;
};

const Item: React.FC<ItemsT> = observer(({ index }) => {
  const router: NextRouter = useRouter();
  const mobile1336: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(1336));

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      onClick={() =>
        router.push(`/community/${router.query.comid}/tasks/${router.query.chid}/task/${index}`)
      }
      sx={{
        height: '198px',
        backgroundColor: 'grayscale.0',
        textAlign: 'center',
        minWidth: mobile1336 ? '343px' : '504px',
        borderRadius: '8px',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: 'absolute',
          bgcolor: 'error.pale',
          width: '80px',
          height: '100%',
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
        }}
      >
        <Typography
          sx={{
            color: 'error.dark',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '16px',
          }}
        >
          Сегодня
        </Typography>
        <Typography
          sx={{
            color: 'error.dark',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '22px',
          }}
        >
          14:00
        </Typography>
      </Stack>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          p: 2,
          pl: '96px',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            p: '4px 8px',
            bgcolor: 'error.pale',
            color: 'error.dark',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '16px',
            borderRadius: '4px',
          }}
        >
          Назначено
        </Box>
        <Typography
          sx={{
            mt: 1,
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '24px',
          }}
        >
          Расчет цикла ПХМ
        </Typography>
        <Typography
          align="justify"
          sx={{
            mt: 0.5,
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '22px',
            overflow: 'hidden',
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            /* Finally, we set the desired number of lines we want to show */
            '-webkit-line-clamp': '3',
          }}
        >
          Паровая холодильная машина работает по циклу с дросселированием. Температура кипения в
          испарителе to,температура в конденсаторе tk. В компрессор поступает пар с температурой
          t1.Рабочее тело перед регулирующим вентилем переохлаждается до tпер.
        </Typography>
      </Stack>
      <Grid
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          position: 'absolute',
          bottom: '16px',
          left: '96px',
        }}
      >
        <Grid container direction="row" item xs="auto">
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '16px',
              color: 'grayscale.40',
            }}
          >
            Создано:
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '16px',
              color: 'grayscale.80',
              pl: '2px',
            }}
          >
            30 ноября
          </Typography>
        </Grid>
        <Grid container direction="row" item xs="auto">
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '16px',
              color: 'grayscale.80',
            }}
          >
            Константин Константинопольский
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
});

export default Item;
