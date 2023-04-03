import React from 'react';
import { observer } from 'mobx-react';
import { Box, IconButton, Paper, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { styled } from '@mui/material/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
// eslint-disable-next-line import/no-extraneous-dependencies
import { yupResolver } from '@hookform/resolvers/yup';
import { Trash } from 'pkg.icons.trash';
import SaveDataRole from './saveDataRole/SaveDataRole';
import SettingRole from './settingRole/SettingRole';
import RootAccess from './rootAccess/RootAccess';
import Members from './members/Members';

// Custom Tabs
interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => <Tab {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: 'black',
  fontSize: '16px',
  lineHeight: '22px',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  // '&:hover': {
  //   // color: '#40a9ff',
  //   opacity: 1,
  // },
  // '&.Mui-selected': {
  //   // color: '#1890ff',
  //   fontWeight: theme.typography.fontWeightMedium,
  // },
  '&.Mui-focusVisible': {
    color: 'black',
    backgroundColor: 'black',
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

type FormValues = {
  name: string;
  colorRole: string;
  viewAllChannel: boolean;
  manageRole: boolean;
  viewActivity: boolean;
  manageInvite: boolean;
  managePerson: boolean;
  manageChannels: boolean;
};
const schema = yup
  .object({
    name: yup.string().min(0).max(32).required(),
    colorRole: yup.string().min(0).required(),
    viewAllChannel: yup.boolean(),
    manageRole: yup.boolean(),
    manageInvite: yup.boolean(),
    managePerson: yup.boolean(),
    manageChannels: yup.boolean(),
  })
  .required();

const EditRole = observer(() => {
  const mobile700: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(800));
  const mobile400: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(600));

  const [value, setValue] = React.useState(0);

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: 'Администратор',
      colorRole: '#E6E6E6',
      viewAllChannel: false,
      manageRole: false,
      manageInvite: false,
      managePerson: false,
      manageChannels: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('data', data);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Paper
      sx={{
        ml: mobile700 ? 0 : 3,
        width: mobile700 ? '100%' : '692px',
        p: mobile700 ? 2 : 3,
      }}
    >
      <Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            mb: 3,
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '22px',
              lineHeight: '30px',
              ml: 1,
            }}
          >
            Редактировать роль - Администратор
          </Typography>
          <IconButton>
            <Trash />
          </IconButton>
        </Stack>
        <Box sx={{ width: '100%' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
              }}
            >
              <Tabs value={value} textColor="inherit" onChange={handleChange} variant="fullWidth">
                <StyledTab label="Настройки" {...a11yProps(0)} />
                <StyledTab label="Права доступа" {...a11yProps(1)} />
                <StyledTab label="Участники" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <SettingRole
              mobile400={mobile400}
              value={value}
              mobile700={mobile700}
              control={control}
            />
            <RootAccess value={value} control={control} />
            <Members value={value} mobile700={mobile700} />
            <SaveDataRole mobile400={mobile400} />
          </form>
        </Box>
      </Stack>
    </Paper>
  );
});

export default EditRole;
