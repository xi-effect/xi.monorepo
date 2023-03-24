import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { Grid, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';
import WeekDay from './WeekDay';
import { CalendarT } from './types';
import { data } from './data';

const Calendar = observer(() => {
  const { breakpoints } = useTheme();

  const [calendar, setCalendar] = useState<null | CalendarT>(null);
  useEffect(() => {
    setCalendar(data);
  }, []);

  const mobilelg: boolean = useMediaQuery(breakpoints.down('lg'));

  return (
    <Stack sx={{ width: '100%', mt: '64px' }} spacing={2}>
      <Typography variant="xl" sx={{ fontWeight: 600 }}>
        Календарь
      </Typography>

      <Stack sx={{ bgcolor: 'grayscale.0', p: '24px', borderRadius: '8px' }}>
        <Typography variant="m">
          {calendar?.month}
          {calendar?.year}
        </Typography>

        <Stack direction={mobilelg ? 'column' : 'row'}>
          {calendar?.week.map((day, index, array) => (
            <Grid
              container
              direction={mobilelg ? 'row' : 'column'}
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
