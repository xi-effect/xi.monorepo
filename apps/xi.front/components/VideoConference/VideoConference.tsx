import { useState } from 'react';
import JoinTheConference from './JoinTheConference/JoinTheConference';
import CheckDeviceAccess from './Common/CheckDeviceAccess';

const VideoConference = () => {
  const [joinConference, setJoinConference] = useState<boolean>(true);

  return joinConference ? (
    <JoinTheConference setJoinConference={setJoinConference} />
  ) : (
    <CheckDeviceAccess />
  );
};

export default VideoConference;
