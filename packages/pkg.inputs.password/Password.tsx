import { useState, MouseEvent, ChangeEvent, useMemo } from 'react';
import { FormControl, FormHelperText, IconButton, InputAdornment } from '@mui/material';
import { Input } from 'pkg.inputs.input';
import { Eyeoff, Eyeon } from 'pkg.icons';
import { StrengthBar } from './StrengthBar';
import { usePasswordStrength } from './PasswordStrength';
import { PasswordProps } from './types';

export const Password = ({ size = 'm', width = '250px' }: PasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const { password, updatePassword, strengthValue, error, color } = usePasswordStrength();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input: any = e.target as HTMLInputElement;
    updatePassword(input.value || null);
  };

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
    <FormControl variant="outlined" sx={{ width }}>
      <Input
        type={showPassword ? 'text' : 'password'}
        value={password ?? ''}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Eyeoff sx={{ ...IconSizes }} /> : <Eyeon sx={{ ...IconSizes }} />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        label="Пароль"
        InputLabelProps={{
          style: {
            color: 'petersburg.60',
            ...LabelSizes,
          },
        }}
        onChange={handlePasswordChange}
        sx={{
          height: size === 'm' ? '48px' : '32px',
          mb: '8px',
          '.MuiInputBase-root': {
            height: '100%',
            pr: size === 's' ? '12px' : '16px',
          },
          '.MuiOutlinedInput-notchedOutline': {
            border: '2px solid',
            borderColor: 'petersburg.30',
            borderRadius: size === 's' ? '6px' : '8px',
          },
        }}
      />
      <StrengthBar progress={strengthValue} color={color} />
      <FormHelperText sx={{ color, fontSize: '12px', lineHeight: '16px' }}>
        {strengthValue < 80 ? error : 'Надежный пароль'}
      </FormHelperText>
    </FormControl>
  );
};
