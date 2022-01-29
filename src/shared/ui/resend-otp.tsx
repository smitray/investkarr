import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { moderateScale } from '@utils';
import Text from './text';
import { useSignupStore } from '@store';
import shallow from 'zustand/shallow';

export type ResendOTPProperties = {
  reset?: boolean;
};

const ResendOTP = ({ reset = false }: ResendOTPProperties) => {
  const [counter, setCounter] = useSignupStore(
    (state) => [state.counter, state.setCounter],
    shallow,
  );
  useEffect(() => {
    if (counter === 0) {
      return;
    }
    const timer = setInterval(() => setCounter(counter - 1), 1000);
    if (reset) {
      setCounter(59);
      clearInterval(timer);
      return;
    }

    return () => clearInterval(timer);
  }, [counter, setCounter, reset]);
  const sendOTP = () => {
    setCounter(59);
  };
  return (
    <TouchableOpacity
      onPress={sendOTP}
      disabled={counter > 0}
      style={{ marginTop: moderateScale(16), padding: moderateScale(16) }}
    >
      <Text variant={'authAlterSpan'} color={'orColor'}>
        Resend OTP{' '}
        <Text variant={'authAlterSpan'} color={'primary'}>
          {`00:${counter < 10 ? `0${counter}` : counter}`}
        </Text>
      </Text>
    </TouchableOpacity>
  );
};

export default ResendOTP;
