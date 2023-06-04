/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTheme } from '@mui/material';

// Тип
type Props = {
  width?: number;
  height?: number;
};

const XiLogo: React.FC<Props> = ({ width = 100, height = 24 }) => {
  const router = useRouter();
  const theme = useTheme();

  const isDark = theme.palette.mode === 'dark';

  return (
    <Image
      style={{ cursor: 'pointer' }}
      onClick={() => router.push({ pathname: '/' })}
      src={isDark ? '/xieffect-dark.svg' : '/xieffect-light.svg'}
      alt="xi.logo"
      width={width}
      height={height}
      quality={100}
    />
  );
};

export default XiLogo;
