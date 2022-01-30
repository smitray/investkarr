import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { moderateScale } from '@utils';
import Text from './text';

export type ResendOTPProperties = {
  type: 'email' | 'phone';
};

const ResendOTP = ({ type }: ResendOTPProperties) => {
  const [counter, setCounter] = useState(59);
  useEffect(() => {
    if (counter === 0) {
      return;
    }
    const timer = setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter, type]);
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
        Resend OTP {type}
        <Text variant={'authAlterSpan'} color={'primary'}>
          {`00:${counter < 10 ? `0${counter}` : counter}`}
        </Text>
      </Text>
    </TouchableOpacity>
  );
};

export default ResendOTP;
