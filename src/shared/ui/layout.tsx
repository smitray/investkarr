import React from 'react';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import { Children } from '@tp/global';
import Box from './box';
import { SCREEN_HEIGHT } from '@utils';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Layout = ({ children }: { children: Children }) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <Box
      flex={1}
      backgroundColor="background"
      height={
        SCREEN_HEIGHT +
        (Platform.OS === 'android' ? Constants.statusBarHeight : 0)
      }
    >
      {children}
      <Box height={bottom} />
    </Box>
  );
};

export default Layout;
