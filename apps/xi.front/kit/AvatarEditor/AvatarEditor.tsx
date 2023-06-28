/* eslint-disable @next/next/no-img-element */
// import { useState } from 'react';
import { Avatar as Av, Stack, MenuItem, Typography } from '@mui/material';
import Image from 'next/image';
import { Trash, Edit, Account } from 'pkg.icons';
import { Dropdown } from 'pkg.navigation.dropdown';
import { useStore } from 'store/connect';
import DialogEditor from './DialogEditor';

const menuItemsStyles = {
  width: '100%',
  p: '8px 12px',
  borderRadius: '4px',
};

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
  // const [hover, setHover] = useState(true);
  const rootStore = useStore();
  const { uiSt, userSt } = rootStore;

  const createAvatar = () => <Avatar letter={letter} filename={filename} />;

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: 144,
        height: 144,
        position: 'relative',
      }}
    >
      <Dropdown
        Element={createAvatar}
        menuSx={{ '.MuiMenu-paper': { maxWidth: '500px' } }}
        buttonSx={{ width: '144px', height: '144px' }}
        // hover={hover}
      >
        <MenuItem sx={menuItemsStyles} onClick={() => uiSt.setDialogs('avatarEditor', true)}>
          <Stack direction="row" alignItems="center" sx={{ width: '100%', gap: '8px' }}>
            <Edit fontSize="small" />
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
              }}
            >
              Обновить фотографию
            </Typography>
          </Stack>
        </MenuItem>
        <MenuItem sx={menuItemsStyles} onClick={() => uiSt.setDialogs('avatarEditor', true)}>
          <Stack direction="row" alignItems="center" sx={{ width: '100%', gap: '8px' }}>
            <Account fontSize="small" />
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
              }}
            >
              Изменить миниатюру
            </Typography>
          </Stack>
        </MenuItem>
        <MenuItem sx={menuItemsStyles} onClick={() => userSt.deleteAvatar()}>
          <Stack direction="row" alignItems="center" sx={{ width: '100%', gap: '8px' }}>
            <Trash fontSize="small" />
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
              }}
            >
              Удалить
            </Typography>
          </Stack>
        </MenuItem>
      </Dropdown>
      <DialogEditor uiSt={uiSt} />
    </Stack>
  );
};

export default AvatarEditor;
