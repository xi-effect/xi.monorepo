import React, { Dispatch, SetStateAction } from 'react';
import { Button } from '@mui/material';
import { observer } from 'mobx-react';
import { useStore } from 'store/connect';

type JoinButtonT = {
  setJoinConference: Dispatch<SetStateAction<boolean>>;
};

const JoinButton = observer((props) => {
  const { setJoinConference }: JoinButtonT = props;

  const rootStore = useStore();

  const {
    mediaSt: { startStream, userSettings },
  } = rootStore;
  const joinTheConference = () => {
    startStream({});

    setJoinConference(false);

    console.log('Настройки поключения к конференции:');
    console.log(userSettings);
  };

  return (
    <Button
      fullWidth
      onClick={joinTheConference}
      sx={{
        height: '48px',
        color: 'petersburg.0',
        backgroundColor: 'brand.80',
        '&:hover': {
          color: 'petersburg.40',
          backgroundColor: 'petersburg.10',
        },
      }}
    >
      Присоединиться
    </Button>
  );
});

export default JoinButton;
