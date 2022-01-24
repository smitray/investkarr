import { Text, OTPInput } from '@ui';
import React, { useCallback } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AuthLayout } from '@components';
import { useSignupStore } from '@store';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParameterList } from '@tp/stack';
type FormValues = {
  otp: number;
};
/**
 * TODO: OTP input pending
 */
// const initialValues: FormValues = {
//   otp: 0,
// };

// const validationSchema = Yup.object().shape({
//   otp: Yup.string().required('OTP is a required field'),
// });

const EmailVerify = ({
  navigation,
}: StackScreenProps<RootStackParameterList, 'VerifyEmail'>) => {
  const email = useSignupStore((state) => state.email);
  const setCount = useSignupStore((state) => state.setCount);

  function nextPage() {
    setCount();
    navigation.navigate('AddName');
  }

  return (
    // <Formik {...{ initialValues, onSubmit, validationSchema }} validateOnChange>
    //   {({
    //     handleSubmit,
    //     values,
    //     handleChange,
    //     handleBlur,
    //     touched,
    //     isValid,
    //     dirty,
    //   }) => (

    //   )}
    // </Formik>
    <AuthLayout
      title="Verify with OTP!"
      description="Waiting to automatically detect the \n 6 digit secure code sent to"
      subDescription={email}
      label="Verify"
      onPress={nextPage}
      isSignupBar
      disabled={false}
    >
      <OTPInput cellCount={6} />
    </AuthLayout>
  );
};

export default EmailVerify;
