import React from 'react';
import PopperContainer, {
  PopperContainerT,
} from 'components/VideoConference/Common/PopperContainer';
import { Button, Typography } from '@mui/material';
import { ScreenShare, Window } from 'pkg.icons';

const ScreenSharingPoppers: React.FC<PopperContainerT> = (props) => {
  const { anchorEl, closeMenu } = props;

  const btnStyles = {
    p: '8px',
    width: '100%',
    fontWeight: 500,
    fontSize: '12px',
    color: 'petersburg.0',
    borderRadius: '12px',
    alignItems: 'center',
    textTransform: 'none',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    transition: 'background 0.3s ease',

    '&:hover': {
      backgroundColor: 'petersburg.90',
    },
  };

  return (
    <PopperContainer
      sx={{
        p: '8px',
        width: '350px',
        borderRadius: '20px',
        color: 'petersburg.0',
        backgroundColor: 'petersburg.100',
      }}
      placement="top"
      anchorEl={anchorEl}
      closeMenu={closeMenu}
    >
      <Typography
        sx={{
          p: '8px',
          fontSize: '20px',
          fontWeight: 500,
        }}
      >
        Показать
      </Typography>

      <Button sx={{ ...btnStyles, mb: '8px' }}>
        <ScreenShare sx={{ mr: '15px', fill: '#fff' }} />
        Весь ваш экран
      </Button>

      <Button sx={btnStyles}>
        <Window sx={{ mr: '15px', fill: '#fff' }} />
        Отдельное окно
      </Button>
    </PopperContainer>
  );
};

export default ScreenSharingPoppers;
