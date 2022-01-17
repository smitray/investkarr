import React from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from '@shopify/restyle';
import { StatusBar } from 'expo-status-bar';
import { LoadAssets } from '@components';
import { theme } from '@theme';
import { RootNavigation, AuthAssets } from '@modules';

const assets = [...AuthAssets];

const App = () => {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ assets }}>
        <RootNavigation />
        <StatusBar style="auto" />
      </LoadAssets>
    </ThemeProvider>
  );
};

export default App;
