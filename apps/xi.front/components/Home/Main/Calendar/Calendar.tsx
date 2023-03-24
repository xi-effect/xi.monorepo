import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { Grid, Stack, Typography } from '@mui/material';
import WeekDay from './WeekDay';
import { CalendarT } from './types';
import { data, weekDays } from './data';

const Calendar = observer(() => {
  const [calendar, setCalendar] = useState<null | CalendarT>(null);
  useEffect(() => {
    setCalendar(data);
  }, []);

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

        <Grid container>
          {weekDays.map((day) => (
            <Grid item xs={1.714}>
              <Typography
                variant="xs"
                sx={{
                  color: 'grayscale.40',
                  textAlign: 'center',
                  width: '100%',
                  height: '32px',
                  display: 'inline-block',
                }}
              >
                {day}
              </Typography>
            </Grid>
          ))}
          {calendar?.week.map((day) => (
            <Grid item xs={1.714}>
              <WeekDay {...day} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
});

export default Calendar;
