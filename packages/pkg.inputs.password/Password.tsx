import { useState, MouseEvent, ChangeEvent } from 'react';
import { FormControl, FormHelperText, IconButton, InputAdornment, Typography } from '@mui/material';
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
                {showPassword ? <Eyeoff /> : <Eyeon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        label={
          <Typography
            sx={{
              fontSize: size === 's' ? '14px' : '16px',
              lineHeight: size === 's' ? '20px' : '22px',
            }}
          >
            Password
          </Typography>
        }
        onChange={handlePasswordChange}
        sx={{
          height: size === 'm' ? '48px' : '32px',
          mb: '8px',
          '.MuiInputBase-root': {
            height: '100%',
            fontSize: size === 's' ? '14px' : '16px',
            lineHeight: size === 's' ? '20px' : '22px',
          },
        }}
      />
      <StrengthBar progress={strengthValue} color={color} />
      <FormHelperText sx={{ color }}>
        {strengthValue < 80 ? error : 'Надежный пароль'}
      </FormHelperText>
    </FormControl>
  );
};
