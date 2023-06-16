/* eslint-disable @next/next/no-img-element */
import { Avatar as Av, Stack } from '@mui/material';
import Image from 'next/image';
import { Photo, Trash } from 'pkg.icons';
import { useStore } from 'store/connect';
import DialogEditor from './DialogEditor';

type AvatarT = {
  letter?: string;
  filename?: string;
};

const Avatar = ({ letter, filename }: AvatarT) => {
  const randomNumber = Math.floor(Math.random() * 1);

  const getBgcolor = () => {
    if (randomNumber === 0) return '#F5F0FF';
    if (randomNumber === 1) return '#ECEFFF';
    return '#F5F0FF';
  };

  const getTextColor = () => {
    if (randomNumber === 0) return '#9769FF';
    if (randomNumber === 1) return '#445AFF';
    return '#9769FF';
  };

  if (filename) {
    return (
      <Image
        src={`https://xieffect.ru:5000/files/${filename}`}
        alt="avatar"
        width={128}
        height={128}
        style={{
          borderRadius: '64px',
        }}
      />
    );
  }
  if (letter) {
    return (
      <Av
        alt="avatar"
        sx={{
          width: 128,
          height: 128,
          bgcolor: getBgcolor(),
          color: getTextColor(),
          fontWeight: 600,
          fontSize: '48px',
          lineHeight: '32px',
        }}
      >
        {letter.toUpperCase()}
      </Av>
    );
  }

  return (
    <Av
      alt="avatar"
      sx={{
        width: 128,
        height: 128,
        bgcolor: getBgcolor(),
        color: getTextColor(),
        fontWeight: 600,
        fontSize: '24px',
        lineHeight: '32px',
      }}
    >
      A
    </Av>
  );
};

type AvatarEditorT = {
  letter?: string;
  filename?: string;
};

const AvatarEditor = ({ letter, filename }: AvatarEditorT) => {
  const rootStore = useStore();
  const { uiSt, userSt } = rootStore;

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: 128,
        height: 128,
        position: 'relative',
      }}
    >
      <Avatar letter={letter} filename={filename} />
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          cursor: 'pointer',
          width: 36,
          height: 36,
          border: '2px solid white',
          position: 'absolute',
          bgcolor: 'brand.80',
          borderRadius: 18,
          bottom: -4,
          left: -4,
          svg: {
            fill: '#FFF',
          },
          fontSize: 20,
        }}
        onClick={() => uiSt.setDialogs('avatarEditor', true)}
      >
        <Photo fontSize="inherit" />
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          cursor: 'pointer',
          width: 36,
          height: 36,
          border: '2px solid white',
          position: 'absolute',
          bgcolor: 'moscow.80',
          borderRadius: 18,
          bottom: -4,
          right: -4,
          svg: {
            fill: '#FFF',
          },
          fontSize: 20,
        }}
        onClick={() => userSt.deleteAvatar()}
      >
        <Trash fontSize="inherit" />
      </Stack>
      <DialogEditor uiSt={uiSt} />
    </Stack>
  );
};

export default AvatarEditor;
