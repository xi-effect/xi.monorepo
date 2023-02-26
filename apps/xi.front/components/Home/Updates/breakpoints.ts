export type ScreenSizesT = 'min1440px' | 'min700px' | 'min375px';
type StylesT = { [key in ScreenSizesT]: any };

export const titleSizes: StylesT = {
  min1440px: {
    fontSize: '36px',
    lineHeight: '44px',
  },
  min700px: {
    fontSize: '28px',
    lineHeight: '36px',
  },
  min375px: {
    fontSize: '24px',
    lineHeight: '32px',
  },
};

export const descriptionSizes: StylesT = {
  min1440px: {
    fontSize: '18px',
    lineHeight: '24px',
  },
  min700px: {
    fontSize: '16px',
    lineHeight: '22px',
  },
  min375px: {
    fontSize: '14px',
    lineHeight: '20px',
  },
};

export const infoSizes: StylesT = {
  min1440px: {
    fontSize: '16px',
    lineHeight: '22px',
  },
  min700px: {
    fontSize: '14px',
    lineHeight: '20px',
  },
  min375px: {
    fontSize: '12px',
    lineHeight: '16px',
  },
};
