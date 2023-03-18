import React from 'react';
import { observer } from 'mobx-react';
import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Input } from 'pkg.inputs.input';

import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
// eslint-disable-next-line import/no-extraneous-dependencies
import { yupResolver } from '@hookform/resolvers/yup';

// ColorData
const roleColorData = [
  { color: '#B4BDFF' },
  { color: '#EEE7FF' },
  { color: '#B0F9CE' },
  { color: '#FBABAB' },
  { color: '#FBCAAD' },
  { color: '#D4FBAD' },
  { color: '#ADFBFB' },
  { color: '#FBADE0' },
  { color: '#999999' },
  { color: '#445AFF' },
  { color: '#9769FF' },
  { color: '#11743A' },
  { color: '#F42D2D' },
  { color: '#E75223' },
  { color: '#85E723' },
  { color: '#23E7E7' },
  { color: '#E723A5' },
  { color: '#333333' },
];
// Custom Radio
const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '8px',
  width: 28,
  height: 28,
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: 'inherit',
  border: '1px solid black',
  'input:hover ~ &': {
    backgroundColor: 'inherit',
  },
});

// Inspired by blueprintjs
function BpRadio(props: any) {
  return (
    <Radio
      sx={{ p: 0, m: 0, mb: 1 }}
      disableRipple
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}
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

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

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

  const [value, setValue] = React.useState(0);

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
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
        ml: 3,
        width: mobile700 ? '100%' : '692px',
        p: 3,
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
            <DeleteOutlineIcon />
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
                <StyledTab sx={{}} label="Настройки" {...a11yProps(0)} />
                <StyledTab label="Права доступа" {...a11yProps(1)} />
                <StyledTab label="Участники" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '20px',
                  mb: 1,
                }}
              >
                Название роли
              </Typography>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    variant="outlined"
                    type="text"
                    fullWidth
                    placeholder="Введите название"
                    autoComplete="on"
                    {...field}
                    sx={{
                      backgroundColor: 'grayscale.0',
                      mb: 3,
                    }}
                  />
                )}
              />
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '20px',
                  mb: 1,
                }}
              >
                Цвет роли
              </Typography>
              <Stack direction="row">
                <div
                  style={{
                    backgroundColor: '#E6E6E6',
                    width: '96px',
                    height: '64px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '8px',
                    marginRight: '16px',
                  }}
                >
                  <CheckIcon />
                </div>
                <div
                  style={{
                    border: '2px solid #E6E6E6 ',
                    width: '96px',
                    height: '64px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '8px',
                    marginRight: '24px',
                  }}
                />
                <Stack direction="row">
                  <Controller
                    name="colorRole"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup defaultValue="#B4BDFF" {...field}>
                        <Stack direction="row" flexWrap="wrap" sx={{ width: 300 }}>
                          {roleColorData.map((r, index) => (
                            <FormControlLabel
                              key={index}
                              value={r.color}
                              control={
                                <BpRadio
                                  style={{ borderRadius: '8px', backgroundColor: r.color }}
                                />
                              }
                              label=""
                            />
                          ))}
                        </Stack>
                      </RadioGroup>
                    )}
                  />
                </Stack>
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              flexWrap="wrap"
              sx={{
                maxWidth: 960,
                width: '100%',
                position: 'fixed',
                bottom: 30,
                left: '50%',
                transform: 'translate(-50%,0)',
                backgroundColor: 'white',
                borderRadius: '16px',
                pr: 2,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '24px',
                  py: 2,
                  pl: 5,
                }}
              >
                У вас есть несохраненные изменения
              </Typography>
              <Stack direction="row">
                <Button variant="text">Сбросить</Button>
                <Button variant="contained" type="submit" onClick={handleSubmit(onSubmit)}>
                  Сохранить
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Paper>
  );
});

export default EditRole;
