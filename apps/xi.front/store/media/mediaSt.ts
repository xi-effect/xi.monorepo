import { action, observable, makeObservable } from 'mobx';
import RootStore from '../rootStore';
import testUsers from './testUsers.json';

type OptionsT = {
  audioId?: string;
  videoId?: string;
  enableVideo?: boolean;
  enableAudio?: boolean;
};

export type UserMediaInfoT = {
  error: string | null;
  stream: MediaStream | null;
  devices: MediaDeviceInfo[];
};

type UserSettingsT = {
  audiooutput: string | null;
  audioinput: string | null;
  videoinput: string | null;
};

type ConferenceControlBarT = {
  chat: boolean;
  members: boolean;
  settings: boolean;
  fullScreen: boolean;
  screenSharing: boolean;
  separateWindow: boolean;
  endConference: boolean;
  view: 'tile' | 'speaker';
};

type ConferenceGridDataT = {
  users: ConferenceUserT[];
};

export type ConferenceUserT = {
  id: number;
  name: string;
  admin?: boolean;
  speaker: boolean;
  raiseHand: boolean;
  device: UserSettingsT;
  stream: MediaStream | null;
};

export interface MediaElement extends HTMLMediaElement {
  setSinkId(id: string);
}

class MediaSt {
  rootStore: RootStore;

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @observable mediaInfo: UserMediaInfoT = {
    devices: [],
    error: null,
    stream: null,
  };

  @observable userSettings: UserSettingsT = {
    audioinput: null,
    videoinput: null,
    audiooutput: null,
  };

  @observable conferenceGridData: ConferenceGridDataT = {
    users: testUsers,
  };

  @observable conferenceControlBar: ConferenceControlBarT = {
    view: 'tile',
    chat: false,
    members: false,
    settings: false,
    fullScreen: false,
    screenSharing: false,
    endConference: false,
    separateWindow: false,
  };

  @action setConferenceUsers = (value) => {
    this.conferenceGridData.users = value;
  };

  @action setConferenceSpeaker = (id: number) => {
    this.conferenceGridData.users = this.conferenceGridData.users.map((u) =>
      u.speaker || id === u.id ? { ...u, speaker: !u.speaker } : u,
    );
  };

  @action setConferenceControlBar = (item: string, value) => {
    this.conferenceControlBar[item] = value;
  };

  @action setMediaInfo = (item: string, value) => {
    this.mediaInfo[item] = value;
  };

  @action setUserSettings = (item: string, value) => {
    this.userSettings[item] = value;
  };

  @action setAllUserSettings = (devices: MediaDeviceInfo[], videoId?: string, audioId?: string) => {
    const audioOutputDevice = devices.filter((d) => d.kind === 'audiooutput')[0]?.deviceId;
    const audioInputDevice = devices.filter((d) => d.kind === 'audioinput')[0]?.deviceId;
    const videoInputDevice = devices.filter((d) => d.kind === 'videoinput')[0]?.deviceId;

    this.setUserSettings('audioinput', audioId || audioInputDevice || null);

    this.setUserSettings('videoinput', videoId || videoInputDevice || null);

    this.setUserSettings('audiooutput', this.userSettings.audiooutput || audioOutputDevice || null);
  };

  @action startStream = async (options: OptionsT) => {
    try {
      const { enableVideo, enableAudio = true, videoId, audioId } = options;

      this.stopStream();

      const { mediaDevices } = navigator;

      const stream = await mediaDevices.getUserMedia({
        audio: audioId ? { deviceId: { exact: audioId } } : enableAudio,
        video: videoId ? { deviceId: { exact: videoId } } : !!enableVideo,
      });

      const devices = await mediaDevices.enumerateDevices();

      this.setMediaInfo('stream', stream);

      this.setMediaInfo('devices', devices);

      this.setAllUserSettings(devices, videoId, audioId);
    } catch (e) {
      this.setMediaInfo('error', e);
    }
  };

  @action stopStream = () => this.mediaInfo.stream?.getTracks().forEach((track) => track.stop());
}

export default MediaSt;
