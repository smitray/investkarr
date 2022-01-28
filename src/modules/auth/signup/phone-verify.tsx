import React from 'react';
import { OTPScreen } from '@components';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParameterList } from '@tp/stack';

const PhoneVerify = ({
  navigation,
}: StackScreenProps<RootStackParameterList, 'VerifyPhone'>) => {
  function handleSubmit() {
    navigation.navigate('AddPAN');
  }

  return <OTPScreen type="phone" onPress={handleSubmit} />;
};

export default PhoneVerify;
