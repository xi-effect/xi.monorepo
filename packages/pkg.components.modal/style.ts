export const dialogStyle = {
  default: {
    borderRadius: '16px',
    alignItems: 'center',
    overflow: 'visible',
    bgcolor: 'petersburg.0',
    boxShadow: 'none',
    m: '40px 0',
  },

  large: {
    width: '600px',
    padding: '24px 0',
  },

  small: {
    width: '420px',
    padding: '32px 0 20px',
  },
};

export const titleStyle = {
  default: {
    borderBottom: '1px solid',
    borderColor: 'petersburg.10',
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as 'column',
  },

  large: {
    padding: '0 24px 24px',
  },

  small: {
    padding: '0 32px 8px',
    alignItems: 'center',
    marginBottom: '8px',
  },
};

export const contentStyle = {
  default: {
    display: 'flex',
    gap: '16px',
    flexDirection: 'column' as 'column',
  },

  large: {
    padding: '24px',
  },

  small: {
    padding: '0 32px',
  },
};

export const actionsStyle = {
  default: {
    borderTop: '1px solid',
    width: '100%',
  },

  large: {
    padding: '24px 24px 0',
  },

  small: {
    padding: '8px 32px 0',
    marginTop: '8px',
    justifyContent: 'center',
  },
};

export const iconStyle = {
  position: 'absolute',
  width: '40px',
  height: '40px',
  backgroundColor: 'petersburg.80',
  color: 'petersburg.0',
  right: '-56px',

  '&:hover': {
    backgroundColor: 'petersburg.90',
  },
};
