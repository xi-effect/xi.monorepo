import React from 'react';
import { Stack, Switch, Typography } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import { TabPanel } from '../EditRole';

// root access data
type rootAccessType = {
  title: string;
  text: string;
  name:
    | 'viewAllChannel'
    | 'manageRole'
    | 'viewActivity'
    | 'manageInvite'
    | 'managePerson'
    | 'manageChannels';
};
const rootAccess: rootAccessType[] = [
  {
    title: 'Просматривать все каналы',
    text: 'Позволяет участникам просматривать все категории',
    name: 'viewAllChannel',
  },
  {
    title: 'Управлять ролями',
    text: 'Позволяет участникам редактировать права ролей, которые ниже их самой роли',
    name: 'manageRole',
  },
  {
    title: 'Просматривать активность',
    text: 'Позволяет участникам просматривать историю изменений этого сообщества',
    name: 'viewActivity',
  },
  {
    title: 'Управлять приглашениями',
    text: 'Позволяет участникам удалять приглашения',
    name: 'manageInvite',
  },
  {
    title: 'Управлять участниками',
    text: 'Позволяет участникам выгонять и банить других участников, которые ниже их самой роли',
    name: 'managePerson',
  },
  {
    title: 'Управление каналами',
    text: 'Позволяет участникам создавать и редактировать объявления и задания',
    name: 'manageChannels',
  },
];

type RootAccessType = {
  value: number;
  control: Control<any>;
};

const RootAccess: React.FC<RootAccessType> = ({ value, control }) => (
  <TabPanel value={value} index={1}>
    <Stack mt={3}>
      {rootAccess.map((r, index) => (
        <Stack
          key={index}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            width: '100%',
            mb: 3,
          }}
        >
          <Stack>
            <Typography
              sx={{
                // mb: 1,
                mr: 'auto',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '22px',
              }}
            >
              {r.title}
            </Typography>
            <Typography
              sx={{
                // mb: 1,
                mr: 'auto',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '20px',
              }}
            >
              {r.text}
            </Typography>
          </Stack>
          <Controller
            name={r.name}
            control={control}
            render={({ field: { onChange, value, ...restProps } }) => (
              <Switch size="medium" {...restProps} onChange={onChange} checked={value} />
            )}
          />
        </Stack>
      ))}
    </Stack>
  </TabPanel>
);

export default RootAccess;
