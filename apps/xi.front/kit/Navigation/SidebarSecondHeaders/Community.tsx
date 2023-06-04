/* eslint-disable react/jsx-no-bind */
import React, { MouseEvent } from 'react';
import { observer } from 'mobx-react';

import {
  Box,
  Typography,
  Stack,
  Tooltip,
  IconButton,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
} from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import CloseIcon from '@mui/icons-material/Close';

import { CommunityMenu } from 'kit/CommunityMenu';
import { useStore } from 'store/connect';
import DialogInvite from 'kit/CommunityMenu/DialogInvite';

import DialogCategoryCreation from 'kit/CommunityMenu/DialogCategoryCreation';
import DialogChannelCreation from 'kit/CommunityMenu/DialogChannelCreation';
import DialogExit from 'kit/CommunityMenu/DialogExit';

const Community = observer(() => {
  const rootStore = useStore();
  const { communitySt, uiSt } = rootStore;
  const { dialogs } = uiSt;

  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => uiSt.setDialogs('communityMenu', !dialogs.communityMenu);

  const handleClose = (
    event:
      | MouseEvent<HTMLAnchorElement>
      | MouseEvent<HTMLLIElement>
      // eslint-disable-next-line no-undef
      | globalThis.MouseEvent
      | TouchEvent,
  ) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as Node)) {
      return;
    }

    uiSt.setDialogs('communityMenu', false);
  };

  return (
    <>
      <Stack
        onClick={handleToggle}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          p: 1,
          '&:hover': {
            cursor: 'pointer',
          },
        }}
      >
        <Typography
          noWrap
          sx={{
            fontWeight: 500,
            fontSize: 18,
            lineHeight: '22px',
          }}
        >
          {communitySt.meta.name || 'Тестовое сообщество'}
        </Typography>
        <Tooltip arrow title="Меню сообщества">
          <IconButton
            ref={anchorRef}
            id="composition-button"
            aria-controls={dialogs.communityMenu ? 'composition-menu' : undefined}
            aria-expanded={dialogs.communityMenu ? 'true' : undefined}
            aria-haspopup="true"
            sx={{
              height: 36,
              width: 36,
            }}
          >
            {!dialogs.communityMenu && <KeyboardArrowDownIcon />}
            {dialogs.communityMenu && <CloseIcon />}
          </IconButton>
        </Tooltip>
      </Stack>
      <Popper
        open={dialogs.communityMenu}
        anchorEl={anchorRef.current}
        placement="bottom-end"
        transition
        sx={{
          height: 356,
          width: 228,
          left: 0,
          zIndex: 10000,
        }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper
              sx={{
                position: 'absolute',
                left: 4,
                top: 12,
                width: 228,
                boxShadow: 24,
                borderRadius: '8px',
                bgcolor: 'petersburg.0',
                border: '1px solid',
                borderColor: 'petersburg.40',
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <Box>
                  <CommunityMenu />
                </Box>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <DialogChannelCreation />
      <DialogInvite />
      <DialogCategoryCreation />
      <DialogExit />
    </>
  );
});

export default Community;
