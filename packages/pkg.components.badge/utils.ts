export const getStyles = (size?: string) => {
  if (size === 'small') {
    return {
      stack: {
        sx: {
          gap: '6px',
          height: '20px',
          borderRadius: '4px',
          padding: '2px 6px',
        },
      },
      icon: {
        sx: {
          width: '12px',
          height: '12px',
        },
      },
      typography: {
        variant: 'xs' as 'xs',
      },
    };
  }

  return {
    stack: {
      sx: {
        gap: '8px',
        height: '28px',
        borderRadius: '6px',
        padding: '4px 8px',
      },
    },
    icon: {
      sx: {
        width: '16px',
        height: '16px',
      },
    },
    typography: {
      variant: 's' as 's',
    },
  };
};
