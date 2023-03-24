import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { Grid, Stack, Typography } from '@mui/material';
import WeekDay from './WeekDay';
import { CalendarT } from './types';
import { data } from './data';

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

        <Stack direction="row">
          {calendar?.week.map((day, index, array) => (
            <Grid
              container
              direction="column"
              sx={{
                position: 'relative',
                '&:after': {
                  content: "''",
                  height: 'calc(100% - 32px)',
                  width: '1px',
                  bgcolor: 'grayscale.10',
                  position: 'absolute',
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
                    textAlign: 'center',
                    width: '100%',
                    height: '32px',
                    display: 'inline-block',
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
