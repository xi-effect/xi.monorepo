import { Stack, Typography } from '@mui/material';
import { Badge } from 'pkg.components.badge';
import { Fire } from 'pkg.icons.fire';
import { Camera } from 'pkg.icons.camera';
import { observer } from 'mobx-react';
import { WeekDayT } from './types';
import { Weekends } from './data';

const WeekDay = observer(({ day, tasks, name }: WeekDayT) => (
  <Stack sx={{ p: '8px' }} spacing={1}>
    <Typography
      variant="xs"
      sx={{ fontWeight: 400, color: Weekends.includes(name) ? 'error.dark' : 'grayscale.100' }}
    >
      {day}
    </Typography>
    {tasks.map((task) => (
      <Stack spacing={0.5}>
        {task.deadline && (
          <Badge
            text="Дедлайн"
            bgColor="error.dark"
            fontColor="error.pale"
            iconColor="error.pale"
            icon={Fire}
            iconProps={{
              sx: { width: '12px', height: '12px', fontSize: '12px' },
              viewBox: '0 0 12px 12px',
            }}
            stackProps={{ sx: { width: 'max-content' } }}
          />
        )}
        {task.type === 'conference' && (
          <Badge
            text="Конференция"
            bgColor="primary.pale"
            fontColor="primary.dark"
            iconColor="primary.dark"
            icon={Camera}
            iconProps={{
              sx: { width: '12px', height: '12px', fontSize: '12px' },
            }}
            stackProps={{ sx: { width: 'max-content' } }}
          />
        )}
        <Typography variant="xs">{task.name}</Typography>
      </Stack>
    ))}
  </Stack>
));

export default WeekDay;
