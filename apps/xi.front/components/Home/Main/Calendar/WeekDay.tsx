import { Stack, Typography } from '@mui/material';
import { Badge } from 'pkg.components.badge';
import { Fire } from 'pkg.icons.fire';
import { Camera } from 'pkg.icons.camera';
import { observer } from 'mobx-react';
import { WeekDayT } from 'models/calendar';

const Weekends = ['сб', 'вс'];

const WeekDay = observer(({ day, tasks, name, current = false }: WeekDayT) => (
  <Stack sx={{ p: '8px' }} spacing={1}>
    <Typography
      variant="xs"
      sx={{
        fontWeight: current ? 600 : 400,
        color:
          (current && 'primary.dark') ||
          (Weekends.includes(name) && 'error.dark') ||
          'grayscale.100',
      }}
    >
      {day}
    </Typography>
    {tasks.map((task) => (
      <Stack spacing={0.25} key={`${task.id}`}>
        {task.deadline && (
          <Badge
            bgColor="error.dark"
            fontColor="error.pale"
            iconColor="error.pale"
            size="small"
            icon={Fire}
            stackProps={{ sx: { width: 'max-content' } }}
          >
            Дедлайн
          </Badge>
        )}
        {task.type === 'conference' && (
          <Badge
            bgColor="primary.pale"
            fontColor="primary.dark"
            iconColor="primary.dark"
            size="small"
            icon={Camera}
            stackProps={{ sx: { width: 'max-content' } }}
          >
            Конференция
          </Badge>
        )}
        <Typography variant="xs">{task.name}</Typography>
      </Stack>
    ))}
  </Stack>
));

export default WeekDay;
