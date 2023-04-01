import React from 'react';
import { CSS } from '@dnd-kit/utilities';
import { Stack } from '@mui/material';
import { RegCommunityT } from 'models/dataProfileStore';
import { useSortable } from '@dnd-kit/sortable';
import IButton from './IButton';

type CommunityItemType = {
  item: RegCommunityT;
  index: number;
};

const CommunityItem: React.FC<CommunityItemType> = (props) => {
  const { item } = props;

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: item.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ width: '56px', height: '56px', cursor: 'grabbing' }}
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <IButton
        tooltip={item.name}
        typography={item.name[0].toUpperCase()}
        href={`/community/${item.id}`}
        isBefore
      />
    </Stack>
  );
};

export default CommunityItem;
