/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { SnackbarContent, CustomContentProps } from 'notistack';
import { Button, Paper, Stack, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';

interface ReportCompleteProps extends CustomContentProps {
  formRef?: React.RefObject<HTMLButtonElement>;
  reset?: any;
}

const SaveConfirm = React.forwardRef<HTMLDivElement, ReportCompleteProps>((props, ref) => {
  const {
    // You have access to notistack props and options 👇🏼
    id,
    message,
    autoHideDuration,
    anchorOrigin,
    hideIconVariant,
    iconVariant,
    persist,
    // as well as your own custom props 👇🏼,
    formRef,
    reset,
    ...other
  } = props;

  const { closeSnackbar } = useSnackbar();

  const handleSubmit = () => {
    if (formRef && formRef.current) {
      formRef.current.click();
    }
  };

  const handleReset = () => {
    reset();
    closeSnackbar();
  };

  return (
    <SnackbarContent ref={ref} role="alert" {...other}>
      <Paper
        elevation={24}
        sx={{
          maxWidth: '960px',
          width: '100%',
          height: '96px',
          borderRadius: '16px',
          bgcolor: 'grayscale.10',
        }}
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sx={{
            p: 2,
            maxWidth: '960px',
            width: '100%',
            height: '96px',
          }}
          spacing={2}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '24px',
            }}
          >
            {' '}
            У вас есть несохраненные изменения
            {' '}
          </Typography>
          <Button
            onClick={handleReset}
            sx={{
              width: '120px',
              height: '48px',
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '22px',
              borderRadius: '8px',
              color: 'grayscale.80',
              textTransform: 'capitalize',
              boxShadow: 0,
              '&:hover': {
                boxShadow: 0,
              },
            }}
          >
            Сбросить
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              width: '160px',
              height: '48px',
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '22px',
              borderRadius: '8px',
              textTransform: 'capitalize',
              boxShadow: 0,
              '&:hover': {
                boxShadow: 0,
              },
            }}
          >
            Сохранить
          </Button>
        </Stack>
      </Paper>
    </SnackbarContent>
  );
});

SaveConfirm.displayName = 'SaveConfirm';

export default SaveConfirm;
