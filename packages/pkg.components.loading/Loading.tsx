import 'pkg.config.muidts';

import React from 'react';
import { Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { Spinner } from './spinner';

const quotes = [
  {
    text: 'Задача образования — заменить пустой разум свободным',
    author: 'Малькольм Форбс',
  },
  {
    text: 'Когда мы смотрим в небо и видим звёзды — мы видим лишь отсвет далёкого ядерного синтеза',
    author: 'Карл Саган',
  },
  {
    text: 'Люди любят узнавать новое, и это продолжает науку',
    author: 'Ральф Уолдо Эмерсон',
  },
  {
    text: 'Никакое дело не покажется невыполнимым, если разбить его на мелкие части',
    author: 'Генри Форд',
  },
  {
    text: 'Каждый великий успех науки имеет своим истоком великую дерзость воображения',
    author: 'Джон Дьюи',
  },
  {
    text: 'Те, кто не помнит своей истории, обречены повторить ее',
    author: 'Джордж Сантаяна',
  },
  {
    text: 'Измеряй измеримое и делай неизмеримое измеримым',
    author: 'Галилео Галилей',
  },
];

const randomValue = Math.floor(Math.random() * quotes.length);

export type LoadingProps = {
  loading: boolean;
};

export const Loading = ({ loading }: LoadingProps) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <AnimatePresence>
      {loading && (
        <Grid
          component={motion.div}
          container
          direction="column"
          justifyContent={mobile ? 'flex-start' : 'center'}
          alignItems="center"
          sx={{
            p: 2,
            pt: mobile ? '128px' : 2,
            position: 'fixed',
            height: '100vh',
            width: '100vw',
            zIndex: 99999,
            bgcolor: 'primary.pale',
            overflow: 'hidden',
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              p: 1,
              position: 'relative',
              maxWidth: '540px',
              width: '100%',
            }}
          >
            <Spinner />
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{
                position: 'absolute',
                top: '66px',
                maxWidth: '540px',
                width: '100%',
              }}
            >
              <Typography
                align="center"
                variant="xl"
                sx={{
                  width: '100%',
                  color: 'petersburg.80',
                  maxWidth: '540px',
                }}
              >
                {quotes[randomValue].text}
              </Typography>
              <Typography
                align="center"
                variant="l"
                sx={{
                  width: '100%',
                  mt: '24px',
                  color: 'petersburg.80',
                }}
              >
                {`© ${quotes[randomValue ?? 0].author}`}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      )}
    </AnimatePresence>
  );
};
