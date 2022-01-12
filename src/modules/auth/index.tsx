import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParameterList } from '@tp/stack';
import { OnBoarding, assets as OnBoardingAssets } from './onboarding';
import { LoginLanding } from './login';

export const assets = [...OnBoardingAssets];

const Stack = createStackNavigator<RootStackParameterList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoarding">
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />

        {/* login flow */}
        <Stack.Screen name="Landing" component={LoginLanding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
