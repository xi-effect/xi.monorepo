import { Box, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import { Avatar } from 'pkg.data.avatar';

const communities = [
  {
    title: 'Школа Английского языка',
    avatar: '2',
    categories: ['1 группа', '2 группа', '3 группа', '4 группа', '5 группа'],
  },
  {
    title: 'Немецкий язык',
    avatar: '2',
    categories: ['1 группа', '2 группа', '3 группа', '4 группа', '5 группа'],
  },
  {
    title: 'Кружок Робототехники',
    avatar: '2',
    categories: ['1 группа', '2 группа', '3 группа', '4 группа', '5 группа'],
  },
  {
    title: 'English Speaking Club and Breakfast',
    avatar: '2',
    categories: ['1 группа', '2 группа', '3 группа'],
  },
];

const Communities = () => {
  const xl = useMediaQuery((theme: Theme) => theme.breakpoints.not('xl'));

  return (
    <Stack
      direction="row"
      spacing="32px"
      alignItems="center"
      flexWrap={xl ? 'wrap' : 'nowrap'}
      sx={{
        width: '100%',
        height: '248px',
        overflow: 'hidden',
      }}
      justifyContent="space-between"
    >
      {communities.map((item, index) => (
        <Stack
          key={index}
          direction="column"
          sx={{
            p: '16px 12px',
            flex: '1 1 25%',
            height: '248px',
            minWidth: '302px',
            borderRadius: '8px',
            bgcolor: 'petersburg.0',
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              mb: '8px',
              p: '8px 12px',
              borderRadius: '12px',
              backgroundColor: 'transparent',
              transition: 'background 0.2s ease-in',
              '&:hover': { backgroundColor: 'petersburg.5' },
            }}
          >
            <Box mr="12px" width="48px" height="48px" sx={{ div: { borderRadius: '12px' } }}>
              <Avatar />
            </Box>

            <Typography fontSize="20px" fontWeight="500" component="span">
              {item.title}
            </Typography>
          </Stack>

          <Stack direction="row" flexWrap="wrap">
            {item.categories.map((k, i) => (
              <Box
                key={i}
                sx={{
                  p: '8px 12px',
                  flex: '0 0 50%',
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '24px',
                  borderRadius: '12px',
                  color: 'petersburg.100',
                  backgroundColor: 'transparent',
                  mb: i !== item.categories.length - 1 ? '12px' : 0,
                  transition: 'background 0.2s ease-in, color 0.2s ease-in',
                  '&:hover': { backgroundColor: 'brand.0', color: 'brand.80' },
                }}
              >
                {k}
              </Box>
            ))}

            <Link style={{ flex: '0 0 50%' }} href="/home">
              <Box
                sx={{
                  p: '8px 12px',
                  fontWeight: 500,
                  fontSize: '18px',
                  color: 'brand.80',
                  borderRadius: '12px',
                  backgroundColor: 'transparent',
                  transition: 'background 0.2s ease-in, color 0.2s ease-in',
                  '&:hover': { backgroundColor: 'brand.80', color: 'petersburg.0' },
                }}
              >
                Перейти
              </Box>
            </Link>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default Communities;
