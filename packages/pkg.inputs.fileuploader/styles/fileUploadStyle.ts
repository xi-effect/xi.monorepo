import { SizeType } from '../types';

export const containerStyle = {
  default: {
    width: '100%',
    alignItems: 'center',
    borderRadius: '8px',
    border: '1px dashed',
    borderColor: 'grayscale.40',
    backgroundColor: 'grayscale.0',
    transition: 'all 0.1s ease-in',
    padding: '0 8px',
    maxWidth: '500px',
  },

  large: {
    height: '92px',
    padding: '24px',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '8px',
    borderColor: 'primary.main',
    backgroundColor: 'primary.pale',
  },

  medium: {
    height: '48px',
    padding: '0 12px',
    flexDirection: 'row',
  },

  small: {
    height: '32px',
    padding: '0 8px',
    borderRadius: '6px',
    flexDirection: 'row',
  },
};

const actionContainerStyle = {
  dragOver: {
    boxShadow: '0px 0px 0px 4px #B4BDFF',
    border: '4px solid',
    borderColor: 'primary.dark',
  },

  hover: {
    large: { borderColor: 'primary.dark' },
    medium: { borderColor: 'transparent', backgroundColor: 'grayscale.5' },
    small: { borderColor: 'transparent', backgroundColor: 'grayscale.5' },
  },

  focus: {
    border: '2px solid',
    borderColor: 'grayscale.80',
  },

  warning: {
    border: '2px solid',
    borderColor: 'warning.dark',
  },

  error: {
    border: '2px solid',
    borderColor: 'error.main',
  },

  disabled: {
    borderColor: 'grayscale.40',
    backgroundColor: 'grayscale.10',
    pointerEvents: 'none',
  },
};

export const getActionContainerStyle = (
  size: SizeType,
  isDragOver: boolean,
  isHover: boolean,
  isFocus: boolean,
  isError: boolean,
  isWarning: boolean,
  isDisabled: boolean,
) => {
  if (isDisabled) return actionContainerStyle.disabled;

  if (isDragOver) return actionContainerStyle.dragOver;

  if (isHover) return actionContainerStyle.hover[size];

  if (isFocus) return actionContainerStyle.focus;

  if (isError) return actionContainerStyle.error;

  if (isWarning) return actionContainerStyle.warning;

  return {};
};

export const textVariants = {
  large: 'xs' as 'xs',
  medium: 'm' as 'm',
  small: 's' as 's',
};

export const buttonTextVariants = {
  large: 's' as 's',
  medium: 'm' as 'm',
  small: 's' as 's',
};

export const getActionTextStyle = (
  size: SizeType,
  isDragOver: boolean,
  isHover: boolean,
  isFocus: boolean,
  isError: boolean,
  isWarning: boolean,
  isDisabled: boolean,
) => {
  if (isDisabled) return textColorStyle.disabled;

  if (isDragOver || isHover || isError || isWarning || isFocus) {
    return textColorStyle.active[size];
  }

  return textColorStyle.default[size];
};

const textColorStyle = {
  default: {
    large: { button: { color: 'primary.main' }, description: { color: 'primary.light' } },
    medium: { button: { color: 'grayscale.90' }, description: { color: 'grayscale.40' } },
    small: { button: { color: 'grayscale.90' }, description: { color: 'grayscale.40' } },
  },

  active: {
    large: { button: { color: 'primary.dark' }, description: { color: 'primary.main' } },
    medium: { description: { color: 'grayscale.80' }, button: { color: 'grayscale.100' } },
    small: { description: { color: 'grayscale.80' }, button: { color: 'grayscale.100' } },
  },

  disabled: { button: { color: 'grayscale.40' }, description: { color: 'grayscale.40' } },
};
