import React from 'react';
import { Button, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from 'pkg.data.avatar';
import { Close } from 'pkg.icons.close';
import { TabPanel } from '../EditRole';

//  data
const members = [
  { name: 'Константин Константинопольский', username: 'kkonstantynopolsky', avatar: '' },
  { name: 'Михаил Морозов', username: 'kolipseazer', avatar: '' },
];

type MembersType = {
  mobile700: boolean;
  value: number;
};

const Members: React.FC<MembersType> = ({ mobile700, value }) => (
  <TabPanel value={value} index={2}>
    <Stack p={1}>
      <Stack direction={mobile700 ? 'column' : 'row'} justifyContent="space-between" mt={3}>
        <TextField
          sx={{
            width: '100%',
            maxWidth: mobile700 ? '100%' : '401px',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '22px',
            mr: 2,
            mb: mobile700 ? 1 : 0,
          }}
          placeholder="Поиск по участникам"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <Button
          variant="contained"
          sx={{
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '20px',
            py: mobile700 ? 2 : 0,
          }}
        >
          <Typography component="span" justifyContent={mobile700 ? 'start' : 'center'}>
            Добавить участников
          </Typography>
        </Button>
      </Stack>
      <Stack gap={3} mt={3}>
        {members.map((u, index) => (
          <Stack key={index} direction="row" alignItems="center" justifyContent="space-between">
            <Stack direction="row" alignItems="center">
              <Avatar size={24} />
              <Stack>
                <Typography
                  sx={{
                    // mb: 1,
                    ml: 1,
                    mr: 'auto',
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '22px',
                  }}
                >
                  {u.name}
                  {' '}
                  <Typography
                    component="span"
                    sx={{
                      mr: 'auto',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '20px',
                    }}
                  >
                    {u.username}
                  </Typography>
                </Typography>
              </Stack>
            </Stack>
            <IconButton
              onClick={() => {}}
              sx={{
                width: '24px',
                height: '24px',
                bgcolor: 'grayscale.10',
              }}
            >
              <Close />
            </IconButton>
          </Stack>
        ))}
      </Stack>
    </Stack>
  </TabPanel>
);

export default Members;
