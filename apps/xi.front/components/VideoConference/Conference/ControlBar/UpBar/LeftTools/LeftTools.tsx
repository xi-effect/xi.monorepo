import { Typography, Stack, useMediaQuery } from '@mui/material';
import Image from 'next/image';

const LeftTools = () => {
  const sm = useMediaQuery('(max-width:700px)');

  const md = useMediaQuery('(max-width:920px)');

  const removeName = useMediaQuery('(max-width:860px)');

  const logoSize = sm ? 32 : 40;

  return (
    <Stack width="100%" direction="row" alignItems="center" justifyContent="flex-start">
      <Image alt="alt" src="/RoundedLogo.svg" quality={100} width={logoSize} height={logoSize} />

      {!removeName && !sm && (
        <>
          <Typography
            sx={{
              fontWeight: 600,
              color: 'grayscale.0',
              ml: sm || md ? '8px' : '32px',
              fontSize: sm || md ? '20px' : '24px',
            }}
          >
            4Д — БЖ
          </Typography>

          <Typography
            sx={{
              ml: '8px',
              mt: '6px',
              fontWeight: 400,
              color: 'grayscale.40',
              fontSize: sm || md ? '14px' : '16px',
            }}
          >
            Кастырин И.И.
          </Typography>
        </>
      )}
    </Stack>
  );
};

export default LeftTools;
