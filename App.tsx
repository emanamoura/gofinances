import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components';
import  {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import theme from './src/global/styles/theme';

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';
import { StatusBar } from 'react-native';

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });
  if(!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle={"light-content"}/>
        <AppRoutes/>
      </NavigationContainer>
    </ThemeProvider>
    
  );
}
