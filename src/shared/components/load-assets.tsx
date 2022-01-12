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
import { useAssets } from 'expo-asset';
import { Children } from '@tp/global';

type Properties = {
  children: Children;
  assets: number[];
};

const LoadAssets = ({ children, assets }: Properties) => {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    regular: DMSans_400Regular,
    medium: DMSans_500Medium,
    bold: DMSans_700Bold,
  });

  const [asset] = useAssets(assets);

  useEffect(() => {
    if (asset && fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [asset, fontsLoaded]);

  return fontsLoaded ? (
    <SafeAreaProvider>{children}</SafeAreaProvider>
  ) : (
    <AppLoading />
  );
};

export default LoadAssets;
