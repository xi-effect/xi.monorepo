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
        color: 'grayscale.0',
        backgroundColor: 'primary.dark',
        '&:hover': {
          color: 'grayscale.40',
          backgroundColor: 'grayscale.10',
        },
      }}
    >
      Присоединиться
    </Button>
  );
});

export default JoinButton;
