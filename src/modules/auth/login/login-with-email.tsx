import { TextInput, RecoveryLink } from '@ui';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AuthLayout } from '@components';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParameterList } from '@tp/stack';
import { Keyboard } from 'react-native';

type FormValues = {
  email: string;
  password: string;
};

const initialValues: FormValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is a required field')
    .email('Please enter valid email address'),
  password: Yup.string()
    .required('Password is a required field')
    .min(8, 'Password must be at least 8 characters long'),
});

const WithEmail = ({
  navigation,
}: StackScreenProps<RootStackParameterList, 'LoginWithEmail'>) => {
  const onSubmit = () => {
    Keyboard.dismiss();
    navigation.navigate('Pin', {
      type: 'pin',
      flow: 'login',
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
          title="Welcome back"
          description="Nice to meet you again!"
          label="Login"
          onPress={handleSubmit}
          disabled={!(isValid && dirty)}
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
          <TextInput
            label="Enter password"
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            errorMessage={
              errors.password && touched.password && errors.password
            }
            isPassword={true}
          />
          <RecoveryLink
            title="Forgot password"
            onPress={() =>
              navigation.navigate('WihEmail', {
                flow: 'login',
              })
            }
          />
        </AuthLayout>
      )}
    </Formik>
  );
};

export default WithEmail;
