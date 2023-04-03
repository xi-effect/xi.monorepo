import React from 'react';
import { IconButton, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import { Add } from 'pkg.icons.add';
import { observer } from 'mobx-react';

const roles = [
  {
    id: 0,
    name: 'Администратор',
    color: '#9769FF',
  },
  {
    id: 1,
    name: 'Преподаватель',
    color: '#445AFF',
  },
  {
    id: 2,
    name: 'Ученик',
    color: '#11743A',
  },
  {
    id: 3,
    name: 'Гость',
    color: '#999999',
  },
];

const RolesSidebar: React.FC = observer(() => {
  const mobile700: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(800));

  const [activeRole, setActiveRole] = React.useState(0);

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        width: mobile700 ? '100%' : '220px',
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          width: mobile700 ? '100%' : '220px',
          mb: 1,
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: '22px',
            lineHeight: '30px',
            ml: 1,
          }}
        >
          Роли
        </Typography>
        <IconButton>
          <Add />
        </IconButton>
      </Stack>
      <Stack sx={{ width: '100%' }}>
        {roles.map((r, index) => {
          const setActiveRoleHandler = () => {
            setActiveRole(index);
          };

          return (
            <Stack
              key={index}
              onClick={setActiveRoleHandler}
              direction="row"
              sx={{
                position: 'relative',

                width: mobile700 ? '100%' : '220px',
                mb: 1,
                borderRadius: '4px',
                cursor: 'pointer',
                backgroundColor: index === activeRole ? 'white' : 'transporent',
                '&:hover': {
                  backgroundColor: 'white',
                },
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '10px',
                  width: '16px',
                  height: '16px',
                  backgroundColor: r.color,
                  borderRadius: '50%',
                }}
              >
                {' '}
              </div>

              <Typography
                sx={{
                  width: mobile700 ? '100%' : '220px',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '20px',
                  padding: '8px 12px 8px 40px',
                }}
              >
                {r.name}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
});

export default RolesSidebar;
