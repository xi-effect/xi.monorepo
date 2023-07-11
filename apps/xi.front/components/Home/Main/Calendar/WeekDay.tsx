import { Stack, Typography } from '@mui/material';
import { Badge } from 'pkg.components.badge';
import { Camera, Fire } from 'pkg.icons';
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
          (current && 'brand.80') || (Weekends.includes(name) && 'moscow.80') || 'petersburg.100',
      }}
    >
      {day}
    </Typography>
    {tasks.map((task) => (
      <Stack spacing={0.25} key={`${task.id}`}>
        {task.deadline && (
          <Badge
            bgColor="moscow.80"
            fontColor="moscow.0"
            iconColor="moscow.0"
            size="small"
            icon={Fire}
            stackProps={{ sx: { width: 'max-content' } }}
          >
            Дедлайн
          </Badge>
        )}
        {task.type === 'conference' && (
          <Badge
            bgColor="brand.0"
            fontColor="brand.80"
            iconColor="brand.80"
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
