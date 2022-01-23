import React from 'react';
import { Back, Logo, Step } from '@ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParameterList } from '@tp/stack';
import { OnBoarding, assets as OnBoardingAssets } from './onboarding';
import { LoginLanding, assets as LoginLandingAssets } from './login';
import {
  SignUpLanding,
  assets as SignUpLandingAssets,
  SignUpWithEmail,
  VerifyEmail,
  AddName,
} from './signup';
import { useTheme } from '@theme';

export const assets = [
  ...OnBoardingAssets,
  ...LoginLandingAssets,
  ...SignUpLandingAssets,
];

const Stack = createStackNavigator<RootStackParameterList>();

const Navigation = () => {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoarding"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.background,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerMode: 'screen',
          headerTitleAlign: 'center',
          headerTitle: () => <Logo />,
          headerLeft: () => <Back />,
          headerRight: () => <Step />,
        }}
      >
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
        <Stack.Screen name="SignupWihEmail" component={SignUpWithEmail} />
        <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
        <Stack.Screen name="AddName" component={AddName} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
