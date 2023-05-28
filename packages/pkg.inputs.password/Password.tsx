import { useState, MouseEvent, ChangeEvent } from 'react';
import { FormControl, FormHelperText, IconButton, InputAdornment } from '@mui/material';
import { Input } from 'pkg.inputs.input';
import { Eyeoff, Eyeon } from 'pkg.icons';
import { StrengthProgress } from './StrengthProgress';
import { usePasswordStrength } from './PasswordStrength';

export const Password = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { password, updatePassword, strengthValue, error, color } = usePasswordStrength();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input: any = e.target as HTMLInputElement;
    updatePassword(input.value);
  };

  return (
    <FormControl variant="outlined">
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
        label="Password"
        onChange={handlePasswordChange}
      />
      {!!strengthValue && (
        <>
          <StrengthProgress progress={strengthValue} color={color} />
          <FormHelperText sx={{ color }}>
            {strengthValue < 80 ? error : 'Надежный пароль'}
          </FormHelperText>
        </>
      )}
    </FormControl>
  );
};
