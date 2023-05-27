import React from 'react';
import { observer } from 'mobx-react';
import { Stack, useMediaQuery } from '@mui/material';
import { useStore } from 'store/connect';
import { ConferenceUserT } from 'store/media/mediaSt';
import { CardSizeT } from './UsersGridContainer';
import User from './User';
import NoUsers from './NoUsers';
import { StateViewT } from '../Conference';

type UsersGridT = {
  usersCount: number;
  cardSize: CardSizeT;
  users: ConferenceUserT[];
};

const UsersGrid: React.FC<UsersGridT & StateViewT> = observer((props) => {
  const {
    usersCount,
    users,
    stateView,
    cardSize: { card, speaker },
  } = props;

  const rootStore = useStore();

  const [view] = stateView;

  const tablet = useMediaQuery('(max-width:700px)');

  const mobile = useMediaQuery('(max-width:375px)');

  const {
    mediaSt: {
      conferenceGridData: { users: allUsers },
    },
  } = rootStore;
  const layoutSx = (different: boolean) => {
    const speakerTabletHeight = `${Math.floor(
      window.innerHeight - 200 - ((window.innerWidth - 25) / 3 / 16) * 9,
    )}px`;

    const speakerMobileHeight = `${Math.floor(window.innerHeight - 200 - card.width)}px`;

    if (usersCount <= 4) {
      return {
        height: '47%',
        flex: '1 1 40%',
      };
    }

    if (different && tablet) {
      return {
        flex: '1 1 100%',
        height: mobile ? speakerMobileHeight : speakerTabletHeight,
      };
    }

    return {
      flex: `0 0 ${card.width - 16}px`,
      height: `${mobile ? card.width - 16 : card.height - 16}px`,
    };
  };

  const currentSpeaker = allUsers
    .filter((u) => u.speaker)
    .map((u) => (
      <User
        user={u}
        key={u.id}
        stateView={stateView}
        sx={{
          margin: '8px auto',
          width: `${card.width}px`,
          height: `${speaker.height}px`,
        }}
      />
    ));

  const sortUsers = users?.slice().sort((a, b) => {
    if (Number(!!b.admin) < Number(!!a.admin)) {
      return -1;
    }

    if (Number(!!b.admin) > Number(!!a.admin)) {
      return 1;
    }

    if (Number(!!b.device.videoinput) < Number(!!a.device.videoinput)) {
      return -1;
    }

    if (Number(!!b.device.videoinput) > Number(!!a.device.videoinput)) {
      return 1;
    }

    return 0;
  });

  const currentUsers = sortUsers?.map((u) => (
    <User layoutSx={layoutSx} stateView={stateView} user={u} key={u.id} />
  ));

  const tabletGrid = (
    <>
      {currentUsers}

      {usersCount === 1 && <NoUsers />}
    </>
  );

  const desktopGrid =
    view === 'tile' ? (
      <>
        {currentUsers}

        {usersCount === 1 && <NoUsers />}
      </>
    ) : (
      <Stack justifyContent="flex-start" width="100%" height="100%">
        <Stack direction="row" justifyContent="center">
          {currentUsers}
        </Stack>

        <Stack height="100%" justifyContent="center">
          {currentSpeaker}
        </Stack>
      </Stack>
    );

  return tablet ? tabletGrid : desktopGrid;
});

export default UsersGrid;
