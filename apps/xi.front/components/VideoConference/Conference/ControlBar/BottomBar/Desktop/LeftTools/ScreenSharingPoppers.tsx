import React from 'react';
import PopperContainer, {
  PopperContainerT,
} from 'components/VideoConference/Common/PopperContainer';
import { Button, Typography } from '@mui/material';
import { Screen } from 'components/VideoConference/Icons/Screen';
import { Window } from 'components/VideoConference/Icons/Window';

const ScreenSharingPoppers: React.FC<PopperContainerT> = (props) => {
  const { anchorEl, closeMenu } = props;

  const btnStyles = {
    p: '8px',
    width: '100%',
    fontWeight: 500,
    fontSize: '12px',
    color: 'grayscale.0',
    borderRadius: '12px',
    alignItems: 'center',
    textTransform: 'none',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    transition: 'background 0.3s ease',

    '&:hover': {
      backgroundColor: 'grayscale.90',
    },
  };

  return (
    <PopperContainer
      sx={{
        p: '8px',
        width: '350px',
        borderRadius: '20px',
        color: 'grayscale.0',
        backgroundColor: 'grayscale.100',
      }}
      placement="top"
      anchorEl={anchorEl}
      closeMenu={closeMenu}
    >
      <Typography fontSize="20px" fontWeight={500} p="8px">
        Показать
      </Typography>

      <Button sx={{ ...btnStyles, mb: '8px' }}>
        <Screen mr="15px" />
        Весь ваш экран
      </Button>

      <Button sx={btnStyles}>
        <Window mr="15px" />
        Отдельное окно
      </Button>
    </PopperContainer>
  );
};

export default ScreenSharingPoppers;
