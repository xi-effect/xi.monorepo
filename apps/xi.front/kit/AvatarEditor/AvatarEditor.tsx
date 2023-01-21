/* eslint-disable @next/next/no-img-element */
import { Avatar as Av, Stack } from '@mui/material';
import Image from 'next/image';
import { Photo } from 'pkg.icons.photo';
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
        width={72}
        height={72}
        style={{
          borderRadius: '50px',
        }}
      />
    );
  }
  if (letter) {
    return (
      <Av
        alt="avatar"
        sx={{
          width: 72,
          height: 72,
          bgcolor: getBgcolor(),
          color: getTextColor(),
          fontWeight: 600,
          fontSize: '24px',
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
        width: 72,
        height: 72,
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
  const { uiSt } = rootStore;

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: 72,
        height: 72,
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
          bgcolor: 'primary.dark',
          borderRadius: 18,
          bottom: -4,
          right: -4,
          svg: {
            fill: '#FFF',
          },
          fontSize: 20,
        }}
        onClick={() => uiSt.setDialogs('avatarEditor', true)}
      >
        <Photo fontSize="inherit" />
      </Stack>
      <DialogEditor uiSt={uiSt} />
    </Stack>
  );
};

export default AvatarEditor;
