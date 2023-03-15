import React, { KeyboardEvent, MouseEvent } from 'react';
import { MenuItem, Stack, MenuList, Divider, Typography } from '@mui/material';
import { observer } from 'mobx-react';
import { useStore } from 'store/connect';
import { Settings } from 'pkg.icons.settings';
import { Exit } from 'pkg.icons.exit';
import { AddChannel } from 'pkg.icons.addchannel';
import { AddCategory } from 'pkg.icons.addcategory';
import { Invite } from 'pkg.icons.invite';

const menuListStyles = {
  width: '100%',
  height: '36px',
  p: '9px 10px',
  borderRadius: '4px',
  '&:hover': {
    bgcolor: 'grayscale.5',
  },
};

const dividerStyles = {
  bgcolor: 'primary.light',
  mt: '4px',
  mb: '4px',
  ml: '6px',
  mr: '6px',
};

type CommunityMenuProps = {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose?: (e: MouseEvent<HTMLAnchorElement> | MouseEvent<HTMLLIElement>) => void;
  handleListKeyDown?: (e: KeyboardEvent<HTMLUListElement>) => void;
};

const CommunityMenu = observer(({ setOpen, handleClose }: CommunityMenuProps) => {
  const rootStore = useStore();
  const { uiSt } = rootStore;

  return (
    <MenuList id="composition-menu" aria-labelledby="composition-button" sx={{ width: '100%' }}>
      <MenuItem
        sx={{
          ...menuListStyles,
        }}
        onClick={() => {
          uiSt.setDialogs('communityMenu', false);
          uiSt.setDialogs('communityInvite', true);
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: '100%' }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            Пригласить людей
          </Typography>
          <Invite fontSize="small" />
        </Stack>
      </MenuItem>
      <MenuItem
        sx={{
          ...menuListStyles,
        }}
        onClick={() => {
          uiSt.setDialogs('communityMenu', false);
          uiSt.setDialogs('communityProfile', true);
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: '100%' }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            Настройки сообщества
          </Typography>
          <Settings fontSize="small" />
        </Stack>
      </MenuItem>
      <Divider flexItem sx={{ ...dividerStyles }} />
      <MenuItem
        sx={{
          ...menuListStyles,
        }}
        onClick={() => {
          uiSt.setDialogs('communityMenu', false);
          uiSt.setDialogs('channelCreation', true);
          if (setOpen) setOpen(false);
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: '100%' }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            Создать канал
          </Typography>
          <AddChannel fontSize="small" />
        </Stack>
      </MenuItem>
      <MenuItem
        sx={{
          ...menuListStyles,
        }}
        onClick={() => {
          uiSt.setDialogs('categoryCreation', true);
          if (setOpen) setOpen(false);
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: '100%' }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            Создать категорию
          </Typography>
          <AddCategory fontSize="small" />
        </Stack>
      </MenuItem>
      <Divider flexItem sx={{ ...dividerStyles }} />
      <MenuItem
        sx={{
          ...menuListStyles,
        }}
        onClick={(e) => {
          if (handleClose) handleClose(e);
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: '100%', color: 'error.main' }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            Покинуть сообщество
          </Typography>
          <Exit sx={{ color: 'error.main' }} fontSize="small" />
        </Stack>
      </MenuItem>
    </MenuList>
  );
});

export default CommunityMenu;
