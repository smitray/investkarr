import React from 'react';
import { Back, Logo, Step } from '@ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParameterList } from '@tp/stack';
import { OnBoarding, assets as OnBoardingAssets } from './onboarding';
import {
  LoginLanding,
  assets as LoginLandingAssets,
  LoginWithEmail,
} from './login';
import {
  SignUpLanding,
  assets as SignUpLandingAssets,
  AddName,
  SetPassword,
  AddPAN,
  AddDOB,
  SignUpSuccess,
} from './signup';
import { useTheme } from '@theme';
import Dummy from './shared/dummy';
import { OTPVerify, Phone, Pin, WithEmail } from './shared';

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
        <Stack.Screen name="AddName" component={AddName} />
        <Stack.Screen name="SetPassword" component={SetPassword} />
        <Stack.Screen name="AddPAN" component={AddPAN} />
        <Stack.Screen name="AddDOB" component={AddDOB} />
        <Stack.Screen
          name="SignupSuccess"
          component={SignUpSuccess}
          options={{
            headerRight: () => false,
            headerLeft: () => false,
          }}
        />

        {/* login flow */}
        <Stack.Screen
          name="LoginWithEmail"
          component={LoginWithEmail}
          options={{
            headerRight: () => false,
          }}
        />

        {/* shared screen */}
        <Stack.Screen
          name="Pin"
          component={Pin}
          options={{
            headerRight: () => false,
          }}
        />
        <Stack.Screen
          name="OTPVerify"
          component={OTPVerify}
          options={({ route }) => ({
            headerRight: () =>
              route.params.flow === 'login' ? false : <Step />,
          })}
        />
        <Stack.Screen
          name="WihEmail"
          component={WithEmail}
          options={({ route }) => ({
            headerRight: () =>
              route.params.flow === 'login' ? false : <Step />,
          })}
        />
        <Stack.Screen
          name="Phone"
          component={Phone}
          options={({ route }) => ({
            headerRight: () =>
              route.params.flow === 'login' ? false : <Step />,
          })}
        />

        {/* dummy screen */}
        <Stack.Screen
          name="Dummy"
          component={Dummy}
          options={{
            headerRight: () => false,
            headerLeft: () => false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
