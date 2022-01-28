import { useSignupStore } from '@store';
import { OTPInput } from '@ui';
import React, { useState } from 'react';
import AuthLayout from '../auth-layout';
import otpValidation from '../hooks/otp-validation';

type OTPScreenProperties = {
  type: 'email' | 'phone';
  onPress: () => void;
};

const OTPScreen = ({ type, onPress }: OTPScreenProperties) => {
  const setCount = useSignupStore((state) => state.setCount);
  const email = useSignupStore((state) => state.email);
  const phone = useSignupStore((state) => state.phone);
  const [value, setValue] = useState('');

  const { disabled } = otpValidation(value);

  const handleSubmit = () => {
    setCount(type === 'email' ? 2 : 5);
    onPress();
  };
  return (
    <AuthLayout
      title="Verify with OTP!"
      description="Waiting to automatically detect the \n 6 digit secure code sent to"
      subDescription={type === 'email' ? email : phone}
      label="Verify"
      onPress={handleSubmit}
      isSignupBar
      disabled={disabled}
    >
      <OTPInput cellCount={6} setValue={setValue} value={value} />
    </AuthLayout>
  );
};

export default OTPScreen;
