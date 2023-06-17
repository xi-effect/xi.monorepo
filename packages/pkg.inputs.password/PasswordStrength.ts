import { useEffect, useMemo, useState } from 'react';

const RexExpValidation = (password: string, validation: string) =>
  new RegExp(validation).test(password);

const MIN_PASSWORD_LENGTH = 6;
const VALIDATIONS = (password: string) => [
  {
    passed: RexExpValidation(password, '\\W'),
    helper: 'Пароль должен содержать хотя бы один спуциальный символ',
  },
  {
    passed: RexExpValidation(password, '[0-9]'),
    helper: 'Пароль должен содержать хотя бы одну цифру',
  },
  {
    passed: RexExpValidation(password, '[A-Z]'),
    helper: 'Пароль должен содержать хотя бы одну прописную букву',
  },
  {
    passed: RexExpValidation(password, '[a-z]'),
    helper: 'Пароль должен содержать хотя бы одну строчную букву',
  },
  {
    passed: password.length >= MIN_PASSWORD_LENGTH,
    helper: 'Слишком короткий пароль, добавьте символов',
  },
];

export const usePasswordStrength = () => {
  const [strengthValue, setStrengthValue] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState<null | string>(null);

  const color = useMemo(() => {
    if (strengthValue === 0) return 'petersburg.30';
    if (strengthValue < 20) return 'moscow.100';
    if (strengthValue >= 20 && strengthValue < 80) return 'kungur.100';
    return 'ekaterinburg.100';
  }, [strengthValue]);

  const checkStrength = () => {
    if (password) {
      const validations = VALIDATIONS(password);

      const passedValidation = validations.filter((validation) => {
        if (!validation.passed) setError(validation.helper);
        return validation.passed;
      });

      const strengthCoefficient = passedValidation.length / validations.length;
      const strength = Math.round(strengthCoefficient * 100);

      setStrengthValue(strength);
    } else {
      setStrengthValue(0);
      setError(null);
    }
  };

  const updatePassword = (value: string) => setPassword(value);

  useEffect(() => {
    checkStrength();
  }, [password]);

  return { password, updatePassword, strengthValue, error, color };
};
