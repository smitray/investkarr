import React, { useState } from 'react';
import { ResendOTP } from '@ui';
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
      navigation.navigate('PAN', {
        flow,
        type,
      });
    } else if (type === 'phone' && flow === 'login') {
      navigation.navigate('Pin', {
        type: 'pin',
        flow: 'login',
      });
    } else if (type === 'email' && flow === 'login') {
      navigation.navigate('PAN', {
        flow,
        type,
      });
    }
  }

  return (
    <OTPScreen type={type} flow={flow} onPress={handleSubmit}>
      <ResendOTP type={type} />
    </OTPScreen>
  );
};

export default VerifyOTP;
