import { observer } from 'mobx-react';

import { Stack, Tooltip, Divider, IconButton } from '@mui/material';

import dynamic from 'next/dynamic';
import useListen from 'utils/useListen';
import { Account } from 'pkg.icons.account';
import { Add } from 'pkg.icons.add';
import { Notification } from 'pkg.icons.notification';
import { Home } from 'pkg.icons.home';
import { Exit } from 'pkg.icons.exit';
import { Scroll } from 'pkg.components.scroll';
import { RegCommunityT } from 'models/dataProfileStore';
import { useStore } from 'store/connect';
import { CommunityInSidebar } from 'models/community';

import { DndContext, UniqueIdentifier } from '@dnd-kit/core';
import React from 'react';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import IButton from './IButton';
import CommunityItem from './CommunityItem';

const DialogCreateCommunity = dynamic(() => import('./DialogCreateCommunity'), {
  ssr: false,
});

const Sidebar = observer(() => {
  const rootStore = useStore();
  const { uiSt, userSt } = rootStore;
  const { user } = userSt;

  const reorder = (list, startIndex, endIndex) => {
    const result: CommunityInSidebar[] = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const reorderFn = (source, destination) => {
    console.log('user.communities', user.communities);
    const communities: CommunityInSidebar[] = reorder(user.communities, source, destination);
    console.log('communities', communities);

    rootStore.socket?.emit(
      'reorder-community',
      {
        'source-id': user.communities[source].id,
        'target-index': destination,
      },
      ({ code, message, data }) => {
        console.info(code, message, data);
      },
    );
    userSt.setUser('communities', communities);
  };

  type Community = {
    id: number;
    name: string;
  };

  const subReorder = (data) => {
    const newArray = Array.from(user.communities);
    const item = newArray.find((i: Community) => i.id === data['source-id']);
    const itemIndex = newArray.findIndex((i: Community) => i.id === data['source-id']);
    newArray.splice(itemIndex, 1);
    newArray.splice(data['target-index'], 0, item as RegCommunityT);
    userSt.setUser('communities', newArray);
  };

  useListen(rootStore.socket, 'reorder-community', subReorder, user.communities);

  const addItemtoMenu = (data) => {
    const array = user.communities;
    userSt.setUser('communities', [
      {
        name: data.name,
        id: data.id,
      },
      ...array,
    ]);
  };

  useListen(rootStore.socket, 'new-community', addItemtoMenu, user.communities);

  const removeItem = (data) => {
    userSt.removeCommunity(data.id);
  };

  useListen(rootStore.socket, 'leave-community', removeItem, userSt);

  const [activeId, setActiveId] = React.useState<UniqueIdentifier | null>(null);

  const getIndex = (id: UniqueIdentifier) => user.communities.map((e) => e.id).indexOf(Number(id));
  const activeIndex = activeId ? getIndex(activeId) : -1;

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={0}
      sx={{
        pt: 1,
        pb: 1,
        width: 64,
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Stack
        sx={{
          width: 64,
        }}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Stack
          sx={{ width: 64 }}
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <IButton
            tooltip="Главная"
            href="/home"
            icon={<Home color="primary" />}
            iconColor="#445AFF"
            iconColorHover="#FFFFFF"
            isBefore
          />
          <IButton
            tooltip="Создать сообщество"
            icon={<Add color="primary" />}
            onClick={() => uiSt.setDialogs('communityCreation', true)}
            iconColor="#333333"
            iconColorHover="#FFFFFF"
          />
          <Divider
            sx={{
              height: '1px',
              width: '40px',
              borderRadius: '5px',
              backgroundColor: 'primary.light',
            }}
          />
        </Stack>
      </Stack>
      <DndContext
        onDragStart={({ active }) => {
          if (!active) {
            return;
          }

          setActiveId(active.id);
        }}
        onDragEnd={({ over }) => {
          setActiveId(null);

          if (over) {
            const overIndex = getIndex(over.id);
            if (activeIndex !== overIndex) {
              reorderFn(activeIndex, overIndex);
            }
          }
        }}
        onDragCancel={() => setActiveId(null)}
      >
        <Scroll>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            sx={{
              pt: 1,
              pb: 1,
              width: 64,
            }}
          >
            <SortableContext items={user.communities} strategy={verticalListSortingStrategy}>
              {user.communities.map((item, index) => (
                <CommunityItem item={item} index={index} key={item.id} />
              ))}
            </SortableContext>
          </Stack>
        </Scroll>
      </DndContext>
      <Stack
        sx={{ width: 64 }}
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Divider
          sx={{
            height: '1px',
            width: '40px',
            borderRadius: '5px',
            backgroundColor: 'primary.light',
          }}
        />
        <IButton
          tooltip="Уведомления"
          icon={<Notification color="primary" />}
          iconColor="#333333"
          iconColorHover="#FFFFFF"
        />
        <IButton
          tooltip="Профиль"
          href="/profile/profile1"
          icon={<Account color="primary" />}
          onClick={() => uiSt.setDialogs('userProfile', true)}
          isBefore
          iconColor="#333333"
          iconColorHover="#FFFFFF"
        />
        <Tooltip placement="right" title="Выйти">
          <IconButton
            onClick={() => {
              uiSt.setDialogs('exit', true);
            }}
            sx={{
              bgcolor: '#FFFFFF',
              width: 48,
              height: 48,
              borderRadius: 24,
              svg: {
                fill: '#F42D2D',
              },

              '&:hover': {
                borderRadius: '16px',
                bgcolor: '#F42D2D',

                svg: {
                  fill: '#FFFFFF',
                },
              },
            }}
          >
            <Exit color="" />
          </IconButton>
        </Tooltip>
      </Stack>
      <DialogCreateCommunity />
    </Stack>
  );
});

export default Sidebar;
