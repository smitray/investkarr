import { useSignupStore } from '@store';
import { OTPInput } from '@ui';
import React from 'react';
import AuthLayout from '../auth-layout';

type OTPScreenProperties = {
  type: 'email' | 'phone';
  onPress: () => void;
};

// type FormValues = {
//   otp: number;
// };
/**
 * TODO: OTP input pending
 */
// const initialValues: FormValues = {
//   otp: 0,
// };

// const validationSchema = Yup.object().shape({
//   otp: Yup.string().required('OTP is a required field'),
// });

const OTPScreen = ({ type, onPress }: OTPScreenProperties) => {
  const setCount = useSignupStore((state) => state.setCount);
  const email = useSignupStore((state) => state.email);
  const phone = useSignupStore((state) => state.phone);
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
      disabled={false}
    >
      <OTPInput cellCount={6} />
    </AuthLayout>
  );
};

export default OTPScreen;
