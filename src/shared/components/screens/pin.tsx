import React, { useState } from 'react';
import { OTPInput, RecoveryLink } from '@ui';
import AuthLayout from '../auth-layout';
import PinValidation from '../hooks/pin-validation';
import { useSignupStore } from '@store';
import shallow from 'zustand/shallow';

export type PinProperties = {
  type: 'pin' | 'set' | 'confirm';
};

type PinScreenProperties = PinProperties & {
  onPress: () => void;
  flow: 'login' | 'signup';
  forgotPin?: () => void;
};

const Pin = ({
  type,
  onPress,
  flow,
  forgotPin = () => {},
}: PinScreenProperties) => {
  const [value, setValue] = useState('');
  const [pin, setPin] = useSignupStore(
    (state) => [state.pin, state.setPin],
    shallow,
  );
  //TODO: pin screen errors
  const { disabled } = PinValidation({
    pin: value,
    type,
    confirmPin: pin,
  });
  const handleSubmit = () => {
    if (type === 'set') {
      setPin(value);
    } else if (type === 'confirm') {
      // TODO: set pin in server
      console.log(value);
    } else {
      // TODO: verify pin in server
      console.log(value);
    }
    setValue('');
    onPress();
  };
  return (
    <AuthLayout
      title={
        type === 'pin'
          ? 'Enter App Pin'
          : type === 'confirm'
          ? 'Confirm App Pin'
          : type === 'set' && flow === 'signup'
          ? 'Set App Pin'
          : 'Reset App Pin'
      }
      label="Confirm"
      onPress={handleSubmit}
      icon
      disabled={disabled}
    >
      <OTPInput cellCount={4} setValue={setValue} value={value} />
      {type === 'pin' && (
        <RecoveryLink title="Forgot pin" center onPress={forgotPin} />
      )}
    </AuthLayout>
  );
};

export default Pin;
