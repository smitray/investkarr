import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { StatusBar } from 'expo-status-bar';
import { LoadAssets } from '@components';
import { theme } from '@theme';
import { RootNavigation } from './src/modules';

const App = () => {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets>
        <RootNavigation />
        <StatusBar style="auto" />
      </LoadAssets>
    </ThemeProvider>
  );
};

export default App;
