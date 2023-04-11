import React, { ReactNode } from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    xl: React.CSSProperties;
    l: React.CSSProperties;
    m: React.CSSProperties;
    s: React.CSSProperties;
    xs: React.CSSProperties;
    xxs: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    xl?: React.CSSProperties;
    l?: React.CSSProperties;
    m?: React.CSSProperties;
    s?: React.CSSProperties;
    xs?: React.CSSProperties;
    xxs?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    xl: true;
    l: true;
    m: true;
    s: true;
    xs: true;
    xxs: true;
  }
}

declare module 'notistack' {
  interface VariantOverrides {
    saveConfirm: {
      reset?: any;
    };
    notification: {
      bgcolor?: 'moscow.100' | 'ekaterinburg.100' | 'kungur.100' | 'petersburg.100';
      title?: string;
      subtitle?: string;
      icon?: ReactNode;
    };
  }
}
