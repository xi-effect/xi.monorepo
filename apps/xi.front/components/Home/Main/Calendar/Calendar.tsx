import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Grid, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Button } from 'pkg.inputs.button';
import { useStore } from 'store/connect';
import { Arrow } from 'pkg.icons.arrow';
import { DoubleArrow } from 'pkg.icons.doublearrow';
import WeekDay from './WeekDay';

const Calendar = observer(() => {
  const { breakpoints } = useTheme();

  const rootStore = useStore();
  const { calendarSt } = rootStore;
  const { calendar, getCalendar, getNextWeek, getPrevWeek, getNextMonth, getPrevMonth } =
    calendarSt;

  useEffect(() => {
    getCalendar();
    console.log(calendar);
  }, []);

  const mobilelg: boolean = useMediaQuery(breakpoints.down('lg'));

  return (
    <Stack sx={{ width: '100%', mt: '64px' }} spacing={2}>
      <Typography variant="xl" sx={{ fontWeight: 600 }}>
        Календарь
      </Typography>

      <Stack sx={{ bgcolor: 'grayscale.0', p: '24px', borderRadius: '8px' }} spacing={1}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack spacing={1} direction="row" justifyContent="flex-start" alignItems="center">
            <Typography sx={{ fontSize: '18px', lineHeight: '24px', fontWeight: 600 }}>
              {calendar?.month}
            </Typography>
            <Typography variant="m" sx={{ fontWeight: 400 }}>
              {calendar?.year}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: '108px', height: '25px', mr: '6px' }}
          >
            <Button
              variant="text"
              onClick={getPrevMonth}
              sx={{
                color: 'grayscale.80',
                p: 0,
                '&:hover': { bgcolor: 'unset', color: 'grayscale.100' },
              }}
            >
              <DoubleArrow sx={{ transform: 'rotate(180deg)', fontSize: '12px' }} />
            </Button>
            <Button
              variant="text"
              onClick={getPrevWeek}
              sx={{
                color: 'grayscale.80',
                p: 0,
                '&:hover': { bgcolor: 'unset', color: 'grayscale.100' },
              }}
            >
              <Arrow sx={{ transform: 'rotate(180deg)', fontSize: '18px' }} />
            </Button>
            <Button
              variant="text"
              onClick={getNextWeek}
              sx={{
                color: 'grayscale.80',
                p: 0,
                '&:hover': { bgcolor: 'unset', color: 'grayscale.100' },
              }}
            >
              <Arrow sx={{ fontSize: '18px' }} />
            </Button>
            <Button
              variant="text"
              onClick={getNextMonth}
              sx={{
                color: 'grayscale.80',
                p: 0,
                '&:hover': { bgcolor: 'unset', color: 'grayscale.100' },
              }}
            >
              <DoubleArrow sx={{ fontSize: '12px' }} />
            </Button>
          </Stack>
        </Stack>

        <Stack direction={mobilelg ? 'column' : 'row'}>
          {calendar?.week.map((day, index, array) => (
            <Grid
              container
              direction={mobilelg ? 'row' : 'column'}
              key={`${calendar?.month}_${day.day}`}
              sx={{
                position: 'relative',
                '&:after': {
                  content: "''",
                  bgcolor: 'grayscale.10',
                  position: 'absolute',
                  [breakpoints.up('lg')]: {
                    height: 'calc(100% - 32px)',
                    width: '1px',
                  },
                  [breakpoints.down('lg')]: {
                    height: '1px',
                    width: 'calc(100% - 48px)',
                  },
                  bottom: 0,
                  right: 0,
                  display: index === array.length - 1 ? 'none' : 'block',
                },
              }}
            >
              <Grid item>
                <Typography
                  variant="xs"
                  sx={{
                    color: 'grayscale.40',
                    width: '100%',
                    height: '100%',
                    minHeight: '30px',
                    minWidth: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {day.name}
                </Typography>
              </Grid>

              <Grid item>
                <WeekDay {...day} />
              </Grid>
            </Grid>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
});

export default Calendar;
