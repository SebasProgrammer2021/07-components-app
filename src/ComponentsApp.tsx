import React, { PropsWithChildren, useContext } from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import StackNavigator from './presentation/navigator/StackNavigator';
import { ThemeContext, ThemeProvider } from './presentation/context/ThemeContext';

const AppNavigation = ({ children }: PropsWithChildren) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>{children}</NavigationContainer>
  )
}

const AppTheme = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <AppNavigation>
        {children}
      </AppNavigation>
    </ThemeProvider>
  )
}

const ComponentsApp = () => {
  return (
    <AppTheme>
      <StackNavigator />
    </AppTheme>
  );
}


export default ComponentsApp;
