import { TextInput } from '@ui';
import React, { useState } from 'react';
import { AuthLayout, usePasswordValidation } from '@components';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParameterList } from '@tp/stack';
import { Keyboard } from 'react-native';
import shallow from 'zustand/shallow';
import { useSignupStore } from '@store';

const SetPassword = ({
  navigation,
}: StackScreenProps<RootStackParameterList, 'SetPassword'>) => {
  const [password, setPassword] = useState('');

  const [email, setCount] = useSignupStore(
    (state) => [state.email, state.setCount],
    shallow,
  );

  const { minEight, oneSpChar, oneUpperCase, oneDigit, disabled } =
    usePasswordValidation(password);

  const handleSubmit = () => {
    setCount();
    Keyboard.dismiss();
    navigation.navigate('VerifyEmail');
  };
  return (
    <AuthLayout
      title="Set a password"
      description="To access your account linked to"
      subDescription={email}
      label="Continue"
      onPress={handleSubmit}
      disabled={disabled}
      isSignupBar
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
      />
    </AuthLayout>
  );
};

export default SetPassword;
