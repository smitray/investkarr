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
}: StackScreenProps<RootStackParameterList, 'SignupWihEmail'>) => {
  const setEmail = useSignupStore((state) => state.setEmail);

  const onSubmit = ({ ...values }: FormValues) => {
    setEmail(values.email);
    Keyboard.dismiss();
    navigation.navigate('VerifyEmail');
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
          title="Nice to meet you"
          description="Choose the email you would like to use to \n log in to your account"
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
