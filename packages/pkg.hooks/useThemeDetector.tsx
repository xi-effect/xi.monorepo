/* eslint-disable react-hooks/rules-of-hooks */
// @ts-nocheck
import { useEffect, useState, useCallback } from 'react';
import { useCookie } from './useCookie';

export const useThemeDetector = (): [
  'dark' | 'light' | 'system',
  (newValue: 'dark' | 'light' | 'system') => void,
] => {
  const [value, updateCookie, deleteCookie] = useCookie('xi.user-theme');

  const getCurrentTheme = () => {
    const mql =
      typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const thm = mql.matches ? 'dark' : 'light';
    updateCookie(thm);
    return thm;
  };

  const [theme, setThemeV] = useState<'dark' | 'light' | 'system'>(value ?? getCurrentTheme());

  const mqListener = (e) => {
    const thm = e.matches ? 'dark' : 'light';
    updateCookie(thm);
    setThemeV(thm);
  };

  useEffect(() => {
    const darkThemeMq =
      typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addListener(mqListener);
    return () => darkThemeMq.removeListener(mqListener);
  }, []);

  const setTheme = useCallback((value: 'dark' | 'light' | 'system') => {
    if (value === 'system') deleteCookie('user-theme');
    updateCookie(value);
    setThemeV(value);
  }, []);

  return [theme, setTheme];
};
