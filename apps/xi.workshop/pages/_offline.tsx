import { Error } from 'pkg.pages.error';
import Image from 'next/image';
import { useMediaQuery, Theme } from '@mui/material';

function OfflinePage() {
  const mobile1336: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down(1336));

  return (
    <Error
      code={404}
      logo={
        <Image
          alt="xieffect alpha logo"
          src="/assets/landing/logo-alpha.svg"
          width={mobile1336 ? 87 : 101}
          height={mobile1336 ? 62 : 76}
        />
      }
    />
  );
}

export default OfflinePage;
