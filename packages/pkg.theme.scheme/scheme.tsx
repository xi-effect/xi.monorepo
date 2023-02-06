export const getScheme = (mode: 'light' | 'dark') => ({
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
            dark: '#445AFF', // blue.100
            main: '#697BFF', // blue.80
            light: '#B4BDFF', // blue.40
            pale: '#ECEFFF', // blue.10
          },
          secondary: {
            dark: '#9769FF', // purple.100
            main: '#BD9FFF', // blue.80
            light: '#EEE7FF', // blue.40
            pale: '#F5F0FF', // blue.10
          },
          grayscale: {
            100: '#000000',
            90: '#202020',
            80: '#333333',
            40: '#999999',
            10: '#E6E6E6',
            5: '#F5F5F5',
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
        }
      : {
          mode: 'dark',
          primary: {
            dark: '#445AFF',
            main: '#697BFF',
            light: '#B4BDFF',
            pale: '#ECEFFF',
          },
          secondary: {
            dark: '#9769FF',
            main: '#BD9FFF',
            light: '#EEE7FF',
            pale: '#F5F0FF',
          },
          grayscale: {
            100: '#000000',
            90: '#202020',
            80: '#333333',
            40: '#999999',
            10: '#E6E6E6',
            5: '#F5F5F5',
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
        }),
  },
});
