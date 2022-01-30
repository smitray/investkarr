import { useSignupStore } from '@store';
import { OTPInput } from '@ui';
import React, { useState } from 'react';
import shallow from 'zustand/shallow';
import { Children } from '@tp/global';
import AuthLayout from '../auth-layout';
import otpValidation from '../hooks/otp-validation';

export type OTPProperties = {
  type: 'email' | 'phone';
  flow: 'signup' | 'login';
};

type OTPScreenProperties = OTPProperties & {
  onPress: () => void;
  children: Children;
};

const OTPScreen = ({
  type,
  onPress,
  flow = 'login',
  children,
}: OTPScreenProperties) => {
  const [email, phone, setCount, setCounter] = useSignupStore(
    (state) => [state.email, state.phone, state.setCount, state.setCounter],
    shallow,
  );
  const [value, setValue] = useState('');
  const { disabled } = otpValidation(value);

  const handleSubmit = () => {
    if (flow === 'signup') {
      setCount(type === 'email' ? 2 : 5);
    }
    setValue('');
    setCounter(59);
    onPress();
  };
  return (
    <AuthLayout
      title="Verify with OTP!"
      description="Waiting to automatically detect the \n 6 digit secure code sent to"
      subDescription={type === 'email' ? email : phone}
      label="Verify"
      onPress={handleSubmit}
      isSignupBar={flow === 'signup'}
      disabled={disabled}
    >
      <OTPInput cellCount={6} setValue={setValue} value={value} />
      {children}
    </AuthLayout>
  );
};

export default OTPScreen;
