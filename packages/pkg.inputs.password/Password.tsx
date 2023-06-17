import { useState, MouseEvent, ChangeEvent, useMemo } from 'react';
import { FormControl, FormHelperText, IconButton, InputAdornment } from '@mui/material';
import { Input } from 'pkg.inputs.input';
import { Eyeoff, Eyeon } from 'pkg.icons';
import { StrengthBar } from './StrengthBar';
import { usePasswordStrength } from './PasswordStrength';
import { PasswordProps } from './types';

export const Password = ({
  size = 'm',
  type = 'default',
  fieldType = 'login',
  width = '250px',
}: PasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);

  const { password, updatePassword, strengthValue, error, color, weakPassword } =
    usePasswordStrength();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input: any = e.target as HTMLInputElement;
    updatePassword(input.value || null);
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
    if (fieldType === 'login') {
      if (type === 'error') return 'moscow.80';
      if (type === 'warning') return 'kungur.80';
      if (type === 'disabled') return 'petersburg.10';
    }

    if (focus) return 'petersburg.80';
    if (hover) return 'petersburg.50';
    return 'petersburg.30';
  }, [hover, focus, color]);

  const IconSizes = useMemo(() => {
    if (size === 's') {
      return { fontSize: '16px' };
    }

    return { fontSize: '24px' };
  }, [size]);

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
    <FormControl sx={{ width }}>
      <Input
        type={showPassword ? 'text' : 'password'}
        value={password ?? ''}
        variant={type === 'disabled' ? 'filled' : 'outlined'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {type !== 'disabled' && (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <Eyeoff sx={{ ...IconSizes }} />
                  ) : (
                    <Eyeon sx={{ ...IconSizes }} />
                  )}
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
        label="Пароль"
        InputLabelProps={{
          style: {
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
            borderColor: inputColor,
            transition: '0.3s',
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
        }}
      />
      {fieldType === 'setup' && (
        <>
          <StrengthBar progress={strengthValue} color={color} />
          <FormHelperText sx={{ color, fontSize: '12px', lineHeight: '16px' }}>
            {strengthValue < 80 || weakPassword ? error : 'Надежный пароль'}
            {weakPassword}
          </FormHelperText>
        </>
      )}
    </FormControl>
  );
};
