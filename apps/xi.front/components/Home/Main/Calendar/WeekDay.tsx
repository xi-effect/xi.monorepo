import { Stack, Typography } from '@mui/material';
import { Badge } from 'pkg.components.badge';
import { Fire } from 'pkg.icons.fire';
import { observer } from 'mobx-react';
import { WeekDayT } from './types';

const WeekDay = observer(({ day, tasks }: WeekDayT) => (
  <Stack sx={{ borderRight: '1px solid', borderColor: 'grayscale.10', p: '8px' }} spacing={1}>
    <Typography variant="xs" sx={{ fontWeight: 400 }}>
      {day}
    </Typography>
    {tasks.map((task) => (
      <Stack>
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
        <Typography variant="xs">{task.name}</Typography>
      </Stack>
    ))}
  </Stack>
));

export default WeekDay;
