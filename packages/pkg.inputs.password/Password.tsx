import { useState, ChangeEvent, useMemo } from 'react';
import { FormControl } from '@mui/material';
import { Input } from 'pkg.inputs.input';
import { Adornment } from './components/Adornment';
import { PasswordHelper } from './components/PasswordHelper';
import { usePasswordStrength } from './PasswordStrength';
import { ErrorWindow } from './components/ErrorWindow';
import { PasswordProps } from './types';

export const Password = ({
  size = 'm',
  type = 'default',
  fieldType = 'sign_in',
  width = '250px',
  errorWindow,
  errorWindowContent,
  sx,
  ...props
}: PasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);

  const { password, updatePassword, strengthValue, error, color, weakPassword } =
    usePasswordStrength();

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input: any = e.target as HTMLInputElement;
    updatePassword(input.value || null);
  };

  const toggleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const onMouseOn = () => {
    setHover(true);
  };
  const onMouseOut = () => {
    setHover(false);
  };

  const onFocus = () => {
    setFocus(true);
  };
  const outFocus = () => {
    setFocus(false);
  };

  const inputColor = useMemo(() => {
    if (fieldType === 'sign_in') {
      if (type === 'error') return 'moscow.80';
      if (type === 'warning') return 'kungur.80';
      if (type === 'disabled') return 'petersburg.30';
    }

    if (focus) return 'petersburg.80';
    if (hover) return 'petersburg.50';
    return 'petersburg.60';
  }, [hover, focus, color]);

  const LabelSizes = useMemo(() => {
    if (size === 's') {
      return {
        fontSize: '14px',
        lineHeight: '20px',
        left: '-5px',
        top: '-11px',
      };
    }

    return {
      fontSize: '16px',
      lineHeight: '22px',
      left: '-2px',
      top: '-4px',
    };
  }, [size]);

  return (
    <FormControl sx={{ width, position: 'relative' }}>
      <Input
        type={showPassword ? 'text' : 'password'}
        value={password ?? ''}
        variant={type === 'disabled' ? 'filled' : 'outlined'}
        InputProps={{
          endAdornment: (
            <Adornment
              size={size}
              toggleShowPassword={toggleShowPassword}
              type={type}
              showPassword={showPassword}
            />
          ),
        }}
        label="Пароль"
        InputLabelProps={{
          sx: {
            color: type === 'disabled' ? 'petersburg.30' : inputColor,
            ...LabelSizes,
          },
        }}
        onChange={handlePasswordChange}
        onMouseEnter={onMouseOn}
        onMouseLeave={onMouseOut}
        onFocus={onFocus}
        onBlur={outFocus}
        disabled={type === 'disabled'}
        sx={{
          height: size === 'm' ? '48px' : '32px',
          mb: '8px',
          outline: 'none',
          '.MuiInputBase-root': {
            height: '100%',
            pr: size === 's' ? '10px' : '14px',
            border: '2px solid',
            borderRadius: size === 's' ? '6px' : '8px',
            borderColor: type === 'disabled' ? 'petersburg.10' : inputColor,
            transition: '0.3s',
            bgcolor: type === 'disabled' ? 'petersburg.10' : 'unset',
            '& .MuiSvgIcon-root': {
              color: inputColor,
            },
            '&::before': {
              display: 'none',
            },
          },
          '& .MuiOutlinedInput-input': {
            pl: size === 's' ? '8px' : '12px',
          },
          '.MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '.MuiFormLabel-root': {
            color: inputColor,
            '&.MuiFormLabel-filled': {
              display: 'none',
            },
            '&.Mui-focused': {
              display: 'none',
            },
          },
          ...sx,
        }}
        {...props}
      />
      {fieldType === 'sign_up' && (
        <PasswordHelper
          color={color}
          strengthValue={strengthValue}
          weakPassword={weakPassword}
          error={error}
        />
      )}

      <ErrorWindow open={!!errorWindow}>{errorWindowContent}</ErrorWindow>
    </FormControl>
  );
};
