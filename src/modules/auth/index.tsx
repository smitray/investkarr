import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParameterList } from '@tp/stack';
import { OnBoarding, assets as OnBoardingAssets } from './onboarding';
import { LoginLanding, assets as LoginLandingAssets } from './login';
import { SignUpLanding, assets as SignUpLandingAssets } from './signup';

export const assets = [
  ...OnBoardingAssets,
  ...LoginLandingAssets,
  ...SignUpLandingAssets,
];

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
        <Stack.Screen
          name="LoginLanding"
          component={LoginLanding}
          options={{ headerShown: false }}
        />

        {/* signup flow */}
        <Stack.Screen
          name="SignupLanding"
          component={SignUpLanding}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
