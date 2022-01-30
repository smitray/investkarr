import { TextInput } from '@ui';
import React, { useState } from 'react';
import { AuthLayout, usePasswordValidation } from '@components';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParameterList } from '@tp/stack';
import { Keyboard } from 'react-native';
import shallow from 'zustand/shallow';
import { useSignupStore } from '@store';

const Password = ({
  navigation,
  route,
}: StackScreenProps<RootStackParameterList, 'Password'>) => {
  const [password, setPassword] = useState('');
  const { flow } = route.params;
  const [email, setCount] = useSignupStore(
    (state) => [state.email, state.setCount],
    shallow,
  );

  const { minEight, oneSpChar, oneUpperCase, oneDigit, disabled } =
    usePasswordValidation(password);

  const handleSubmit = () => {
    Keyboard.dismiss();
    if (flow === 'signup') {
      setCount(4);
      navigation.navigate('Phone', {
        flow,
      });
    } else {
      navigation.navigate('Dummy');
    }
  };
  return (
    <AuthLayout
      title={flow === 'signup' ? 'Set a password' : 'Reset password'}
      description="To access your account linked to"
      subDescription={email}
      label="Confirm"
      onPress={handleSubmit}
      disabled={disabled}
      isSignupBar={flow === 'signup'}
    >
      <TextInput
        label="Enter password"
        value={password}
        onChangeText={(pw) => setPassword(pw)}
        isPassword={true}
        autoFocus={false}
        passwordError={{
          minEight: !minEight,
          oneSpChar: !oneSpChar,
          oneUpperCase: !oneUpperCase,
          oneDigit: !oneDigit,
        }}
        setPassword
      />
    </AuthLayout>
  );
};

export default Password;
