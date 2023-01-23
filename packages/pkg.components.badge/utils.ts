export const getStyles = (size?: string) => {
  if (size === 'small') {
    return {
      stack: {
        gap: '6px',
        height: '20px',
        borderRadius: '4px',
        padding: '2px 6px',
      },
      icon: {
        width: '12px',
        height: '12px',
      },
      typography: {
        varian: 'xs' as 'xs',
      },
    };
  }

  return {
    stack: {
      gap: '8px',
      height: '28px',
      borderRadius: '6px',
      padding: '4px 8px',
    },
    icon: {
      width: '16px',
      height: '16px',
    },
    typography: {
      varian: 's' as 's',
    },
  };
};
