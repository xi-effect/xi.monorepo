import React from 'react';
import { CSS } from '@dnd-kit/utilities';
import { Stack, Tooltip, IconButton } from '@mui/material';
import { RegCommunityT } from 'models/dataProfileStore';
import { useSortable } from '@dnd-kit/sortable';
import { useRouter } from 'next/router';
import { Avatar } from 'pkg.data.avatar';

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

  const router = useRouter();
  const href = `/community/${item.id}`;
  const array = href ? href.split('/') : false;
  const isActive = array ? router.query.comid === array[2] : false;

  const handleClick = () => {
    router.push(href);
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
      <Tooltip placement="right" title={item.name}>
        <IconButton
          id="community-menu"
          onClick={handleClick}
          sx={{
            p: 0,
            width: 48,
            height: 48,
            borderRadius: isActive ? '12px' : 24,
            transition: '0.5s',

            '.MuiStack-root': {
              borderRadius: isActive ? '12px' : 24,
            },

            '&:hover': {
              borderRadius: '12px',

              '.MuiStack-root': {
                borderRadius: '12px',
                transition: '0.5s',
              },
            },

            '&:before': {
              display: isActive ? 'block' : 'none',
              transition: '0.4s',
              position: 'absolute',
              top: '12px',
              left: '-8px',
              bgcolor: 'grayscale.80',
              content: '""',
              width: '4px',
              height: '26px',
              borderBottomRightRadius: '8px',
              borderTopRightRadius: '8px',
            },
          }}
        >
          <Avatar size={48} name={item.name} label={item.name[0].toUpperCase()} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default CommunityItem;
