import 'pkg.config.muidts';
import { Grid, Paper, Button, Stack, Typography } from '@mui/material';
import {
  Clock,
  Emotions,
  Nature,
  Food,
  Activity,
  Places,
  Objects,
  Heart,
  Flag,
  Search,
} from 'pkg.icons';
import { Input } from 'pkg.inputs.input';
import React, { ChangeEvent, memo } from 'react';
import { CreateEmoji } from 'pkg.emoji';
import { emojis } from './emojis';

const icons = [Clock, Emotions, Nature, Food, Activity, Places, Objects, Heart, Flag];

type EmoButtonProps = {
  emoji: {
    name: string;
    unicode: string;
    char: string;
  };
  onClick?: any;
};

const EmoButton = memo(({ emoji, onClick }: EmoButtonProps) => (
  <Button
    onClick={onClick}
    sx={{
      width: '24px',
      height: '24px',
      minWidth: '24px',
      '&:hover': {
        bgcolor: 'brand.0',
      },
    }}
  >
    <CreateEmoji unicode={emoji.unicode} sx={{ fontSize: 16 }} />
  </Button>
));

EmoButton.displayName = 'EmoButton';

export const EmojiList = () => {
  const [selectedValue, setSelectedValue] = React.useState(0);
  const [value, setValue] = React.useState('');

  const scrollRefEmoji0 = React.createRef<HTMLDivElement>();
  const scrollRefEmoji1 = React.createRef<HTMLDivElement>();
  const scrollRefEmoji2 = React.createRef<HTMLDivElement>();
  const scrollRefEmoji3 = React.createRef<HTMLDivElement>();
  const scrollRefEmoji4 = React.createRef<HTMLDivElement>();
  const scrollRefEmoji5 = React.createRef<HTMLDivElement>();
  const scrollRefEmoji6 = React.createRef<HTMLDivElement>();
  const scrollRefEmoji7 = React.createRef<HTMLDivElement>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const scrollToEmoji0 = () => {
    if (scrollRefEmoji0 && scrollRefEmoji0.current) {
      scrollRefEmoji0.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const scrollToEmoji1 = () => {
    if (scrollRefEmoji1 && scrollRefEmoji1.current) {
      scrollRefEmoji1.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const scrollToEmoji2 = () => {
    if (scrollRefEmoji2 && scrollRefEmoji2.current) {
      scrollRefEmoji2.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const scrollToEmoji3 = () => {
    if (scrollRefEmoji3 && scrollRefEmoji3.current) {
      scrollRefEmoji3.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const scrollToEmoji4 = () => {
    if (scrollRefEmoji4 && scrollRefEmoji4.current) {
      scrollRefEmoji4.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const scrollToEmoji5 = () => {
    if (scrollRefEmoji5 && scrollRefEmoji5.current) {
      scrollRefEmoji5.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const scrollToEmoji6 = () => {
    if (scrollRefEmoji6 && scrollRefEmoji6.current) {
      scrollRefEmoji6.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const scrollToEmoji7 = () => {
    if (scrollRefEmoji7 && scrollRefEmoji7.current) {
      scrollRefEmoji7.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const selectMenu = (index: number) => {
    setSelectedValue(index);
    if (index === 1) {
      scrollToEmoji0();
    }
    if (index === 2) {
      scrollToEmoji1();
    }
    if (index === 3) {
      scrollToEmoji2();
    }
    if (index === 4) {
      scrollToEmoji3();
    }
    if (index === 5) {
      scrollToEmoji4();
    }
    if (index === 6) {
      scrollToEmoji5();
    }
    if (index === 7) {
      scrollToEmoji6();
    }
    if (index === 8) {
      scrollToEmoji7();
    }
  };

  return (
    <Paper sx={{ width: '276px', height: '296px' }} elevation={24}>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ width: '276px', height: '296px' }}
      >
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={1}
          sx={{
            height: '100%',
            width: '40px',
            bgcolor: 'petersburg.5',
            borderTopLeftRadius: '8px',
            borderBottomLeftRadius: '8px',
            p: 1,
          }}
        >
          {icons.map((icon, index) => {
            const Icon = icon;
            return (
              <Button
                onClick={() => selectMenu(index)}
                key={index.toString()}
                sx={{
                  width: '24px',
                  height: '24px',
                  minWidth: '24px',
                  bgcolor: selectedValue === index ? 'brand.0' : 'transparent',
                }}
              >
                <Icon
                  sx={{
                    fontSize: 16,
                    color: selectedValue === index ? '' : 'petersburg.80',
                  }}
                />
              </Button>
            );
          })}
        </Stack>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={0.5}
          sx={{
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px',
            height: '296px',
          }}
        >
          <Input
            InputProps={{
              startAdornment: <Search sx={{ fontSize: 16, color: 'petersburg.60' }} />,
            }}
            placeholder="Поиск"
            value={value}
            onChange={handleChange}
            sx={{
              p: 1,
              pb: 0.5,
              '& .MuiInputBase-root': {
                width: '220px',
                height: '32px',
                pl: 1,
              },
              '& .MuiInputBase-input': {
                height: '20px',
                padding: '4px 0 5px',
                pl: 0.5,
              },
            }}
          />
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
            sx={{
              width: '100%',
              height: '242px',
              overflow: 'auto',
              pl: 1,
            }}
          >
            <Stack
              ref={scrollRefEmoji0}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={0.5}
            >
              <Typography variant="s">{emojis[0].name_rus}</Typography>
              <Grid container sx={{ width: '220px' }}>
                {emojis[0].emojis.map((emoji, i) => (
                  <Grid key={i.toString()} item>
                    <EmoButton emoji={emoji} />
                  </Grid>
                ))}
              </Grid>
            </Stack>
            <Stack
              ref={scrollRefEmoji1}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={0.5}
            >
              <Typography variant="s">{emojis[1].name_rus}</Typography>
              <Grid container sx={{ width: '220px' }}>
                {emojis[1].emojis.map((emoji, i) => (
                  <Grid key={i.toString()} item>
                    <EmoButton emoji={emoji} />
                  </Grid>
                ))}
              </Grid>
            </Stack>
            <Stack
              ref={scrollRefEmoji2}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={0.5}
            >
              <Typography variant="s">{emojis[2].name_rus}</Typography>
              <Grid container sx={{ width: '220px' }}>
                {emojis[2].emojis.map((emoji, i) => (
                  <Grid key={i.toString()} item>
                    <EmoButton emoji={emoji} />
                  </Grid>
                ))}
              </Grid>
            </Stack>
            <Stack
              ref={scrollRefEmoji3}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={0.5}
            >
              <Typography variant="s">{emojis[3].name_rus}</Typography>
              <Grid container sx={{ width: '220px' }}>
                {emojis[3].emojis.map((emoji, i) => (
                  <Grid key={i.toString()} item>
                    <EmoButton emoji={emoji} />
                  </Grid>
                ))}
              </Grid>
            </Stack>
            <Stack
              ref={scrollRefEmoji4}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={0.5}
            >
              <Typography variant="s">{emojis[4].name_rus}</Typography>
              <Grid container sx={{ width: '220px' }}>
                {emojis[4].emojis.map((emoji, i) => (
                  <Grid key={i.toString()} item>
                    <EmoButton emoji={emoji} />
                  </Grid>
                ))}
              </Grid>
            </Stack>
            <Stack
              ref={scrollRefEmoji5}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={0.5}
            >
              <Typography variant="s">{emojis[5].name_rus}</Typography>
              <Grid container sx={{ width: '220px' }}>
                {emojis[5].emojis.map((emoji, i) => (
                  <Grid key={i.toString()} item>
                    <EmoButton emoji={emoji} />
                  </Grid>
                ))}
              </Grid>
            </Stack>
            <Stack
              ref={scrollRefEmoji6}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={0.5}
            >
              <Typography variant="s">{emojis[6].name_rus}</Typography>
              <Grid container sx={{ width: '220px' }}>
                {emojis[6].emojis.map((emoji, i) => (
                  <Grid key={i.toString()} item>
                    <EmoButton emoji={emoji} />
                  </Grid>
                ))}
              </Grid>
            </Stack>
            <Stack
              ref={scrollRefEmoji7}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={0.5}
            >
              <Typography variant="s">{emojis[7].name_rus}</Typography>
              <Grid container sx={{ width: '220px' }}>
                {emojis[7].emojis.map((emoji, i) => (
                  <Grid key={i.toString()} item>
                    <EmoButton emoji={emoji} />
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};
