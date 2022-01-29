import { TextInput } from '@ui';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AuthLayout } from '@components';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParameterList } from '@tp/stack';
import { Keyboard } from 'react-native';
import { useSignupStore } from '@store';

type FormValues = {
  email: string;
};

const initialValues: FormValues = {
  email: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is a required field')
    .email('Please enter valid email address'),
});

const WithEmail = ({
  navigation,
  route,
}: StackScreenProps<RootStackParameterList, 'WihEmail'>) => {
  const { flow } = route.params;
  const setEmail = useSignupStore((state) => state.setEmail);

  const onSubmit = ({ ...values }: FormValues) => {
    setEmail(values.email);
    Keyboard.dismiss();
    navigation.navigate('OTPVerify', {
      type: 'email',
      flow,
    });
  };

  return (
    <Formik {...{ initialValues, onSubmit, validationSchema }} validateOnChange>
      {({
        handleSubmit,
        values,
        handleChange,
        handleBlur,
        touched,
        errors,
        isValid,
        dirty,
      }) => (
        <AuthLayout
          title={flow === 'signup' ? 'Nice to meet you' : 'Account recovery'}
          description={
            flow === 'signup'
              ? 'Choose the email you would like to use to \n log in to your account'
              : 'this helps to show that this account realy \n belongs to you'
          }
          label="Send OTP"
          onPress={handleSubmit}
          disabled={!(isValid && dirty)}
          isSignupBar
        >
          <TextInput
            label="Enter email"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            keyboardType="email-address"
            autoCompleteType="username"
            textContentType="emailAddress"
            errorMessage={errors.email && touched.email && errors.email}
          />
        </AuthLayout>
      )}
    </Formik>
  );
};

export default WithEmail;
