/* eslint-disable react/display-name */
import * as React from 'react';
import { useStore } from 'store/connect';

import { TransitionProps } from '@mui/material/transitions';
import { Dialog, Slide, Stack, useMediaQuery, Theme, Box } from '@mui/material';

import { useForm, FormProvider } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { observer } from 'mobx-react';
import { useSnackbar } from 'notistack';
import { isSameDate } from 'utils/isSameDates';
import Menu from './Menu';
import Content from './Content';
import Header from './Header';

const schema = yup
  .object({
    handle: yup
      .string()
      // eslint-disable-next-line no-useless-escape
      .matches(/[a-z0-9_\-]+/, { excludeEmptyString: true })
      .max(100),
    username: yup.string().max(100).required(),
    name: yup.string().max(100),
    surname: yup.string().max(100),
    patronymic: yup.string().max(100),
    birthday: yup.date(),
  })
  .required();

type FormValues = {
  handle: string;
  username: string;
  name: string;
  surname: string;
  patronymic: string;
  birthday: Date | null;
};

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) => <Slide direction="up" ref={ref} {...props} />,
);

const CommunityProfile = observer(() => {
  const rootStore = useStore();
  const { uiSt, profileSt, userSt } = rootStore;
  const { dialogs } = uiSt;
  const { profile } = profileSt;
  const { user } = userSt;

  const [activeContent, setActiveContent] = React.useState(0);
  const [isOpenMenu, setIsOpenMenu] = React.useState(true);

  const changeMenuStatus = (status: boolean) => {
    setIsOpenMenu(status);
  };

  const mobile700: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(700));
  const mobile800: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(800));
  const mobile1400: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(1400));
  const isMobile: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  React.useEffect(() => {
    profileSt.getProfile();
    userSt.getUser();
  }, [profileSt, userSt]);

  React.useEffect(() => () => {
    closeSnackbar();
  });

  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const { watch, reset, getValues } = methods;

  const openSaveConfirm = () => {
    enqueueSnackbar('saveConfirm', {
      variant: 'saveConfirm',
      persist: true,
      reset,
    });
  };

  const closeSaveConfirm = () => {
    closeSnackbar();
  };

  const handleCloseProfile = () => {
    const [handle, username, name, surname, patronymic, birthday] = getValues([
      'handle',
      'username',
      'name',
      'surname',
      'patronymic',
      'birthday',
    ]);

    if (
      handle &&
      username &&
      username &&
      name &&
      surname &&
      patronymic &&
      (handle !== user.handle ||
        username !== user.username ||
        name !== profile.name ||
        surname !== profile.surname ||
        patronymic !== profile.patronymic ||
        (birthday && profile.birthday && !isSameDate(new Date(birthday), profile.birthday)))
    ) {
      if (!isMobile) {
        return;
      }
      openSaveConfirm();
      return;
    }

    uiSt.setDialogs('communityProfile', false);
  };

  watch((data) => {
    if (
      data.handle !== user.handle ||
      data.username !== user.username ||
      data.name !== profile.name ||
      data.surname !== profile.surname ||
      data.patronymic !== profile.patronymic ||
      data.birthday !== profile.birthday
    ) {
      if (isMobile) {
        return;
      }

      openSaveConfirm();
    }

    if (
      data.handle === user.handle &&
      data.username === user.username &&
      data.name === profile.name &&
      data.surname === profile.surname &&
      data.patronymic === profile.patronymic &&
      data.birthday === profile.birthday
    ) {
      if (isMobile) {
        return;
      }

      closeSaveConfirm();
    }
  });

  return (
    <Dialog
      sx={{
        backgroundColor: 'primary.pale',
      }}
      PaperProps={{
        sx: {
          backgroundColor: 'primary.pale',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          p: mobile700 ? '8px 29px' : `${mobile1400 ? '16px 8px' : '32px 8px'}`,
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      }}
      fullScreen
      open={dialogs.communityProfile}
      TransitionComponent={Transition}
    >
      <FormProvider {...methods}>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          sx={{
            maxWidth: mobile800 ? '668px' : '1236px',
            width: '100%',
          }}
        >
          <Header
            activeContent={isOpenMenu ? null : activeContent}
            changeMenuStatus={changeMenuStatus}
            handleCloseProfile={handleCloseProfile}
          />
          <Stack
            direction={mobile700 ? 'column' : 'row'}
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{
              width: '100%',
              mt: mobile700 ? '8px' : '16px',
              position: 'relative',
            }}
          >
            {isOpenMenu && (
              <Menu
                activeContent={activeContent}
                setActiveContent={setActiveContent}
                changeMenuStatus={changeMenuStatus}
              />
            )}
            {(mobile700 && (
              <Box
                sx={{
                  position: 'absolute',
                  left: isOpenMenu ? '150%' : 0,
                  transition: '200ms',
                  width: '100%',
                  minWidth: 0,
                }}
              >
                <Content activeContent={activeContent} />
              </Box>
            )) ||
              (!mobile700 && <Content activeContent={activeContent} />)}
          </Stack>
        </Stack>
      </FormProvider>
    </Dialog>
  );
});

export default CommunityProfile;
