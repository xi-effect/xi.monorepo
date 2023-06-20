import React from 'react';
import Settings from './Settings';
import Chat from './Chat';
import MembersSettings from './MembersSettings';
import EndConference from './EndConference';

const Modals = () => (
  <>
    <Chat />

    <Settings />

    <EndConference />

    <MembersSettings />
  </>
);

export default Modals;
