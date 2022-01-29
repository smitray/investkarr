import React from 'react';
import { OTPScreen } from '@components';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParameterList } from '@tp/stack';

const VerifyOTP = ({
  navigation,
  route,
}: StackScreenProps<RootStackParameterList, 'OTPVerify'>) => {
  const { type, flow } = route.params;
  function handleSubmit() {
    if (type === 'email' && flow === 'signup') {
      navigation.navigate('AddName');
    } else if (type === 'phone' && flow === 'signup') {
      navigation.navigate('AddPAN');
    } else if (type === 'phone' && flow === 'login') {
      navigation.navigate('Pin', {
        type: 'pin',
        flow: 'login',
      });
    }
  }

  return <OTPScreen type={type} flow={flow} onPress={handleSubmit} />;
};

export default VerifyOTP;
