/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { SnackbarContent, CustomContentProps } from 'notistack';
import { Button, Paper, Stack, Typography, useMediaQuery, Theme } from '@mui/material';
import { useSnackbar } from 'notistack';

interface ReportCompleteProps extends CustomContentProps {
  reset?: any;
  bgcolor?: 'moscow.100' | 'ekaterinburg.100' | 'kungur.100' | 'petersburg.100';
}

export const Notification = React.forwardRef<HTMLDivElement, ReportCompleteProps>((props, ref) => {
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
    reset,
    bgcolor,
    ...other
  } = props;

  const isMobile: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const { closeSnackbar } = useSnackbar();

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
          height: '100%',
          borderRadius: '16px',
          boxShadow: 24,
          bgcolor: 'petersburg.0',
          border: '1px solid',
          borderColor: 'petersburg.40',
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            p: 2,
            maxWidth: '960px',
            width: '100%',
            height: isMobile ? '100%' : '96px',
          }}
          spacing={2}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '24px',
              pl: 1,
            }}
          >
            У вас есть несохраненные изменения
          </Typography>
          <Stack
            sx={{ width: isMobile ? '100%' : '296px' }}
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Button
              onClick={handleReset}
              sx={{
                width: '120px',
                height: '48px',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '22px',
                borderRadius: '8px',
                color: 'petersburg.80',
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
              type="submit"
              form="hook-form"
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
        </Stack>
      </Paper>
    </SnackbarContent>
  );
});

Notification.displayName = 'Notification';
