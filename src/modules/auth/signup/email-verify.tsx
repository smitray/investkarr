import React from 'react';
import { OTPScreen } from '@components';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParameterList } from '@tp/stack';

const EmailVerify = ({
  navigation,
}: StackScreenProps<RootStackParameterList, 'VerifyEmail'>) => {
  function handleSubmit() {
    navigation.navigate('AddName');
  }

  return <OTPScreen type="email" onPress={handleSubmit} />;
};

export default EmailVerify;
