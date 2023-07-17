import React from 'react';
import { FormHelperText } from '@mui/material';
import { WeakPasswordTooltip } from './WeakPasswordTooltip';
import { StrengthBar } from './StrengthBar';

export type PasswordHelperProps = {
  strengthValue: number;
  color: string;
  weakPassword: boolean;
  error: string | null;
};

export const PasswordHelper = ({
  strengthValue,
  color,
  weakPassword,
  error,
}: PasswordHelperProps) => (
  <>
    <StrengthBar progress={strengthValue} color={color} />
    <FormHelperText
      sx={{
        color,
        fontSize: '12px',
        lineHeight: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      {!strengthValue && 'Минимум 6 символов'}
      {strengthValue < 80 || weakPassword ? error : 'Надежный пароль'}
      {weakPassword && <WeakPasswordTooltip />}
    </FormHelperText>
  </>
);
