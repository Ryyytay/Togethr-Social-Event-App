import { useTheme } from '../contexts/ThemeContext';
import { useMemo } from 'react';

export const useAppTheme = () => {
  const { mode, toggleTheme } = useTheme();
  
  const isDark = useMemo(() => mode === 'dark', [mode]);
  const isLight = useMemo(() => mode === 'light', [mode]);
  
  return {
    mode,
    toggleTheme,
    isDark,
    isLight,
  };
}; 