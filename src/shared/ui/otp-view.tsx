import React from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Text from './text';

type OTPViewProperties = {
  cellCount: number;
};

const OTPView = ({ cellCount }: OTPViewProperties) => {
  return <Text>OTP component will be here</Text>;
};

export default OTPView;
