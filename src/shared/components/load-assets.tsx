import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from '@expo-google-fonts/dm-sans';
import { Children } from '@tp/global';

type Properties = {
  children: Children;
  assets?: Array<string>;
};

/**
 * TODO: Assets will add if needed
 */

// const [assets] = useAssets(Icons);

// useEffect(() => {
//   if (assets && fontsLoaded) SplashScreen.hideAsync();
// }, [assets, fontsLoaded]);

// if (!assets) return <AppLoading />;

const LoadAssets = ({ children }: Properties) => {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    regular: DMSans_400Regular,
    medium: DMSans_500Medium,
    bold: DMSans_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return fontsLoaded ? (
    <SafeAreaProvider>{children}</SafeAreaProvider>
  ) : (
    <AppLoading />
  );
};

export default LoadAssets;
