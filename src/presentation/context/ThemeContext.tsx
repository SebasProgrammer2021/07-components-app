import React, { useEffect, useState } from 'react';
import { PropsWithChildren, createContext } from "react";
import { ThemeColors, darkColors, lightColors } from "../../config/theme/theme";
import { useColorScheme } from 'react-native';

type ThemeColor = 'light' | 'dark'

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  isDark: boolean;
  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: PropsWithChildren) => {

  //detecta el color o tema del telefono
  const colorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');
  console.log(colorScheme);

  useEffect(() => {
    if (colorScheme === 'dark') {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
  }, [colorScheme]);

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  }

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: currentTheme,
        isDark: currentTheme !== 'light',
        colors: currentTheme === 'light' ? lightColors : darkColors,
        setTheme: setTheme
      }}
    >
      {children}
    </ThemeContext.Provider >
  )
}
