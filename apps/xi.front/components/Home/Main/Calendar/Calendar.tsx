import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { Grid, Stack, Typography } from '@mui/material';
import { CalendarT } from './types';
import { data } from './data';

const Calendar = observer(() => {
  const [calendar, setCalendar] = useState<null | CalendarT>(null);
  useEffect(() => {
    setCalendar(data);
  }, []);

  return (
    <Stack>
      <Typography variant="xl" sx={{ fontWeight: 600 }}>
        Календарь
      </Typography>

      <Stack sx={{ bgcolor: 'grayscale.0' }}>
        <Typography variant="m">
          {calendar?.month}
          {calendar?.year}
        </Typography>

        <Grid container>
          {calendar?.week.map((day) => (
            <Grid item xs={1.714}>
              <Typography
                variant="xs"
                sx={{
                  color: 'grayscale.40',
                  textAlign: 'center',
                  width: '100%',
                  display: 'inline-block',
                }}
              >
                {day.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
});

export default Calendar;
