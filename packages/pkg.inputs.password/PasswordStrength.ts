import { useEffect, useState } from 'react';

const RexExpValidation = (password: string, validation: string) =>
  new RegExp(validation).test(password);

const MIN_PASSWORD_LENGTH = 6;
const VALIDATIONS = (password: string) => [
  RexExpValidation(password, '\\W'),
  RexExpValidation(password, '[0-9]'),
  RexExpValidation(password, '[a-z]'),
  RexExpValidation(password, '[A-Z]'),
  password.length >= MIN_PASSWORD_LENGTH,
];

export const usePasswordStrength = () => {
  const [strengthValue, setStrengthValue] = useState<number>(0);
  // const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState<null | string>(null);

  const checkStrength = () => {
    if (password) {
      const validations = VALIDATIONS(password);

      const passedValidation = validations.filter((validation, index) => {
        const validationResult = validation;
        console.log('validationResult', index, validationResult);
        return validationResult;
      });

      const strengthCoefficient = passedValidation.length / validations.length;
      const strength = Math.round(strengthCoefficient * 100);

      setStrengthValue(strength);
    }
  };

  const updatePassword = (value: string) => setPassword(value);

  useEffect(() => {
    console.log('updatePassword', password);
    checkStrength();
  }, [password]);

  return { password, updatePassword, strengthValue };
};
