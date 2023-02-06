/* eslint-disable react/prop-types */
import React from 'react';
import { observer } from 'mobx-react';

import {
  Button,
  Box,
  Stack,
  Typography,
  Radio,
  IconButton,
  Dialog,
  DialogContent,
  useMediaQuery, Theme,
} from '@mui/material';

import MobileDialog from 'kit/MobileDialog';
import CloseIcon from '@mui/icons-material/Close';

import { useStore } from 'store/connect';

import { useForm, Controller } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Input } from 'pkg.inputs.input';
import { styled } from '@mui/material/styles';
import { Announce } from 'pkg.icons.announce';
import { Camera } from 'pkg.icons.camera';
import { Chat } from 'pkg.icons.chat';
import { Task } from 'pkg.icons.task';
import RootStore from '../../store/rootStore';

// import TextFieldCustom from '../TextFieldCustom';

// style checkbox
const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));
const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});

type ContentType={
  label:string,
  description:string,
  icon:React.ReactNode
};

const content:ContentType[] = [
  {
    label: 'Объявления',
    description: 'Держите ваших студентов в курсе всех новостей по курсу',
    icon: <Announce sx={{ fontSize: 20 }} />,
  },
  {
    label: 'Задания',
    description:
      'Создавайте задания, тесты, получайте ответы от учеников, оценивайте и улучшайте знания',
    icon: <Task sx={{ fontSize: 20 }} />,
  },
  {
    label: 'Видеоконференции',
    description: 'Проводите уроки онлайн, проводите активности, работайте со студентами из любой точки мира',
    icon: <Camera sx={{ fontSize: 20 }} />,
  },
  {
    label: 'Чат со студентами',
    description: 'Общайтесь, отвечайте на вопросы, объясняйте непонятные моменты',
    icon: <Chat sx={{ fontSize: 20 }} />,
  },
];

const getType = (num) => {
  if (num === 0) return 'announcement';
  if (num === 1) return 'task';
  if (num === 2) return 'video';
  if (num === 3) return 'chat';
  return 'announcement';
};
interface IFormInput {
 name:string
}

const schema = yup
  .object({
    name: yup.string().min(0).max(100).required(),
  })
  .required();

type ChannelSelectType=0|1|2|3;

const Content = observer((props) => {
  const { communityChannelsSt, uiSt } = props;

  const mobile = useMediaQuery((theme:Theme) => theme.breakpoints.down('lg'));
  const [channelSelect, setChannelSelect] = React.useState<ChannelSelectType>(2);
  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data:IFormInput) => {
    trigger();
    const type = getType(channelSelect);
    communityChannelsSt.pushNewChannel({ ...data, type });
    uiSt.setDialogs('channelCreation', false);
  };

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        width: '100%',
        px: 2,
      }}
      spacing={2}
    >
      <Typography variant="subtitle2" sx={{ fontSize: 16, fontWeight: 500, lineHeight: '20px', pb: 0, mb: 0 }}>
        Название
      </Typography>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            variant="outlined"
            error={errors?.name?.type === 'name'}
            type="text"
            placeholder="Название канала"
            fullWidth
            {...field}
          />
          // <TextFieldCustom
          //   variant="outlined"
          //   error={errors?.email?.type === 'email'}
          //   type="text"
          //   fullWidth
          //   placeholder="Название канала"
          //   {...field}
          // />
        )}
      />
      <Typography variant="subtitle2" sx={{ fontSize: 16, fontWeight: 600, pt: 2 }}>
        Тип
      </Typography>
      {content.map((item, index) => (
        <Stack
          key={index.toString()}
          onClick={() => setChannelSelect(index as ChannelSelectType)}
          direction="row"
          justifyContent="center"
          alignItems="start"
          sx={{
            p: 1,
            minHeight: 96,
            width: '100%',
            border: 1,
            borderRadius: 2,
            cursor: 'pointer',
          }}
          spacing={1}
        >
          <Box sx={{ p: 1 }}>{item.icon}</Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={0.5}
            sx={{
              width: '100%',
            }}
          >
            <Typography variant="h6" component="p" sx={{ fontSize: 20, fontWeight: 600 }}>
              {item.label}
            </Typography>
            <Typography variant="subtitle1" component="p" sx={{ lineHeight: '1.35' }}>
              {item.description}
            </Typography>
          </Stack>
          <Box sx={{ p: 3, pr: 0 }}>
            <Radio checked={channelSelect === index} checkedIcon={<BpCheckedIcon />} />
          </Box>
        </Stack>
      ))}
      <Box sx={{ width: '100%' }}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ width: '100%', pt: 2, pb: 3 }}
          spacing={2}
        >
          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit(onSubmit)}
            sx={{
              '&.MuiButton-root': {
                fontSize: '15px',
                lineHeight: '26px',
                letterSpacing: '0.46000000834465027px',
                width: '100%',
                height: mobile ? '42px' : '42px',
                boxShadow: 2,
              },
            }}
          >
            Создать
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
});

const DialogChannelCreation = observer(() => {
  const rootStore:RootStore = useStore();
  const { communityChannelsSt, uiSt } = rootStore;
  const fullScreen = useMediaQuery((theme:Theme) => theme.breakpoints.down('md'));
  return (
    <>
      {!fullScreen && (
        <Dialog
          open={uiSt.dialogs.channelCreation}
          onClose={() => uiSt.setDialogs('channelCreation', false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth
          maxWidth="md"
          sx={{
            borderRadius: 8,
          }}
          PaperProps={{
            sx: {
              borderRadius: 8,
            },
          }}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="end"
            sx={{
              width: '100%',
              p: 1,
            }}
          >
            <Typography sx={{ pt: 2, m: '0 auto', textAlign: 'center', fontSize: 24 }} variant="h6">
              Создать канал
            </Typography>
            <IconButton onClick={() => uiSt.setDialogs('channelCreation', false)} sx={{ mr: 2, p: 0 }}>
              <CloseIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
            </IconButton>
          </Stack>
          <DialogContent>
            <Content communityChannelsSt={communityChannelsSt} uiSt={uiSt} />
          </DialogContent>
        </Dialog>
      )}
      {fullScreen && (
        <MobileDialog
          open={uiSt.dialogs.channelCreation}
          setOpen={() => uiSt.setDialogs('channelCreation', false)}
          title="Создание канала"
        >
          <Stack>
            <Content communityChannelsSt={communityChannelsSt} uiSt={uiSt} />
          </Stack>
        </MobileDialog>
      )}
    </>
  );
});

export default DialogChannelCreation;
