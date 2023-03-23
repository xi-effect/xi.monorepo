import { Stack, Typography } from '@mui/material';
import { Badge } from 'pkg.components.badge';
import { observer } from 'mobx-react';
import { WeekDayT } from './types';

const WeekDay = observer(({ day, tasks }: WeekDayT) => (
  <Stack sx={{ borderRight: '1px solid', borderColor: 'grayscale.10', p: '8px' }} spacing={1}>
    <Typography variant="xs" sx={{ fontWeight: 400 }}>
      {day}
    </Typography>
    {tasks.map((task) => (
      <Stack>
        {task.type === 'conference' && (
          <Badge
            text="Конференция"
            bgColor="error.dark"
            fontColor="error.pale"
            iconColor="error.pale"
          />
        )}
        <Typography variant="xs">{task.name}</Typography>
      </Stack>
    ))}
  </Stack>
));

export default WeekDay;
