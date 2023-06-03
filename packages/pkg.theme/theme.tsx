import 'pkg.config.muidts';

import { createTheme } from '@mui/material/styles';

export const getScheme = (mode: 'light' | 'dark') =>
  createTheme({
    components: {
      // Name of the component
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            marginTop: '4px',
            marginLeft: 0,
            fontSize: '14px',
            lineHeight: '16px',
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            boxShadow: 'none',

            '&:hover': {
              boxShadow: 'none',
            },
          },
        },
        variants: [
          {
            props: { variant: 'filled' },
            style: {
              height: '56px',
              width: '356px',
              borderRadius: '8px',
              backgroundColor: '#FFFFFF',
              padding: '19px 20px 17px 20px',
              '&:hover': {
                backgroundColor: '#FFFFFF',
              },
            },
          },
        ],
      },
      MuiBackdrop: {
        styleOverrides: {
          root: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            boxShadow: 'none',

            '&:hover': {
              boxShadow: 'none',
            },
          },
        },
        variants: [
          {
            props: { variant: 'contained' },
            style: {},
          },
          {
            props: { variant: 'outlined' },
            style: {
              textTransform: 'capitalize',
              height: '64px',
              width: '136px',
              borderRadius: '8px',
              color: '#445AFF',
              border: '1px solid #445AFF',
              fontWeight: 500,
              fontSize: 18,
              lineHeight: '22px',
              backgroundColor: 'transparent',
            },
          },
        ],
      },
    },
    typography: {
      htmlFontSize: 10,
      fontFamily: 'Inter, Arial',
      h1: {
        fontSize: '56px',
        lineHeight: '64px',
        fontWeight: 500,
      },
      h2: {
        fontSize: '48px',
        lineHeight: '56px',
        fontWeight: 500,
      },
      h3: {
        fontSize: '40px',
        lineHeight: '48px',
        fontWeight: 500,
      },
      h4: {
        fontSize: '36px',
        lineHeight: '44px',
        fontWeight: 500,
      },
      h5: {
        fontSize: '32px',
        lineHeight: '40px',
        fontWeight: 500,
      },
      h6: {
        fontSize: '28px',
        lineHeight: '36px',
        fontWeight: 500,
      },
      xl: {
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: 500,
      },
      l: {
        fontSize: '20px',
        lineHeight: '28px',
        fontWeight: 500,
      },
      m: {
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: 500,
      },
      s: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 500,
      },
      xs: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 500,
      },
      xxs: {
        fontSize: '10px',
        lineHeight: '14px',
        fontWeight: 500,
      },
    },
    breakpoints: {
      keys: ['xs', 'sm', 'md', 'lg', 'xl'],
      values: {
        xs: 0,
        sm: 350,
        md: 700,
        lg: 1440,
        xl: 1920,
      },
    },
    palette: {
      ...(mode === 'light'
        ? {
            mode: 'light',
            primary: {
              dark: '#445AFF',
              main: '#697BFF',
              light: '#B4BDFF',
              pale: '#ECEFFF',
            },
            // Старая палитра
            secondary: {
              dark: '#9769FF',
              main: '#BD9FFF',
              light: '#EEE7FF',
              pale: '#F5F0FF',
            },
            grayscale: {
              100: '#101010',
              90: '#282828',
              80: '#404040',
              40: '#9F9F9F',
              10: '#E8E8E8',
              5: '#F7F7F7',
              0: '#FFFFFF',
            },
            success: {
              dark: '#39EF84',
              main: '#61F29D',
              light: '#B0F9CE',
              pale: '#EBFDF3',
            },
            error: {
              dark: '#F42D2D',
              main: '#F65757',
              light: '#FBABAB',
              pale: '#FEEAEA',
            },
            warning: {
              dark: '#F67A33',
              main: '#F8955C',
              light: '#FBCAAD',
              pale: '#FEF2EB',
            },

            // Новая палитра
            petersburg: {
              100: '#101010',
              90: '#282828',
              80: '#404040',
              70: '#585858',
              60: '#707070',
              50: '#888888',
              40: '#9F9F9F',
              30: '#B8B8B8',
              20: '#CFCFCF',
              10: '#E8E8E8',
              5: '#F7F7F7',
              0: '#FFFFFF',
            },
            brand: {
              100: '#3546BD',
              80: '#445AFF',
              60: '#697BFF',
              40: '#8F9CFF',
              20: '#B4BDFF',
              0: '#EDEFFF',
            },
            moscow: {
              100: '#BE0D0C',
              80: '#DD0D0C',
              60: '#E43D3D',
              40: '#EB6E6D',
              20: '#F19E9E',
              0: '#FCE9E9',
            },
            ekaterinburg: {
              100: '#029127',
              80: '#00A82C',
              60: '#33B956',
              40: '#66CB80',
              20: '#99DCAB',
              0: '#E4F6E9',
            },
            kungur: {
              100: '#CB4C0E',
              80: '#EC570E',
              60: '#F0793E',
              40: '#F49A6E',
              20: '#F7BC9E',
              0: '#FCE8DE',
            },
            arkhangelsk: {
              100: '#FFCD37',
              60: '#FFE187',
              40: '#FFEBAF',
              20: '#FFF5D7',
            },
            vladivostok: {
              100: '#8208E1',
              60: '#B46BED',
              40: '#CD9CF3',
              20: '#EFDFFB',
            },
            volgograd: {
              100: '#DD09C8',
              60: '#EB6BDE',
              40: '#F19DE9',
              20: '#FBE0F8',
            },
            saratov: {
              100: '#09AEE8',
              60: '#6BCEF1',
              40: '#9CDEF6',
              20: '#DFF4FC',
            },
          }
        : {
            mode: 'dark',
            primary: {
              dark: '#445AFF',
              main: '#697BFF',
              light: '#B4BDFF',
              pale: '#ECEFFF',
            },
            // Старая палитра
            secondary: {
              dark: '#9769FF',
              main: '#BD9FFF',
              light: '#EEE7FF',
              pale: '#F5F0FF',
            },
            grayscale: {
              100: '#101010',
              90: '#282828',
              80: '#404040',
              40: '#9F9F9F',
              10: '#E8E8E8',
              5: '#F7F7F7',
              0: '#FFFFFF',
            },
            success: {
              dark: '#39EF84',
              main: '#61F29D',
              light: '#B0F9CE',
              pale: '#EBFDF3',
            },
            error: {
              dark: '#F42D2D',
              main: '#F65757',
              light: '#FBABAB',
              pale: '#FEEAEA',
            },
            warning: {
              dark: '#F67A33',
              main: '#F8955C',
              light: '#FBCAAD',
              pale: '#FEF2EB',
            },

            // Новая палитра
            petersburg: {
              100: '#E6E6E6',
              90: '#D1D1D1',
              80: '#BCBCBC',
              70: '#A7A7A7',
              60: '#929292',
              50: '#7E7E7E',
              40: '#696969',
              30: '#545454',
              20: '#3F3F3F',
              10: '#2A2A2A',
              5: '#1F1F1F',
              0: '#151515',
            },
            brand: {
              100: '#B1BAFB',
              80: '#8B98F9',
              60: '#737ECB',
              40: '#5B639D',
              20: '#393D5A',
              0: '#21222C',
            },
            moscow: {
              100: '#E15251',
              80: '#BD4C4C',
              60: '#9B4141',
              40: '#793636',
              20: '#482626',
              0: '#261B1B',
            },
            ekaterinburg: {
              100: '#51E177',
              80: '#4CBD69',
              60: '#419B58',
              40: '#367947',
              20: '#26482E',
              0: '#1B261D',
            },
            kungur: {
              100: '#EA7D47',
              80: '#C66E43',
              60: '#A25C3A',
              40: '#7F4A30',
              20: '#462515',
              0: '#271E1A',
            },
            arkhangelsk: {
              100: '#C2940A',
              60: '#7D610F',
              40: '#5A4811',
              20: '#262214',
            },
            vladivostok: {
              100: '#8933CC',
              60: '#5A2782',
              40: '#44215F',
              20: '#211827',
            },
            volgograd: {
              100: '#CC33BD',
              60: '#822779',
              40: '#5F2158',
              20: '#271826',
            },
            saratov: {
              100: '#33A4CC',
              60: '#276B82',
              40: '#214F5F',
              20: '#182327',
            },
          }),
    },
  });
