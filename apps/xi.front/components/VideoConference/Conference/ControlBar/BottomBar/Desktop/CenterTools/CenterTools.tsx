import { Stack } from '@mui/material';
import { Users, Hand, Chat } from 'pkg.icons';
import { observer } from 'mobx-react';
import { useStore } from 'store/connect';
import ConferenceButton from 'components/VideoConference/Common/ConferenceButton';
import { useState } from 'react';

const BottomBar = observer(() => {
  const rootStore = useStore();

  const {
    mediaSt: {
      setConferenceControlBar,
      conferenceControlBar: { members, chat },
    },
  } = rootStore;

  const [raiseHand, setRaiseHand] = useState<boolean>(false);

  return (
    <Stack
      sx={{
        width: '144px',
        height: '48px',
        borderRadius: '24px',
        bgcolor: 'petersburg.100',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <ConferenceButton
        sx={{
          ml: '4px',
          borderRadius: '24px',
        }}
        active={members}
        title="Список участников"
        onClick={() => {
          setConferenceControlBar('members', !members);

          setConferenceControlBar('chat', false);
        }}
      >
        <Users />
      </ConferenceButton>

      <ConferenceButton
        sx={{
          ml: 0,
          borderRadius: '24px',
        }}
        active={chat}
        title="Открыть чат"
        onClick={() => {
          setConferenceControlBar('chat', !chat);

          setConferenceControlBar('members', false);
        }}
      >
        <Chat />
      </ConferenceButton>

      <ConferenceButton
        sx={{
          ml: 0,
          mr: '4px',
          borderRadius: '24px',
        }}
        active={raiseHand}
        title="Поднять руку"
        onClick={() => setRaiseHand((h) => !h)}
      >
        <Hand />
      </ConferenceButton>
    </Stack>
  );
});

export default BottomBar;
