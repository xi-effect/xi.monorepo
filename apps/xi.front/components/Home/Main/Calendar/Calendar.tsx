import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Grid, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Button, ButtonProps } from 'pkg.inputs.button';
import { useStore } from 'store/connect';
import { Arrow, DoubleArrow } from 'pkg.icons';
import { styled } from '@mui/material/styles';
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

  const NavBtn = styled(Button)<ButtonProps & any>(({ theme }: any) => ({
    height: '24px',
    width: '24px',
    color: theme.palette.petersburg[80],
    padding: 0,
    '&:hover': { bgcolor: 'unset', color: theme.palette.petersburg[100] },
    '& .MuiTypography-root': {
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }));

  return (
    <Stack sx={{ width: '100%', mt: '64px' }} spacing={2}>
      <Typography variant="xl" sx={{ fontWeight: 600, letterSpacing: '0.073px' }}>
        Календарь
      </Typography>

      <Stack sx={{ bgcolor: 'petersburg.0', p: '24px', borderRadius: '8px' }} spacing={1}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack spacing={1} direction="row" justifyContent="flex-start" alignItems="center">
            <Typography sx={{ fontSize: '20px', lineHeight: '28px', fontWeight: 600 }}>
              {calendar?.month}
            </Typography>
            <Typography
              variant="m"
              sx={{ fontWeight: 400, lineHeight: '22px', letterSpacing: '0.237px' }}
            >
              {calendar?.year}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: '120px', height: '24px', gap: '8px' }}
          >
            <NavBtn variant="text" onClick={getPrevMonth}>
              <DoubleArrow
                sx={{
                  transform: 'rotate(180deg)',
                  fontSize: '24px',
                  width: '100%',
                }}
              />
            </NavBtn>
            <NavBtn variant="text" onClick={getPrevWeek}>
              <Arrow sx={{ transform: 'rotate(180deg)', fontSize: '20px', width: '100%' }} />
            </NavBtn>
            <NavBtn variant="text" onClick={getNextWeek}>
              <Arrow sx={{ fontSize: '20px', width: '100%' }} />
            </NavBtn>
            <NavBtn variant="text" onClick={getNextMonth}>
              <DoubleArrow sx={{ fontSize: '24px', width: '100%' }} />
            </NavBtn>
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
                  bgcolor: 'petersburg.10',
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
                    color: 'petersburg.40',
                    width: '100%',
                    height: '100%',
                    minHeight: '32px',
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
