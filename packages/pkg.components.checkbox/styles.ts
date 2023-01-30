/* names created according to: component name + prop + style (S) */
/* styles according to types */
export const containerTypes = {
  default: { bgcolor: 'grayscale.5' },
  warning: {
    bgcolor: 'grayscale.5',
  },
  error: { bgcolor: 'grayscale.5' },
  disabled: { bgcolor: 'grayscale.10' },
};
export const checkboxTypes = {
  default: { color: 'grayscale.40' },
  warning: {
    color: 'warning.dark',
  },
  error: { color: 'error.dark' },
  disabled: { color: 'grayscale.10' },
};
export const checkedCheckboxTypes = {
  default: { bgcolor: 'primary.dark' },
  warning: {
    bgcolor: 'warning.dark',
  },
  error: { bgcolor: 'error.dark' },
  disabled: { bgcolor: 'grayscale.10' },
};
export const checkedIconTypes = {
  default: { color: 'grayscale.0' },
  warning: {
    color: 'grayscale.0',
  },
  error: { color: 'grayscale.0' },
  disabled: { color: 'grayscale.40' },
};
export const defaultIconTypes = {
  default: { borderColor: 'primary.dark', bgcolor: 'grayscale.0' },
  warning: {
    borderColor: 'warning.dark',
    bgcolor: 'grayscale.0',
  },
  error: { borderColor: 'error.dark', bgcolor: 'grayscale.0' },
  disabled: { borderColor: 'grayscale.10', bgcolor: 'grayscale.10', color: 'grayscale.10' },
};

/* styles according to sizes */
export const containerSizes = {
  s: {
    gap: '4px',
    borderRadius: '6px',
  },
  m: {
    gap: '6px',
    borderRadius: '8px',
  },
  l: {
    gap: '8px',
    borderRadius: '8px',
  },
};
export const checboxSizes = {
  s: {
    borderRadius: '4px',
    width: '16px',
    height: '16px',
  },
  m: {
    borderRadius: '6px',
    width: '20px',
    height: '20px',
  },
  l: {
    borderRadius: '6px',
    width: '24px',
    height: '24px',
  },
};
export const checkedIconSizes = {
  s: {
    fontSize: '12px',
  },
  m: {
    fontSize: '16px',
  },
  l: {
    fontSize: '20px',
  },
};
export const labelSizes = {
  s: {
    fontSize: '12px',
  },
  m: {
    fontSize: '14px',
  },
  l: {
    fontSize: '16px',
  },
};
