/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'pkg.config.muidts';

import React from 'react';
import { SnackbarContent, CustomContentProps, useSnackbar } from 'notistack';
import { Grid, Button, Paper, Stack, Box, Typography, useMediaQuery, Theme } from '@mui/material';
import { Account, Close } from 'pkg.icons';

interface ReportCompleteProps extends CustomContentProps {
  bgcolor?: 'moscow.100' | 'ekaterinburg.100' | 'kungur.100' | 'petersburg.100';
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  buttonMain?: string;
  buttonMainAction?: () => void;
  buttonSecondary?: string;
  buttonSecondaryAction?: () => void;
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
    title,
    subtitle,
    bgcolor = 'petersburg.100',
    icon,
    buttonMain,
    buttonMainAction,
    buttonSecondary,
    buttonSecondaryAction,
    ...other
  } = props;

  const isMobile: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const { closeSnackbar } = useSnackbar();

  const handleReset = () => {
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
          minHeight: '54px',
          borderRadius: '8px',
          boxShadow: 24,
          bgcolor,
          p: 2,
        }}
      >
        <Stack
          sx={{ width: '100%' }}
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
        >
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{
              width: '20px',
              height: '20px',
              color: 'petersburg.0',
            }}
          >
            {icon || <Account sx={{ fontSize: 20 }} />}
          </Stack>
          <Grid container direction="row" justifyContent="center" alignItems="flex-start">
            <Grid item sx={{ pr: 2 }}>
              {title && (
                <Typography
                  variant="m"
                  sx={{
                    fontWeight: 600,
                    color: 'petersburg.0',
                  }}
                >
                  {title}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {subtitle && (
                <Typography
                  variant="s"
                  sx={{
                    fontWeight: 400,
                    color: 'petersburg.0',
                  }}
                >
                  {subtitle}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {buttonMain && (
                <Button
                  onClick={buttonMainAction}
                  variant="outlined"
                  sx={{
                    mr: '16px',
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: 'petersburg.0',
                  }}
                >
                  {buttonMain}
                </Button>
              )}
              {buttonSecondary && (
                <Button
                  onClick={buttonSecondaryAction}
                  variant="text"
                  sx={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: 'petersburg.0',
                  }}
                >
                  {buttonSecondary}
                </Button>
              )}
            </Grid>
          </Grid>
          <Button
            onClick={handleReset}
            sx={{
              width: '20px',
              minWidth: '20px',
              height: '20px',
              fontWeight: 500,
              bgcolor: 'transparent',
              color: 'petersburg.0',
            }}
          >
            <Close />
          </Button>
        </Stack>
      </Paper>
    </SnackbarContent>
  );
});

Notification.displayName = 'Notification';
